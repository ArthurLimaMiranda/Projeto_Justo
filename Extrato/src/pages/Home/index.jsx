import { useState } from 'react'
import {Header} from '../../components/Header'
import {Card} from '../../components/Card'
import './styles.css'

export function Home() {
  
  return (
    <div className="screen">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <Card />
      </div>
    </div>
  )
}
