import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import Login from './img3.jpg'
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'} border={'3px solid black'} margin={'50'} padding={'50'} borderRadius={'50'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
                <Link color={'blue.500'} href="/">Sign up</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            style={{height:600,width:800}}
            alt={'Login Image'}
            objectFit={'cover'}
            src={
                Login
            }
          />
        </Flex>
      </Stack>
    );
  }