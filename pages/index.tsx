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
  Link,
  Image
} from '@nextui-org/react'
import myImage from '../assets/IMG_9071.jpg';
import spotify from '../assets/spotify.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/Youtube.png';
import tiktok from '../assets/tiktok.png';

// const inter = Inter({ subsets: ['latin'] })

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

  const getIconMedia = (social: string) => {
    switch (social) {
      case 'YouTube':
        return youtube.src;
      case 'Tiktok':
        return tiktok.src;
      case 'Café con Absa':
        return spotify.src;
      case 'Instagram':
        return instagram.src;
    }
  }

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
            <Card
              key={i}
              isPressable
              isHoverable
              variant="bordered"
              css={{ mw: "300px", margin: '0 0 20px 0' }}
            >
              <Card.Body>
                <Row justify='center' align='center'>
                  <Col span={4}>
                    <Image
                      alt={socialMedia.socialName}
                      width={50}
                      height={50}
                      src={getIconMedia(socialMedia.socialName)!}
                    />
                  </Col>
                  <Col span={12}>
                    <Link href={socialMedia.link} style={{ textAlign: 'left' }}>
                      <Text h4 style={{ margin: 0 }}>{socialMedia.socialName}</Text>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

        </Col>
        <Col span={2} />
      </Row>
    </Container>
  )
}

export default Home;
