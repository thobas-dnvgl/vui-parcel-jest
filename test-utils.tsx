import React from "react";
import { render } from "@testing-library/react";
import { VuiProvider } from "@veracity/vui";

const AllTheProviders = ({ children }) => {
  return <VuiProvider>{children}</VuiProvider>;
};

const customRender = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
