import { act, renderHook } from '@testing-library/react';

import useGeoLocation from './useGeolocation';

describe('useGeoLocation', () => {
  const mockNavigatorGeolocation = (hasGeolocation: boolean) => {
    const getCurrentPositionMock = jest.fn();

    const geolocation = hasGeolocation ? {
      getCurrentPosition: getCurrentPositionMock,
    } : undefined;

    Object.defineProperty(global.navigator, 'geolocation', {
      value: geolocation,
      writable: true,
    });

    return { getCurrentPositionMock };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const useGeoLocationHook = () => renderHook(() => useGeoLocation());

  context('에러가 발생한 경우', () => {
    context('나머지 에러인 경우', () => {
      const errorMessage = 'errorMessage';
      const { getCurrentPositionMock } = mockNavigatorGeolocation(true);
      getCurrentPositionMock.mockImplementation((_, rejected) => rejected({
        code: 1,
        message: errorMessage,
        PERMISSION_DENIED: '',
        POSITION_UNAVAILABLE: '',
        TIMEOUT: '',
      }));

      it('에러 상태가 반환되어야만 한다', () => {
        const { result } = useGeoLocationHook();

        act(() => {
          result.current[1]();
        });

        expect(getCurrentPositionMock).toHaveBeenCalled();
        expect(result.current[0]).toEqual({
          loading: false,
          error: {
            code: 1,
            message: errorMessage,
          },
        });
      });
    });

    context('지원하지 않는 브라우저인 경우', () => {
      it('에러 상태가 반환되어야만 한다', () => {
        const { getCurrentPositionMock } = mockNavigatorGeolocation(false);
        const { result } = useGeoLocationHook();

        act(() => {
          result.current[1]();
        });

        expect(getCurrentPositionMock).not.toHaveBeenCalled();
        expect(result.current[0]).toEqual({
          loading: false,
          error: {
            code: 1,
            message: 'Geolocation not supported',
          },
        });
      });
    });
  });

  context('성공한 경우', () => {
    const position = {
      coords: {
        latitude: 55,
        longitude: 44,
      },
    };

    it('위치 정보가 반환되어야만 한다', () => {
      const { getCurrentPositionMock } = mockNavigatorGeolocation(true);
      getCurrentPositionMock.mockImplementation((success) => success(position));
      const { result } = useGeoLocationHook();

      act(() => {
        result.current[1]();
      });

      expect(getCurrentPositionMock).toHaveBeenCalled();
      expect(result.current[0]).toEqual({
        loading: false,
        coordinates: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  });
});
