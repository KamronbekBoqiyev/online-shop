import React, { useState } from "react";
import "./prodact.css";
import { useParams } from "react-router-dom";

function Prodact_page({ data }) {
  const { id } = useParams();
  const [oneUser, setOneUser] = useState(
    data.filter((item) => {
      return item.id == id;
    })
  );
  const [fon_img, setFon_img] = useState(`${oneUser[0].img}`);
  const filterData = data.filter((item)=>{
    return item.type == oneUser[0].type
  })
  console.log(filterData);
  const [info,setInfo]=useState(oneUser[0].desc)
  console.log(info);
  

  return (
    <>
      <div className="prodact container">
        <h2 className="hh2">
          HOME - Living Room - Sofas - Green 2-seater velvet sofa
        </h2>
        <h2 className="hhh2">{oneUser[0].name} </h2>
        <div className="sterts">
          <img src="/imgs/start.png" alt="" />
          <h3>Read reviews (267)</h3>
        </div>
        <div className="prodact_df">
          <div className="prodact_img">
            <div className="fon_img">
              <img src={fon_img} alt="" />
            </div>
            <div className="imgss">
              {oneUser[0].imges.map((item) => {
                return (
                  <img
                    onClick={() => {
                      setFon_img(item);
                    }}
                    src={item}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="prodact_info">
            <div className="lorem">
              <h5>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, <br />
                Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore <br />
                Magna Aliqua.
              </h5>
              <h2>{oneUser[0].price}</h2>
            </div>
            <hr />
            <h4></h4>
            <div className="borderf">
              <div className="radus red"></div>
              <div className="radus blue"></div>
              <div className="radus black"></div>
              <div className="radus yellow"></div>
            </div>
            <div className="btns">
              <select name="" id="">
                <option value="">1</option>
              </select>
              <button>Add to Bag</button>
            </div>
            <hr />
            <div className="linkk">
              <h2 onClick={()=>{
                setInfo(oneUser[0].desc)
              }}>Description</h2>
              <h2 onClick={()=>{
                setInfo(oneUser[0].dime)

              }}>Dimensions</h2>
              <h2 onClick={()=>{
                setInfo(oneUser[0].deta)

              }}>Details</h2>
            </div>
            <p>
             {
              info
             }
            </p>
          </div>
        </div>
        <hr />
        <h1>Similar Products</h1>
        <div className="prodact_boxs">
         
          {
            filterData.map((item)=>{
              return  <div className="prodact_box">
              <img src={item.img} alt="" />
              <div className="prisee">
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
              <a href="">Shop now</a>
            </div>
            })
          }
         
         
         
        </div>
      </div>
    </>
  );
}

export default Prodact_page;
