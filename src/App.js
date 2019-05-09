import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import createStore from "./store";
import DashboardContainer from './modules/Dashboard/container/DashboardContainer';
import { hot } from 'react-hot-loader';
import theme from './styles/theme';
import history from './history';

const store = createStore();

const URLS = {
  DASHBOARD : '/'
}


const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Route
            path ={URLS.DASHBOARD}
            exact
            component={DashboardContainer}
            />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default hot(module)(App);
