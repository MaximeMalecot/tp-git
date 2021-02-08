import React, { useState } from 'react';

export default function CustomButton( { value, action } ){
    var ul_style = {
        base:{
            display: 'flex',
            'list-style-type': 'none'
        }
    }
    var li_style = {
        base:{
            flexBasis: 'calc(100%/3)',
            width: 'calc(100%/3)',
            margin: 10,
            padding: 10
        }
    }


    return(
        <header>
            <ul style={ul_style.base}>
                <li style={li_style.base}>Lien 1</li>
                <li style={li_style.base}>Lien 2</li>
                <li style={li_style.base}>Lien 3</li>
            </ul>
        </header>
    )
}