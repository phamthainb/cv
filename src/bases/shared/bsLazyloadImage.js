import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const BsLazyLoadImage = ({src, alt, className}) => {
    return(
        <LazyLoadImage
        alt={alt}
        effect="blur" //black-and-white, opacity
        src={src}
        className={className} />
    )
}
export default BsLazyLoadImage;