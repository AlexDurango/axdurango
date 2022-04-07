import React from "react";
import './Project.css'

export const Project = (props) => {

    const { id } = props.id;
    const { title, desc, date, src, technologies, url } = props.withProject;

    return (
        <div className="card singleProject" id={id}>
            <img className="card-img-top" src={src} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <h6>Technologies used:</h6>
                <ul className="list-group">
                    {technologies.map( (tech, i) => {
                        return (<li className="list-group-item" key={i}>{tech}</li>);
                    })}
                </ul>
                <a href={url} target="_blank" rel="noreferrer noopener">
                    <button className="btn btn-outline-dark">See the project!</button>
                </a>
                <p className="card-text date"><b>{date}</b></p>
            </div>
        </div>
    );
}