import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Livingpages from "./pages/pages/Livingpages";
import { useState } from "react";
import Prodact_page from "./pages/prodact/Prodact_page";
import Error from "./pages/error/Error";

function App() {

  const [data, setData] = useState([
    {
      id: 0,
      img: "/imgs/data_img.png",
      name: "green 2-Seater velvet sofa",
      type: "Comfort",
      price: "$299",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste  KAMRONBEK",

      imges: [
        "https://a.allegroimg.com/s1024/0c892a/11e0cfcd4a4c89d4a5b2c737eca2",
        "https://homefine.ru/image/cache/catalog/SOFAS/KENNEDY/KENNEDY-3-ZELENIY/kennedy-divan-sovremennij-dizayn-zeleniy-plushevij-%289%29-1500x1500.jpeg",
        "https://i.pinimg.com/originals/9f/00/4b/9f004babf52346e0c9364b79d385712a.jpg",
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/129/826/590/437/122/7/600016276629b4.jpg",
      ],
    },
    {
      id: 1,
      img: "/imgs/data2.png",
      name: "green 2-Seater velvet sofa",
      type: "Ancient",
      price: "$159",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://i.ytimg.com/vi/3t33T9F0Xg4/maxresdefault.jpg",
        "https://i.pinimg.com/originals/6a/34/83/6a3483ee2a503cb4693e8395f5358b4b.jpg",
        "https://s.alicdn.com/@sc01/kf/HTB1Xf0aDYGYBuNjy0Foq6AiBFXaP.jpg",
        "https://sun9-64.userapi.com/impf/c824201/v824201741/106eef/Tpt8u9mrdQI.jpg?size=320x320&quality=96&sign=6272cc6a45445acbc3c4f78639b00785&c_uniq_tag=2B5cAZT3_Mxlm0DHRfyHABGjyHLqHKcdOkcADt_P0XM&type=album",
      ],
    },
    {
      id: 2,
      img: "/imgs/data3.png",
      name: "green 2-Seater velvet sofa",
      type: "Special",
      price: "$499",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://avatars.mds.yandex.net/get-marketpic/196254/market_hWxaQM5pNC62TtM_TBvvkg/orig",
        "https://a.allegroimg.com/original/034f46/202eb56a4c6e8e3c5d6f8c0062e2",
        "https://cdn-ru.bitrix24.ru/b19600972/landing/78a/78ac85543cfcca9d16dc1be1eaa8ab02/3_2_1x.jpg",
        "https://productimages.hepsiburada.net/s/183/400-592/110000146884680.jpg",
      ],
    },
    {
      id: 3,
      img: "/imgs/data4.png",
      name: "green 2-Seater velvet sofa",
      type: "Ancient",
      price: "$399",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://avatars.mds.yandex.net/get-mpic/4250892/img_id8484881707629573321.jpeg/orig",
        "https://a0.muscache.com/im/pictures/45cd3e3c-2766-4063-9fc5-efc75caa7ae9.jpg?aki_policy=x_large",
        "https://img.alicdn.com/imgextra/i3/30402319/TB21hKqa0hvOuFjSZFBXXcZgFXa_!!30402319.jpg",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46938051/original/6c691e88-fb61-4602-8326-954766a08ce5.jpeg?im_w=720",
      ],
    },
    {
      id: 4,
      img: "/imgs/data5.png",
      name: "green 2-Seater velvet sofa",
      type: "Sassy",
      price: "$199",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://cdn1.ozone.ru/s3/multimedia-u/6739979754.jpg",
        "https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_lg/ba4b7b3dbef2061ebd147b37272a6915",
        "https://i.pinimg.com/736x/cf/8a/03/cf8a0387def01516783a9bb7512354f0.jpg",
        "https://www.dk.ru/system/images/news/000/950/155_x_large_new_origin_copyright.jpg",
      ],
    },
    {
      id: 5,
      img: "/imgs/data6.png",
      name: "green 2-Seater velvet sofa",
      type: "Sunny",
      price: "$299",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://ae01.alicdn.com/kf/HTB1cxZ_OFXXXXaUXXXXq6xXFXXX1/Mid-Century-Modern-Gaya-Kursi-Kursi-Sofa-Furniture-Ruang-Tamu-Sofa-Kayu-Kaki-Bedoorm-Kursi-Bisa.jpg",
        "https://www.atkinandthyme.co.uk/media/catalog/product/cache/ff4df62209228869e2d6e438912332e8/a/t/atkin_thyme_feb_2018_094_2.jpg",
        "https://www.amexessentials.com/wp-content/uploads/2023/05/teaser_home_design_quiz-265x265@2x.jpg",
        "https://content.r9cdn.net/rimg/himg/9d/dc/cd/ice-8929-106759964-606102.jpg?width=335&height=268&crop=true",
      ],
    },
    {
      id: 6,
      img: "/imgs/data7.png",
      name: "green 2-Seater velvet sofa",
      type: "Comfort",
      price: "$499",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://avatars.mds.yandex.net/get-mpic/5311850/img_id508708136928653375.jpeg/orig",
        "https://img.vezetvsem.ru/map/1352576/thumbs/auto_600_1562390688_1.jpg",
        "https://fastly.4sqi.net/img/general/600x600/5769134_ynJdDSRc3D06OKFIM_sI-6uspqJeuJbJNP0eGVQIb4I.jpg",
        "https://i.pinimg.com/originals/92/cd/f2/92cdf297f3b714ccade1fb153efd5be3.jpg",
      ],
    },
    {
      id: 7,
      img: "/imgs/data8.png",
      name: "green 2-Seater velvet sofa",
      type: "Special",
      price: "$400",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://pptravel.ru/sites/default/files/files/hotels/cuba/102665834548_photo_12.jpg",
        "https://s01.cdn-pegast.net/get/18/dd/14/600cc49aff4fce4a2de02d1d1ea535c5046a5aa194016587d92b36ab29/60a8a47a6e2b9.jpg",
        "https://1.bp.blogspot.com/-QbomiIIGZLE/UkOlRWp8vrI/AAAAAAAACtc/i4n92yFmhc0/s1600/i5h.JPG",
        "https://avatars.mds.yandex.net/i?id=faa27d1b5c138686dc01ff9abc7837bed1ebf147-10895071-images-thumbs&n=13",
      ],
    },

    {
      id: 8,
      img: "/imgs/data9.png",
      name: "green 2-Seater velvet sofa",
      type: "classy",
      price: "$699",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://intererexpert.ru/wp-content/uploads/2022/12/oboi-v-zal-19-2.jpg",
        "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202403/0028/open-box-hamilton-leather-sofa-70-91-o.jpg",
        "https://i.pinimg.com/736x/7a/b4/a2/7ab4a28798a70a415bbbad7ecf916dd1.jpg",
        "https://i.pinimg.com/736x/7a/b4/a2/7ab4a28798a70a415bbbad7ecf916dd1.jpg",
      ],
    },
    {
      id: 9,
      img: "/imgs/data10.png",
      name: "green 2-Seater velvet sofa",
      type: "Ancient",
      price: "$299",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://avatars.mds.yandex.net/i?id=d4c306eb66d5967cfe5204441e75dd523e04dd5d-5229425-images-thumbs&n=13",
        "https://stoolgroup.ru/images/detailed/420/stul-kozi-tkan-bukle-sinij_Gray__6_-1.webp",
        "https://avatars.mds.yandex.net/get-mpic/6374009/img_id2114903951852328988.jpeg/orig",
        "https://zibrof.ru/wa-data/public/shop/products/85/28/2885/images/11094/11094.970.jpg",
      ],
    },
    {
      id: 10,
      img: "/imgs/data11.png",
      name: "green 2-Seater velvet sofa",
      type: "Classy",
      price: "$150",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa936e165540885.644321cdb3320.png",
        "https://i.pinimg.com/736x/3d/83/f4/3d83f4bf15ce81e165d7760987bc590d.jpg",
        "https://i.pinimg.com/736x/b4/4a/6b/b44a6b5790d1bd6cb772e33efa259992.jpg",
        "https://www.c41magazine.com/wp-content/uploads/2020/03/daria-piskareva-the-rudiment-14.jpg",
      ],
    },
    {
      id: 11,
      img: "/imgs/data12.png",
      name: "green 2-Seater velvet sofa",
      type: "Comfort",
      price: "$250",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://cdn1.ozone.ru/s3/multimedia-7/6126103903.jpg",
        "https://avatars.mds.yandex.net/get-altay/4285172/2a0000017916d1f7c2b0fbae03b238f2befc/XXL",
        "https://d2popi29wn9gkh.cloudfront.net/86f88adb-17c3-415c-bfbd-8ef548b445b9.jpg",
        "https://i.pinimg.com/736x/fd/29/02/fd2902f965c69ad34ee0ac3c9059a6a5.jpg",
      ],
    },

    {
      id: 12,
      img: "/imgs/data13.png",
      name: "green 2-Seater velvet sofa",
      type: "Ancient",
      price: "$299",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://i.pinimg.com/originals/f1/60/c6/f160c6f71a129cdbfde5f3ad8a972ac6.jpg",
        "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_651a77af125e2c235e7ae0f7_651a792f1cf2387b256f5782/scale_1200",
        "https://pix10.agoda.net/hotelImages/9456631/0/65453075f00feb34c27d48c17ce2d142.jpg?ca=9&ce=1&s=1024x768",
        "https://resizer.mail.ru/p/ac2d5d2e-a758-50a7-8735-7663bc090197/AQAXUMjpFZ_Tq0N8JtcuwuMJFmP9CEppKj2LXCTpXRCLMqs1nczZXNu9KbkqIzkJIwKCXmGZDCpwGyADTBlhIvPnWkM.jpg",
      ],
    },
    {
      id: 13,
      img: "/imgs/data14.png",
      name: "green 2-Seater velvet sofa",
      type: "Comfort",
      price: "$359",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://cdn1.ozone.ru/s3/multimedia-7/6823880971.jpg",
        "https://avatars.mds.yandex.net/get-mpic/5281727/img_id5742664599293311735.jpeg/orig",
        "https://s.alicdn.com/@sc01/kf/Ha31280efb55a4d258f6acf3c4eaefa3c0/High-Quality-Cheap-Classic-4-6-8.jpg",
        "https://static.santehnika-online.ru/static/clbT4V_u_EaAVABT4xIMbtJ4S9L0kFyKFHpsG4sbwEg/rs:fit:1600:800:0/g:no/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLndlYnNpdGUueWFuZGV4Y2xvdWQubmV0L3BpY3R1cmVzL2RhbS9zYW50b24vNjIyNDExL2JmMGQxMTAyYWE0MzgwOWRkMDg5N2U4YTAxOTdkNzk1LmpwZw.jpg",
      ],
    },
    {
      id: 14,
      img: "/imgs/data15.png",
      name: "green 2-Seater velvet sofa",
      type: "Sassy",
      price: "$449",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://avatars.mds.yandex.net/get-mpic/4250892/img_id8484881707629573321.jpeg/orig",
        "https://a0.muscache.com/im/pictures/45cd3e3c-2766-4063-9fc5-efc75caa7ae9.jpg?aki_policy=x_large",
        "https://img.alicdn.com/imgextra/i3/30402319/TB21hKqa0hvOuFjSZFBXXcZgFXa_!!30402319.jpg",
        "https://a0.muscache.com/im/pictures/miso/Hosting-46938051/original/6c691e88-fb61-4602-8326-954766a08ce5.jpeg?im_w=720",
      ],
    },
    {
      id: 15,
      img: "/imgs/data16.png",
      name: "green 2-Seater velvet sofa",
      type: "Comfort",
      price: "$399",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://cdn1.ozone.ru/s3/multimedia-u/6739979754.jpg",
        "https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_lg/ba4b7b3dbef2061ebd147b37272a6915",
        "https://i.pinimg.com/736x/cf/8a/03/cf8a0387def01516783a9bb7512354f0.jpg",
        "https://www.dk.ru/system/images/news/000/950/155_x_large_new_origin_copyright.jpg",
      ],
    },
    {
      id: 16,
      img: "/imgs/data17.png",
      name: "green 2-Seater velvet sofa",
      type: "Seater",
      price: "$199",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://i.pinimg.com/originals/c8/37/89/c8378926bee829659b20687c3acf60b0.jpg",
        "https://i.pinimg.com/736x/0e/6a/a2/0e6aa23b0e8d931d9a343c9e9b7ebe74.jpg",
        "https://cdn1.ozone.ru/s3/multimedia-n/6698971139.jpg",
        "https://i.pinimg.com/736x/60/d3/83/60d383e60ca62dd70cdc4a549e620e4c--orange-sofa-orange-interior.jpg",
      ],
    },
    {
      id: 17,
      img: "/imgs/data18.png",
      name: "green 2-Seater velvet sofa",
      type: "Classy",
      price: "$269",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      dime: " consectetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste officia. In consequatur quos culpa eum deserunt corrupti dolorum ex?",
      deta: "tetur adipisicing elit. Sed odit natus dignissimos excepturi, quas suscipit quisquam corrupti ad sint iste",

      imges: [
        "https://intererexpert.ru/wp-content/uploads/2022/12/oboi-v-zal-19-2.jpg",
        "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202403/0028/open-box-hamilton-leather-sofa-70-91-o.jpg",
        "https://i.pinimg.com/736x/7a/b4/a2/7ab4a28798a70a415bbbad7ecf916dd1.jpg",
        "https://i.pinimg.com/736x/7a/b4/a2/7ab4a28798a70a415bbbad7ecf916dd1.jpg",
      ],
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livingrom" element={<Livingpages data={data} />} />
          <Route path="/prodact/:id" element={<Prodact_page data={data} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
