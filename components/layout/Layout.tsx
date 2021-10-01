import Head from 'next/head';
import React, { PropsWithChildren, ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';

export type TProperties = {
    pageTitle: string;
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export default function Layout({
    pageTitle,
    children,
}: PropsWithChildren<TProperties>): ReactElement {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <GlobalStyle />
            <main>
                <div>{children}</div>
            </main>
        </>
    );
}
