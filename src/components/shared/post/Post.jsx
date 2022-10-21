import React from "react";
import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Post = ({ news }) => {
  const {
    _id,
    title,
    author,
    image_url,
    total_view,

    details,
    rating,
  } = news;
  const { img, name, published_date } = author;
  return (
    <div className="text-left mb-5 border p-2 rounded">
      <header className="flex justify-between items-center bg-slate-100 p-2 rounded">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={img} alt="" />
            </div>
          </div>

          <div>
            <h3>{name}</h3>
            <p>{published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-xl pr-2">
          <button>
            <FaRegBookmark />
          </button>
          <button>
            <FaShareAlt />
          </button>
        </div>
      </header>
      <div className=" w-full">
        <h1 className="mt-3 pl-2 text-2xl">{title}</h1>
        <figure>
          <img className="w-full my-3" src={image_url} alt="" />
        </figure>

        <p>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>
      </div>
      <div className="flex justify-between mt-3 bg-slate-100 p-2 rounded">
        <p className="text-warning flex items-center gap-2">
          <FaStar></FaStar>
          {rating?.number}
        </p>
        <p className="flex items-center gap-2">
          <FaEye></FaEye>
          {total_view}
        </p>
      </div>
    </div>
  );
};

export default Post;
