import React from 'react'
import PropTypes from 'prop-types'
const Button =({
    children,
    onClick,
    type='button',
    className='',
    disabled=false,
    ...props
})=>{
    return(
     <button
     type={type}
     onClick={onClick}
     className='{`btn ${className}`}'
     disabled={disabled}
     {...props}
     >
    {children}
     </button>
    )
};
Button.PropTypes={
    children:PropTypes.node.isRequired,
    onClick:PropTypes.func,
    type:PropTypes.oneOf(['button','submit','reset']),
    className:PropTypes.string,
    disabled:PropTypes.bool
}
 export default Button