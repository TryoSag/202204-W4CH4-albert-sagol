const { render, screen } = require("@testing-library/react");
const { default: Action } = require("./Action");

describe("Given the function Action", () => {
  describe("When it receives 'hello'", () => {
    test("Then it should show a anchor with Hello", () => {
      const textToShow = "hello";
      const expectedtext = "Hello";

      render(<Action action={textToShow} />);
      const textShowed = screen.getByText(expectedtext);

      expect(textShowed).toBeInTheDocument();
    });
  });

  describe("When it receives a 'bye' and true", () => {
    test("Then it should render a anchor with classname 'Bye active'", () => {
      const anchorActive = true;
      const anchorClass = "Bye";
      const expectedClass = "Bye active";

      render(<Action isActive={anchorActive} action={anchorClass} />);
      const anchorTest = screen.getByText(anchorClass);

      expect(anchorTest.className).toBe(expectedClass);
    });
  });
});
