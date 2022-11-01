import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/reducers/counterReducer";
import { getStateCounterValue } from "../../store/reducers/selectors/getStateCounterValue";

const Counter = () => {

    const dispatch = useDispatch();
    const value = useSelector( getStateCounterValue );
    const onIncrement = () => { dispatch(increment()) };
    const onDecrement = () => { dispatch(decrement()) };

    return (
        <div>
            <p data-testid="counter-value">{value}</p>
            <p><button onClick={onIncrement} data-testid="increment-btn" >ADD(+)</button></p>
            <p><button onClick={onDecrement} data-testid="decrement-btn" >SUB(-)</button></p>
        </div>
    );
}
export default Counter;
