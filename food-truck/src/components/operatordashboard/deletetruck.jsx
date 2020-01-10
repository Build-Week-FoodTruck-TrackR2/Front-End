import React from 'react';
import styled from 'styled-components';
import { Button, AppBar, Toolbar, Dialog, DialogTitle, Paper, Typography} from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteTruck } from '../../actions';

const Container = styled.section`

    .MuiPaper-root {

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding: 4% 8%;

    }

`;

const DeleteTruck = (props) => {

    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    }

    const handleDelete = () => {

        props.deleteTruck(props.id);
        localStorage.setItem('state', JSON.stringify(props.state));
        handleClose();
    }

    return (
        <Dialog 
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={open}>
            <Container>
                <Paper>
                    <DialogTitle>Do you really want to delete this truck?</DialogTitle> 
                    <div>
                        <Button onClick={handleDelete}>Yes</Button>
                        <Button onClick={handleClose}>No</Button>    
                    </div>                                
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

};

export default connect(mapStateToProps, { deleteTruck })(DeleteTruck);