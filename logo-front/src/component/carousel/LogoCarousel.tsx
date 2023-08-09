'use client'
import {Carousel} from "antd"
import carouselStyles from './carousel.module.css'
import CarouselItem from "./carouselItem/CarouselItem";
import Icon from "@ant-design/icons/lib/components/Icon";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const contentStyle : React.CSSProperties = {
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79'
};

const LogoCarousel = () => {
    var carousel : any;
    const carouselAutoplayItems = [
        {
            'title': 'title1',
            'description': 'i am description 1',
            'image': undefined
        }, {
            'title': 'title2',
            'description': 'i am description 2',
            'image': undefined
        }, {
            'title': 'title3',
            'description': 'i am description 3',
            'image': undefined
        }, {
            'title': 'title4',
            'description': 'i am description 4',
            'image': undefined
        }
    ];

    const carouselNext = () => {
        carousel.next()
    }

    const carouselPrev = () => {
        carousel.prev()
    }

    return (
        <div>
            <LeftOutlined onClick={carouselPrev} className={`${carouselStyles.carouselArrows} ${carouselStyles.carouselArrowLeft}`}/>

            <Carousel
                autoplay
                className={carouselStyles.mainContent}
                ref={node => (carousel = node)}>

                {carouselAutoplayItems.map((item, key) => {
                    return (<CarouselItem
                        key={key}
                        title={item.title}
                        description={item.description}
                        image={item.image}/>)
                })}

            </Carousel>
            <RightOutlined onClick={carouselNext} className={`${carouselStyles.carouselArrows} ${carouselStyles.carouselArrowRight}`}/>
        </div>
    )
}

export default LogoCarousel;