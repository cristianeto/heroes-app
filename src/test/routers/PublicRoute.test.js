import PublicRoute from '../../routers/PublicRoute';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LoginScreen from '../../components/login/LoginScreen';

describe('Testing in <PublicRoute/>', () => {
  const props = {
    location: {
      pathname: '/login',
    },
  };

  test('should show a component if user is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={false}
          component={() => <span>hello</span>}
          {...props}
        />
      </MemoryRouter>
    );
    console.log(wrapper.html());
    expect(wrapper.find('span').exists()).toBe(true);
  });

  test('should not show a component if user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={true}
          component={() => <span>hello</span>}
          {...props}
        />
      </MemoryRouter>
    );
    console.log(wrapper.html());
    expect(wrapper.find('span').exists()).toBe(false);
  });
});
