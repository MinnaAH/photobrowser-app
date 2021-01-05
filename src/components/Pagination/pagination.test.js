import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './pagination';

Enzyme.configure({ adapter: new Adapter() });
describe('Pagination component test', () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);
  
    beforeEach(() => {
        wrapper = Enzyme.shallow(<Pagination currentPage={2} setCurrentPage={setState}/>);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Pagination', () => {
        it('should be defined', () => {
          expect(Pagination).toBeDefined();
        });

        it('should render correctly with props', () => {
            const tree = Enzyme.shallow(
              <Pagination currentPage={1} />
            );
            expect(tree).toMatchSnapshot();
          });
    });
  
    describe('Next page', () => {
      it('calls setCurrentPage with currentPage+1', () => {
        wrapper.find('#next-page').props().onClick();
        expect(setState).toHaveBeenCalledWith(3);
      });
    });
  
    describe('Previous page', () => {
      it('calls setCurrentPage with currentPage-1', () => {
        wrapper.find('#previous-page').props().onClick();
        expect(setState).toHaveBeenCalledWith(1);
      });
    });
  });