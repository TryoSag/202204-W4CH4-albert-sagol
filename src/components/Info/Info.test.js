import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";

import Info from "./Info";

describe("Given he Info function", () => {
  describe("When it's rendered", () => {
    test("Then it should conteinsthe text Calling...", () => {
      render(
        <PhoneContextProvider>
          <Info />
        </PhoneContextProvider>
      );
      const expectedText = "Calling...";
      const infoBlock = screen.getByText(expectedText);
      expect(infoBlock.textContent).toBe(expectedText);
    });
  });
});
