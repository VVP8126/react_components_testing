import { useState } from "react";

const CmpntWithInput = () => {

    const [value, setValue] = useState("");

    const onChange = (e) => setValue(e.target.value);

    return (
        <div>
            <h2>Test example: HTML-input</h2>
            <input data-testid="some-input" onChange={onChange} placeholder={"Enter text"} />
            {
              value && 
                <div data-testid="entered-data" >{value}</div>
            }
        </div>
    );
}
export default CmpntWithInput;
