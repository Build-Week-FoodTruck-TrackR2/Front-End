import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const OperatorDashboard = (props) => {

    return(<><p>hello</p>
            <button onClick={() => { console.log(props.formData)}}>hi</button> </>);
};

const mapStateToProps = state => {

    return {

        formData : state
    }
} 

export default connect(mapStateToProps, {})(OperatorDashboard); 