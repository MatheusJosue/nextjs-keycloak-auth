'use client';

import { SessionProvider } from 'next-auth/react';
import { ClientProviderProps } from './types';

const ClientProvider = ({ session, children }: ClientProviderProps) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default ClientProvider;