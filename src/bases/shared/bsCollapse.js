import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';


const BsCollapseItem = props => {
    const [isOpen, changeIsOpen] = useState(false);
    if(props.active){
        useEffect(() => {
            changeIsOpen(true)
        },[])
    }
    return(
        <div className={`collapse-item ${isOpen ? "active" : ""}`}>
        <div className="collapse-head" onClick={() => changeIsOpen(!isOpen)}>
          <p className="title">{props.head}</p>
          <span className="active__style" dangerouslySetInnerHTML={{__html: 
            props.iconNormal}}>
          </span>
          <span className="normal__style" dangerouslySetInnerHTML={{__html: 
            props.iconActive}}>
          </span>
        </div>
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="collapse"
            unmountOnExit
        >
            <div className="collapse-content">
            <div className="overflow-content">
              <p className="desc">{props.content}</p>
            </div>
            </div>
            </CSSTransition>
      </div>
    )
}
const BsCollapse = props => {
  const collapseItemArr = [];
  for (var index in props) {
    collapseItemArr.push(props[index]);
  }
  return (
    <div className="bs-collapse">
        {
            collapseItemArr.map((item, index) => {
                if(index === 0){
                    return <BsCollapseItem key={index} { ...item } active={true}/>
                }
                return <BsCollapseItem key={index} { ...item } />
            })
        }
    </div>
  );
};
export default BsCollapse;
