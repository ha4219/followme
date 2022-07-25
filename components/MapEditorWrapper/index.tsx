import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("../MapEditor/index"), {
  ssr: false,
});

const MapWrapper = () => {
  return <MapContainer />;
};

export default MapWrapper;
