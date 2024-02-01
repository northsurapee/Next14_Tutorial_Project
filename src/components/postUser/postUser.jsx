import { getUser } from "../../../lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"}); // default is {cache: "force-cache"}, another option for refresh data every amount of time is {next: {revalidate:3600}}
//   if(!res.ok) {
//     throw new Error("Error fetching posts")
//   }
//   return res.json();
// }

export default async function PostUser({userId}) {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image 
        className={styles.avatar}  
        src={user.img? user.img : "/noavatar.png"} 
        alt="" 
        width={50}
        height={50}
      />  
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  )
}
