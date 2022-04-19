import React from "react";
import NavBar from '../src/components/navbar/NavBar';
import ItemDetailContainer from "./components/item/ItemDetailContainer";
import ItemListContainer from "./components/item/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category" element={<ItemDetailContainer />} />
          <Route exact path="/category/:id" element={<ItemDetailContainer />} />


        </Routes>

      </BrowserRouter>
      
      
    </>
  );
}

