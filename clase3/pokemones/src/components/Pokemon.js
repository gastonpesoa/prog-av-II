import React from "react";

const Pokemon = ({name, sprite}) => {
    return(
        <figure>
            <img src={sprite} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}
export default Pokemon;