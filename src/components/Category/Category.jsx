import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../shared/post/Post";

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((news) => (
        <Post key={news._id} news={news}></Post>
      ))}
    </div>
  );
};

export default Category;
