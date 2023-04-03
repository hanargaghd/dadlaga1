import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      console.log('Signup successful');
      Swal.fire(
        'Good job!',
        'Your account has been created!',
        'success'
      )
      Router.push('/login');
    } else {
      console.log('Signup failed');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  };

  return (
  <div className='flex justify-center items-center'>
    <div className=' h-[100vh] w-[80vw] sm:w-[70vw]  flex justify-center items-center'>
    <div className=' h-[70%] w-[100%] border-[2px] rounded-lg flex flex-col justify-evenly items-center'>
      <h1 className='text-[2rem]'>Sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className='flex justify-between'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border-2 rounded-lg outline-none pl-2'
            placeholder='Enter your email'
          />
        </div>
        <div className='flex justify-between gap-6'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter your password'
            className='border-2 rounded-lg outline-none pl-2'
          />
        </div>
        <button className='border-[2px] border-black rounded-lg py-2 px-2 w-[50%] m-auto' type="submit">Sign up</button>
      </form>
      <div> Already have an account?
        <Link className='text-blue-400' href="/login">
          &nbsp; Log in.
        </Link>
      </div>
    </div>
    </div>
  </div>
  );
}