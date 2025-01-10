import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer>
    <section className="sec_foter container">
      <div className="linkss">
        <ul>
          <li>
            <a href="">Living Room</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Bedroom</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Kitchen & Dining</a>
          </li>
        </ul>
        <img src="../public/imgs/logo.png" alt="" />
        <ul>
          <li>
            <a href="">About</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </div>
     <div className="hrr">
     <hr />
     </div>
     <div className="foter_icons">
      <div className="iccon">
      <i className="fa-brands fa-google-plus"></i>
      <i className="fa-brands fa-square-instagram"></i>
      <i className="fa-brands fa-square-twitter"></i>
      <i className="fa-brands fa-facebook"></i>
      

      </div>
      <div className="footer_info">
        <p>© 2010 — 2020</p>
        <p>Privacy — Terms</p>
      </div>
     </div>
    </section>
  </footer>
  )
}

export default Footer