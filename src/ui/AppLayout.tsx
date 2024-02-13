import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

type Props = {};

const AppLayout = ({}: Props) => {
  const navigate = useNavigation();

  const isLoading: boolean = navigate.state === "loading";

  return (
    <>
      {isLoading && <Loader />}

      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <CartOverview />
      </div>
    </>
  );
};

export default AppLayout;
