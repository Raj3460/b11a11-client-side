import React from 'react';
import Banner from '../Components/Banner';
import CTa from '../Components/CTa';
import FAQ from '../Components/FAQ';
import Mission from '../Components/Mission';


const Home = () => {
       return (
              <div className=''>
                     <Banner></Banner>
                     <Mission></Mission>
                     <CTa></CTa>
                     <FAQ></FAQ>
                     
              </div>
       );
};

export default Home;