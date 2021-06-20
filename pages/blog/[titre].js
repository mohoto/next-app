import React from 'react'
import {useRouter} from 'next/router'

export default function Titre() {

    const router = useRouter();
    console.log('router:', router.query)

    return (
        <div>
            <h1>{router.query.titre}</h1>
        </div>
    )
}
