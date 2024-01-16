import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { FC } from "react";
import { VendorCoordsType } from "../../redux/type.slice";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_CLOUD_MAPS_API_KEY;
const GoogleMapApis: FC<{ coords: VendorCoordsType | null }> = ({ coords }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });
  if (!coords) return null;

  if (loadError)
    return (
      <h3 style={{ color: "red" }}>
        Error while loading Google Cloud Map APIs
      </h3>
    );

  const center: google.maps.LatLngLiteral = {
    lat: coords.latitude,
    lng: coords.longitude,
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "50vh",
            borderRadius: "15px",
          }}
          center={center}
          zoom={14}
        >
          <Marker position={{ lat: coords.latitude, lng: coords.longitude }} />
        </GoogleMap>
      ) : null}
    </>
  );
};

export default GoogleMapApis;
