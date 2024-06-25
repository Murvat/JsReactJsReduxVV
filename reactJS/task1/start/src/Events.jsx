import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function Events() {
    let noun = '';
    const [state, setState] = useState(noun)
    const handlerClick = (e) => {
        e.preventDefault();
        setState(
            'Murvat'
        )
    }

    useEffect(() => {
        console.log('its done')
    })
    return (
        <>

            <div>
                <Link to='/List'><button>Click</button></Link >
                <Link></Link>
                <Link></Link>
                <Link></Link>
            </div>
            < div > <form action="">
                <button onClick={() => alert('sd')}></button>
                <button onClick={handlerClick}></button>
                <div><span >{state}
                </span></div>
            </form>
            </div ></>


    )
};

export default Events;