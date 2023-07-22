import { NextPage } from 'next'
import {
  Container,
  User,
  Text,
  Row,
  Col,
  Spacer,
} from '@nextui-org/react'
import myImage from '../assets/IMG_9071.jpg';
import { ISocialMedia } from '@/interface/ISocialMedia';
import { socialMedia } from '@/data/dataSocial';
import { CustomCard } from '@/components/card/CustomCard';

const Home: NextPage = () => {
  return (
    <Container
      fluid={true}
      responsive
      gap={0}
      style={{ backgroundColor: 'black' }}
    >
      <Row
        justify='center'
        align='center'
        fluid
        style={{ backgroundColor: 'black' }}
        gap={1}
      >
        <Col span={2} />
        <Col style={{ width: 330 }}>
          <Spacer />
          <User
            src={myImage.src}
            name={<Text>Absa Garcia</Text>}
            size="xl"
          />
          <Spacer />
          {socialMedia.map((socialMedia: ISocialMedia, i: number) => (
            <CustomCard key={i} i={i} social={socialMedia} />
          ))}
        </Col>
        <Col span={2} />
      </Row>
    </Container>
  )
}

export default Home;
