import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import "./styles/style.scss";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AsciiArt } from "./components/AsciiArt";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(AsciiArt)

root.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.Fragment>
);
