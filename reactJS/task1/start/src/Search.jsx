import React, { useState } from "react";

function Search() {
    const [state, setState] = useState('');

    const handleChange = (e) => {
        console.log(e)
        setState(e.target.value)

    }
    const search = (e) => {
        e.preventDefault();
        console.log(state)
    }
    return (
        <>
            <form action="" onSubmit={search}>
                <input type="text" onChange={handleChange} value={state} />
                <button type="submit">Search</button>
            </form>
        </>
    )
};

export default Search;