import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import banner = '../public/banner1.jpg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src="../public/images/banner1.jpg" alt="bannerimg" width="50%" height="40%"/>
        <MyFunction />
        <MyFunction />
        <MyFunction />
      </div>
    </>
  )
}


const MyFunction =()=>{
  return(
    <>
      <h1>"Hii Faizan"</h1>
    </>
  )
}
export default App
