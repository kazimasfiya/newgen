import React,{useState, useRef} from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
function Login() {
    const [formData, setData] = useState({
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const newValues = {...formData, [event.target.name]: event.target.value};
        setData(newValues);
    }

    const handleSubmit = () => {
        setSubmitted(true, () => {
            setTimeout(() => setSubmitted(false), 5000);
        });
    }
  return (
      <>
            <ValidatorForm
               
                onSubmit={handleSubmit}
            >
                <h2>Login</h2>
                <TextValidator
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
      </>
  )
  
}

export default Login