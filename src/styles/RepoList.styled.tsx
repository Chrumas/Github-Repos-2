import styled from "styled-components";

export const StyledRepoList = styled.div`
  .link {
    font-size: 8px;
  }

  margin-top: 10px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: linear-gradient(
    rgba(210, 100, 101, 0.7),
    rgba(145, 152, 229, 0.7)
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 500px;
  min-height: 0px;
  width: 360px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    width: 20px;
    margin: 15px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    width: 20px;
    background-color: #5c2248;
    margin: 15px;
    border-radius: 10px;
  }

  .repository {
    background: #402e6b;
    color: white;
    width: 300px;
    height: 50px;
    margin-top: 10px;
    border-radius: 15px;
    font-size: 15px;
    text-align: center;
    padding: 10px;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #8072a1;
    }
  }
`;
