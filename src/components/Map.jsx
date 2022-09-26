import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery, faTemperature0 } from '@fortawesome/free-solid-svg-icons';
import Map, { Marker, Popup } from 'react-map-gl';
import streetLamp from '../assets/street-lamp.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import LampsJSON from '../lamps.json';
import DescriptionPanel from './DescriptionPanel';
import swal from 'sweetalert2';

function MapComponent() {
  const [viewport, setViewPort] = useState({
    longitude: 121.03,
    latitude: 14.4,
    zoom: 10,
  });
  const [showPopup, setShowPopup] = useState({
    isShowed: false,
    long: 0,
    lat: 0,
    place: '',
  });

  return (
    <div className="flex p-8">
      <Map
        {...viewport}
        onMove={(evt) => setViewPort(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        style={{ height: 500, width: 1000, display: 'flex' }}
      >
        {LampsJSON.map(
          ({ place, long, lat, volts, power, luminosity, current }) => (
            <Marker
              className={place}
              longitude={long}
              latitude={lat}
              anchor="bottom"
              onClick={() =>
                setShowPopup({
                  isShowed: true,
                  long,
                  lat,
                  place,
                  volts,
                  power,
                  luminosity,
                  current,
                })
              }
            >
              <img src={streetLamp} height={50} width={50} alt="street lamp" />
            </Marker>
          )
        )}

        {showPopup.isShowed && (
          <Popup
            longitude={showPopup.long}
            latitude={showPopup.lat}
            anchor="right"
            offset={[-20, -30]}
            onClose={() => setShowPopup(false)}
            closeOnClick={false}
          >
            <p>
              <b>{showPopup.place} Lamp</b>
            </p>
            <p>
              <FontAwesomeIcon icon={faTemperature0} />: 20°
            </p>
            <p>V: {showPopup.volts}</p>
            <p>P: {showPopup.power}</p>
            <p>I: {showPopup.current}</p>
            <p>Lux: {showPopup.luminosity}</p>
            <p>
              <FontAwesomeIcon icon={faBattery} />: 20%
            </p>
          </Popup>
        )}
      </Map>
      <DescriptionPanel
        volts={showPopup.volts}
        current={showPopup.current}
        luminosity={showPopup.luminosity}
        power={showPopup.power}
        place={showPopup.place ? showPopup.place : 'Place'}
      />
    </div>
  );
}

export default MapComponent;
