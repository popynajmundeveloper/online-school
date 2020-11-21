import React from 'react';
import "./Course.css";

const Course = (props) => {
    const{name,instructor,image,price} = props.course;
    return (
        <div className = "course">
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <h3>Name:{name}</h3>
                <h3>Instructor:{instructor}</h3>
                <h3>Price:{price}</h3>
                <button onClick = {() =>(props.handleButton(props.course))}> Enroll Now</button>
            </div>
           
        </div>
    );
};

export default Course;