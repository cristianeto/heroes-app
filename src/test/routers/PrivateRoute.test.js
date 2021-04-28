import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";

describe("Testing for <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  test("should show a componente  if it is authenticated and save in localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>my element</span>}
          {...props}
        />
      </MemoryRouter>
    );
    // console.log(wrapper.html());
    expect(wrapper.find("span").exists()).toBe(true);
  });
});
