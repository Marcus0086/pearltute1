import styled from "styled-components";

const Card = ({ Text }) => {
  return (
    <CardComp>
      {Text}
      <br />
      {new Date().toISOString()}
      <br />
      {"Pearl"}
    </CardComp>
  );
};

export default Card;
const CardComp = styled.div`
  background: pink;
  display: flex;
  margin: 1rem 0 1rem 0;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.25rem;
  :hover {
    border: 2px dotted teal;
  }
`;
