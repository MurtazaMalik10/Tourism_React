import React, { useState, useEffect } from 'react';
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MainNavbar() {
  const [dropdown, setDropdown] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/signin');
  };

  return (
    <Box>
      <Flex className='fold' justifyContent={'space-between'} alignItems={'center'}>

        <Button border={'0px solid'} ml='3%' display={{ base: 'block', md: 'none', lg: 'none' }} variant='outline' onClick={onOpen} mr={2}>
          <HamburgerIcon fontSize={'25px'} marginLeft='-5px' color={'white'} />
        </Button>
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg={'#57773c'}>
            <DrawerCloseButton />
            <Link to={'/'}>
              <DrawerHeader display={'flex'} justifyContent={'center'} alignItems={'center'} color={'blue.300'} fontWeight={'bold'}>
                <Image src={logo} link='/' alt='' className='image' mr={'-7%'} />
                Pakventures
              </DrawerHeader>
            </Link>
            <DrawerBody>
              <Link to={'/Book'}>
                <Text fontSize={'18px'} ml={'4%'} my={'1%'} cursor={'pointer'}>
                  Book
                </Text>
              </Link>

              <Link to={'/packages'}>
                <Text fontSize={'18px'} ml={'4%'} my={'1%'}>
                  Packages
                </Text>
              </Link>

              <Link to={'/Visit Singapore'}>
                <Text fontSize={'18px'} ml={'4%'} my={'1%'}>
                  Visit Singapore
                </Text>
              </Link>

              <Link to={'/Beaches'}>
                <Text fontSize={'18px'} ml={'4%'} my={'1%'}>
                  Beaches
                </Text>
              </Link>

              <Link to={'/Mountains'}>
                <Text fontSize={'18px'} ml={'4%'} my={'1%'}>
                  Mountains
                </Text>
              </Link>

              <Link to={'/Heritage'}>
                <Text fontSize={'18px'} ml={'4%'} my={'1%'}>
                  Heritage
                </Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Link to='/' className='navbar-logo'>
          <Image src={logo} link='/' padding={{ base: '22px' }} alt='' className='image' />
          <Text
            marginLeft='-10%'
            fontSize={{
              base: '20px',
              lg: '1.8rem',
            }}
          >
            Pakventures
          </Text>
        </Link>

        <ul className='nav-items'>
          {navItems.map((item) => {
            if (item.title === 'Inspirations') {
              return (
                <>
                  <Text
                    marginTop={{ md: '3%', lg: '2%' }}
                    display={{ base: 'none', md: 'block' }}
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </Text>
                  {isLoggedIn ? (
                    <Button
                      display={{ base: 'none', md: 'block', lg: 'block' }}
                      onClick={handleLogout}
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Text fontSize={'18px'} color={'white'} display={{ base: 'block', md: 'none', lg: 'none' }}>
                      <Link to={'/signin'}>Sign In</Link>
                    </Text>
                  )}
                </>
              );
            }
            return (
              <Text marginTop={{ md: '3%', lg: '2%' }} display={{ base: 'none', md: 'block' }} key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </Text>
            );
          })}
        </ul>
      </Flex>
    </Box>
  );
}