import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const News = ({ news }) => {
  const newsData = useLoaderData();
  const { title, author, image_url, details, rating } = newsData;
  return (
    <div className="border rounded">
      <div className=" w-full">
        <figure>
          <img className="w-full mb-3" src={image_url} alt="" />
        </figure>
        <h1 className="my-3 pl-2 text-2xl text-center">{title}</h1>
        <div className="flex justify-between px-3 py-5 text-xl">
          <h3 className="">
            Author: <span className="text-slate-500">{author?.name}</span>
          </h3>
          <h3>
            Publish Date:{" "}
            <span className="text-slate-500">{author?.published_date}</span>{" "}
          </h3>

          <h3 className="flex items-center gap-2">
            <p className="text-warning">
              <FaStar />
            </p>
            {rating.number}
          </h3>
        </div>
        <p className="text-left px-3">{details}</p>
      </div>
    </div>
  );
};

export default News;
