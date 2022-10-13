import React from "react";

const ComponentWithProps = (props) => {
    return(
        <React.Fragment>
            <h1> { props.header } </h1>
            <p> { props.content } </p>
            <p> { props.number } This is a props number</p>
            <p> { props.nonexistent } This is a props nonexistent</p>
            
        </React.Fragment>
    )
}

export default ComponentWithProps;
// A wrapping React Fragment;
// A <h1> that uses header from props as its content;
// A <p> that uses content from props as its content;
// A <p> that uses number from props as its content along with some text;
// A <p> that uses nonexistent from props as its content along with some text.