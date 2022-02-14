import React from 'react';
import { Segment40 } from "./Segment40";
import { Newsegment}  from "./Newsegment";

export const Super = ({Heroe, position} ) => {
    return(
        <div className="super">
            <Segment40 srcImage={Heroe._picture}
                position={position}></Segment40>
            <Newsegment superName={Heroe._nickname} realName={Heroe._name} stature={Heroe._heigth}>
            
            </Newsegment>
        </div>
        
    )
}