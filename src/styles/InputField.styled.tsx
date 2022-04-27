import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
  input {
    color: white;
    background: linear-gradient(90deg, #ffffff, #9387ff) center bottom/0% 2px
        no-repeat,
      linear-gradient(90deg, #00172c, #00013b) left bottom/100% 2px no-repeat,
      linear-gradient(90deg, #000438, #170c1d) left bottom/100% no-repeat;
    padding: 12px;
    width: 250px;
    outline: none;
    border-radius: 5px 0 0 5px;
    border: none;
    font-size: 15px;
    transition: background-size 0.5s ease;
  }

  .placeholder {
    font-family: "Times New Roman", Times, serif;
    user-select: none;
    position: absolute;
    left: 1rem;
    top: calc(50% + 0.5rem);
    transform: translateY(-50%);
    color: #c4c4c4;
    transition: top 0.5s ease, font-size 0.5s ease, color 0.5s ease;
  }

  .search-button {
    cursor: pointer;
    border-radius: 0 5px 5px 0px;
    opacity: 80%;
    display: flex;
    justify-content: center;
    align-content: center;
    background: url(https://cdn-icons-png.flaticon.com/512/1086/1086916.png);
    font-size: 15px;
    flex-direction: column;

    padding: 5px;
    background-color: #0a1236ea;
    color: white;

    &:hover {
      background-color: #9387ff;
      color: #353535;
    }
  }
  .suggestions {
    position: absolute;
    user-select: none;
    top: 50%;
  }

  input:valid + .placeholder,
  input:focus + .placeholder {
    top: 0.3rem;
    font-size: 10px;
    color: #ffffff;
  }

  .suggestions {
    visibility: hidden;
  }

  .input-form input:focus ~ .suggestions,
  .suggestions:hover {
    visibility: visible;
  }

  .input-field {
  }

  .input {
    border: 1px solid rgb(102, 102, 102);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
  }
  input:valid,
  input:focus {
    background-size: 100% 2px, 100% 2px, 100%;
  }
`;
