import { globalStyle } from '@break/styles/GlobalStyle';
import { cache } from '@emotion/css';
import { CacheProvider, Global } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={cache}>
            <Global styles={globalStyle} />
            <Component {...pageProps} />
        </CacheProvider>
    );
}
