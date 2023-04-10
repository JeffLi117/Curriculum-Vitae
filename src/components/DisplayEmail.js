import React, { Component } from 'react';

export default function DisplayEmail(props) {
    const email = props.info.email;

    if (email !== "") {
        return (
            <div className="displayResults">
                Email: {email}
            </div>
        )
    }
}