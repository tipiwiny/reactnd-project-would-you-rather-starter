import React from 'react';




const  MyInputSelect = ({selected= "", onChangeValue, label, options,titleInput}) => (
<div > 
    <label>{label}</label>
    <select className="browser-default" value={selected} onChange={ e=> onChangeValue(e.target.value)}>
        <option value="" disabled>{titleInput}</option>
        {options.map(option =>(<option value={option.value} key={option.value}> {option.name}</option>))}
    </select>
</div>
)

export default MyInputSelect