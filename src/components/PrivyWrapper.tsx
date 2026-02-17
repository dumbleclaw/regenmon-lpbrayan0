'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { ReactNode } from 'react';

interface PrivyWrapperProps {
  children: ReactNode;
}

export default function PrivyWrapper({ children }: PrivyWrapperProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || 'cmkyyrsbj04bck40bidlscndo'}
      config={{
        loginMethods: ['google', 'email'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
