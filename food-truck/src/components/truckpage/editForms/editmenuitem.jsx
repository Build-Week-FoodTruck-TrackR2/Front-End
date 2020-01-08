import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button, AppBar, Toolbar, Dialog, DialogTitle, Box, Paper, Typography} from '@material-ui/core';
import truckImage from '../../../images/delivery-truck-png-7.png';
import * as yup from 'yup';

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

const EditMenuItem = (props) => {

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

    return (
        <Dialog 
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={open}>
            <Container>
                <Paper>
                    <DialogTitle>Edit Menu Item</DialogTitle> 
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

                                setSubmitting(false);
                                
                            }}
                            >
                             {({values, errors, isSubmitting}) => (
                                <Form>
                                    <Field placeholder="Item Name" name="itemName" type="input" as={TextField}></Field>
                                    <ErrorMessage name="itemName" render={ msg => <div className="error">{msg}</div>} />

                                    <Field placeholder="Description" inputProps={{maxLength: 120}} name="description" type="input"  multiline={true} rows={7} rowsMax={7} className="description" as={TextField}></Field>
                                    <ErrorMessage name="description" render={ msg => <div className="error">{msg}</div>} />

                                    <Field placeholder="Catagory" name="catagory" type="input" as={TextField}></Field>
                                    <ErrorMessage name="catagory" render={ msg => <div className="error">{msg}</div>} />

                                    <Field placeholder="Price" name="price" type="number" as={TextField}></Field>
                                    <ErrorMessage name="price" render={ msg => <div className="error">{msg}</div>} />

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

export default EditMenuItem;