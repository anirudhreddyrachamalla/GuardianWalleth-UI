import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./Header";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({loggedIn: false, user: "", provider: null});//askAjay: can this state be defined outside of this function or should the useState hook should only be defined only inside function.
  function updateParentState(newState){
    setState(newState);
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header updateParentState={updateParentState} parentState= {state}/>
    <Component {...pageProps} parentState={state} />
  </ThemeProvider>
    )
}

export default MyApp;