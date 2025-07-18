import React from 'react'

function Header() {
  return (
    <>
     <header className="navbar">
    <div class="logo">miro</div>
    <nav>
      <ul className="nav-links">
        <li>Product ▾</li>
        <li>Solutions ▾</li>
        <li>Resources ▾</li>
        <li>Enterprise</li>
        <li>Pricing</li>
      </ul>
    </nav>
    <div className="nav-actions">
      <span>🌐 EN</span>
      <a href="">Contact Sales</a>
      <a href="">Login</a>
      <button class="btn">Sign up free →</button>
    </div>
  </header>
    </>
  )
}

export default Header