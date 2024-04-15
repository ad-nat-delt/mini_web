import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core'; // Using Material-UI for styling
import { CircularProgress } from '@material-ui/core'; // For loading indicator (optional)

const SummarizeScreen = () => {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const obtainSummary = async () => {
    setIsLoading(true); // Show loading indicator
    try {
      // Implement your logic to fetch or generate the summary here
      console.log('Fetching summary...'); // Example placeholder
      const summaryText = 'This is a summarized text.'; // Example summary
      setSummary(summaryText);
    } catch (error) {
      console.error('Error obtaining summary:', error);
      // Handle errors appropriately (display an error message, etc.)
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  useEffect(() => {
    obtainSummary();
  }, []); // Empty dependency array ensures it runs only once after mounting

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h5">Summary</Typography>
      {isLoading && <CircularProgress />}
      <Typography variant="body1">{summary}</Typography>
    </Grid>
  );
};

export default SummarizeScreen;
