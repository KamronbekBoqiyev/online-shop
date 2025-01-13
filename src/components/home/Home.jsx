import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
      <header>
      
      <div className="hero">
        <div className="contaner">
          <div className="hero_info">
            <h1>Your Best Value Products</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br /> eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <button>SHOP NOW</button>
            <img src="/imgs/Background.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="sec1 container">
        <h2>Get some Inspiration from our refreshing ideas</h2>
        <div className="cards">
          <div className="card">
            <img src="/imgs/card1.png" alt="" />
            <h3>Sunny Days</h3>
            <a href="">Shop Now</a>
          </div>
          <div className="card">
            <img src="/imgs/card2.png" alt="" />
            <h3>Comfy Bedcovers</h3>
            <a href="">Shop Now</a>
          </div>
          <div className="card">
            <img src="/imgs/card3.png" alt="" />
            <h3>Statement pieces</h3>
            <a href="">Shop Now</a>
          </div>
          <div className="card">
            <img src="/imgs/card4.png" alt="" />
            <h3>Spring Sofas</h3>
            <a href="">Shop Now</a>
          </div>
        </div>
      </section>
      <section className="sec2 container">
        <h2>Looking for What’s New in Store?</h2>
        <div className="boxs">
          <div className="box">
            <img src="/imgs/box1.png" alt="" />
            <h3>Home for Designer Sectionals</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore
              magna aliqua.
            </p>
            <a href="">Take a look</a>
          </div>
          <div className="box">
            <img src="/imgs/box2.png" alt="" />
            <h3>Home for Designer Sectionals</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore
              magna aliqua.
            </p>
            <a href="">Take a look</a>
          </div>
          <div className="box">
            <img src="/imgs/box3.png" alt="" />
            <h3>Home for Designer Sectionals</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore
              magna aliqua.
            </p>
            <a href="">Take a look</a>
          </div>
        </div>
      </section>
      <section className="sec3 container">
        <div className="sec_df">
          <img src="/imgs/sec3.png" alt="" />
          <div className="info">
            <h2>Clearance Sale</h2>
            <h3>Upto 60% off</h3>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home