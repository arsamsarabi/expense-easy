'use client'

type Props = {
  action: () => void
}

export const Logout = ({ action }: Props) => {
  return (
    <button onClick={() => action()}>
      Logout
    </button>
  )
}
