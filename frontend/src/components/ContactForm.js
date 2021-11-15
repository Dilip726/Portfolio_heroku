import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import axios from 'axios';
// import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const ContactForm = () => {
  const [inputs, setInput] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3005/api/message', { ...inputs })
      .then((response) => {
        setInput(response.data);
        setOpen(true);
      });
  };

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className='container'>
      <div className='text fas fa-paint'>
        <h2>
          <ConnectWithoutContactOutlinedIcon /> You can contact me here
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='username'
            name='username'
            className='my-2'
            label='FullName'
            variant='standard'
            onChange={handleChange}
            required
          />

          <TextField
            id='email'
            name='email'
            type='email'
            className='my-4'
            label='Email ID'
            variant='standard'
            onChange={handleChange}
            required
          />
          <TextField
            id='contact'
            name='contact'
            type='number'
            className='my-4'
            label='Contact'
            variant='standard'
            onChange={handleChange}
            required
          />
          <TextField
            label='Description'
            name='desc'
            className='my-4'
            placeholder='Describe your Project or Reason to Contact'
            id='desc'
            onChange={handleChange}
            required
          />
        </Box>
      </form>
      <div className='btn'>
        <button
          className='btn btn-success'
          disabled={!inputs}
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            Your message has been sent successfully
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default ContactForm;
