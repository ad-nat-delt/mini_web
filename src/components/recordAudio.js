import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography, CircularProgress } from '@material-ui/core'; // Using Material-UI for styling (optional)
import { useNavigate } from 'react-router-dom';
//import { MicrophoneIcon, StopIcon, PlayArrowIcon, PauseIcon } from '@material-ui/icons'; // Icons for buttons (optional)

const RecordScreen = () => {
  const navigate = useNavigate();
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null); // Store recorded audio as a Blob
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for recording initialization

  const startRecording = async () => {
    setIsLoading(true); // Show loading indicator while initializing
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(mediaRecorder);

      const audioChunks = [];
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    } finally {
      setIsLoading(false); // Hide loading indicator after initialization
    }
  };

  const stopRecording = async () => {
    if (!mediaRecorder) return; // Handle no recording case

    mediaRecorder.stop();
    setRecording(false);

    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' }); // WebM format for browser compatibility
    setAudioBlob(audioBlob);
  };

  const downloadAudio = () => {
    if (!audioBlob) return; // Handle no audio to download case

    const url = URL.createObjectURL(audioBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'recording.mp3'; // Desired filename with MP3 extension
    link.click();
  };

  const playSound = async () => {
    if (!audioBlob) return; // Handle no audio to play case

    const audio = new Audio(audioBlob);
    audio.play();
    setIsPlaying(true);

    audio.onended = () => setIsPlaying(false); // Update state when playback ends
  };

  const stopPlayback = () => {
    if (!audioBlob || !isPlaying) return; // Handle no playback to stop case

    const audio = new Audio(audioBlob);
    audio.pause();
    setIsPlaying(false);
  };

  const clearRecording = () => {
    setAudioBlob(null); // Clear recorded audio
  };

  useEffect(() => {
    return () => {
      if (mediaRecorder) {
        mediaRecorder.stop(); // Cleanup recorder on unmount
      }
    };
  }, [mediaRecorder]);

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h5">Record Audio</Typography>
      <Grid container spacing={2} marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          // startIcon={recording ? <StopIcon /> : <MicrophoneIcon />}  // Commented out if not using icons
          onClick={recording ? stopRecording : startRecording}
          disabled={!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia} // Disable if browser doesn't support getUserMedia
        >
          {recording ? 'Stop Recording' : 'Start Recording'}
        </Button>
        {audioBlob && (
          <>
            <Button
              variant="contained"
              color="secondary"
              // startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}  // Commented out if not using icons
              onClick={isPlaying ? stopPlayback : playSound}
              disabled={!audioBlob} // Disable button if no audio recorded
            >
              {isPlaying ? 'Pause Playback' : 'Play Recording'}
            </Button>
            <Button variant="contained" color="default" onClick={downloadAudio}>
              Download Recording (MP3)
            </Button>
            <Button variant="contained" color="default" onClick={clearRecording}>
              Clear Recording
            </Button>
            <Button variant="contained" color="default" onClick={() => navigate('/functions')}>
            Go to Function Screen
          </Button>
          </>
        )}
      </Grid>
      {isLoading && <CircularProgress size={30} style={{ marginTop: 10 }} />} {/* Display loading indicator */}
    </Grid>
  );
};

export default RecordScreen;
