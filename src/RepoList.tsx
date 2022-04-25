import React from "react";
import { useState, useEffect } from "react";
import { StyledRepoList } from "./styles/RepoList.styled";
import { useUserContext, User } from "./ContextProvider";
import { openInNewTab } from "./UserInfo";

//Component responsible for rendering a list of github repositories of a chosen user
export const RepoList = () => {
  //Gets user data from context provider and uses it to make https request. It then maps the new data, sets it as a state and prints it.
  const user: User = useUserContext();
  const [repoMap, setRepos] = useState();
  const [scrollState, setScroll] = useState(10);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    let temp: number = clientHeight - scrollHeight;
    console.log(temp);
    if (scrollTop === scrollHeight - clientHeight) {
      setScroll(scrollState + 10);
    }
  };

  useEffect(() => {
    setScroll(10);
  }, [user]);

  useEffect(() => {
    console.log("Repo list:");
    console.log(user);
    console.log(repoMap);
    if (user.name !== "") {
      let uri =
        "https://api.github.com/users/" +
        user.name +
        "/repos?per_page=" +
        scrollState;
      try {
        fetch(uri)
          .then((response) => response.json())
          .then((data) => {
            let tempArr: any = data;
            tempArr = tempArr
              .sort(function (a: any, b: any) {
                return b.stargazers_count - a.stargazers_count;
              })
              .slice(0, scrollState);
            var map = tempArr.map((choice: any) => {
              return (
                <div
                  className="repository"
                  onClick={() => openInNewTab(choice.html_url)}
                >
                  <div>{choice.name}</div>
                  <div className="link">{choice.html_url}</div>
                  <div>{"Amount of stars: " + choice.stargazers_count}</div>
                </div>
              );
            });
            setRepos(map);
          });
      } catch {
        console.log(
          "Error. Probably the GitHub API request limit is the issue."
        );
      }
    }
  }, [user, scrollState]);

  return <StyledRepoList onScroll={handleScroll}>{repoMap}</StyledRepoList>;
};
