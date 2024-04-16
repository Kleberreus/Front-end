import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroComponent from './components/IntroComponent'
import EventComponent from './components/EventComponent'
import ProductComponent from './components/ProductComponent'
import PostComponent from './components/PostComponent'

function App() {

  //PRIMEIRA FORMA

  const products = [
    { id: 1, name: 'Laranja'},
    { id: 2, name: 'Uva'},
    { id: 3, name: 'Maçã'},
  ];

  const listitens = products.map(product =>
    <li key={product.id}>
      {product.name}
    </li>
    );

    const posts = [
      {id: 1, title: 'Post 1', description: 'Descrição do Post 1'},
      {id: 2, title: 'Post 2', description: 'Descrição do Post 2'},
      {id: 3, title: 'Post 3', description: 'Descrição do Post 3'},
    ]
  }
   return(
    <>
    <h3>Fundamentos do react.js</h3>
    <IntroComponent />
    <EventComponent />
    <ul>{listitens}</ul>
    <ul>
      {products.map((prod) => (
        <li key={prod.id}>{prod.name}</li>
      ))}
  
      
    </ul>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
         <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
         </tr> 
        ))}
      </tbody>
    </table>
    <ProductComponent name='Arroz' category='Alimento'/>
    <ProductComponent name='Martelo' category='Ferramenta'/>
    </>
   )