import React from 'react'
import div from '../assets/images/div.png'
import headerimage from '../assets/images/headerimage.png'

function Main() {
  return (
    <>
    <section className='hero'>
        <div class="hero-1">
          <h1>Take ideas from <br/>better to best</h1>
        <p>Miro is your team's visual platform to connect, <br/>
        Collaboration and create-together.</p>
       <div class="form">
         <input type="text" placeholder="Enter your email address" />
        <a href="" class="hero-btn">Sign up for free →</a>
        <p>Collaborate with your teammate in a minutes.</p>
       </div>
       <div class="div"><img src={div}/></div>
        <div class="headerimage"><img src={headerimage}/></div>
       </div>
       </section>
    </>
  )
}

export default Main