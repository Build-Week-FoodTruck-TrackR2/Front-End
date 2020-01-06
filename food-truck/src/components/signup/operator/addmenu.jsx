import React from 'react';
import styled from 'styled-components';
import { Paper, Button} from '@material-ui/core';

const Container = styled.section`

    position: absolute;
    width: 66vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    #add-menu {
        max-height: 40vw;
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin-top: 0;
        padding: 4%;

        div {

            display: flex;
            justify-content: space-around;
            
            .MuiButton-label {

                background: red;
                color: white;
                z-index: 1;
                opacity: 1
                padding: 10%;
            }

            .MuiTouchRipple-root {

                background: red;
                z-index: 0;
            }

            .first {

                


                .MuiButton-label {

                    background: blue;

                }

                .MuiTouchRipple-root {

                    background: blue;
                }
            }
           
        }
    }
`;

const AddMenu = (props) => {

    return (
        <Container>
            <Paper id="add-menu">
                <div>
                  <Button className="first" onClick={() => {

                      props.item({...props.form,
                                 items: props.form.items + 1})
                      props.step(3);
                      }}>Yes</Button>
                  <Button onClick={() => { props.step(4)}}>No</Button>
                </div>
            </Paper>
        </Container>
    )
}


export default AddMenu;