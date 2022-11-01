import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Counter from "../../components/counter/Counter";

export const renderWithReduxMemoryRouter = (component, options) => {

    const store = createReduxStore(options?.initialState);
    
    return (
        <Provider store={store} >
            <MemoryRouter initialEntries={[options?.route]} >
                <Routes>
                    <Route path='/counter' element={<Counter />} />
                </Routes>
                { component }
            </MemoryRouter>
        </Provider>
    );
}
