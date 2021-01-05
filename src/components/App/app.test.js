import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

jest.mock("react-redux", () => { 
    return {
        useDispatch: () => {},
        useSelector: () => ({
            your: 'state',
  }),
    };
  });

Enzyme.configure({ adapter: new Adapter() });
describe('App component test', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('App', () => {
        it('should be defined', () => {
          expect(App).toBeDefined();
        });

        it('should render correctly', () => {
            const tree = Enzyme.shallow(
              <App />
            );
            expect(tree).toMatchSnapshot();
          });
    });
  });