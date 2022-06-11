import React from 'react';

function GridItemBtn(props) {
    return <div>
        <button class="h-10 w-40 bg-red hover:bg-light-red text-white font-bold py-2">{props.text}</button>
    </div>
}

function SideMenuBtn(props) {
    return <div>
        <button class="h-14 w-64 bg-red hover:bg-light-red text-white text-lg font-bold py-2">{props.text}</button>
    </div>
}

function FormBtn(props) {
    return <div>
        <button class="h-12 w-40 bg-yellow hover:bg-light-red text-lg font- p-2 rounded-md">{props.text}</button>
    </div>
}

function ReceivedBtn(props) {
    return <div>
        <button class="h-12 w-40 bg-pizza hover:bg-yellow ext-white text-lg font- p-2 rounded-md">{props.text}</button>
    </div>
}

export { GridItemBtn, SideMenuBtn, FormBtn, ReceivedBtn }