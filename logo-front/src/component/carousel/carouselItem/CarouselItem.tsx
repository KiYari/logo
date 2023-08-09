import {Card, Image, Typography} from 'antd';
import {FC, ReactNode} from 'react';
import itemStyles from './carouselItem.module.css';

interface CarouselItemProps {
    image?: string,
    title : string,
    description : string
}

const CarouselItem : FC < CarouselItemProps >= ({image, title, description}) => {
    return (
        <Card>
            {image == null || image == undefined || image == ""
                ? <Image
                        alt={description}
                        className={itemStyles.carouselImage}
                        width='60vw'
                        height='45vh'
                        preview={false}
                        src='https://epiphanychi.com/wp-content/uploads/2021/07/1200px-No_image_3x4.svg.png'/>
                : <Image alt={description} src={image}/>}
            <Typography className={itemStyles.title}>{title}</Typography>
        </Card>
    )
}

export default CarouselItem;