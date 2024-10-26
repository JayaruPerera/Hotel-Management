"use client"

import { SessionProvider } from 'next-auth/react';

function Wrapper({children}) {
    return ( <SessionProvider>{children}</SessionProvider> );
}

export default Wrapper;