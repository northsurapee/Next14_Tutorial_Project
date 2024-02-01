import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "../../../lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"}); // default is {cache: "force-cache"}, another option for refresh data every amount of time is {next: {revalidate:3600}}
//   if(!res.ok) {
//     throw new Error("Error fetching posts")
//   }
//   return res.json();
// }

export default async function BlogPage() {
    // FETCH DATA WITH AN API
    // const posts = await getData();

    // FETCH DATA WITHOUT AN API
    const posts = await getPosts();

    return (
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    );
}