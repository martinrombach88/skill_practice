import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const randomUserEp = "https://randomuser.me/api";

//This syntax creates an api object that can be called within the useEffect
const api = axios.create({
  baseURL: randomUserEp,
  headers: {
    "Content-Type": "application/json",
  },
});

//
export default function App() {
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    const getRandomUsers = async () => {
      const {
        //The following lines declare an object by directly (destructuring?) the response
        data: { results: randomUsersData },
      } = await api.get("/", {
        //The random users api knows this param, Phil declares the params here,
        //rather than in axios create (both are possible?)
        params: {
          results: 10,
        },
      });
      //The useState is set to the object identified in the response.
      setRandomUsers(randomUsersData);
    };
    //The above method is called
    getRandomUsers();
  }, []);

  const UserCard = ({ data, removeUser }) => {
    return (
      <div className="card">
        <div className="picture">
          <img src={data.picture.medium} alt="profile" />
        </div>
        <div className="info">
          <ul>
            <li>{`${data.name.title} ${data.name.first} ${data.name.last}`}</li>
            <li>{`${data.location.city} ${data.location.city} ${data.location.country}`}</li>
            <li>{`${data.phone} ${data.cell}`}</li>
          </ul>
        </div>
        <button onClick={removeUser}>Delete User</button>
      </div>
    );
  };

  const removeUser = ({ randomUser }) => {
    const newRandomUsers = randomUsers.filter((user) => user !== randomUser);
    setRandomUsers([...newRandomUsers]);
  };

  //Understanding the flow (Using Filter)
  //1. UserCard component only knows how a single card renders and what events to support, such as removeUser.
  //2. UserCard data and removeUser are both passed randomUser, a single object from the response.
  //3. UserCard populates the fields from data.
  //4. On render and click (not within the UserCard function, UserCard knows only to invoke on click),
  //a single randomUser object is given to the removeUser function.
  //5. removeUser filters the randomUsers list for the correct user, comparing the whole array.

  //How did Phil do this with clone?

  return (
    <div className="App">
      <div>
        {randomUsers.map((randomUser, index) => {
          return (
            <UserCard
              key={`${randomUser.login.uuid}-${String(index)}`}
              data={randomUser}
              removeUser={() => {
                removeUser({ randomUser });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
