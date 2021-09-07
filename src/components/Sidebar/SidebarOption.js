import React, { Fragment } from 'react';
import "./SidebarOption.css";

function SidebarOption({title, Icon}){
    return(
        <div className='sidebarOption'>
            {Icon ? (<>
                        <Icon className="sidebarOption__icon" /> 
                        <h4>{title}</h4>
                    </>) : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption;