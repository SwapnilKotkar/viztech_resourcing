import "../styles/globals.css";
import { LoginContext } from "../context/LoginContext";
import { ViewContext } from "../context/viewContext";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <LoginContext>
        <ViewContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </ViewContext>
    </LoginContext>
  );
}

export default MyApp;
