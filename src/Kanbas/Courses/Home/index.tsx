import React from 'react'
import './index.css'
import ModuleList from '../Modules/List'
import Actions from '../Modules/Actions'
import Status from './Status'


const Home = () => {
  return (
    <div className='row'>
      <div className='col'>
        <Actions />
        <ModuleList />
      </div>
      <div className='col col-3 col-xs-12 d-none d-xl-block'>
        <Status />
      </div>
     
    </div>

    
  )
}

export default Home