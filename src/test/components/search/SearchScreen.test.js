import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

describe('Testing in <SearchScreen />', () => {
  test('should show correctly with default values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  });

  test('should show a default value in my input when call with query params in my URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?query=batman']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a html with error info if hero doesnt exist', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?query=batman123123']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').exists()).toBe(true);
    expect(wrapper.find('.alert-danger').text().trim()).toBe(
      'There is no a hero with: batman123123'
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should call the push method from history', () => {
    const historyMock = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?query=batman123123']}>
        <Route
          path='/search'
          component={() => <SearchScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    wrapper
      .find('input')
      .simulate('change', { target: { name: 'searchText', value: 'batman' } });

    wrapper.find('form').prop('onSubmit')({ preventDefault() {} });

    expect(historyMock.push).toHaveBeenCalledWith(`?query=batman`);
  });
});
