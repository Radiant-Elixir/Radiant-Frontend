import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 27.6899113,
      lng: 85.3662164,
    },
    zoom: 14,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDyGAciMSor5F9pMB9qNFzPz4eO1lENNqE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent lat={27.6899113} lng={85.3662164} text="Office" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;
