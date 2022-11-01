import { getStateCounterValue } from "./getStateCounterValue";

describe('Selectors tests', () => {
    
    test('Test of state counter - valid value', () => {
        expect(getStateCounterValue({counter: {value: 10}})).toBe(10);
    });
    
    test('Test of state counter - not valid value', () => {
        expect(getStateCounterValue({counter: {value: 10}})).not.toBe(0);
    });

});
