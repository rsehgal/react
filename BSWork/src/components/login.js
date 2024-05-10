import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export default function ButtonUsage() {
  return (
    <>
    <BoxBasic />
  <Button variant="outlined" color="error">Hello world</Button>
  </>
  );
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function BoxBasic() {

    return (

      <Box component="section" 
      height={600}
      width={400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ bgcolor: '#ffccbc' }}
      
      >
      <form>
        <br/>
        <Grid container spacing={2}  columnSpacing={{ xs: 1, sm: 2, md: 4 }} rowSpacing={{ xs: 4, sm: 4, md: 4 }}>

        <Grid item xs={12} md={12} color="error">
          SIGNUP <br/>
          Already have an account
        </Grid>

        <Grid item xs={12} md={12} color="error">
          
          </Grid>
          <Grid item xs={12} md={12} color="error">
          </Grid>
          <Grid item xs={12} md={12} color="error">
          </Grid>
          <Grid item xs={12} md={12} color="error">
          </Grid>

        <Grid item xs={12} md={6}>
        <TextField
        fullWidth
          required
          label="Firstname"
          color="error"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          fullWidth
          required
          label="Lastname"
          color="error"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
          required
          fullWidth
          label="Email"
          type="email"
          color="error"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
          required
          fullWidth
          label="Password"
          type="password"
          color="error"
          />
        </Grid>

        <Grid item xs={12} md={12}>
        <Button 
        fullWidth
        variant="outlined" 
        color="warning"
        variant="contained"
        type="submit"
        
        >
          Submit
          </Button>
        </Grid>
       
      </Grid>
      </form>
      </Box>
    );
  }