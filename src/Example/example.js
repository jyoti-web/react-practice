import React from 'react';
//import Radium from 'radium';

import './example.css';
const Example = (props) =>{
    // using radium package
    // const boxstyle = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        <div  className="Person" //style={boxstyle}
        >
        <p onClick={props.click}> I m {props.name}. I am {props.age} years old!</p>
        <p> {props.children} </p>
        {/* <p> I m a Girl. I am {Math.floor(Math.random() * 30)} years old!</p> */}
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    
    );
};

// export default Radium(Example);
export default Example;