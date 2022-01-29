import { Toaster } from "react-hot-toast";
import MetaMaskAccountProvider from "../components/meta-mast-account-provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskAccountProvider>
      <Toaster />
      <Component {...pageProps} />
    </MetaMaskAccountProvider>
  );
}

export default MyApp;
