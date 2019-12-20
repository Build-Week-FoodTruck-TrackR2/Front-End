import React from 'react';
import styled from 'styled-components';

const Container = styled.section`

    width: 100vw;
    overflow: hidden;

    img {

        overflow: hidden;
    }

`;

const DinerDashboardMap = (props) => {

    return (<Container>
        <img src="https://images-na.ssl-images-amazon.com/images/I/61BYKIdWSIL.jpg"></img>
    </Container>);
};

export default DinerDashboardMap;