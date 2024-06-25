import React from "react";

function Withref() {
    function setRef(node) {
        formRef = node;
    };
    return (
        <>
            <form ref={setRef} action="" >
                <input type="text" value='' />
                <button type="submit">Search Ref</button>
            </form>
        </>
    )

};

export default Withref;