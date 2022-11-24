import React from 'react'
import "./home.scss"
import {Sidebar} from "../../components/sidebar/Sidebar"
import { Navbar } from '../../components/navbar/Navbar'
import { Widjet } from '../../components/widjet/Widjet'
import { Featured } from '../../components/featured/Featured'
import { Chart } from '../../components/chart/Chart'
import { Tables } from '../../components/table/Tables'

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widjets">
          <Widjet type="user"/>
          <Widjet type="order"/>
          <Widjet type="earning"/>
          <Widjet type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart title={"Last 6 Months (Revenue)"}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tables/>
        </div>
      </div>
    </div>
  )
}
