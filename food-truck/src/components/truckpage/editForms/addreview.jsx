import React from 'react';
import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button, AppBar, Toolbar, Dialog, DialogTitle, Box, Paper, Typography} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { connect } from 'react-redux';
import { addReview } from '../../../actions';
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

    const handleSubmit = (data) => {

        const formattedData = {
            review: {
                        reviwerName: props.currentUser.username, 
                        date: Date.now(),
                        review: data.review,
                        rating: rating },
            truckId: window.location.pathname.split('/')[2],


        }

        props.addReview(formattedData);
    };

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

                                handleSubmit(data);

                                setSubmitting(false);
                                localStorage.setItem('state', JSON.stringify(props.state));
                                handleClose();
                                
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

const mapStateToProps = state => {

    return {

        currentUser : state.currentUser,
        state: state
    }
}

export default connect(mapStateToProps, { addReview })(AddReview);