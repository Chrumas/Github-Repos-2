import React from "react";
import { StyledApp } from "./styles/App.styled";
import { InputField } from "./InputField";
import { ContextProvider } from "./ContextProvider";
import { UserInfo } from "./UserInfo";
import { RepoList } from "./RepoList";

//Main component along with it's sub-components and providers.
const App: React.FC = () => {
  return (
    <ContextProvider>
      <StyledApp>
        <div className="bg"></div>
        <div className="wrapper">
          <div className="header">GitHub Repos</div>
          <InputField />
          <UserInfo />
          <RepoList />
        </div>
      </StyledApp>
    </ContextProvider>
  );
};

export default App;
