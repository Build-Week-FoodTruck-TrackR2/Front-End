import React from 'react';
import styled from 'styled-components';
import TruckPageHeader from './truckpageheader';
import MenuItems from './menuitem';
import Reviews from './review';

const Container = styled.section`


`;


const TruckPage= (props) => {

    return(<Container>
        <TruckPageHeader />
        <MenuItems />
        <Reviews />

    </Container>);
}

export default TruckPage;