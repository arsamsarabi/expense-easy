import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className='flex w-svw h-svh bg-indigo-50 justify-center items-center'>
      <form className='flex flex-col justify-center items-start gap-6'>
        <div className='w-full flex justify-between items-center'>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className='w-full flex justify-between items-center'>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>

        <button className='bg-blue-900 text-white px-4 py-2 w-full rounded-md' formAction={login}>Log in</button>
        <button className='bg-blue-900 text-white px-4 py-2 w-full rounded-md' formAction={signup}>Sign up</button>
      </form>
    </div>
  )
}
