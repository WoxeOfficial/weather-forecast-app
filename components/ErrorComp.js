import React from 'react';

export default function ErrorComp(props) {
    return(
        <p className="error">
            {props.error}
        </p>
    )
}