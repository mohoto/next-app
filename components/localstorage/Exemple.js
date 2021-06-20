import React from 'react'

export default function Exemple() {

    const token = localStorage.getItem('jwt-token');

    return (
        <div>
            {JSON.stringify(token)}
        </div>
    )
}
