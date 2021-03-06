import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={15}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCiDbdio2yCe36DYpYJhg0VdSrXTl78LtU')
})(MapContainer)