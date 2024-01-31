import { Box } from "@chakra-ui/react";
import {
  CardBody,
  CardFooter,
  Button,
  Card as ChakraCard,
  Stack,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

// Import your vacation data directly
import data from "./data.json";

const WeatherData = () => {
  console.log(data); // Log the imported data

  // Assuming your data structure has a key like "vacationsData"
  const vacationsData = data.vacationsData;

  return (
    <Flex>
      <Box
        fontFamily="poppins"
        className="sold"
        padding="2"
        flex="6"
        bg="blue.500"
        color="white"
      >
        <Text fontWeight="bold" mb={2}>
          Search Results:
        </Text>
        {Array.isArray(vacationsData)
          ? vacationsData.map((data, index) => (
              <ChakraCard
                key={index}
                direction={{ base: "column", sm: "row" }}
                variant="outline"
                overflow="hidden"
                w={{ base: "80%", sm: "100%" }}
                border="none"
                mb={4}
              >
                <Image
                  objectFit="cover"
                  width={{ base: "100%", sm: "40%" }}
                  maxW={{ base: "100%", sm: "320px" }}
                  src={data.image}
                  alt={`Location image for ${data.name}`}
                />

                <Stack flex="1">
                  <CardBody>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignContent="center"
                      pb="2"
                    >
                      <Box>
                        <Text color="gray.500" fontSize="14px">
                          Enjoy entire home in {data.location},{" "}
                          {data.location.country}
                        </Text>
                        <Heading color="gray.700" fontSize="20px">
                          {data.name}
                        </Heading>
                      </Box>

                      <Box>Like</Box>
                    </Box>

                    <Box display="flex" justifyContent="space-between" mt={2}>
                      <Box color="gray.500" fontSize="14px">
                        <Text>
                          {" "}
                          {data.temperature}°C (
                          {data.temperature * 1.8 + 32}°F)
                        </Text>
                        <Text> {data.weather_conditions}</Text>
                      </Box>
                    </Box>
                  </CardBody>

                  <CardFooter flex="1">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      flex="1"
                    >
                      <Box>
                        <Text color="gray.700" fontSize="14px">
                          Reviews: {data.reviews}
                        </Text>
                      </Box>

                      <Box>
                        <Button variant="solid" colorScheme="blue">
                          See your packaging list
                        </Button>
                      </Box>
                    </Box>
                  </CardFooter>
                </Stack>
              </ChakraCard>
            ))
          : <p>Error: Data is not an array</p>}
      </Box>

      <Box flex="4" bg="green.500" color="white" padding="4">
        Right side (40%)
      </Box>
    </Flex>
  );
};

export default WeatherData;
