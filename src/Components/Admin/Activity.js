import React from 'react'
import Chart from './Chart'
import RecentUpload from './RecentUpload'
import '../../styles/Admincss/Chart.css'

export default function Activity() {
  return (
    <div className='activity'>
      <Chart/>
      <RecentUpload/>
      {/* <TopComments/> */}
    </div>
  )
}
