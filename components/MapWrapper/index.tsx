import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("../MapContainer/index"), {
  ssr: false,
});

const MapWrapper = () => {
  return <MapContainer />;
};

export default MapWrapper;
