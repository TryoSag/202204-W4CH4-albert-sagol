import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Keyboard from "./Keyboard";

describe("Given the Keyboard function", () => {
  describe("When it's called", () => {
    test("Then it should render 11 buttons", () => {
      render(
        <PhoneContextProvider>
          <Keyboard />
        </PhoneContextProvider>
      );
      const expectedNumberOfButtons = 11;
      const numberOfButtons = screen.getAllByRole("button");
      expect(numberOfButtons.length).toBe(expectedNumberOfButtons);
    });
  });
});
