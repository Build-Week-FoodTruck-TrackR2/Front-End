import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button, AppBar, Toolbar, Dialog, DialogTitle, Box, Paper, Typography} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
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

            div {

                min-width: 80vw;
                
            }

            button {

                margin: 5% 0;
            }
        }
    }

`;

const AddReview = (props) => {

    const [rating, setRating ] = React.useState(0);
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog 
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={open}>
            <Container>
                <Paper>
                    <DialogTitle>Add Your review</DialogTitle> 

                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rating</Typography>
                        <Rating 
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }} />
                    </Box>                  
                   <Formik initialValues={{}} 
                            onSubmit={ (data, {setSubmitting}) => {

                                setSubmitting(true);

                                console.log(data);

                                setSubmitting(false);
                                
                            }}
                            >
                             {({values, errors, isSubmitting}) => (
                                 <Form>
                                     <Field type="input" 
                                     name="review" 
                                     multiline={true} 
                                     rows={7} 
                                     rowsMax={7}
                                     as={TextField}
                                     />
                                      <Button type="submit">Submit Review</Button>
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

export default AddReview;