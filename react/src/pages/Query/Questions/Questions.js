import React from 'react'
/* Custom components. */
import Container from './Container'
import Question from './Card'
/* Custom hooks. */
import useData from '../../../hooks/useData'

const Questions = (props) => {

    const { data } = useData('questions')

    return (
        <Container>
            {data &&
                data.map(question => 
                    <Question key={question.id} data={question}/>
                )
            }
        </Container>
    )
}

export default Questions