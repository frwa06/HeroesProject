import React from 'react';
export const Newsegment = (props) => {

    



    return(
        <div className="newsegment">
            <h1 className="title">{props.superName}</h1>
            <span className="paragraph">
                {props.realName}
                <br/>
                Estatura {props.stature}
            </span>
        </div>

    )
}