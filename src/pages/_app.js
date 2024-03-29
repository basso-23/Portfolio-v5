import "@/styles/globals.css";
import "@fontsource-variable/syne";

const App = ({ Component, pageProps, router }) => {
  return (
    <div style={{ fontFamily: "Syne Variable, sans-serif" }}>
      <Component key={router.pathname} {...pageProps} />
    </div>
  );
};

export default App;
