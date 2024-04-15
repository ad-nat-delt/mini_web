import React, { useState } from 'react';
import { Typography, Grid, TextField,Button } from '@material-ui/core'; // Using Material-UI for styling (optional)

const TranscribeScreen = () => {
  const [transcription, setTranscription] = useState('');

  const handleObtainTranscription = (event) => {
    // Simulate obtaining transcription (replace with your actual logic)
    setTranscription('This is a transcribed text.');
  };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h5">Transcription</Typography>
      <TextField
        variant="outlined"
        multiline
        rows={4}
        value={transcription}
        disabled // Disable editing for now (consider enabling after obtaining transcription)
        fullWidth
      />
      <Grid container spacing={2} marginTop={2}>
        <Button variant="contained" color="primary" onClick={handleObtainTranscription}>
          Obtain Transcription
        </Button>
      </Grid>
    </Grid>
  );
};

export default TranscribeScreen;
