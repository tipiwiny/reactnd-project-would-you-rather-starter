import React from 'react';




const  MyTab = (props) => (
<div className="row">
        <div className="col s12">
          <ul className="tabs">
            {props.options.map(option =>(<li className="tab col s3" onClick={() =>props.onChangeSelected(option.key)} key={option.key}><a href={`#${option.key}`} className={option.key === props.active ? 'active': undefined}>{option.name}</a></li>))}
          </ul>
        </div>
        {props.children}
      </div>
)

export default MyTab