import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box, Button, Flex, Heading, Image, Input, Select, Text } from '@chakra-ui/react';
import BookingPage from './Booknow'

import VisitSingapore from './VisitSingapore'
// import Navbar from '../components/Navbar'

export default function Form() {
  return (
    <div>

<br></br> <br></br>
<Navbar url="https://cdn1.tripoto.com/media/transfer/img/1789711/Image/1656336375_offbeat_places_2_1.gif" />
<br></br> <br></br>
<BookingPage > </BookingPage>
<Heading
        ml="4%"
        mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        Discover the best tour packages on PakVentures
      </Heading>
      <Text
        mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}
      >
        We all need to get out of our routine and hit the road every once in a
        while to experience the magic of travel. PakVentures offers some of the
        best tour packages and customised holidays in Pakistan and abroad to help
        you unwind and discover the world. On offer are a range of travel
        destinations which are perfect for a trip with family or friends. Solo
        travellers can chose from a range of treks and tour packages in budget
        friendly destinations in Pakistan and around the world. Holiday packages on
        PakVentures are handpicked to cater to a variety of travel styles and
        requirements.
      </Text>

      <Heading
        ml="4%"
        mt="1%"
        mb={{ lg: "1%" }}
        fontSize={{ base: "20px", lg: "28px" }}
      >
        Pick from hundreds of holiday packages
      </Heading>
      <Text
        mx="4%"
        fontSize={"16px"}
        mb="2%"
        style={{ textAlign: "left" }}
        lineHeight={"29px"}
      >
        There is something for everyone who visits on PakVentures platform.
        Whether you wish to get a taste of India's rich heritage in Rajasthan,
        or pay a visit to the Himalayas to heal your senses; it's all included.
        Also, on offer are international holiday packages, specially curated for
        Indian travellers. Witness the breathtaking beaches of Thailand or
        stroll through the bustling cities in Australia. Newlyweds can chose
        from some of the most sought after honeymoon destinations like Maldives
        or Iceland, or go off the beaten path in destinations like China or
        Egypt. If you are looking for a quick break, plan a weekend getaway to
        some of the top hideouts near your city. Business travellers and group
        tours are in the mix as well - popular packages include trips to places
        like Dubai and Malaysia. If you are seeking some serious adventure,
        select from trekking packages through some of the most scenic
        mountainous ranges in the world and capture moments for a lifetime.
        Skydiving, scuba diving, adventure biking, and much more on PakVentures
        - it's a one of the most dynamic selection of trips and activities for
        Indian travellers.
      </Text>


    </div>
  )
}
