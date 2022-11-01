import counterReducer, { decrement, increment } from "./counterReducer";

describe('Counter reducer tests', () => {
    
    test('Test - increment', () => {
        expect(counterReducer({value: 1}, increment())).toEqual({value: 2});
    });
    
    test('Test - decrement', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1});
    });

    test('Test for undefined (empty) state', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1});
        expect(counterReducer(undefined, decrement())).toEqual({value: -1});
    });
    
});
