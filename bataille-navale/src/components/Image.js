import React from 'react'
import {useDrag} from'react-dnd'

function Image({id,url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "imagees",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <img 
             ref={drag} 
         src={url} width="100px" height="40px"  style={{border: isDragging ? "4px solid green" : "0px"}} />
    )
}

export default Image
