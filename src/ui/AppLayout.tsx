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

      <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100">
        <Header />
        <div className="overflow-scroll">
          <main>
            <Outlet />
          </main>
        </div>

        <CartOverview />
      </div>
    </>
  );
};

export default AppLayout;
