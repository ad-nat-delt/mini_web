import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core'; // Using Material-UI for styling
import { useNavigate } from 'react-router-dom'; // For navigation in React Web

const FunctionScreen = () => {
  const navigate = useNavigate();

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h5">Functions</Typography>
      <Grid container spacing={2} marginTop={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/transcribe')} // Using path for navigation
        >
          Transcribe
        </Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/summarize')}>
          Summarize
        </Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/events')}>
          Events
        </Button>
      </Grid>
    </Grid>
  );
};

export default FunctionScreen;
