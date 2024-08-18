import React from 'react';
import PropTypes from 'prop-types'

const Card =({
    children,
    className = '',
     title,
     footer,
     image,
     ...props


})=>{
    return(
      <div className={`card ${className}`} {...props}>
       {image && <img src={image} alt="Card" className='card-img-top'/>}
       <div className='card-body'>
        {title && <h5 className='card-title'>{title}</h5>}
        <div className='card-content'>
          {children}
        </div>
       </div>
       {footer && <div className='card-footer'>{footer}</div>}
      </div>  
    )
} 

Card.PropTypes={
    children:PropTypes.node.isRequired,
    className:PropTypes.string,
    titl:PropTypes.node,
    footer:PropTypes.string,

};
export default Card;