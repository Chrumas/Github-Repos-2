import React from "react";
import { useState, useEffect, useImperativeHandle, useRef } from "react";
import {
  useSearchContext,
  GlobalSearch,
  useUserUpdateContext,
  User,
} from "./ContextProvider";
import { StyledSearchSuggestions } from "./styles/SearchSuggestions.styled";

//This component is resposible for viewing the search suggestions (data from github api search engine). We choose a user by clicking on him/her.
export const SearchSuggestions = React.forwardRef<any>((props, myref) => {
  const search: GlobalSearch = useSearchContext();
  const suggestionsRefs = useRef<HTMLDivElement[]>([])
  const [searchTerm, setSearchTerm] = useState<GlobalSearch>({ search: "" });
  const [searchSuggestionTable, setTable] = useState<any>("");
  const setUserContext = useUserUpdateContext();

  useImperativeHandle(myref, ()=>({
    suggestionsRefs
  }));

  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  useEffect(() => {
    if (searchTerm !== { search: "" } || searchTerm !== undefined) {
      let uri = "https://api.github.com/search/users?q=" + searchTerm;
      try {
        fetch(uri)
          .then((response) => response.json())
          .then((data) => {
            var map = data.items.map((choice: any, index:number) => {
              let user: User = {
                name: choice.login,
                avatarUrl: choice.avatar_url,
                githubLink: choice.html_url,
              };
              return (
                <div
                  key={index}
                  className="search-suggestion"
                  onClick={() => {
                    setUserContext(user);
                  }}
                >
                  {choice.login}
                </div>
              );
            });
            setTable(map);
          });
      } catch {}
    }
  }, [searchTerm]);

  return (
    <StyledSearchSuggestions>
      <div  className="search-suggestions-map-wrapper">
        <div className="search-suggestions-map">{searchSuggestionTable}</div>
      </div>
    </StyledSearchSuggestions>
  );
});

export default SearchSuggestions;
