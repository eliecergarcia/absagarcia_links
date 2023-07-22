import {
    Card,
    Col,
    Row,
    Image,
    Link,
    Text
} from '@nextui-org/react'
import { ISocialMedia } from '@/interface/ISocialMedia';
import spotify from '../../assets/spotify.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/Youtube.png';
import tiktok from '../../assets/tiktok.png';

interface Props {
    i: number,
    social: ISocialMedia,
}

export const CustomCard = (props: Props) => {

    /**
     * Function to get the social media icon
     * @param social 
     * @returns image source
     */
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
        <Card
            key={props.i}
            isPressable
            isHoverable
            variant="bordered"
            css={{ mw: "300px", margin: '0 0 20px 0' }}
        >
            <Card.Body>
                <Row justify='center' align='center'>
                    <Col span={4}>
                        <Image
                            alt={props.social.socialName}
                            width={50}
                            height={50}
                            src={getIconMedia(props.social.socialName)!}
                        />
                    </Col>
                    <Col span={12}>
                        <Link href={props.social.link} style={{ textAlign: 'left' }}>
                            <Text h4 style={{ margin: 0 }}>{props.social.socialName}</Text>
                        </Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
