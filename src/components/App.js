import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: 'Online Shopping Cart',
      description: 'This project is a mobile-based shopping cart application developed using React Native. It allows users to browse products, add or remove items from the cart, update quantities dynamically, and view the total price in real time, offering a smooth and user-friendly shopping experience.'
    },
    {
      name: "Efficient Search Bar",
      description: "The Efficient Search Bar project focuses on optimizing search performance on the frontend using React. It dynamically filters large JSON datasets, provides instant search results as the user types, and ensures minimal re-renders for better performance and responsiveness."
    },
    {
      name: "BUSEASE",
      description: "BUSEASE is an automated college bus management system designed to improve student safety and transportation efficiency. It uses ID card scanning for student verification, provides real-time bus tracking for administrators, sends instant notifications to parents, and displays analytical data through interactive dashboards."
    }
  ];
  return (
    <div id="main" className="ns-wrapper">
      {
        projects.map((project, index) => (
          <div key={index} >
            <h1 data-ns-test='project-name'>{project.name}</h1>
            <h6 data-ns-test='project-description'>{project.description}</h6>
          </div>
        ))
      }
    </div>
  )
}


export default App;
