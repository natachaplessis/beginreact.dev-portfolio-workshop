import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const MyApp = ({ Component, pageProps }) => {
  const {theme} = useTheme();
return (
  <ThemeProvider>
    <div id="app" className={theme}>
      {console.log(theme)}
      <div className="h-full px-4 m-auto max-w-7xl">
        <Component {...pageProps} />
      </div>
    </div>
  </ThemeProvider>
)};

export default MyApp;
