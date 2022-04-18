import React from 'react'
import "../components/index.css"
import LeftSection from './LeftSection'
import Rightsection from './Rightsection'


function Home() {
  return (
    <div className="main-content">
       
       <LeftSection/>
       <Rightsection/>
    
    </div>
  )
}

export default Home