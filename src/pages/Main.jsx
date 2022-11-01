import logo from './../logo.svg';

const Main = () => {
    return (
        <div data-testid="main-page">
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
            <h1>MAIN</h1>
        </div>
    );
}

export default Main;
