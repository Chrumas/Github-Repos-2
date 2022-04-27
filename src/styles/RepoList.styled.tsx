import styled from "styled-components";

export const StyledRepoList = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: linear-gradient(rgba(0, 19, 71, 0.7), rgba(145, 152, 229, 0.7));
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 500px;
  width: fit-content;
  min-width: 420px;
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
`;
