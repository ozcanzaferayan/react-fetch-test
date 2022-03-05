import { useState } from "react";

type Repo = {
  full_name: string;
};

function Repos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [userName, setUserName] = useState<string>("octocat");
  const getRepos = () => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setRepos(data);
      });
  };

  return (
    <div>
      <input
        type="text"
        value="octocat"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => getRepos()}>Get repos</button>
      {repos && (
        <>
          <h1>{`${userName} repos`}</h1>
          {repos.map((repo) => (
            <span key={repo.full_name}>{repo.full_name}</span>
          ))}
        </>
      )}
    </div>
  );
}

export default Repos;
