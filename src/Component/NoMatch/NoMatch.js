import React from 'react';

const NoMatch = () => {
    const error = {
        backgroundColor: "red",
        padding: "10px",
        color: "white"
    }
    return (
        <div>
            <h1 style={error}>Data Information Error!!!</h1>
        </div>
    );
};

export default NoMatch;