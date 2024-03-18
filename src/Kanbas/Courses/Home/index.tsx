import React from 'react'
import './index.css'
import ModuleList from '../Modules/List'
import Actions from '../Modules/Actions'
import Status from './Status'


const Home = () => {
  return (
    <div className='row flex'>
      <div className='col flex-grow-1'>
        <Actions />
        <ModuleList />
      </div>
      <div className='col flex-grow-0 d-none d-xl-block'>
        <Status />
      </div>
     
    </div>

    
  )
}

export default Home