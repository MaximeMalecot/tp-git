import React, { useState } from 'react';

export default function CustomButton( { value, action } ){
    return(
        <button onClick={() => action()}>{value}</button>
    )
}
