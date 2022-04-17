import React from "react";
import NavBar from '../src/components/navbar/NavBar';
import ItemDetailContainer from "./components/item/ItemDetailContainer";
import ItemListContainer from "./components/item/ItemListContainer";


export default function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}

