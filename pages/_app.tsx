import React from "react";
import { DarkModeProvider } from "../context/DarkModeContext";

function App({Component,pageProps}: {Component: React.ComponentType; pageProps:any}) {
    return(
        <DarkModeProvider>
            <Component {...pageProps}/>
        </DarkModeProvider>
    )
}

export default App;