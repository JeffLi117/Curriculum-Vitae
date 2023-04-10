import React, { Component } from 'react';

export default function DisplayName(props) {
    /* Display each one individually so that I can set their values....? */
    const userName = props.info.userName;

    if (userName !== "") {
        return (
            <div className="displayResults">
                Name: {userName}
            </div>
        )
    }
}
