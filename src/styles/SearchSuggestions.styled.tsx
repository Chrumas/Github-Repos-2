import styled from "styled-components";

export const StyledSearchSuggestions = styled.div`
  display: flex;

  .search-suggestion {
    cursor: pointer;
    margin-top: 2px;
    border: 1px solid #dfdfdf;
    opacity: 0.9;
    margin-right: 2px;
    border-radius: 5px;
    padding: 3px;
    background-color: #272727;
    color: white;
    font-family: "Lucida Console", "Courier New", monospace;
    padding-left: 10px;
    &:hover {
      color: #272727;
      background-color: #dfdfdf;
    }
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .search-suggestions-map {
    border-radius: 0 0 5px 5px;
    z-index: 5;
    position: relative;
    top: 30px;
    overflow: auto;
    display: flex;
    max-height: 200px;
    width: 274px;
    flex-direction: column;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      width: 20px;
      background-color: #dfdfdf;
      border-radius: 0 0 10px 10px;
    }

    ::-webkit-scrollbar-thumb {
      width: 20px;
      background-color: #0e004b;
      border-radius: 10px;
    }
  }
`;
