import React from 'react';

import classes from './Order.css'

const order = (props) => {        
    return (
            <div className={classes.Order}>
                <p>Ingredients: {Object.keys(props.ingredients).map((igkey) => {                            
                            return <span key={igkey} style={{
                                                            textTransform:'capitalize',
                                                            display:'inline-block',
                                                            margin:'0 8px',     
                                                            border: '1px solid #ccc',
                                                            padding : '5px',
                                                            }}>{igkey + "-" + props.ingredients[igkey] + " "}</span>
                    }
                )}</p>
                <p>Price: <strong>USD {props.price}</strong></p>
            </div>
    ) 
}

export default order;