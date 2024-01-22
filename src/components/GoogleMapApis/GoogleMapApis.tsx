import {
  GoogleMap,
  Marker,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import { FC } from "react";
import { VendorCoordsType } from "../../redux/type.slice";
import ImageWraper from "../ImageWraper";
import RatingCalculation from "../RatingCalculation";
import { FaRegStar } from "react-icons/fa";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_CLOUD_MAPS_API_KEY;
const GoogleMapApis: FC<{
  coords: VendorCoordsType | null;
  name: string | undefined;
  image: string | undefined;
  rating: number | undefined;
}> = ({ coords, name, image, rating }) => {
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
          {name && rating && image && (
            <OverlayView
              position={{
                lat: coords.latitude,
                lng: coords.longitude,
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#ffffff",
                  width: "150px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
                  borderRadius: "5px",
                  padding: "5px",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <div>
                  <ImageWraper image={image} size="50px" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>{name}</h3>
                  <span>
                    <RatingCalculation rating={{ icon: FaRegStar, rating }} />
                  </span>
                </div>
              </div>
            </OverlayView>
          )}
        </GoogleMap>
      ) : null}
    </>
  );
};

export default GoogleMapApis;
