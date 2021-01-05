import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Thumbnail from './thumbnail';

const thumbnailTestProp = {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }

Enzyme.configure({ adapter: new Adapter() });
describe('Thumbnail component test', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Thumbnail', () => {
        it('should be defined', () => {
          expect(Thumbnail).toBeDefined();
        });

        it('should render correctly with props', () => {
            const tree = Enzyme.shallow(
              <Thumbnail thumbnail={thumbnailTestProp} />
            );
            expect(tree).toMatchSnapshot();
          });
    });
  });