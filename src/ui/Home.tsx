import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state: any) => state.user.username)

  return (
    <div className="my-10 px-4 text-center">
      <h1 className="mb-18 text-stone-900 text-xl font-semibold text-center md:text-3xl">
        The best pizza.
        <br />
        <span className="text-sky-900">Straight out of the oven, straight to you.</span>
      </h1>
      {!username ? <CreateUser /> : <Button type={"primary"} to="/menu" disabled={false}>Continue Ordering</Button>}
    </div>
  );
}

export default Home;
