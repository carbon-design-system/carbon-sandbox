import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./Containers/App";

const renderComponent = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app")
  );
};

renderComponent(App);

if (module.hot) {
  module.hot.accept("./Containers/App", () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
