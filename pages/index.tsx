import { Inter } from 'next/font/google'
import { NextPage } from 'next'
import {
  Card,
  Container,
  User,
  Text,
  Row,
  Col,
  Spacer,
  Link
} from '@nextui-org/react'
import myImage from '../assets/IMG_9071.jpg';

const inter = Inter({ subsets: ['latin'] })

interface ISocialMedia {
  link: string,
  socialName: string,
}

const Home: NextPage = () => {
  const socialMedia: ISocialMedia[] = [
    {
      link: 'https://www.youtube.com/@absagarcia',
      socialName: 'YouTube'
    },
    {
      link: 'https://www.tiktok.com/@absagarcia',
      socialName: 'Tiktok'
    },
    {
      link: 'https://open.spotify.com/show/7xdIHuky9WSRJXCb1M2wMe',
      socialName: 'Café con Absa'
    },
    {
      link: 'https://www.instagram.com/absa.garcia/',
      socialName: 'Instagram'
    },
  ];

  return (
    < Container
      gap={2}
      responsive={true}
      justify='center'
      alignContent='center'
      alignItems='center'

    >
      <Row gap={0} justify='center'>
        <Col span={12}>
          <Spacer />
          <User
            src={myImage.src}
            name={<Text>Absa Garcia</Text>}
            size="xl"
          />
          <Spacer />
          {
            socialMedia.map((socialMedia: ISocialMedia) => {
              return (
                <Card
                  isPressable
                  isHoverable
                  variant="bordered"
                  css={{ mw: "300px", margin: '0 0 20px 0' }}>
                  <Card.Body>
                    <Link href={socialMedia.link}>  <Text h4>{socialMedia.socialName}</Text></Link>
                  </Card.Body>
                </Card>
              );
            })
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Home;