import React from 'react';

export default props => (
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className="btn btn btn-info" href={'https://maps.google.com/?q=' + props.location} role="button">Open in Google Maps</a>
    </div>
);