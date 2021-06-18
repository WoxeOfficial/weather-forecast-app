import React, {useRef} from 'react';

export default function Search(props) {
    const input = useRef()
    return (
        <div className="searchWrapper">
            <div className="search">
                <input type="text" onKeyPress={(e) => e.key === "Enter" ? props.search(input.current.value) : ""} ref={input} placeholder="Search other cities"/>
                <button onClick={() => props.search(input.current.value)}>Search</button>
            </div>

        </div>
    )
}