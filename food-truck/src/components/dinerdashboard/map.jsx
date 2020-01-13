import React from 'react';
import styled from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import truckIcon from '../../images/e4b9b52be5844c01d57897b83692571d.svg'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const Container = styled.section`

    width: 100vw;
    height: 40vh;
   
`;

const URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC-JqEw-yQIHmu2yb8T5UN6hYMyGq02qYU`;

function Map (props) {

    let location = JSON.parse(localStorage.getItem('state'));
    location = location.currentUser.location;
    
    const TRUCKS = JSON.parse(localStorage.getItem('state')).trucks;

    return( 
    <GoogleMap 
    defaultZoom={12} 
    defaultCenter={{lat: location.lat, lng: location.long}}
    >
        {TRUCKS.map( truck => {
            return <Marker key={truck.id} 
            position={{lat: truck.location.lat, lng: truck.location.long}} 
            icon={{
                url: truckIcon,
                scaledSize: new window.google.maps.Size(25,25)
            }}/>
        })}   
    </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const DinerDashboardMap = (props) => {

    

    return (<Container>
        <WrappedMap googleMapURL={URL}
            loadingElement={<div style={{height: '100%'}}/>} 
            containerElement={<div style={{height: '100%'}}/>} 
            mapElement={<div style={{height: '100%'}} location={props.location}/>} 
            />
    </Container>);
};

const mapStateToProps = state => {

    return {

        location: state.currentUser.location,
        trucks: state.trucks
    }
}

export default connect(mapStateToProps, {})(DinerDashboardMap);