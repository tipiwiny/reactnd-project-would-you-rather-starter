import React from 'react';




const  MyButton = ({onClick, title, disabled, type = "button"}) => (
<div > 
<button type={type} className="btn waves-effect waves-light" onClick={onClick} disabled={disabled}> 
    {title}
</button>
</div>
)

export default MyButton