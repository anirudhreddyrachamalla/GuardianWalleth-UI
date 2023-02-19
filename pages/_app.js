import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header/>
    <Component {...pageProps} />
  </ThemeProvider>
    )
}

export default MyApp;