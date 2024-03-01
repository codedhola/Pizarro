import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

type Props = {
  order: any
}

function UpdateOrder({ order }: Props) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button disabled={false} type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }: any) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}