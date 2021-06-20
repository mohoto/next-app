//UseEffect Récupération des données côté client
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios'

const styles = {
    margin: 10,
    padding: 10,
    borderBottom: '1px solid #000'
}

export default function Profile() {

    const router = useRouter();
    const [data, setData] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() =>{
        axios.get(url)
        .then(response => setData(response.data))
        .catch(err => console.log(err))
    })

    return (
        <>
        <h1>Cette page utilse useEffect: Rendu coté client</h1>
        {data.map(user =>(
            <div style={styles} key={user.id}>
                <h1>Nom: {user.name}</h1>

                <div>E-mail: {user.email}</div>
                <div>Telephone: {user.telephone}</div>
            </div>
        ))}
        </>
    )
}
