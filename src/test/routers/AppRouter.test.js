import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('Testing in <AppRouter/>', () => {
  const contextValue = { user: { logged: false }, dispatch: jest.fn() };

  test('should show my login component if user is not authenticated', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    // console.log(wrapper.find('h1').exists());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  test('should show a marvel component if user is authenticated', () => {
    const contextValue = {
      user: { name: 'cris', logged: true },
      dispatch: jest.fn(),
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    // console.log(wrapper.html());
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
