import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

const PostLink = ({titre}) => (
    <li>
        {/* Ulr dynamique */}
        {/* <Link href="/blog/[titre]" as={`/blog/${titre}`}> */}
        {/* Ulr avec paramètre dynamique */}
        <Link href={`/blog?titre=${titre}`}>
            <a>{titre}</a>
        </Link>
    </li>
);

export default function Blog() {

    const router = useRouter();

    return (
        <div>
            <h1 className={styles.title}>Blog</h1>
            <ul>
                <PostLink titre="react" />
                <PostLink titre="angular" />
                <PostLink titre="vue" />
                <PostLink titre="svelte" />         
            </ul>
            <h1>{router.query.titre}</h1>
        </div>
    )
}
