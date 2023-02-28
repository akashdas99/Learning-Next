import "../styles/global.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <h1>Header</h1>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </>
  );
}
