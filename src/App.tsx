import React from "react";
import styled from "@emotion/styled";

import { Header } from "./components/Header";
import "./index.css";
const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 300
});

const App = () => {

  return (
    <Wrapper>
      <Header>Todo List</Header>
    </Wrapper>
  );
}

export default App;

