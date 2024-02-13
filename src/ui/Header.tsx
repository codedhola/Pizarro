import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header>
      <Link to="/">Pizza Groups</Link>
      <p>Coded Hola</p>
      <SearchOrder />
    </header>
  );
};

export default Header;
