import { mount } from 'enzyme';
import HeroScreen from '../../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

describe('Testing in <HeroScreen />', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test('should show the component Redirect if there is not arguments at the URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('should show a hero if the param in my URL exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path='/hero/:heroId' component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('should return with history PUSH', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path='/hero/:heroId'
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test('should return back page with history goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path='/hero/:heroId'
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();

    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test('should return Redirect if hero doesnt exists', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider123123']}>
        <Route
          path='/hero/:heroId'
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');
  });
});
