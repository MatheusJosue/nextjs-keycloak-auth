"use client";

import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return <button onClick={handleSignOut}>
    Sign out of Keycloak
  </button>;
}
