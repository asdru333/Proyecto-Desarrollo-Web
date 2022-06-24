import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

function GridItemBtn(props) {
    return <div>
        <button className="h-10 w-40 bg-red hover:bg-light-red text-white font-bold py-2 rounded-md shadow-lg">{props.text}</button>
    </div>
}

function SideMenuBtn(props) {
    const location = useLocation();  
    let sideBtnClass;
    if(location.pathname === props.link) { 
        sideBtnClass = "h-14 w-64 bg-yellow text-lg font-bold rounded-md shadow-xl";
    } else {
        sideBtnClass = "h-14 w-64 bg-red hover:bg-light-red text-white text-lg font-bold rounded-md shadow-xl";
    }
    return <div>
        <Link to={`${props.link}`}>
            <button className={sideBtnClass}>{props.text}</button>
        </Link>
    </div>
}

function FormBtn(props) {
    return <div>
        <button className="h-12 w-40 bg-yellow hover:bg-light-red text-lg font- p-2 rounded-md">{props.text}</button>
    </div>
}

function ReceivedBtn(props) {
    return <div>
        <button className="h-12 w-40 bg-pizza hover:bg-yellow ext-white text-lg font- p-2 rounded-md">{props.text}</button>
    </div>
}

export { GridItemBtn, SideMenuBtn, FormBtn, ReceivedBtn }