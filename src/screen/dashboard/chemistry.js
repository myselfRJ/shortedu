import React from "react";

const Chemistry=(props)=>{
    props.cbvis(false)
    return(

        <div>
            <iframe src="http://0.0.0.0:8000/molecules-master/examples/" width="1080" height="800" />
        </div>
    )
}

export default Chemistry