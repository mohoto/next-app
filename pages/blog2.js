//getStaticProps Récupération des données côté serveur
import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const styles = {
    main: {
        padding: 20,
        margin: 20,
        borderBottom: '1px solid #000'
    },
    img: {
        height: 200,
        width: 300
    }
};

export default function Blog2({posts}) {

    const paths = posts.map(post => ({
        params: {id: post._id}
    }))
    console.log('paths:', paths)

    return (
        <div style={styles.main}>
            <h1>Cette page utilse getStaticProps: Rendu coté serveur statique</h1>
            {posts.map(post => (
                <div>
                    <Link href="/blog2/[id]" as={`/blog2/${post._id}`}>
                        <a><h1>{post.title}</h1></a>
                    </Link>
                    <div>
                        <img src={post.pictures[0]} alt={`ìllustarion de l\'article ${post.title}`} style={styles.img}/>
                    </div>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps = async (context) => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com/api/posts';
    const data = await axios.get(url).then(resp => resp.data)
    //Ou utiliser const {data} = await axios.get(url)

    const posts = data.data;
    
    return {
        props: {
            posts
        }
    }

};