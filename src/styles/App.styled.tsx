import styled from "styled-components";

export const StyledApp = styled.div`
  font-family: "Lucida Console", "Courier New", monospace;
  user-select: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://i.imgur.com/eWsCCJV.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    min-height: 80px;
    width: 100%;
    font-size: 50px;
    padding: 20px;
    color: white;
    background-image: url("https://i.imgur.com/xFvWmsF.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(102, 102, 102);
    position: relative;
    background-color: rgba(32, 32, 32, 0.6);
    width: fit-content;
    min-width: 500px;
    border-radius: 15px;
    padding: 20px;
    margin: 20px;
  }
`;
