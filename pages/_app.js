import "../styles/globals.css";
import { LoginContext } from "../context/LoginContext";
import { ViewContext } from "../context/viewContext";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import { AdminDataContext } from "../context/AdminDataContext";

function MyApp({ Component, pageProps }) {
  return (
    <LoginContext>
      <AdminDataContext>
        <ViewContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </ViewContext>
      </AdminDataContext>
    </LoginContext>
  );
}

export default MyApp;
