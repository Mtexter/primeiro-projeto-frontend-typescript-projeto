import { ReactNode, createContext } from 'react';
import useGlobalProvider from '../hooks/useGlobalProvider';

export const GlobalContext = createContext({});


export function GlobalProvider({ children }: { children: ReactNode }) {
    const globalProvider = useGlobalProvider()

    return (
        <GlobalContext.Provider value={globalProvider}>
            {children}
        </GlobalContext.Provider>
    );
};