import { Box, Button, Collapse, Flex, Heading, Image, Input, Select, Text, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const BookingPage = () => {
  // State for form inputs
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  // State for collapsing cards
  const [card1Open, setCard1Open] = useState(true);
  const [card2Open, setCard2Open] = useState(true);

  // Function to handle form submission
  const handleSubmit = () => {
    // Handle form submission logic here
  };

  // Determine button size based on screen size
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Flex flexDirection="column" alignItems="center">
      <Box p={8} maxWidth={{ base: "90%", md: "700px" }} width="100%" backgroundColor="gray.50" borderRadius="md" boxShadow="md">
        <Image src="https://pakrism.pk/wp-content/uploads/2024/01/Hunza-Valley-min.jpeg" alt="Scenic View" borderRadius="md" mb={6} />
        <Heading as="h1" mb={6} color="blue.600" textAlign="center">Book Your Trip With Us</Heading>
        
        {/* Card 1 */}
        <Collapse in={card1Open} animateOpacity>
          <Box mb={card1Open ? 6 : 0}>
            {/* Card content */}
            <Flex alignItems="center" mb={4}>
              <FaMapMarkerAlt color="blue.500" size="1.5em" />
              <Text fontSize="lg" ml={2}>Destination</Text>
            </Flex>
            <Select placeholder="Select destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="hunza">Hunza Valley</option>
              <option value="naran">Naran Kaghan</option> 
              <option value="skardu">Skardu</option>
            </Select>
          </Box>
        </Collapse>
        
        {/* Card 2 */}
        <Collapse in={card2Open} animateOpacity>
          <Box mb={card2Open ? 6 : 0}>
            {/* Card content */}
            <Flex mb={6} flexDirection={{ base: "column", md: "row" }}>
              <Box flex={{ base: "none", md: "1" }} mr={{ base: "0", md: 3 }} mb={{ base: 4, md: 0 }} backgroundColor="white" p={4} borderWidth="1px" borderRadius="lg">
                <Flex alignItems="center" mb={2}>
                  <FaCalendarAlt color="blue.500" size="1.5em" />
                  <Text fontSize="lg" ml={2}>Check-in Date</Text>
                </Flex>
                <Input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
              </Box>
              <Box flex={{ base: "none", md: "1" }} backgroundColor="white" p={4} borderWidth="1px" borderRadius="lg">
                <Flex alignItems="center" mb={2}>
                  <FaCalendarAlt color="blue.500" size="1.5em" />
                  <Text fontSize="lg" ml={2}>Check-out Date</Text>
                </Flex>
                <Input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
              </Box>
            </Flex>
            <Box mb={6} backgroundColor="white" p={4} borderWidth="1px" borderRadius="lg">
              <Flex alignItems="center" mb={2}>
                <FaUsers color="blue.500" size="1.5em" />
                <Text fontSize="lg" ml={2}>Number of Guests</Text>
              </Flex>
              <Input type="number" min={1} value={guests} onChange={(e) => setGuests(e.target.value)} />
            </Box>
          </Box>
        </Collapse>
        
        {/* Button to toggle card 1 */}
        <Button
          colorScheme="blue"
          size={buttonSize}
          onClick={() => setCard1Open(!card1Open)}
          variant="link"
          textAlign="left"
          width="100%"
          mb={4}
        >
          {card1Open ? 'Hide Destination' : 'Show Destination'}
        </Button>
        
        {/* Button to toggle card 2 */}
        <Button
          colorScheme="blue"
          size={buttonSize}
          onClick={() => setCard2Open(!card2Open)}
          variant="link"
          textAlign="left"
          width="100%"
          mb={4}
        >
          {card2Open ? 'Hide Date & Guests' : 'Show Date & Guests'}
        </Button>
        
        {/* Submit Button */}
        <Button colorScheme="blue" size={buttonSize} width="100%" onClick={handleSubmit} mt={4}>
          Book Now
        </Button>
      </Box>
    </Flex>
  );
};

export default BookingPage;
