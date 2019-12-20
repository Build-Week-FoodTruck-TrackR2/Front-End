import React from 'react';
import styled from 'styled-components';

const Container = styled.section`

    padding: 4%;
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 2px solid black;

    p, button {

        line-height: 150%;
    }

`;

const DinerDashboardFooter = (props) => {

    return (<Container>

        <p> logo image here</p>
        <p>Hello User!</p>
        <button>signout</button>
        
    </Container>);
};

export default DinerDashboardFooter;