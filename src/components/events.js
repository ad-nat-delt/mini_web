import React, { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core'; // Using Material-UI for styling
import { Alert } from '@material-ui/lab'; // For displaying success/error messages (optional)

const EventScreen = () => {
  const [eventMarked, setEventMarked] = useState(false);
  const [addEventSuccess, setAddEventSuccess] = useState(false);
  const [addEventError, setAddEventError] = useState(null);

  const handleMarkEvents = async () => {
    try {
      // Implement your event marking logic here
      console.log('Events marked successfully!'); // Example placeholder
      setEventMarked(true);
    } catch (error) {
      console.error('Error marking events:', error);
      // Handle errors appropriately (display an error message, etc.)
    }
  };

  const handleAddEvents = async () => {
    try {
      // Implement your event adding logic here
      console.log('Events added successfully!'); // Example placeholder
      setAddEventSuccess(true);
    } catch (error) {
      console.error('Error adding events:', error);
      setAddEventError('An error occurred while adding events.'); // Example error message
    }
  };

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h5">Events</Typography>
      {eventMarked && <Alert severity="success">Events marked successfully!</Alert>}
      {addEventSuccess && <Alert severity="success">Events added successfully!</Alert>}
      {addEventError && <Alert severity="error">{addEventError}</Alert>}
      <Button variant="contained" color="primary" onClick={handleMarkEvents}>
        Mark Events
      </Button>
      <Button variant="contained" color="primary" onClick={handleAddEvents}>
        Add Events
      </Button>
    </Grid>
  );
};

export default EventScreen;
