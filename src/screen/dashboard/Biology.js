import React from "react";

const Biology=(props)=>{
    props.cbvis(false)
    function createMarkup() {
        return {__html: '<applet code="teddy.Teddy.class" archive="teddy.jar" WIDTH="800" HEIGHT="500">'};
      }
      
      function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()} />;
      }
    return(

        <div>
            <MyComponent/>
        </div>
    )
}

export default Biology