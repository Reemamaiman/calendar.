import Sider from './componant/Sider';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {

  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
  Menu,
  MenuButton,
  MenuItem,
  ChevronDownIcon,
  MenuList,
  HStack
  

  


} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const App=()=> {
  const [value, onChange] = useState(new Date());
  return (
    
    <ChakraProvider theme={theme}>
    <HStack spacing="0" width="100vw" height="100vh"> 
    <Flex justifyContent="center"
          alignItems="center"
          display={['none', 'none', 'flex']}
          backgroundColor="#F9F9FC"
          height="100vh"
          width={['0', '0', '30%']}>
      <VStack mx="auto"
            align="left"
            spacing="5"
            width={['90%', '90%', '458px']}>
      <Sider/>
      </VStack>
      </Flex>       
      <Flex  height="100vh"
          width={['100%', '100%', '50%']}
          justifyContent="center"
          alignItems="space-between"
         >
      <VStack  mx="auto"
            align="left"
            spacing="5"
            marginTop="10"
            width={['90%', '90%', '458px']}>
      <Menu>
  <MenuButton as={Button} rightIcon>
   Select Date & Day
  <MenuList>
        <Calendar onChange={onChange} value={value} />
        </MenuList>
  </MenuButton>
  
      </Menu>
      <Menu>
  <MenuButton as={Button} rightIcon>
    Select Type
  </MenuButton>
  <MenuList>
    <MenuItem>Live Zoom</MenuItem>
    <MenuItem>Review</MenuItem>
  </MenuList>
      </Menu>
      <Menu>
      <MenuButton as={Button} rightIcon>
    Number of Hours
  </MenuButton>
  <MenuList>
    <MenuItem>1 Hour</MenuItem>
    <MenuItem>2 Hours</MenuItem>
    <MenuItem>3 Hours</MenuItem>
    <MenuItem>4 Hours</MenuItem>
      </MenuList>
      </Menu>
      </VStack>
      </Flex>
      </HStack>
      
   </ChakraProvider>
  );
}

export default App;