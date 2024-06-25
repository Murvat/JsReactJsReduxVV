import React from "react";
import Events from "./Events";
import List from "./List";
import Search from "./Search";

import { Routes, BrowserRouter, Route } from 'react-router-dom';
const style = { color: 'red' };

const App = () => {
    return (
        <>
            <div className="container"><p>Welcome to page</p>
                <div className="h1">Task1</div>
                <input type="button" value="200" />
                <input style={{ backgroundColor: 'red' }} type='checkbox' value="200" />
                <select name="hello" id="">
                    <option value="hey">sda</option>
                    <option value="hey">hell</option>
                    <option value="hey">yy</option>
                    <option value="hey">no</option>
                </select>
                <form action="">
                    <label htmlFor="">
                        <input type="text" />
                    </label>
                    <br />
                    <span style={style}>Murvat Mustafayev</span>
                </form>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Events />} />
                        <Route path='/List' element={<List />} />
                        <Route path='/Search' element={<Search />} />
                        <Route path='/Events' element={<Events />} />
                    </Routes>

                </BrowserRouter>
            </div > </>
    )
};

export default App;
