import Square from "./Square";
import React from 'react'

export default function Board(props) {
    return (
        
        <div className="board" style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${props.size}, 100px)`,
            gridGap: '10px'
        }}>
            {[...Array(props.size**2).keys()].map(x => 
            <Square value={props.list[x]} 
            key={x}
            onClick={() =>props.onClick(x)}
            face={props.face[x]}
            finish={props.finish[x]}
            />
            )}
        </div>
    )
}
