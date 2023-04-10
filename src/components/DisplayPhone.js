import React, { Component } from 'react';

export default function DisplayPhone(props) {
    const phone = props.info.phone;

    if (phone !== "") {
        return (
            <div className="displayResults">
                Phone: {phone}
            </div>
        )
    }
}