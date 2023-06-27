import './dishes.css'


import React from 'react'

const DishData = () => {

  const menuItems = [
    {url: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80',name: ' Red Pasta',description: 'Description of Item ',price: '$10.99'},
    {url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',name: 'Cheese Pizza',description: 'Description of Item ',price: '$12.99'},
    { url: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', name: 'Veg Burger', description: 'Description of Item', price: '$9.99' },

    // ---------------------------------------------------------------------------------------------------

    { url: 'https://images.unsplash.com/photo-1634864572865-1cf8ff8bd23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80', 
    name: 'Delicious Noodles',description: 'Description of Item ',price: '$3.0'},
    { url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',name: 'Tandoor Momo',description: 'Description of Item ',price: '$1.8' },
    { url: 'https://images.unsplash.com/photo-1639667852145-466e29aa49fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',name: 'Veggie Sandwhich',description: 'Description of Item ',price: '$1.4' },
    { url: 'https://images.unsplash.com/photo-1601091581856-07d8bd49e47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', name: 'Lemo Soda', description: 'Description of Item ', price: '$2.3' },
    { url: 'https://images.unsplash.com/photo-1524156868115-e696b44983db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80', name: 'Mango Shake', description: 'Description of Item ', price: '$2.99' },
    { url: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', name: 'Oreo Shake', description: 'Description of Item ', price: '$2.1' },
  ];

  return (
    <ul className="dishcard">
      {menuItems.map((item, index) => (
        <li className="cards" key={index}>
          <div className="image">
            <img src={item.url} alt="img" />
          </div>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <span className="price">{item.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default DishData



{/* <div className="image">
            <img src={props.img} alt="img" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <span className="price">{props.price}</span> */}