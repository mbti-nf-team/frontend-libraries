import { act, render } from '@testing-library/react';

import DelayRenderComponent from './DelayRenderComponent';

describe('DelayRenderComponent', () => {
  const delay = 200;
  const childComponentText = '자식 컴포넌트';

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  function MockComponent() {
    return (
      <>{childComponentText}</>
    );
  }

  const renderDelayRenderComponent = () => render((
    <DelayRenderComponent
      initialRenderState={given.initialState}
      isVisible={given.isVisible}
      unRenderDelay={given.unRenderDelay}
      renderDelay={given.renderDelay}
    >
      <MockComponent />
    </DelayRenderComponent>
  ));

  describe('컴포넌트의 unRendering을 지연시킨다', () => {
    given('unRenderDelay', () => delay);

    context('isVisible이 true인 경우', () => {
      given('initialState', () => false);
      given('isVisible', () => true);

      it('자식 컴포넌트가 나타나야만 한다', () => {
        const { container } = renderDelayRenderComponent();

        act(() => {
          jest.advanceTimersByTime(0);
        });

        expect(container).toHaveTextContent(childComponentText);
      });
    });

    context('isVisible이 false인 경우', () => {
      given('initialState', () => true);
      given('isVisible', () => false);

      it(`${delay}ms 뒤에 아무것도 나타나지 않아야만 한다`, () => {
        const { container } = renderDelayRenderComponent();

        expect(container).toHaveTextContent(childComponentText);

        act(() => {
          jest.advanceTimersByTime(200);
        });

        expect(container).toBeEmptyDOMElement();
      });
    });
  });

  describe('컴포넌트의 rendering을 지연시킨다', () => {
    given('renderDelay', () => delay);
    given('unRenderDelay', () => 0);

    context('isVisible이 true인 경우', () => {
      given('initialState', () => false);
      given('isVisible', () => true);

      it('자식 컴포넌트가 나타나야만 한다', () => {
        const { container } = renderDelayRenderComponent();

        act(() => {
          jest.advanceTimersByTime(200);
        });

        expect(container).toHaveTextContent(childComponentText);
      });
    });

    context('isVisible이 false인 경우', () => {
      given('initialState', () => true);
      given('isVisible', () => false);

      it(`${delay}ms 뒤에 아무것도 나타나지 않아야만 한다`, () => {
        const { container } = renderDelayRenderComponent();

        expect(container).toHaveTextContent(childComponentText);

        act(() => {
          jest.advanceTimersByTime(0);
        });

        expect(container).toBeEmptyDOMElement();
      });
    });
  });
});
