import React, { useState } from 'react';

export default function CustomButton(value, action){
    return(
        <Button onClick={() => action()}>{value}</Button>
    )
}
