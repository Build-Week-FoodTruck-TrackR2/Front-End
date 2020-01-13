import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button, AppBar, Toolbar, Dialog, DialogTitle, Box, Paper, Typography} from '@material-ui/core';
import truckImage from '../../../images/delivery-truck-png-7.png';
import * as yup from 'yup';
import { editTruck } from '../../../actions';
import { connect } from 'react-redux';

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

const EditTruck = (props) => {

    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    }

    
    const [file, setFile] = React.useState({});
    const useFile = React.useRef();

    const clickFile = () => {

        useFile.current.click();
    }

    const getFile = event => {

        const file = new Blob([event.currentTarget.files[0]], {type: event.currentTarget.files[0].type})
        console.log(file);
        setFile({
            preview: URL.createObjectURL(file),
            raw: file,
        })
    }

    const handleSubmit = (data) => {

        const formattedData = {
            truckName: data.truckName,
            location: {lat: data.latitude, long: data.longitude},
            cuisineType: data.cuisineType,
            id: window.location.pathname.split('/')[2]
        }
        props.editTruck(formattedData);

    }

    return (
        <Dialog 
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={open}>
            <Container>
                <Paper>
                    <DialogTitle>Edit Your Truck</DialogTitle> 
                    <form>
              
                    <div id="overlay-container">
                        <img src={ file.preview || truckImage} onClick={clickFile} id="image" alt="truck" />
                        <input name="file" type="file" ref={useFile} style={{display: "none"}} onChange={getFile}/>
                    </div>      

                    </form>
                   <Formik initialValues={{}} 
                            onSubmit={ (data, {setSubmitting}) => {

                                setSubmitting(true);

                                console.log(data);

                                handleSubmit(data);
                                localStorage.setItem('state', JSON.stringify(props.state));
                                setSubmitting(false);
                                handleClose();
                                
                            }}
                            >
                             {({values, errors, isSubmitting}) => (
                                <Form>
                                    <Field placeholder="Truck Name" name="truckName" type="input" as={TextField}></Field>
                                    <ErrorMessage name="truckName" render={ msg => <div className="error">{msg}</div>} />

                                    <Field placeholder="Longitude" name="longitude" type="number" as={TextField}></Field>
                                    <ErrorMessage name="longitude" render={ msg => <div className="error">{msg}</div>} />

                                    <Field placeholder="Latitude" name="latitude" type="number" as={TextField}></Field>
                                    <ErrorMessage name="latitude" render={ msg => <div className="error">{msg}</div>} />

                                    <Field placeholder="Cuisine Type" name="cuisineType" type="input" as={TextField}></Field>
                                    <ErrorMessage name="cuisineType" render={ msg => <div className="error">{msg}</div>} />

                                    <Button type="submit" disabled={!!Object.keys(errors).length || isSubmitting || false}>Submit</Button>
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
export default connect(mapStateToProps, { editTruck})(EditTruck);