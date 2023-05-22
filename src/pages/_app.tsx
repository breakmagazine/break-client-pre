import { globalStyle } from '@break/styles/GlobalStyle';
import { theme } from '@break/styles/theme/theme';
import { cache } from '@emotion/css';
import { CacheProvider, Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={cache}>
            <Global styles={globalStyle} />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}
