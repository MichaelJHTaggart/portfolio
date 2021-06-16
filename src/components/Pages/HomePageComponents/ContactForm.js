import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  field: {
    margin: 20,
    marginBlock: 20
  }
}));

export default function ContactForm() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)
    setEmailError(false)

    if (name === '') {
      setNameError(true)
    }
    if (email === '') {
      setEmailError(true)
    }

    if (name && email) {
      console.log(name, email, message)
    }
  }

  return (
    <div>
      <Grid container spacing={3}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>

          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              label="Name"
              variant="outlined"
              color="primary"
              required
              error={nameError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className={classes.field}
              label="Email"
              variant="outlined"
              color="primary"
              required
              error={emailError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              className={classes.field}
              label="Message"
              variant="outlined"
              color="primary"
              multiline
              rows={5}
            />
          </Grid>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </Grid>
    </div>
  );
}
