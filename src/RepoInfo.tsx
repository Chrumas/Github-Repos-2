import React from "react";
import { useState, useEffect } from "react";
import { openInNewTab } from "./UserInfo";
import { StyledRepoInfo } from "./styles/RepoInfo.styled";
import { ErrorMessage } from "./ErrorMessage";

interface props {
  url: string;
  name: string;
  stargazers: string;
  owner: string;
}

export const RepoInfo = ({ url, name, stargazers, owner }: props) => {
  const [languages, setLanguages] = useState<any>();
  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Fetches additional data from the server (about langauges used)
  useEffect(() => {
    var tempArray: string[] = [];
    let languagesUrl =
      "https://api.github.com/repos/" + owner + "/" + name + "/languages";
    try {
      fetch(languagesUrl)
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
          for (let i in Object.keys(data)) {
            if (Object.keys(data)[i] !== "undefined")
              tempArray.push(
                Object.keys(data)[i] + ": " + Object.values(data)[i] + " bytes"
              );
          }
          var map = tempArray.map((choice: any, index: number) => {
            return (
              <>
                <div>{choice}</div>
              </>
            );
          });
          setLanguages(map);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch {}
  }, [name, owner]);

  //Slices the printable url and name if it's too long
  var tempUrl = url;
  var tempName = name;
  if (url.length >= 40) {
    tempUrl = tempUrl.slice(0, 39) + "...";
  }
  if (name.length >= 30) {
    tempName = tempName.slice(0, 29) + "...";
  }

  if (showLanguages === true) {
    return (
      <StyledRepoInfo>
        <div className="repository">
          <div>{tempName}</div>
          <div onClick={() => openInNewTab(url)} className="link">
            Link: {tempUrl}
          </div>
          <div>{"Amount of stars: " + stargazers}</div>
          <br></br>
          <div>{languages}</div>
          <div
            onClick={() => setShowLanguages(false)}
            className="clickable-text"
          >
            Show less
          </div>
        </div>
      </StyledRepoInfo>
    );
  } else {
    return (
      <StyledRepoInfo>
        <div className="repository">
          <div>{tempName}</div>
          <div onClick={() => openInNewTab(url)} className="link">
            Link: {tempUrl}
          </div>
          <div>{"Amount of stars: " + stargazers}</div>
          <br></br>
          <div
            onClick={() => setShowLanguages(true)}
            className="clickable-text"
          >
            More
          </div>
          <ErrorMessage inputName={errorMessage} inputColor="red" />
        </div>
      </StyledRepoInfo>
    );
  }
};
