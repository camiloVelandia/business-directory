import React, { Suspense } from "react";
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import  Loader  from "./components/Loader";
import  Aside  from "./components/Aside";
import { store } from "./store";
import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Header />
        <main className="main">
        <Aside/>
        <Routes />
        </main>
        <Footer />
      </Suspense>
    </Provider>
  );
}

export default App;
