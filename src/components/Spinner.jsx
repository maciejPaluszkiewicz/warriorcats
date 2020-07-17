import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
    return (
        <div className='spinner'>
            <ClipLoader
                size={150}
                color={"#123abc"}
            />
        </div>
    );
}

export default Spinner;