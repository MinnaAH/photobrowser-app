import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from './grid';

const thumbnailsTestProps = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
]

Enzyme.configure({ adapter: new Adapter() });
describe('Grid component test', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Grid', () => {
        it('should be defined', () => {
          expect(Grid).toBeDefined();
        });

        it('should render correctly with props', () => {
            const tree = Enzyme.shallow(
              <Grid thubmnails={thumbnailsTestProps} currentPage={1} />
            );
            expect(tree).toMatchSnapshot();
          });
    });
  });