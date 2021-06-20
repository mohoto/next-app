import React from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'

export default function CodeRegion({data}) {

    const router = useRouter();
    console.log('router:', router.query)

    return (
        <>
            {data && (
                <div>
                    <h1>{data.nom}</h1>
                    <p>{data.code}</p>
                </div>

            )}
        </>
    )
}

//On peut aussi mettre en argument 'params' si on utilise seulement cette objet de l'objet 'context'
export const getServerSideProps = async ({params}) => {
    const code = params.code;
    const url = `https://geo.api.gouv.fr/regions/${code}`;
    const {data} = await axios.get(url);
    return {
        props: {
            data
        }
    }
}
