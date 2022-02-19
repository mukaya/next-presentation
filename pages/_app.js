import Theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
