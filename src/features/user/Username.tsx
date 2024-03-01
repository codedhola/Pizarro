import { useSelector } from "react-redux"

type Props = {}

const Username = ({}: Props) => {
  const username = useSelector((state: any) => state.user.username)

  return (
    <div>{username}</div>
  )
}

export default Username