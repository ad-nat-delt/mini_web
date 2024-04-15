import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; // for styling (optional)

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Set minimum height for viewport
    backgroundColor: '#FFF694',
    padding: 20,
  },
  head: {
    marginTop: 0,
    fontWeight: 'bold',
    fontSize: 45,
    marginBottom: 80,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  image: {
    width: 231,
    height: 218,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#4D2828',
  },
  button: {
    backgroundColor: '#D67638',
    padding: '15px 25px',
    borderRadius: 10,
    marginTop: 20,
    cursor: 'pointer', // for button styling
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
  },
  caption: {
    marginTop: 50,
    color: '#4D2828',
    fontSize: 18,
  },
}));

const HomeScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.head}>EavesDropper</h1>
      <img src={require('../assets/convo.png')} alt="conversation" className={classes.image} />
      <p className={classes.title}>
        A platform to record your day to day conversations and provide results based on it
      </p>
      <Link to="/record" className={classes.button}>
        <span className={classes.buttonText}>Get Started</span>
      </Link>
      <p className={classes.caption}>Tap to get started.</p>
    </div>
  );
};

export default HomeScreen;
