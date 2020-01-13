import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button, AppBar, Toolbar, Dialog, DialogTitle, Box, Paper, Typography} from '@material-ui/core';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { editUserInformation } from '../../actions';

const Container = styled.section`

    .MuiPaper-root {

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding: 4% 8%;

        fieldset {

            legend {

                text-align: center;
            }
        }

        form {

            display: flex; 
            flex-flow: column;
            align-items: center;
            width: 80vw;

            *{

                margin: 2% 0;
            }

            #overlay-container { 

                display: flex;
                justify-content: center;
                
                #image {

                    max-width: 33vw;
                    min-width: 33vw;
                    max-height: 33vw;
                    min-height: 33vw;
                    border: 1px solid black;

                }
            }

            div {

                max-width: 90%
                min-width: 90%;
                
            }

            button {

                margin: 5% 0;
            }
        }
    }

`;

const EditUserInformation = (props) => {

    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    }

    const handleSubmit = (data) => {

        const formattedData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            businessName: data.businessName       
        }   

        props.editUserInformation(formattedData);

    }

    return (
        <Dialog 
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={open}>
            <Container>
                <Paper>
                    <DialogTitle>Edit User Information</DialogTitle> 
               
                   <Formik initialValues={{}} 
                            onSubmit={ (data, {setSubmitting}) => {

                                setSubmitting(true);

                                console.log(data);

                                handleSubmit(data);
                                
                                setSubmitting(false);
                                handleClose();
                                
                            }}
                            >
                             {({values, errors, isSubmitting}) => (
                                <Form>
                                       <Field placeholder="First Name" name="firstName" type="input" as={TextField}></Field>
                                        <ErrorMessage name="firstName" render={ msg => <div className="error">{msg}</div>} />

                                        <Field placeholder="Last Name" name="lastName" type="input" as={TextField}></Field>
                                        <ErrorMessage name="lastName" render={ msg => <div className="error">{msg}</div>} />

                                        <Field placeholder="E-Mail" name="email" type="email" as={TextField}></Field>
                                        <ErrorMessage name="email" render={ msg => <div className="error">{msg}</div>} />

                                        <Field placeholder="Business Name" name="businessName" type="input" as={TextField} />
                                        <ErrorMessage name="businessName" render={ msg => <div className="error">{msg}</div>} />

                                        <Button type="submit" disabled={ !!Object.keys(errors).length || isSubmitting || false}>Submit</Button>
                                </Form>
                                
                             )}
                    </Formik>       
                 <AppBar id="footer" position="static" elevation="0">
                        <Toolbar></Toolbar>
                </AppBar>
                </Paper>
            </Container>
        </Dialog>
    )
}

const mapStateToProps = state => {

    return {
        state: state
    }
}
export default connect(mapStateToProps, { editUserInformation })(EditUserInformation);