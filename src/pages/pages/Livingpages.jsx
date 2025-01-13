import React from "react";
import "./living.css";
import { Link } from "react-router-dom";

function Livingpages({ data }) {
  
  return (
    <>
      <div className="living_data container">
        <div className="living_info">
          <h3 className="home">HOME - Living Room - Sofas</h3>
          <h2 className="filter">Filter By</h2>
          <hr />
          <h2 className="filter">Price</h2>
          <div className="living_prise">
            <div className="chek">
              <input type="checkbox" />
              <h3>$150 - $250</h3>
            </div>
            <h3>(11)</h3>
          </div>
          <div className="living_prise">
            <div className="chek">
              <input type="checkbox" />
              <h3>$150 - $250</h3>
            </div>
            <h3>(11)</h3>
          </div>
          <div className="living_prise">
            <div className="chek">
              <input type="checkbox" />
              <h3>$150 - $250</h3>
            </div>
            <h3>(11)</h3>
          </div>
          <div className="living_prise">
            <div className="chek">
              <input type="checkbox" />
              <h3>$150 - $250</h3>
            </div>
            <h3>(11)</h3>
          </div>
          <div className="living_prise">
            <div className="chek">
              <input type="checkbox" />
              <h3>$150 - $250</h3>
            </div>
            <h3>(11)</h3>
          </div>
          <hr />
          <h3 className="filter">Size</h3>
          <div className="size">
            <div className="living_prise">
              <div className="chek">
                <input type="checkbox" />
                <h3>2 seater</h3>
              </div>
              <h3>(84)</h3>
            </div>{" "}
            <div className="living_prise">
              <div className="chek">
                <input type="checkbox" />
                <h3>3 seater</h3>
              </div>
              <h3>(60)</h3>
            </div>{" "}
            <div className="living_prise">
              <div className="chek">
                <input type="checkbox" />
                <h3>4 seater</h3>
              </div>
              <h3>(58)</h3>
            </div>{" "}
            <div className="living_prise">
              <div className="chek">
                <input type="checkbox" />
                <h3>Corner</h3>
              </div>
              <h3>(26)</h3>
            </div>{" "}
            <div className="living_prise">
              <div className="chek">
                <input type="checkbox" />
                <h3>Sofabeds</h3>
              </div>
              <h3>(19)</h3>
            </div>
            <a href="">Show more</a>
          </div>
        </div>
        <div className="livin_cards">
          {data.map((item) => {
            return (
              <div className="livin_card">
                <img className="data_img" src={item.img} alt="" />
                <div className="prise">
                  <h3>{item.type}</h3>
                  <h3>{item.price}</h3>
                </div>
                <h3 className="green">green 2-Seater velvet sofa</h3>
                <img className="start" src="/imgs/start.png" alt="" />
                <Link to={`/prodact/${item.id}`} className="btn">
                  <button>Choose options</button>
                </Link>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Livingpages;
