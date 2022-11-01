const { useState, useEffect } = require("react")

const CmpntAsyncLoadData = () => {
    
    const [data, setData] = useState(null);
    
    useEffect(
        () => {
            setTimeout(() => { setData("content"); }, 500);
        },
        []
    );

    return (
        <div>
            <h2 style={{color:"grey"}}>Page with async loading content</h2>
            {data && <div>loaded</div>}
        </div>
    );
}

export default CmpntAsyncLoadData;
