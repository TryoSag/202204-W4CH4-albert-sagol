import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Actions from "./Actions";

describe("Given the Actions function", () => {
  describe("When it's called", () => {
    test("Then it should render anchor", () => {
      render(
        <PhoneContextProvider>
          <Actions />
        </PhoneContextProvider>
      );
      const anchorRendered = screen.getByRole("link");

      expect(anchorRendered).toBeInTheDocument();
    });
  });
});
