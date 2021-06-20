import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styleHeader from './Header.module.css'


export default function Header() {

    const {pathname} = useRouter();

    return (
        <div className={styleHeader.header}>
            {/* passHref est ajouté à la balise Link si on utilise pas une balise '<a></a>' à l'intérieur de Link */}
            <Link href="/" passHref> 
                <span className={pathname === '/' ? styleHeader.active : styleHeader.link}>Home</span>
            </Link>
            <Link href="/blog" passHref> 
                <span className={pathname === '/blog' ? styleHeader.active : styleHeader.link}>Blog</span>
            </Link>
            <Link href="/profile" passHref> 
                <span className={pathname === '/profile' ? styleHeader.active : styleHeader.link}>Profile</span>
            </Link>
            <Link href="/blog/items" passHref> 
                <span className={pathname === '/blog/items' ? styleHeader.active : styleHeader.link}>Items</span>
            </Link>
            <Link href="/blog/categories" passHref>
                <span className={pathname === '/blog/categories' ? styleHeader.active : styleHeader.link}>Categories</span>
            </Link>
            <Link href="/regions" passHref>
                <span className={pathname === '/regions' ? styleHeader.active : styleHeader.link}>API régions</span>
            </Link>
            <Link href="/blog2" passHref>
                <span className={pathname === '/blog2' ? styleHeader.active : styleHeader.link}>Blog2</span>
            </Link>
            <Link href="/departements" passHref>
                <span className={pathname === '/departements' ? styleHeader.active : styleHeader.link}>API Départements</span>
            </Link>
            <Link href="/swr" passHref>
                <span className={pathname === '/swr' ? styleHeader.active : styleHeader.link}>SWR</span>
            </Link>
            <style jsx>
                {
                    `
                    .header{
                        margin: 20;
                        padding: 20;
                        border: '1px solid #000';
                    }
                    `
                }
            </style>
        </div>
    )
}
