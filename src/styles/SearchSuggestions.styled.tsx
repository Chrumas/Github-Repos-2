import styled from "styled-components";

export const StyledSearchSuggestions = styled.div`
  display: flex;

  .search-suggestion {
    background-color: #e4b2ee;
    color: #993899;
    padding: 3px;
    padding-left: 10px;
    &:hover {
      background-color: #782897;
      color: white;
    }
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .search-suggestions-map {
    border-radius: 0 0 0rem 2rem;
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
      background-color: #e4b2ee;
      border-radius: 0 0 10px 10px;
    }

    ::-webkit-scrollbar-thumb {
      width: 20px;
      background-color: #5c2248;
      border-radius: 10px;
    }
  }
`;
