import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  .header {
    font-size: 50px;
    padding: 20px;
    color: #420f42;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(225, 183, 243, 0.6);
    width: 400px;
    border-radius: 15px;
    padding: 20px;
    margin: 20px;
  }
`;
