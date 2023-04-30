/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */


import React from "react"
import ReactDOM from "react-dom"

function Page(){
    return(
        <ol>
            <li>Something_0</li>
            <li>Something_1</li>
            <li>Something_2</li>
            <li>Something_3</li>
        </ol>
    )
}


ReactDOM.render(<Page />, document.querySelector("#root"))