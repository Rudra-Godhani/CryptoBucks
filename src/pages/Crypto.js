import React from 'react'
import Table from '../components/Table'
import Filters from '../components/Filters'
import {Outlet} from "react-router-dom"

function Crypto() {
  return (
    <section className='xs:w-[80%] w-[90%] h-full flex flex-col lg:mt-24 mb-24 mt-8 relative'>
      <Filters />
      <Table />
      <Outlet />
    </section>
  )
}

export default Crypto
