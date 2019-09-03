import React from "react";
import {Link} from "react-router-dom"


export default function Home (props) {
    return(
        <div>
            <h1>Home Component</h1>
            <link
            to="./account">
            Go to Account
            </link>
        </div>
    )
}