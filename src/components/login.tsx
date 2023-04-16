import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { signIn, useSession, signOut } from 'next-auth/react'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { data: session, status } = useSession()

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (response.ok) {
      console.log('Login successful');
      console.log(session, result)
      Swal.fire(
        'Welcome back!',
        'You logged in!',
        'success'
      )
      Router.push('/');
    } else {
      console.log('Login failed');
      console.log(session, result)
      Swal.fire({
        icon: 'error',
        title: 'No match...',
        text: 'Try to login again!',
      })      
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (session) {
    return <div className='pt-20 text-[2rem]'>
      <div>
       You are already logged in
      </div>
      <div>
        <button className='border rounded-lg bg-teal-300 py-2 px-4' onClick={()=>signOut()}>Logout</button>
      </div>
      </div>
  }
  else return (
  <div className='flex justify-center items-center'> 
    <div className='h-[100vh] w-[80vw] sm:w-[70vw]  flex justify-center items-center'>
    <div className='h-[70%] w-[100%] border-[2px] rounded-lg flex flex-col justify-evenly items-center'>
      <h1 className='text-[2rem]'>Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className='flex justify-between'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border-2 rounded-lg outline-none pl-2'
            placeholder='Enter email'
          />
        </div>
        <div className='flex justify-between'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border-2 rounded-lg outline-none pl-2'
            placeholder='Enter password'
          />
        </div>
        <button className='border-[2px] border-black rounded-lg py-2 px-2 w-[50%] m-auto' type="submit">Login</button>
      </form>
      <div> Wish to create a new account?
        <Link className='text-blue-400' href="/signup">
          &nbsp; <br/>Sign up.
        </Link>
      </div>
    </div>
    </div>
  </div>
  );
}
