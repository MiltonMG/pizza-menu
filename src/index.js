import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{color: "red", fontSize: "48px", textTransform: "uppercase"}}>
        Fast React Pizza Company
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.length > 0 ? (
          pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)
        ) : (
          <p>We are still working on our menu!</p>
        )}
      </ul>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  if (!isOpen) {
    return (
      <footer className="footer">
        <p>Sorry, we're closed!</p>
        <p>&copy; 2025 Pizza Place</p>
      </footer>
    );
  }
  return (
    <footer className="footer">
      <div className="order">
        <p>Welcome to Fast React Pizza Company!</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Pizza(props) {
  return (
    <div>
      <div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={props.pizzaObj.photoName} alt="Pizza Spinaci" />
        <br />
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>
            {props.pizzaObj.soldOut ? "SOLD OUT!" : props.pizzaObj.price + " €"}
          </span>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
