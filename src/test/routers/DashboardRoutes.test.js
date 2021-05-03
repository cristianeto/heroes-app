import { AuthContext } from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
const { mount } = require('enzyme');

describe('testing in <DashboardRoutes />', () => {
  const contextValue = {
    user: { name: 'cris', logged: true },
    dispatch: jest.fn(),
  };
  test('should show dashboard component corectly', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('cris');
  });
});
