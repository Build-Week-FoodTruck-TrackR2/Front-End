import React from 'react';
import styled from 'styled-components';
import { Typography, Appbar, Toolbar, Button, AppBar} from '@material-ui/core';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import TruckPageHeader from './truckpageheader';
import MenuItems from './menuitem';
import Reviews from './review';

const Container = styled.section`

    width: 100vw;

    header {

        div {

            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top 2%;

            * {

                flex-basis: 100%;
            }

            div {

                *{
                    flex-basis: 50%;
                }

                button {

                    .MuiButton-label {

                        white-space: nowrap;
                    }
                }
            }
        }
    }
`;


const TruckPage= (props) => {

    const handleSignOut = () => {

        localStorage.clear();
        props.history.push('/');
        props.signOut();
    }

    const handleRedirect = () => {

        if(props.currentUser.Role === 'Operator'){

            props.history.push('/operatordashboard');
        }
        else
            props.history.push('/dinerdashboard');

    };

    return(<Container>
        <AppBar position="static">
            <Toolbar>
                <Typography noWrap={true}>Truck Page</Typography>
                <div>
                    <Button onClick={handleSignOut}>Sign Out</Button>
                    <Button onClick={handleRedirect}>Back to Dashboard</Button>
                </div>         
            </Toolbar>
        </AppBar>
        <TruckPageHeader />
        <MenuItems />
        <Reviews />

    </Container>);
}

const mapStateToProps = state => {

    return {

        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps , {signOut})(TruckPage);