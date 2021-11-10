import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User/User";

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setlistOfUSer(res.data);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="UserList">
      {listOfUSer.map((user) => (
        <User key={user.id} id={user.id} data={user} />
      ))}
    </div>
  );
}

export default UserList;
