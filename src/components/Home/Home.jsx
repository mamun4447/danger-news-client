import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../shared/post/Post";

const Home = () => {
  const newsData = useLoaderData();
  return (
    <div className="">
      {newsData.map((news) => (
        <Post key={news._id} news={news}></Post>
      ))}
      <h1>Home{newsData.length}</h1>
    </div>
  );
};

export default Home;
