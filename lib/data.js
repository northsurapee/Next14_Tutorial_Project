import { Post, User } from "./models";
import { connectToDb } from "./utils";

// FETCH DATA WITHOUT AN API
const posts = [
    {id:1, title: "Post 1", body: ".....", userId: 1},
    {id:2, title: "Post 2", body: ".....", userId: 1},
    {id:3, title: "Post 3", body: ".....", userId: 2},
    {id:4, title: "Post 4", body: ".....", userId: 2},
]

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch posts!")
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug}); // or {slug: slug}
        return post;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch post!")
    }
}

export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById({_id: id}); // or {id}
        return user;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch user!")
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}

