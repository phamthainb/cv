import React from 'react';
import Slider from "react-slick";
function NextArrow(props) {
    const { onClick, children, classNameArrow } = props;
    return (
        <button className={classNameArrow} type="button" onClick={onClick}>
            {children}
        </button>
    );
}

function PrevArrow(props) {
    const { onClick, children, classNameArrow } = props;
    return (
        <button className={classNameArrow} type="button" onClick={onClick}>
            {children}
        </button>
    );
}
const BsSlide = (props) => {
    const {nextArrowSetting, prevArrowSetting} = props;
    const arrowCustom = {};
    if(nextArrowSetting && prevArrowSetting){
        arrowCustom.nextArrow =  <NextArrow classNameArrow={props.nextArrowSetting.className}>{props.nextArrowSetting.label}</NextArrow>;
        arrowCustom.prevArrow = <PrevArrow classNameArrow={props.prevArrowSetting.className}>{props.prevArrowSetting.label}</PrevArrow>;
    }
    const settingArrow = {
        ...props,
        ...arrowCustom
    }
    return(
        <Slider {...settingArrow}>
            {props.children}
        </Slider>
    )
}
export default BsSlide;