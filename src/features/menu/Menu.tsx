import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const res: any = useLoaderData();

  return (
    <ul>
      {res.map((val: any) => (
        <MenuItem pizza={val} key={val.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getMenu();

  return data;
}

export default Menu;
