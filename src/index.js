import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import UserForm from "./UserForm";
import "./styles.css";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <h2 className="is-size-4">
        Verileri herhangi bir bileşene iletmek ve almak için React Context
        API'yi kullanacağız.
      </h2>
      <div className="container">
        <UserContextProvider>
          <UserForm />

          <h2 className="is-size-4">
            Kullanıcı Bilgilerini Burada Görüntüleyin{" "}
          </h2>
          <p>
            Bu iki alt bileşen verileri alacaktır. Bunlar iç içe bileşenler de
            olabilirdi
          </p>
          <Name />
          <Location />
        </UserContextProvider>
      </div>
    </div>
  );
}

// Context provider ile üst bileşeni kapsayın
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
