import { mount } from 'enzyme';
import HeroScreen from '../../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router-dom';

describe('Testing in <HeroScreen />', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };
  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>
  );

  test('should show the component Redirect if there is not arguments at the URL', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });
});
