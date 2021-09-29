import styled from "styled-components";

const Nav = (any) => {
  return <NavComponent>Pearl's Todo App</NavComponent>;
};

export default Nav;

const NavComponent = styled.nav`
  grid-area: nav;
  background: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
`;
