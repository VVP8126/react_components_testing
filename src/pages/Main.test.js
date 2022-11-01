import { render, screen } from '@testing-library/react';
import Main from "./Main";

describe("Start page Test", () => {
  
  beforeEach(() => {
    render(<Main />);
  });

  test('Test image render', () => {
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  test('Test paragraph render', () => {
    const pElement = screen.getByText(/Edit/);
    expect(pElement).toBeInTheDocument();
  });

  test('Test for missing element - checkbox', () => {
    const checkbox = screen.queryByRole("checkbox");
    expect(checkbox).not.toBeInTheDocument();
  });

  test('Test link render', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    screen.debug();                         // Run command 'npm run test' to see React element content
    expect(linkElement).toMatchSnapshot();  // Create snapshot of element
  });

});
