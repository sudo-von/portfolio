import React from 'react'
import Graph from 'react-graph-vis';
import { useTheme } from 'styled-components';

const Graphs = () => {

    /* Get theme context. */
    const theme = useTheme();
    /* Nodes and edges that will be rendered later. */
    /* TODO: Move this data to a database to fetch the data and store it using hooks. */
    const data = {
        nodes: [
            { id: 1, label: 'Javascript'},
            { id: 2, label: 'React'},
            { id: 3, label: 'React Native'},
            { id: 4, label: 'NPM'},
            { id: 5, label: 'JQuery'},
            { id: 6, label: 'Webpack'},
            { id: 7, label: 'Vue'},
            { id: 8, label: 'NodeJS'},
            { id: 9, label: 'Express'},
            { id: 10, label: 'CSS' },
            { id: 11, label: 'SASS'},
            { id: 12, label: 'Docker'},
            { id: 13, label: 'Git'},
            { id: 14, label: 'Golang'},
            { id: 15, label: 'PHP'},
            { id: 16, label: 'Python'},
            { id: 17, label: 'Flask'}
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 1, to: 4 },
            { from: 1, to: 5 },
            { from: 1, to: 6 },
            { from: 1, to:7 },
            { from: 8, to: 9},
            { from: 9 },
            { from: 10, to: 11},
            { from: 12 },
            { from: 13 },
            { from: 14 },
            { from: 15 },
            { from: 16, to: 17 }
        ]
    };
    /* Graphs styles. */
    const options = {
        layout: { hierarchical: false },
        edges: { color: theme.text.color },
        nodes: {
            margin: 5,
            opacity: .7,
            borderWidth: 1,
            shape: 'text',
            shadow: {
                enabled: true,
                size: 1,
                x: 1,
                y: 1,
            },
            font: {
                color: theme.text.highlighted_color,
                face: 'Roboto'
            },
        },
        height: '500px'
    };
    /* Custom events. */
    const events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    }
    return (
        <Graph graph={data} options={options} events={events}/>
    );
}

export default Graphs;