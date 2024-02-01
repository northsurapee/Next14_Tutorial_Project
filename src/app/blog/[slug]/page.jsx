import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "../../../../lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "no-store"}); // default is {cache: "force-cache"}, another option for refresh data every amount of time is {next: {revalidate:3600}}
//   if(!res.ok) {
//     throw new Error("Error fetching posts")
//   }
//   return res.json();
// }

export default async function SinglePostPage({params}) {
    const {slug} = params;

    // FETCH DATA WITH AN API
    // const post = await getData(slug);

    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img} 
            src={post.img} 
            alt="" 
            fill 
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading...</div>} >
                <PostUser userId={post.userId} />
              </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
            </div>
          </div>
          <div className={styles.content}>
            {post.desc}
          </div>
        </div>
      </div>
    );
  }