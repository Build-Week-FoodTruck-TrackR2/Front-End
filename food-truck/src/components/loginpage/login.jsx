import React from 'react';
import styled from 'styled-components';
import { Formik, Field, ErrorMessage, Form, useField } from 'formik';
import { TextField, Button, AppBar, Typography, Toolbar, Radio, FormControlLabel} from '@material-ui/core';


const MyRadio = ({label, ...props }) => {

    const [field] = useField(props);
    
    return (
        <FormControlLabel {...field} control={<Radio />} label={label} />
    );
}

const Container = styled.section`

    header {

        div {
            display: flex;
            justify-content: center;
        }
    }

    form {

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin-top: 10%;

        button {

            margin: 5% 0;
        }

        div {

            margin 2.5% 0;
        }
       
    }
    

`;


const Login = (props) => {

    return(<Container>
         <AppBar position="static" elevation="0">
                                <Toolbar>
                                    <Typography>Login</Typography>
                                </Toolbar>
                            </AppBar>
       <Formik initialValues ={{}}
       onSubmit={ (data, { setSubmitting }) => {
           console.log(data);
       }} >
       {({values, errors, isSubmitting}) =>( 
           <Form>
               <Field placeholder="username" atype="input" name="username" as={TextField} />
               <Field placeholder="password" type="password" name="password" as={TextField}/>
               <div>
                    <Field label="operator" name="type" type="radio" value="operator" as={MyRadio} />
                    <Field label="diner" name="type" type="radio" value="diner" as={MyRadio} />
               </div>
               <Button>Login</Button>
               
           </Form>
       )} 
         
       </Formik>
    </Container>);
};


export default Login; 