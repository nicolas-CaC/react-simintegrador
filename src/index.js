import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addProduct, addProducts, deleteProduct, getProductById, getProductbyName, getProducts, setProduct, updateProduct } from './firebase';

// Obtener productos
// getProducts().then(res => console.log(res))

// Agregar un producto
// let producto = { nombre: 'Juan', edad: 15 };
// addProduct(producto).then(res => console.log(res.id))

// Agregar productos
// fetch('./db.json')
//   .then(res => res.json())
//   .then(docs => addProducts(docs))

// Buscar producto por id
// const id = 'AzQD0oBNU7sHGL7ISf50'
// getProductById(id)

// Buscar producto por otro dato del documento
// const name = 'Oriental Cotton Sausages'
// getProductbyName(name)

// Actualizar o crear si no existe
// const id = '1'
// const product = { nombre: 'papas', precio: 50 }
// setProduct(id, product)

// Actualizar sólo si existe
// const id = '1'
// const product = { nombre: 'papas', precio: 50 }
// updateProduct(id, product)

// Borrar producto
// const id = '1'
// deleteProduct(id)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);