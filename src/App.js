import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { store } from "./redux/store";

import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Homepage } from "./components/views/Homepage/Homepage";
import { Country } from "./components/views/Country/Country";
import { NotFound } from "./components/views/NotFound/NotFound";

const theme = createTheme({
  palette: {
    primary: { main: "#2B4C6F" },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/country/:country" component={Country} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
