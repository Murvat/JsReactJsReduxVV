import React from "react";
function List() {
    let arr = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <br />
            <br />
            <ul>
                Murvat
                {arr.map(item => (
                    <li key={item}>{item}NO</li>
                ))}
            </ul>
        </>
    )
};
export default List;