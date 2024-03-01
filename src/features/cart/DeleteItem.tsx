import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

type Props = {
  pizzaId: any
}

function DeleteItem({ pizzaId }: Props) {
  const dispatch = useDispatch();

  return (
    <Button disabled={false} type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;