//getInitialProps Récupération des données côté serveur et client
import React from 'react'
import axios from 'axios'

export default function Departements({data}) {
    return (
        <div>
            <h1>Cette page utilse getInitialProps: Rendu coté serveur et client</h1>
            {JSON.stringify(data)}
        </div>
    )
}

export const getStaticProps = async () => {
    const url = 'https://geo.api.gouv.fr/departements'
    const {data} = await axios.get(url);
    return {
        props: {
            data
        }
    }
}
/*On désactive getInitialProps si on veut déployer notre application sur "vercel" car elle désactive
l'optimisation statique automatique*/
/*Departements.getInitialProps = async (context) => {
    const url = 'https://geo.api.gouv.fr/departements'
    const {data} = await axios.get(url);
    return {
        data
    }
}*/