import { useCallback, useState } from 'react';

type GeoLocation = {
  loading: boolean;
  coordinates?: {
    lat: number | undefined;
    lng: number | undefined;
  };
  error?: {
    code: number;
    message: string;
  }
};

const useGeoLocation = (): [GeoLocation, () => void] => {
  const [location, setLocation] = useState<GeoLocation>({
    loading: false,
    coordinates: { lat: undefined, lng: undefined },
  });

  const onSuccess = (position: GeolocationPosition) => {
    setLocation({
      loading: false,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setLocation({
      loading: false,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  const onGetGeoLocation = useCallback(() => {
    if (navigator?.geolocation) {
      setLocation((prev) => ({
        ...prev,
        loading: true,
      }));
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      return;
    }

    onError({
      code: 1,
      message: 'Geolocation not supported',
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    });
  }, []);

  return [location, onGetGeoLocation];
};

export default useGeoLocation;
