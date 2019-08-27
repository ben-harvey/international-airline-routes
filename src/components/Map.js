import React, { Component } from 'react';
import Data from '../data';


class Map extends Component {
  render() {
  const routes = this.props.routes.map(route => {
    const {src, dest} = route;
    const srcAirport = Data.getAirportByCode(src);
    const destAirport = Data.getAirportByCode(dest);
    const {long: srcLong, lat: srcLat} = srcAirport;
    const {long: destLong, lat: destLat} = destAirport;
    const key = [route.airline, route.src, route.dest].join(':')

    return (
      <g key={key}>
        <circle className="source" cx={srcLong} cy={srcLat}>
          <title></title>
        </circle>
        <circle className="destination" cx={destLong} cy={destLat}>
          <title></title>
        </circle>
        <path d={`M${srcLong} ${srcLat} L ${destLong} ${destLat}`} />
      </g>
      )
  });

  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
         <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
        {routes}
      </g>
    </svg>
  )
  }
}

export default Map;