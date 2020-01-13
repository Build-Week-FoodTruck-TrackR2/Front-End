import React from 'react';
import styled from 'styled-components';
import Truck from './truck';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
const Container = styled.section`

    width: 100vw;

    .MuiDivider-root {

        height: 1px;
        margin: 0 ;
        width: 100vw;
        
    }
`;

const TruckList = (props) => {


    return (<Container>
        <Divider />
        <ul>
            {props.trucks && props.trucks.map( truck => {
                return (<>
                <Truck info={truck} />
                <Divider /></>)
            })}
            
        </ul>
        
    </Container>);
};

const mapStateToProps = state => {

    return {

        trucks: state.trucks
    }
}

export default connect(mapStateToProps, {})(TruckList);