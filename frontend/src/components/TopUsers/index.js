import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const TopUsers = () => {
  const [topList, setTopList] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

useEffect(() => {
    const mockData = [
      { name: "Alice", score: 98, email: "alice@example.com" },
      { name: "Bob", score: 93, email: "bob@example.com" },
      { name: "Charlie", score: 91, email: "charlie@example.com" },
    ];
    setTopList(mockData);
  }, []);

  const getData = async () => {
    const loginCredentials = {
      email: "727622bcs045@mcet.in",
      name: "kavipriya k",
      rollNo: "727622bcs045",
      accessCode: "jtBuzu",
      clientID: "14a3abe4-80df-4303-85d3-22119fc467a3",
      clientSecret: "zaYKxKyubGCCJwak",
    };

    try {
      const loginResponse = await axios.post(
        "http://localhost:4000/evaluation-service/auth",
        loginCredentials
      );

      const token = loginResponse.data.access_token;

      const userResponse = await axios.get(
        "http://localhost:4000/evaluation-service/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTopList(userResponse.data);
    } catch (error) {
      console.error("Error fetching top users:", error);
    }
  };

  return (
    <div className="top-users-container">
      <h2>Top Users</h2>
      <div className="user-cards">
        {topList.map((user, index) => (
          <div key={index} className="user-card">
            <h3>{user.name}</h3>
            <p>Score: {user.score}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
