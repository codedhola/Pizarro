import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Link to="/">Pizza Groups</Link>
      <p>Coded Hola</p>
    </header>
  );
};

export default Header;
