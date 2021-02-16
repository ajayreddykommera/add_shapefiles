import React, { useEffect, useRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import zipUrl from "./Police_Sectors-shp.zip";
import Shapefile from "./Shapefile";

function Leaflet() {
  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    map.setView([38.92236591965073, -77.05578520062791], 11.5);
  }, []);

  const position = [47.7511, -120.7401];
  return (
    <Map center={position} zoom={50} style={{ height: "100vh" }} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Shapefile zipUrl={zipUrl} />
    </Map>
  );
}

export default Leaflet;
