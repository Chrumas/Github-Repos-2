import React from "react";
import { useState, useEffect, useImperativeHandle, useRef } from "react";
import {
  useSearchContext,
  GlobalSearch,
  useUserUpdateContext,
  User,
} from "./ContextProvider";
import { StyledSearchSuggestions } from "./styles/SearchSuggestions.styled";
import { ErrorMessage } from "./ErrorMessage";

//This component is resposible for viewing the search suggestions (data from github api search engine). We choose a user by clicking on him/her.
export const SearchSuggestions = React.forwardRef<any>((props, myref) => {
  const search: GlobalSearch = useSearchContext();
  const suggestionsRefs = useRef<HTMLDivElement[]>([]);
  const [searchTerm, setSearchTerm] = useState<GlobalSearch>({ search: "" });
  const [searchSuggestionTable, setTable] = useState<any>("");
  const [errorMessage, setErrorMessage] = useState("");
  const setUserContext = useUserUpdateContext();

  useImperativeHandle(myref, () => ({
    refCallback: suggestionsRefs,
  }));

  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  //Fetches data about searched users
  useEffect(() => {
    if (searchTerm !== { search: "" } || searchTerm !== undefined) {
      let uri = "https://api.github.com/search/users?q=" + searchTerm;
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
            var map = data.items.map((choice: any, index: number) => {
              let user: User = {
                name: choice.login,
                avatarUrl: choice.avatar_url,
                githubLink: choice.html_url,
              };
              return (
                <div
                  data-testid="suggestion"
                  key={index}
                  className="search-suggestion"
                  ref={(element) => {
                    if (element !== null)
                      suggestionsRefs.current[index] = element;
                  }}
                  onClick={() => {
                    setUserContext(user);
                  }}
                >
                  <div className="mini-avatar"></div>
                  {choice.login}
                </div>
              );
            });
            setTable(map);
          })
          .catch((e) => {
            console.log(e);
          });
      } catch {}
    }
  }, [searchTerm, setUserContext]);

  return (
    <StyledSearchSuggestions>
      <ErrorMessage inputColor="red" inputName={errorMessage} />
      <div className="search-suggestions-map-wrapper">
        <div className="search-suggestions-map">{searchSuggestionTable}</div>
      </div>
    </StyledSearchSuggestions>
  );
});

export default SearchSuggestions;
