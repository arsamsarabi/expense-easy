import { redirect } from 'next/navigation'
import { createClient } from '@repo/auth/server'
import { Header } from '#/components/Header'

export default async function ProfilePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div>
      <Header />
      <p>Hello {data.user.email}</p>
    </div>
  )
}
