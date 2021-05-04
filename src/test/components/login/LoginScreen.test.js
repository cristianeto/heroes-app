import { mount } from 'enzyme';
import LoginScreen from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Testing in <LoginScreen /> component', () => {
  const historyMock = {
    replace: jest.fn(),
  };

  const contextValue = {
    user: { logged: false },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );

  test('should show the componentc correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call dispatch method and call replace method of history', () => {
    const action = {
      payload: { name: 'Cristian' },
      type: types.login,
    };
    wrapper.find('button').prop('onClick')();
    expect(contextValue.dispatch).toHaveBeenCalledWith(action);
    expect(historyMock.replace).toHaveBeenCalledTimes(1);
    expect(historyMock.replace).toHaveBeenCalledWith('/');
  });
});
