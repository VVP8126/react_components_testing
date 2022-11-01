import { render, screen } from '@testing-library/react';
import App from "./App";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";

describe("Start page Test", () => {
  
  beforeEach(() => {
    render(<MemoryRouter initialEntries={["/fake-path"]} ><App /></MemoryRouter>);
  });

  test('Test existing routings', () => {
    const linkMainElement = screen.getByTestId("main-page-link");
    expect(linkMainElement).toBeInTheDocument();
    const linkAboutElement = screen.getByTestId("about-page-link");
    expect(linkAboutElement).toBeInTheDocument();
    userEvent.click(linkMainElement); // Click at first (left) link
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
    userEvent.click(linkAboutElement); // Click at second (right) link - passing to <About /> element
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    userEvent.click(linkMainElement); // Click at first (left) link - return to <Main /> element
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test('Test not-existing routing', () => {
    expect(screen.getByTestId("page-not-found")).toBeInTheDocument();
  });

});
