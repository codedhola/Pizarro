import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="bg-sky-900  px-4 py-3 uppercase sm:px-6 flex items-center justify-between border-b">
      <Link to="/" className="tracking-widest">Pizza Groups</Link>
      <SearchOrder />
      <p>Coded Hola</p>
    </header>
  );
};

export default Header;
