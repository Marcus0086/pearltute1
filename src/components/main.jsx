import styled from "styled-components";
import Card from "./card";
import { IconButton } from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";
import { useState } from "react";
const Main = () => {
  const [cardState, setCardState] = useState([]);
  const [textState, setTextState] = useState("");
  const handleClick = () => {
    setCardState([...cardState, <Card Text={textState} />]);
  };
  return (
    <MainComponent>
      <AddButton
        onClick={handleClick}
        disabled={textState.length > 0 ? false : true}
      >
        <AddOutlined />
      </AddButton>
      <ul>
        {cardState.map((val, indx) => (
          <li key={indx}>{val}</li>
        ))}
      </ul>
      <TextInput type="text" placeholder="Enter something" />
    </MainComponent>
  );
};

export default Main;

const MainComponent = styled.main`
  grid-area: main;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
`;

const AddButton = styled(IconButton)`
  &&& {
    margin: 0 1.5rem 0 1.5rem;
    position: absolute;
    bottom: 8rem;
    right: 0;
    :hover {
      color: teal;
    }
  }
`;

const TextInput = styled.input``;
