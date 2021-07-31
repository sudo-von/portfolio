import React from 'react'
/* Charts. */
import Graph from 'react-graph-vis'
/* Styled components. */
import { useTheme } from 'styled-components'

const Graphs = ({data}, ...props) => {

    /* Theme context. */
    const theme = useTheme()
    /* Edges and nodes styles. */
    const options = {
        autoResize: true,
        layout: { hierarchical: false },
        edges: { color: theme.text.color },
        nodes: {
            fixed: true,
            margin: 5,
            opacity: .7,
            borderWidth: 1,
            shape: 'text',
            shadow: {
                enabled: true,
                size: 1,
                x: 1,
                y: 1
            },
            font: {
                color: theme.text.highlighted_color,
                face: 'Roboto'
            }
        },
        height: '350px',
    }

    return (
        <div style={{margin: '10px'}}>
            <Graph graph={data} options={options}/>
        </div>
    )
}

export default Graphs