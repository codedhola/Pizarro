import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="bg-sky-900  px-4 py-3 uppercase sm:px-6 flex items-center justify-between border-b">
      <Link to="/" className="tracking-widest">Pizza Groups</Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
