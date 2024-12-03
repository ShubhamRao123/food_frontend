import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapComponent.module.css";
import L from "leaflet";

// Fix Leaflet marker icon issue (optional, depends on your Leaflet version)
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
  return (
    <div className={styles.mapWrapper}>
      {/* Info Card */}
      <div className={styles.infoCard}>
        <h2>McDonald’s</h2>
        <p className={styles.location}>South London</p>
        <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
        <p>
          <strong>Phone number:</strong> +934443-43
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="http://mcdonalds.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://mcdonalds.uk/
          </a>
        </p>
      </div>

      {/* Top-right logo and text */}
      <div className={styles.topRightCard}>
        <div>
          <h4>McDonald’s</h4>
          <p>South London</p>
        </div>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732796199/Previous_Location_ptygao.png"
            alt=""
          />
        </div>
      </div>

      {/* Map */}
      <MapContainer
        className={styles.mapContainer}
        center={[51.505, -0.09]} // Default location (latitude, longitude)
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Default location (51.505, -0.09)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
