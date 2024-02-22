import { ICart } from "../../interface/cart.inteface";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart: ICart[] = fakeCart;
  const username = useSelector((state: any) => state.user.username)

  // console.log("CART ", cart);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" disabled={false} to="/order/new">Order pizzas</Button>
        <Button disabled={false} type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
