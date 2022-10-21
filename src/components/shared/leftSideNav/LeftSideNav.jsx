import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setServerData(data));
  }, []);

  return (
    <div className="hidden lg:block text-left">
      <h1 className="text-xl p-2">Categories legnth {serverData.length}</h1>
      {serverData.map((data) => (
        <p key={data.id}>
          {" "}
          <Link to={`/categories/${data.id}`}>{data.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
