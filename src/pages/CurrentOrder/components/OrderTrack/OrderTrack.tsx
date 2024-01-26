import { useEffect, useState } from "react";
import "./OrderTrack.scss";
import {
  GoogleMap,
  DirectionsRenderer,
  LoadScriptNext,
  OverlayView,
} from "@react-google-maps/api";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import ImageWraper from "../../../../components/ImageWraper";
import { coordsOfCustomer } from "../../../../redux/appCall/AuthAppCall";

const center = { lat: 41.7151, lng: 44.8271 };
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_CLOUD_MAPS_API_KEY;

type DirectionsResponse = google.maps.DirectionsResult;
interface DirectionsRequest {
  origin: string;
  destination: string;
  travelMode: google.maps.TravelMode;
}

interface RouteInfo {
  distance: string;
  duration: string;
}
const OrderTrack = () => {
  const { vendorForOrder, deliverymanForOrder } = useAppSelector(
    (state) => state.shopping
  );
  const dispatch = useAppDispatch();
  const { customer, coords } = useAppSelector((state) => state.customer);
  const [directionResponse, setDirectionResponse] = useState<
    DirectionsResponse[]
  >([]);
  const [moreDetails, setMoreDetails] = useState<boolean>(false);
  const [isMapsLoaded, setIsMapsLoaded] = useState<boolean>(false);
  const [routeInfo, setRouteInfo] = useState<RouteInfo[]>([]);

  if (!googleMapsApiKey) {
    throw new Error(
      "Google Cloud API key is not defined in environment variables"
    );
  }

  useEffect(() => {
    if (customer) {
      dispatch(coordsOfCustomer(customer.address.street || ""));
    }
  }, [dispatch, customer]);

  useEffect(() => {
    if (isMapsLoaded) {
      if (
        vendorForOrder &&
        deliverymanForOrder &&
        customer &&
        customer.address
      ) {
        const routes = [
          deliverymanForOrder.currentAddress,
          ...vendorForOrder.map((vendor) => vendor.address),
          customer.address.street || "",
        ];
        calcRouteSequentialRoutes(routes);
      }
    }
  }, [isMapsLoaded, vendorForOrder, deliverymanForOrder, customer]); //eslint-disable-line

  function calcRouteSequentialRoutes(routes: string[]) {
    if (deliverymanForOrder) {
      for (let i = 0; i < routes.length - 1; i++) {
        calculateRoute(routes[i], routes[i + 1]);
      }
    }
  }

  function calculateRoute(origin: string, destination: string) {
    const directionService = new google.maps.DirectionsService();
    const request: DirectionsRequest = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionService.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK && response) {
        setDirectionResponse((prev) => [...prev, response]);

        const leg = response.routes[0].legs[0];
        if (leg.distance && leg.duration) {
          setRouteInfo((prev) => [
            ...prev,
            {
              distance: leg.distance?.text || "",
              duration: leg.duration?.text || "",
            },
          ]);
        }
      } else {
        console.error("Directions request failed due to " + status);
      }
    });
  }

  if (!deliverymanForOrder || !vendorForOrder || !customer || !coords)
    return null;

  return (
    <section className="order-track-wrapper">
      <LoadScriptNext
        googleMapsApiKey={googleMapsApiKey}
        onLoad={() => setIsMapsLoaded(true)}
      >
        <GoogleMap
          center={center}
          zoom={10}
          mapContainerStyle={{
            height: "100%",
            width: "100%",
            borderRadius: "15px",
          }}
        >
          {directionResponse.map((response, index) => (
            <DirectionsRenderer
              key={index}
              options={{ directions: response, suppressMarkers: true }}
            />
          ))}

          <OverlayView
            position={{
              lat: deliverymanForOrder.latitude,
              lng: deliverymanForOrder.longitude,
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div>
              <ImageWraper image={deliverymanForOrder.image} size="25px" />
              <h3>{deliverymanForOrder.name}</h3>
            </div>
          </OverlayView>
          {vendorForOrder.map((vendor) => (
            <div key={vendor.name}>
              <OverlayView
                position={{
                  lat: vendor.latitude,
                  lng: vendor.longitude,
                }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div>
                  <ImageWraper image={vendor.image} size="25px" />
                  <h3>{vendor.name}</h3>
                </div>
              </OverlayView>
            </div>
          ))}

          <OverlayView
            position={{
              lat: coords.latitude,
              lng: coords.longitude,
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div>
              <ImageWraper image={customer.url || ""} size="25px" />
              <h3>{customer.username}</h3>
            </div>
          </OverlayView>
        </GoogleMap>
      </LoadScriptNext>

      {isMapsLoaded && (
        <div className="router-info-wrapper">
          <button onClick={() => setMoreDetails((prev) => !prev)}>
            See details
          </button>
          {moreDetails && (
            <div className="router-info">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "900" }}>Start location:</span>{" "}
                {deliverymanForOrder.currentAddress}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "900" }}>
                  {" "}
                  Our Customer address:
                </span>{" "}
                {customer.address.street}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "900" }}>Total Distance:</span>{" "}
                {routeInfo
                  .reduce((acc, route) => acc + parseFloat(route.distance), 0)
                  .toFixed(2)}{" "}
                km
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "900" }}>Total Duration:</span>{" "}
                {routeInfo
                  .reduce((acc, route) => acc + parseFloat(route.duration), 0)
                  .toFixed(2)}{" "}
                min
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default OrderTrack;
