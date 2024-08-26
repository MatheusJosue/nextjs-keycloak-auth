// src/app/dashboard/layout.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("keycloak", {
        callbackUrl: "/",
        prompt: "login",
        redirect: false,
      });
    }
  }, [status]);

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (session) {
    if (session.accessToken) {
      localStorage.setItem("access_token", session.accessToken);
    }

    return (
      <main>
        <div>{children}</div>
      </main>
    );
  }
}
