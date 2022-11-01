import { fireEvent, render, screen } from '@testing-library/react';
import CmpntWithInput from './CmpntWithInput';

describe("Test for input component with functionality", () => {

    beforeEach(() => {
        render(<CmpntWithInput /> );
    });

    test('Test if input-element rendered', () => {
        const elem = screen.getByTestId("some-input");
        expect(elem).toBeInTheDocument();
    });

    test('Test input change event', () => {
        const testData = "abcdef";
        const inputElement = screen.getByPlaceholderText("Enter text"); // Get element by placeholder
        expect(inputElement).toBeInTheDocument();
        fireEvent.input(inputElement, {target: {value: testData}}); // Enter data to input element
        expect(screen.queryByTestId("entered-data")).toContainHTML(testData);
    });

});