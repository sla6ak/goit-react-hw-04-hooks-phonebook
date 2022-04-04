import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          background-color: #d9fbff;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          min-height: 100vh;
        }
        * {
          padding: 0px;
          margin: 0px;
          box-sizing: border-box;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      `}
    />
  );
};
