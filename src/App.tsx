import { useState } from "react";

type User = {
  name: string;
  followers: string;
  following: string;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string>("octocat");
  const getUser = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUser(data);
      });
  };

  return (
    <div>
      <input
        type="text"
        value="octocat"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => getUser()}>Get user</button>
      {user && (
        <>
          <h1>{user.name}</h1>
          <span>Followers: {user.followers}</span>
          <br />
          <span>Following: {user.following}</span>
        </>
      )}
    </div>
  );
}

export default App;
