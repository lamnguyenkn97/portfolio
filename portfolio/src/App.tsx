import React from 'react';
import {Outlet} from "react-router-dom";
import {Profile} from "./components/profile";


function App() {
    return (
        <div className="App">
            <Profile />
            <Outlet />
        </div>
    );
}

export default App;
