import { useState } from "react";

const CmpntWithBttn = () => {

    const [toggle, setToggle] = useState(false);

    const onClick = () => setToggle(prev => !prev);

    return (
        <div>
            <h2>Test example: HTML-element with functionality</h2>
            <button data-testid="toggle-bttn" onClick={onClick}>Toggle It</button>
            {
              toggle && 
                <div data-testid="toggleble" >TOGGLED</div>
            }
        </div>
    );
}
export default CmpntWithBttn;
