import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {Button,TextField} from '@mui/material'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));
  

function Login() {
    const classes = useStyles();
  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email_error_msg,SeteMailerrmsg]=useState("")
  const [pwdError, setPwdError] = useState("")
  const [error,setError]=useState("error");



  useEffect(() => {
    
  
    
  }, [])
  
  const  handleSubmit = (e)=> {
    e.preventDefault();
    console.log(  email, password);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var isValid=true;
    if(email == "")
    {
       
        SeteMailerrmsg("Enter your email");
        
        isValid=false;
        return false
    }
    else if(!regex.test(email))
    {
      
        SeteMailerrmsg("Enter your email");
        
        isValid=false;
        return false;
    }
    else{
        
        SeteMailerrmsg("");
        isValid=true;
    }


    if(password=="")
    {
        setPwdError("Enter password")
        isValid=false;
        return false;
    }
    else{
        setPwdError("")
        isValid=true
        
    }
    
   
  };
  

  return (
    <>
    <h2>Login</h2>
  
        <form className={classes.root} onSubmit={handleSubmit}>
   
      <TextField
        label="Email"
        variant="filled"
        type="text"
        
        value={email}
        onChange={e => setEmail(e.target.value)}
        helperText={email_error_msg}
      
        error={!email_error_msg?'':error}
      />
      <TextField


        label="Password"
        variant="filled"
        type="password"
      
        value={password}
        onChange={e => setPassword(e.target.value)}

        helperText={pwdError}
        error={!pwdError?'':error}
      />
      <div>
       
        <Button type="submit" variant="contained" color="primary">
         Login
        </Button>
      </div>
    </form>
    </>
  )
}

export default Login