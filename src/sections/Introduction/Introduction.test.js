import { render, screen } from "@testing-library/react";
import { Introduction } from "./Introduction";

test("loads and displays introduction", async () => {
  render(<Introduction />);

  expect(screen.getByRole("heading")).toHaveTextContent("Daniel Shliakhetko");
  expect(
    screen.getByText("Junior React Front End Developer")
  ).toBeInTheDocument();
  expect(screen.getByAltText("Developer Thumbnail").src).toContain(
    "developerImage.jpg"
  );
});
