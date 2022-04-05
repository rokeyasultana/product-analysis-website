import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
           <div className='title'>
               <h1>The Latest Perfume Reviews</h1>
               <h3>Here you can read the latest perfume reviews. Use the date picker tool to see reviews written in the past.</h3>
               <p>Choosing your perfect perfume is no easy task, don't think it is, and with all the amazing fragrances on the market, it sure is a tough decision to make! When it comes to looking to buying the perfect fragrance, there a few things to know and take into consideration, besides your preference of scent.</p>
         </div> 
         <div className='img'>
             <img src="https://images.unsplash.com/photo-1589782051446-a24efcec7ffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
         </div>
        </div>
    );
};

export default Home;