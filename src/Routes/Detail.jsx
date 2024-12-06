import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  console.log(params);

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setChar(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user details:", err);
      });
  }, []);

  return (
    <>
      <div className="detail-container">
        <h1>{char.name}</h1>
        <img src="../images/doctor.jpg" alt="doctor" />
        <h4>Email: {char.email}</h4>
        <h4>Phone: {char.phone}</h4>
        <h4>
          Website:
          <a href={`https://${char.website}`}>{char.website}</a>
        </h4>
      </div>
    </>
  );
};

export default Detail;
