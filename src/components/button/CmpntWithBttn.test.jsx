import { fireEvent, render, screen } from '@testing-library/react';
import CmpntWithBttn from './CmpntWithBttn';

describe("Test for component with functionality", () => {

    beforeEach(() => {
        render(<CmpntWithBttn />);
    });

    test('Test if button rendered', () => {
        const elem = screen.getByTestId("toggle-bttn");
        expect(elem).toBeInTheDocument();
    });

    test('Test button click event', () => {
        const bttn = screen.getByTestId("toggle-bttn");
        expect(screen.queryByTestId("toggleble")).toBeNull();
        fireEvent.click(bttn); // First  click at the button - to show element "toggleble"
        expect(screen.queryByTestId("toggleble")).toBeInTheDocument();
        fireEvent.click(bttn); // Second click at the button - to hide element "toggleble"
        expect(screen.queryByTestId("toggleble")).toBeNull();
    });

});