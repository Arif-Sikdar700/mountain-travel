import React from 'react'
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import AdventureExperiences from '../components/AdventureExperiences';
import Hiking from '../components/Hikings';
import About from '../components/About';

export default function Home() {
  const loader = useLoaderData()
  
  return (
    <div>
        <Banner/>
        <AdventureExperiences AdventureData={loader}/>
        <Hiking/>
        <About/>
    </div>
  )
}
