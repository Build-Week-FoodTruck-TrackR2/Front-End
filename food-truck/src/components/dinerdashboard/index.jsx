import React from 'react';
import styled from 'styled-components';
import DinerDashboardFooter from './dinerdashboardfooter';
import Map from './map';
import TruckList from './trucklist';
import MapInterface from './mapinterface';

const Container = styled.section`

    width: 100vw;

`;

const DinerDashboard = (props) => {

    return (
    <Container>
        <DinerDashboardFooter />
        <MapInterface />
        <Map />
        <TruckList />

    </Container>);
};

export default DinerDashboard;