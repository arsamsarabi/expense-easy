import { PropsWithChildren } from "react"
import { Header } from "../Header"

type Props = PropsWithChildren

export const Layout = async ({ children }: Props) => {

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
