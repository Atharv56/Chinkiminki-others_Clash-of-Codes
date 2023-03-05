import React from 'react'
import NavScrollExample from '../navbar/Navbar';
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,Heading, Text, Button } from '@chakra-ui/react'
import Im from '../images/courses.png'
import "./courses.css"

export default function courses() {
  return (
    <>
        <NavScrollExample />
        <SimpleGrid spacing={7} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <section style={{display:'flex',width:1150,height:250,padding:15,marginLeft:80,backGroundImage:Im,marginTop:90}}>
  <Card>
    <CardHeader>
      <Heading size='md'>Adventure Filmmaking</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Mapping Rajasthan</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Shikara Experience</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Mindful Journaling</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  </section>
</SimpleGrid>
<section style={{display:'flex',width:875,height:250,padding:15,marginLeft:190}}>
<Card>
    <CardHeader>
      <Heading size='md'>East Explained</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>Language Learning Guide</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'>How to Vlog?</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</section>
    </>
  )
}
