import React from 'react';
export const Segment40 = (props) => {
    return(
        <div className="segment40">
            <img
                srcSet={props.srcImage}
                className="profile"
                alt=""
            />
            <div className="circle">{props.position} </div>    

        </div>

    )
}