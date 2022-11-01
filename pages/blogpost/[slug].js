/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <hr />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi reiciendis architecto eius ex unde odit, vero aspernatur? Perferendis fugit quos quasi magni sint cum soluta dicta dolores? Officiis, in cumque?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit debitis fugit qui, cum labore placeat recusandae adipisci, eveniet eaque iusto sit ut maxime eos, quas ea. Voluptates molestiae sequi hic, deserunt consequuntur cupiditate dolore, aperiam saepe fugit ullam quos. Quidem maiores architecto possimus nulla ullam.</div>
            </main>
        </div>
    )
}

export default slug 