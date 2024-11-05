import {
  createNumberArray,
  emptyAThenB,
  ensureArray,
  getNumberOrDefault,
  getStringOrDefault,
  isEmpty,
  trueOrFalse,
} from './utils';

describe('getStringOrDefault', () => {
  context('value가 null일 경우', () => {
    context('replacementValue가 존재하지 않는 경우', () => {
      it('빈 문자열을 반환해야만 한다', () => {
        const result = getStringOrDefault(null);

        expect(result).toBe('');
      });
    });

    context('replacementValue가 존재하는 경우', () => {
      it('대체할 문자열(두 번째 인자)을 반환해야만 한다', () => {
        const result = getStringOrDefault(undefined, '-');

        expect(result).toBe('-');
      });
    });
  });

  context('value가 null이 아닌 경우', () => {
    it('입력된 값이 반환되어야만 한다', () => {
      const result = getStringOrDefault('nana');

      expect(result).toBe('nana');
    });
  });
});

describe('getNumberOrDefault', () => {
  context('value가 null인 경우', () => {
    it('0을 반환해야 한다', () => {
      const result = getNumberOrDefault(null);

      expect(result).toBe(0);
    });

    context('defaultValue가 존재하는 경우', () => {
      it('defaultValue를 반환해야 한다', () => {
        const result = getNumberOrDefault(null, 100);

        expect(result).toBe(100);
      });
    });
  });

  context('value가 null이 아닌 경우', () => {
    it('입력된 값이 반환되어야 한다', () => {
      const result = getNumberOrDefault(100);

      expect(result).toBe(100);
    });
  });
});

describe('emptyAThenB', () => {
  const b = 'B';

  context('null일 경우', () => {
    it('첫 번째 인자를 반환야만 한다', () => {
      const result = emptyAThenB(b, null);

      expect(result).toBe(b);
    });
  });

  context('문자열일 경우', () => {
    const a = 'test';

    it('두 번째 인자를 반환야만 한다', () => {
      const result = emptyAThenB(b, a);

      expect(result).toBe(a);
    });
  });
});

describe('trueOrFalse', () => {
  context('falsy한 값이면', () => {
    it('false를 반환해야만 한다', () => {
      const result = trueOrFalse('');

      expect(result).toBe(false);
    });
  });

  context('truthy한 값이면', () => {
    it('true를 반환해야만 한다', () => {
      const result = trueOrFalse('test');

      expect(result).toBe(true);
    });
  });
});

describe('ensureArray', () => {
  context('value가 undefined이거나 빈 배열인 경우', () => {
    it('빈 배열을 반환해야만 한다', () => {
      const result = ensureArray();

      expect(result).toEqual([]);
    });
  });

  context('value가 undefined이거나 빈 배열이 아닌 경우', () => {
    const mockArray = ['test', 'test2'];

    it('입력된 값이 반환되어야 한다', () => {
      const result = ensureArray(mockArray);

      expect(result).toEqual(mockArray);
    });
  });
});

describe('isEmpty', () => {
  context('falsy한 값인 경우', () => {
    it('true를 반환해야만 한다', () => {
      const result = isEmpty(undefined);

      expect(result).toBeTruthy();
    });
  });

  context('빈 배열이 아닌 경우', () => {
    it('false를 반환해야만 한다', () => {
      const result = isEmpty([1]);

      expect(result).toBeFalsy();
    });
  });

  context('빈 배열인 경우', () => {
    it('true를 반환해야만 한다', () => {
      const result = isEmpty([]);

      expect(result).toBeTruthy();
    });
  });
});

describe('createNumberArray', () => {
  it('길이가 5인 배열을 반환해야만한다', () => {
    const result = createNumberArray(5);

    expect(result.length).toBe(5);
  });
});
