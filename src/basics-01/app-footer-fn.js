import React from 'react';
import './app-footer.css';

// In App-03.js  ---- Correct format
export default function AppFooterFn(company, website, year)
{
    return(
        <div>
            <hr/>
            <p className="app-footer">This is footer</p>
            <p className="app-footer"> Company Name {props.company}, 
            Website {props.website},
            Year {props.year}</p>
        </div>
    );
}
