import React from 'react';
import styled from 'styled-components';
import { Paper, AppBar, Toolbar, Typography, Button, TextField } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { addDiner } from '../../actions';

const Container = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;

    .MuiPaper-elevation1 {

        width: 95vw;
        height: 90vh;
        margin-top: 5vh;

        form {


            display: flex;
            flex-flow: column;
            align-items: center; 
            margin-top: 5%;     
    
            * {
    
                margin: 1% 0;
            }

            button {
                margin: 5% 0;
            }
    
            .MuiInput-underline {
    
                &:after {
    
                    border-bottom: 2px solid red;
                }
            }
    
            .error {
    
                color: red;
                font-size: 50%;
                align-self: flex-start;
                
            }

           
    
        }

        #footer {

            position: absolute;
            bottom: 5%;
            width: 95vw;
        }
        
    }

`;


const DinerSignUp = (props) => {

    return(<Container>
    <Paper>
            <AppBar position="static" elevation="0">
                <Toolbar>
                     <Typography>Diner Sign Up</Typography>
                </Toolbar>
            </AppBar>
            <Formik initialValues={{}} 
                onSubmit={ (data, {setSubmitting}) => {

                    setSubmitting(true);

                    props.addDiner({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        username: data.username,
                        password: data.password,
                        email: data.email,
                        location: { lat: data.latitude, long: data.longitude }
                    });

                    props.history.push("/dinerdashboard")

                    setSubmitting(false);
          
            }}>
      
      {({values, errors, isSubmitting}) => (
          <Form>
              <Field placeholder="First Name" name="firstName" type="input" as={TextField}></Field>
              <ErrorMessage name="firstName" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Last Name" name="lastName" type="input" as={TextField}></Field>
              <ErrorMessage name="lastName" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Username" name="username" type="input" as={TextField}></Field>
              <ErrorMessage name="username" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Password" name="password" type="password" as={TextField}></Field>
              <ErrorMessage name="password" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Retype Password" name="password2" type="password" as={TextField}></Field>
              <ErrorMessage name="password2" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="E-Mail" name="email" type="email" as={TextField}></Field>
              <ErrorMessage name="email" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Longitude" name="longitude" type="number" as={TextField}></Field>
              <ErrorMessage name="longitude" render={ msg => <div className="error">{msg}</div>} />

              <Field placeholder="Latitude" name="latitude" type="number" as={TextField}></Field>
              <ErrorMessage name="latitude" render={ msg => <div className="error">{msg}</div>} />

              <Button type="submit" disabled={ !!Object.keys(errors).length || isSubmitting || false}>Submit</Button>
             
          </Form>
          
      )}
      </Formik>
      <AppBar id="footer" position="static" elevation="0" ><Toolbar></Toolbar></AppBar>
    </Paper>
    </Container>);
};


export default connect(null, { addDiner })(DinerSignUp); 