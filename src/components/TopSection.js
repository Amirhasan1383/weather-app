import React from "react";
import ToDay from "./ToDay";
import Next5Day from "./Next5Day";





function TopSection () {
    
    return(
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <ToDay/>
            </div>
            <div style={{ flex: 1 }}>
                 <Next5Day/>
            </div>
           
        </div>
    );
}

export default TopSection;
// style={style}    style={{   flexDirection: 'column'}}
 // <Chart/> style={{display: 'flex'}}// const style = {display:'flex'}

