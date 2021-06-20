//SWR Récupération des données côté client
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios'

import { useGetPosts } from "../utilities/useRequest"

const styles = {
    margin: 10,
    padding: 10,
    borderBottom: '1px solid #000'
}
/* const fetcher = url => {
    axios.get(url)
    .then(response => response.data);
} */

export default function Swr() {

    const router = useRouter();

    const { users, error } = useGetPosts("/users")

    console.log('users:', users)
    /*Ici on affiche la variable contenu dans le fichier .env*/
    console.log("NEXT_PUBLIC_API_ROOT", process.env.NEXT_PUBLIC_API_ROOT);

    if (error) return <h1>Something went wrong!</h1>
    if (!users) return <h1>Loading...</h1>
    //const {data, error} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

    //if(error) return <h1>Une erreur est survenue</h1>

    return (
        <>
        <h1>Cette page utilse SWR: Rendu coté client</h1>
         {users.map(user =>(
            <div style={styles} key={user.id}>
                <h1>Nom: {user.name}</h1>
                <div>E-mail: {user.email}</div>
                <div>Telephone: {user.telephone}</div>
            </div>
        ))}
        </>
    )
}
