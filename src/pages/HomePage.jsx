import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';

const HomePage = () => {
  const navigate = useNavigate();
  const token = useSelector(selectAuthToken);
  return (
    <Card
      textAlign="center"
      mt="80px"
      minW="300px"
      maxW="650px"
      ml="auto"
      mr="auto"
      alignItems="center"
      borderBottom={`1px solid`}
      borderColor={'gray.100'}
      boxShadow={'2px 2px 4px 1px #d1c9ba'}
    >
      <CardHeader bg="#7289da" color="white" w="100%">
        <Heading size="xl">Welcome to PhoneBook App</Heading>
      </CardHeader>

      <CardBody>
        <Box>
          <Text pt="2" fontSize="lg" fontWeight="600">
            This app will help you not to forget your contacts, which are so
            important to you!
          </Text>
        </Box>
      </CardBody>
      <CardFooter>
        <Button
          colorScheme="blue"
          onClick={() => (!token ? navigate('/login') : navigate('/contacts'))}
        >
          Let`s go !
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HomePage;
