import React from "react";
import Navbar from '../Navbar/Navbar'

import logo from "../images/logo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Sliders from "../pages/Sliders";
import { useState, useEffect } from "react";
import axios from "axios";
import { Text,Image, Box, Flex } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import { style } from "./packageStyle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Heading } from "@chakra-ui/react";
import Footer from "../Footer";
import db from '../../data/db.json'; // Corrected path to db.json

const btnImage = [
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1696926392_caregory_ui_cards_updated_correct_dimension_beaches.png",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1696926407_category_ui_cards_updated_version_correct_dimensions_mountains.png",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1696926423_category_ui_cards_updated_version_correct_dimensions_festivals.png",
  },
  {
    img: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1696926437_category_ui_cards_updated_version_correct_dimension_roadtrips.png",
  },

];

const headStyle = {
  marginTop: "141px",
  marginBottom: "-200px",
  textAlign: "left",
  marginLeft: "3%",
};

export default function VisitSingapore({
  headingText = "Reimagine Pakistan With PakVentures",
  hide = true,
  spanText = "Reimagine Pakistan With PakVentures",
}) {
  const [data1, setData1] = useState([]);

  const getData = ({ sort, order }) => {
    // Implement sorting and ordering if necessary, or just return the data
    return Promise.resolve(db);
  };
  
  useEffect(() => {
    getData({ sort: "price", order: "asc" }).then((res) => {
      setData1(res.data.packages);
    });
  }, []);
  return (
    <>
      {hide ? (
        <Navbar url="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284952_container_3_2.jpg" />
      ) : null}
    
      <Text
        display={"flex"}
        alignItems={"center"}
        mb="-12%"
        mx={{ base: "-7%", md: "-1%", lg: "1%" }}
      >
        <Image src={logo} alt="" style={style.imageStyle} />
        <span style={{ margin: "0 1% 0 -2%" }}>{">"} </span>{" "}
        <span>{spanText}</span>
      </Text>

      <Heading  ml="4%"
        mt="12%"
        mb= "3%" 
        fontSize={{ base: "20px", lg: "28px" }}>{headingText}</Heading>
      <Box mx="2%">
      <Swiper
       
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        {btnImage.map((el) => (
          <SwiperSlide key={el.id}>
            <img key={el.id} style={{ width: "60%" }} src={el.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
   
      >
        <SwiperSlide>
          <img
              style={{
                width: "93%",
                height: "500px",
                margin:"5%", // Fixed height
                objectFit: "cover", // Ensures image covers the area and is cropped if necessary
                borderRadius: "5px"
              }}
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sy90CtyE2Lt6uv0lEnaNKw.png"
              alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            style={{
              width: "92%",
              height: "500px", // Fixed height
              margin:"5%",
              objectFit: "cover", // Ensures image covers the area and is cropped if necessary
              borderRadius: "5px"
            }}
            src="https://invest.gov.pk/sites/default/files/2021-01/image_2021_01_22T06_57_50_866Z.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            style={{
              width: "92%",
              height: "500px", // Fixed height
              margin:"5%",
              objectFit: "cover", // Ensures image covers the area and is cropped if necessary
              borderRadius: "5px"
            }}
            src="https://invest.gov.pk/sites/default/files/2021-01/image_2021_01_22T06_57_50_866Z.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
              style={{
                width: "92%",
                height: "500px", // Fixed height
                margin:"5%",
                objectFit: "cover", // Ensures image covers the area and is cropped if necessary
                borderRadius: "5px"
              }}
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sy90CtyE2Lt6uv0lEnaNKw.png"
              alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
        <img
            style={{
              width: "92%",
              height: "500px", // Fixed height
              margin:"5%",
              objectFit: "cover", // Ensures image covers the area and is cropped if necessary
              borderRadius: "5px"
            }}
            src="https://invest.gov.pk/sites/default/files/2021-01/image_2021_01_22T06_57_50_866Z.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <Heading    mx="4%"
        // mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}>
        Shop, Book and Bring Home A Part of Singapore
      </Heading>
      <Text mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}>
        Everything that comes with the Pakistan tag is made with passion.
        Bring the luxurious Singapore shopping experience at home by browsing
        through clothing, food and home decor products. Click on what you like
        and start shopping!
      </Text>

      <Flex mx="2%"
        display={"flex"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-between"}
        mb="3%" >
   
   <Box>
          <Image
           display={{ base: "block" }}
           margin={{ base: "auto" }}
           w={{ base: "100%", md: "85%", lg: "85%" }}
           my={{ base: "2%" }}
           borderRadius={"5px"}
            // style={{ width: "80%", borderRadius: "20px" }}
          
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284911_container_3_4.jpg"
            alt=""
          />
          <Text
          textAlign={"left"}
          mx={{lg:"6%"}}
          fontSize={"18px"}
          fontWeight={"700"}
          >
            Wines, self care, gifts and more: shop Pakistan-special products on
            Krisshop
          </Text>
          </Box>
      

   <Box>
          <Image
            // style={{ width: "80%", borderRadius: "20px" }}
            display={{ base: "block" }}
          margin={{ base: "auto" }}
          w={{ base: "100%", md: "85%", lg: "85%" }}
          my={{ base: "2%" }}
          borderRadius={"5px"}
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284809_container_3_1.jpg"
            alt=""
          />
          <Text
          textAlign={"left"}
          mx={{lg:"6%"}}

          fontSize={"18px"}
          fontWeight={"700"}
          >
            Explore the Fabnest and Baju by Oniatta fashion line on LBB
          </Text>
          </Box>

          <Box>

       
          <Image
            // style={{ width: "77%", borderRadius: "20px" }}
            display={{ base: "block" }}
          margin={{ base: "auto" }}
          w={{ base: "100%", md: "85%", lg: "85%" }}
          my={{ base: "2%" }}
          borderRadius={"5px"}
            src="https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643284952_container_3_2.jpg.webp"
            alt=""
          />
          <Text
          textAlign={"left"}
          mx={{lg:"6%"}}

          fontSize={"18px"}
          fontWeight={"700"}
            // style={{
            //   margin: "20px",
            //   textAlign: "left",
            //   marginRight: "84px",
            //   fontSize: "20px",
            // }}
          >
     
          </Text>   </Box>
   
        
      </Flex>

      <Sliders
        text="PACKAGE"
        personText=" / person"
        setData={setData1}
        heading="Travel and Learn with PakVentures Mindful Retreats"
        data={data1}
      />
      <hr style={{marginTop:'4%', border: "1px solid #e4dddd" }} />

      <Footer />
    </>
  );
}
