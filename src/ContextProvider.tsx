import React, { useState, useContext } from "react";

//Interface used for search.
export interface GlobalSearch {
  search: string;
}

//Interface for storing user data.
export interface User {
  name: string;
  avatarUrl: string;
  githubLink: string;
}

//Interface which allows me to pass components as props.
interface ParentCompProps {
  children?: React.ReactNode;
}

//Search state context, Search setState context, user state context and user setState context.
const SearchContext = React.createContext<GlobalSearch>({ search: "" });
const SearchUpdateContext = React.createContext<Function>(() => {});
const UserContext = React.createContext<User>({
  name: "",
  avatarUrl: "",
  githubLink: "",
});
const UserUpdateContext = React.createContext<Function>(() => {});

export const useSearchContext = () => useContext(SearchContext);

export const useSearchUpdateContext = () => useContext(SearchUpdateContext);

export const useUserContext = () => useContext(UserContext);

export const useUserUpdateContext = () => useContext(UserUpdateContext);


//Component acting like a custom hook giving me access to a "global" memory thorough the whole project.
export const ContextProvider: React.FC<ParentCompProps> = ({ children }) => {
  const [search, setSearch] = useState<GlobalSearch>({ search: "x" });
  const [user, setUser] = useState<User>({
    name: "",
    avatarUrl: "",
    githubLink: "",
  });

  return (
    <SearchContext.Provider value={search}>
      <SearchUpdateContext.Provider value={setSearch}>
        <UserContext.Provider value={user}>
          <UserUpdateContext.Provider value={setUser}>
                {children}
          </UserUpdateContext.Provider>
        </UserContext.Provider>
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  );
};
