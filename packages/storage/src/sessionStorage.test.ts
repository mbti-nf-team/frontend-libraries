/* eslint-disable no-proto */
import { getSessionStorageItem, removeSessionStorageItem, setSessionStorageItem } from './sessionStorage';

describe('storage', () => {
  describe('setSessionStorageItem', () => {
    beforeEach(() => {
      jest.spyOn(window.sessionStorage.__proto__, 'setItem');
    });

    const value = {
      key: 'value',
    };

    it('sessionStorage setItem이 호출되어야만 한다', () => {
      setSessionStorageItem('key', value);

      expect(window.sessionStorage.setItem).toHaveBeenCalledWith('key', JSON.stringify(value));
    });
  });

  describe('getSessionStorageItem', () => {
    const spyOnGetItem = jest.spyOn(window.sessionStorage.__proto__, 'getItem');
    const spyOnJsonParse = jest.spyOn(JSON, 'parse');

    afterEach(() => {
      spyOnGetItem.mockReset();
      spyOnJsonParse.mockReset();
    });

    context('Error가 발생하지 않은 경우', () => {
      context('key값에 대한 item이 존재하지 않는 경우', () => {
        beforeEach(() => {
          spyOnGetItem.mockReturnValueOnce(null);
          spyOnJsonParse.mockReturnValueOnce('');
        });

        it('localStorage getItem이 호출되어야만 한다', () => {
          const result = getSessionStorageItem('key');

          expect(window.sessionStorage.getItem).toHaveBeenCalledWith('key');
          expect(result).toBe('');
        });
      });

      context('key값에 대한 item이 존재하는 경우', () => {
        const value = 'test';

        beforeEach(() => {
          spyOnGetItem.mockReturnValueOnce(value);
          spyOnJsonParse.mockReturnValueOnce(value);
        });

        it('sessionStorage getItem이 호출되어야만 한다', () => {
          const result = getSessionStorageItem('key');

          expect(window.sessionStorage.getItem).toHaveBeenCalledWith('key');
          expect(result).toBe(value);
        });
      });

      context('window가 undefined인 경우', () => {
        const windowSpy = jest.spyOn(window, 'window', 'get') as jest.Mock;

        beforeEach(() => {
          windowSpy.mockImplementationOnce(() => undefined);
        });

        afterEach(() => {
          windowSpy.mockRestore();
        });

        it('null를 반환해야만 한다', () => {
          const result = getSessionStorageItem('key');

          expect(result).toBeNull();
        });
      });
    });

    context('Error가 발생한 경우', () => {
      beforeEach(() => {
        spyOnGetItem.mockReturnValue(new Error('error'));
      });

      it('null을 반환해야만 한다', () => {
        const result = getSessionStorageItem('key');

        expect(result).toBeNull();
      });
    });
  });

  describe('removeSessionStorageItem', () => {
    beforeEach(() => {
      jest.spyOn(window.sessionStorage.__proto__, 'removeItem');
    });

    it('sessionStorage removeItem이 호출되어야만 한다', () => {
      removeSessionStorageItem('key');

      expect(window.sessionStorage.removeItem).toHaveBeenCalledWith('key');
    });
  });
});
