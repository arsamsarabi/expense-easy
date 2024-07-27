import { redirect } from 'next/navigation'
import { createClient } from "@repo/auth/server"
import { Logout } from "#/components/Logout"
import { getErrorMessage } from '../../../../../packages/utils/src';

const handleLogout = async () => {
  "use server";

  const supabase = createClient()

  try {
    await supabase.auth.signOut()
    redirect('/')
  } catch (error) {
    console.error(getErrorMessage(error))
  }
}

export const Header = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  const isLoggedIn = !!data?.user && !error

  return (
    <div>
      <h1>Expense Easy</h1>

      <Logout action={handleLogout} />
    </div>
  )
}
