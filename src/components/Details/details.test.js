import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Details from './details';

const detailsTestProps = [
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
];

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        photoId: '1',
    }),
    useRouteMatch: () => ({ url: '/photo/1' }),
  }));

Enzyme.configure({ adapter: new Adapter() });
describe('Details component test', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Details', () => {
        it('should be defined', () => {
          expect(Details).toBeDefined();
        });

        it('should render correctly with props', () => {
            const tree = Enzyme.shallow(
              <Details photos={detailsTestProps} />
            );
            expect(tree).toMatchSnapshot();
          });
    });
  });