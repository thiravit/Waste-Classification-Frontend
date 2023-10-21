'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function loading() {
  const router = useRouter();

  // Use the useEffect hook to navigate after 5 seconds
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push('home');
    }, 3000);

    // Clear the timeout to prevent navigation if the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <main className="bg-background h-screen">
      <img src="/bottleye_logo.svg" alt="hero" className="animate-pulse p-32 w-full object-cover" />
    </main>
  );
}
