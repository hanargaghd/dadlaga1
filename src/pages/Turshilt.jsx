import { useSession } from 'next-auth/react';

export default function Turshilt() {
  const { data: session, status } = useSession();

  const loading = status === "loading"

  if (loading) {
    console.log(session)
    return <p className='text-[2rem]'>Уншиж байна ...</p>;
  }

  if (!session) {
    console.log(session)
    return <p className='text-[2rem]'>Та нэвтрээгүй байна.</p>;
  }

  return (
    <div>
      <p className='text-[2rem]'>Сайн байна уу?, {session.user.email}!</p>
      <button className='text-[2rem]' onClick={() => signOut()}>Sign out</button>
    </div>
  );
}