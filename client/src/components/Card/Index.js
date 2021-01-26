import React from "react";


function Card(props) {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-body">{props.children}</div>
        </div>
    );
}

export default Card;