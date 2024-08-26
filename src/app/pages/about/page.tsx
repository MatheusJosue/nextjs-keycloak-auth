"use client";

import { useSession } from "next-auth/react";


function About() {
  const { data: session, status } = useSession();

  return (
    <div>
      <p>About, {session?.user?.name}!</p>
    </div>
  );
}

export default About;
