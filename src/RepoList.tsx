import { useState, useEffect } from "react";
import { StyledRepoList } from "./styles/RepoList.styled";
import { useUserContext, User } from "./ContextProvider";
import { RepoInfo } from "./RepoInfo";
import { ErrorMessage } from "./ErrorMessage";

//Component responsible for rendering a list of github repositories of a chosen user
export const RepoList = () => {
  //Gets user data from context provider and uses it to make https request. It then maps the new data, sets it as a state and prints it.
  const user: User = useUserContext();
  const [repoMap, setRepos] = useState();
  const [scrollState, setScroll] = useState(10);
  const [errorMessage, setErrorMessage] = useState("");

  //Gets proper scroll measurement
  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollTop === scrollHeight - clientHeight) {
      setScroll(scrollState + 10);
    }
  };

  useEffect(() => {
    setScroll(10);
  }, [user]);

  //Fetches data about user's repositories (according to the amount that's supposed to be printed)
  useEffect(() => {
    if (user.name !== "") {
      let uri =
        "https://api.github.com/users/" +
        user.name +
        "/repos?per_page=" +
        scrollState;
      try {
        fetch(uri)
          .then((response) => {
            if (!response.ok) {
              if (response.status === 403) {
                setErrorMessage("API limit exceeded!");
                throw new Error("API limit exceeded!");
              }
            }
            return response.json();
          })
          .then((data) => {
            setErrorMessage("");
            let tempArr: any = data;
            tempArr = tempArr
              .sort(function (a: any, b: any) {
                return b.stargazers_count - a.stargazers_count;
              })
              .slice(0, scrollState);
            var map = tempArr.map((choice: any) => {
              return (
                <>
                  <RepoInfo
                    url={choice.html_url}
                    owner={user.name}
                    name={choice.name}
                    stargazers={choice.stargazers_count}
                  />
                </>
              );
            });
            setRepos(map);
          })
          .catch((e) => {
            console.log(e);
          });
      } catch {}
    }
  }, [user, scrollState]);

  return (
    <StyledRepoList onScroll={handleScroll}>
      <ErrorMessage inputColor="red" inputName={errorMessage} />
      {repoMap}
    </StyledRepoList>
  );
};
