import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";

describe("Testing for <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };
  Storage.prototype.setItem = jest.fn();

  test("should show a component if it is authenticated and save in localStorage", () => {
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
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("should block the component if its not authenticated", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>my element</span>}
          {...props}
        />
      </MemoryRouter>
    );
    // console.log(wrapper.html());
    expect(wrapper.find("span").exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
});
