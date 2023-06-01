import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    as="style"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
                />
                <link rel="icon" href="favicon.svg" />
                <link rel="mask-icon" href="favicon.svg" color="#000" />
                <link rel="apple-touch-icon" href="favicon.svg" color="#000" />
                <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
                <meta property="og:title" content="Break" />
                <meta
                    property="og:image"
                    content="https://github.com/breakmagazine/break-client/assets/103591752/1a682b8f-213e-4c91-8e61-48fe1162d6ad"
                />
                <meta
                    property="og:description"
                    content="BREAK는 패션, 아트, 컬처, 라이프스타일을 기반으로 대담하고 창의적인 미학을 만들어 가는 독립 매거진입니다."
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
