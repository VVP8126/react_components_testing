import { render, screen } from '@testing-library/react';
import CmpntAsyncLoadData from './CmpntAsyncLoadData';

describe("Test for component with async loading content", () => {

    beforeEach(() => {
        render(<CmpntAsyncLoadData />);
    });

    test('Test base configuration', () => {
        const elem = screen.getByText(/content/i);
        expect(elem).toBeInTheDocument();
        expect(elem).toHaveStyle("color:grey");
    });

    test('Test async function loading', async () => {
        screen.debug();
        const elem = await screen.findByText(/loaded/i);
        expect(elem).toBeInTheDocument();
        screen.debug();
    });

});
