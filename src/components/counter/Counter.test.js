import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { renderWithRedux } from "../../tests/helpers/RenderWithRedux";
import { renderWithReduxMemoryRouter } from "../../tests/helpers/renderWithReduxMemoryRouter";

describe('Test group of Counter', () => {

    // Set up initial state with store 
    beforeEach(() => {
        render(
            <Provider store={createReduxStore({counter: {value: 5}})}>
                <Counter />
            </Provider>
        );
    });

    test('Test for initial value of Counter', () => {
        expect(screen.getByTestId("counter-value")).toHaveTextContent(5);
    });
    
    test('Test for click at increment button', () => {
        const incrementBttn = screen.getByTestId("increment-btn");
        userEvent.click(incrementBttn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent(6);
    });

    test('Test for click at decrement button', () => {
        const decrementBttn = screen.getByTestId("decrement-btn");
        userEvent.click(decrementBttn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent(4);
    });

});

describe('Test Counter with helper', () => {
    
    // Using of helper to set up the state
    beforeEach(() => {
        render(renderWithRedux(<Counter/>, {counter: {value: 100}}));
    });

    test('Test initial state value', () => {
        expect(screen.getByTestId("counter-value")).toHaveTextContent(100);
    });
    
    test('Test increment button', () => {
        const incrementBttn = screen.getByTestId("increment-btn");
        userEvent.click(incrementBttn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent(101);
    });

    test('Test decrement button', () => {
        const decrementBttn = screen.getByTestId("decrement-btn");
        userEvent.click(decrementBttn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent(99);
    });

});

describe('Test Counter with helper - using MemoryRouter', () => {
    
    beforeEach(() => {
        render(
            renderWithReduxMemoryRouter(
                null,
                { route:"/counter", initialState: {counter: {value: 50}}}));
    });

    test('Test initial state value', () => {
        expect(screen.getByTestId("counter-value")).toHaveTextContent(50);
    });

    test('Test increment button', () => {
        const incrementBttn = screen.getByTestId("increment-btn");
        userEvent.click(incrementBttn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent(51);
    });

    test('Test decrement button', () => {
        const decrementBttn = screen.getByTestId("decrement-btn");
        userEvent.click(decrementBttn);
        expect(screen.getByTestId("counter-value")).toHaveTextContent(49);
    });
    
});