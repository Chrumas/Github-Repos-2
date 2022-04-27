import styled from "styled-components";

export const StyledRepoInfo = styled.div`
  .link {
    font-size: 9px;
    cursor: pointer;

    &:hover {
      text-shadow: 2px 2px rgb(255, 255, 255, 0.3);
    }
  }

  .clickable-text {
    user-select: none;
    font-size: 11px;
    &:hover {
      text-shadow: 2px 2px rgb(255, 255, 255, 0.3);
    }
    cursor: pointer;
  }

  .repository {
    border: 1px solid grey;
    font-size: 15px;
    user-select: none;
    background: #402e6b;
    color: white;
    width: 100%;
    min-width: 300px;
    height: fit-content;
    min-height: 30px;
    margin-top: 10px;
    border-radius: 15px;
    font-size: 15px;
    text-align: center;
    padding: 10px;
    transition: background-color 0.5s ease;
    transition: height 0.5s ease;
  }
`;
