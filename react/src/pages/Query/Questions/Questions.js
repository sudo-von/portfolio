import React from 'react'
/* Custom components. */
import Question from './Card'
import Loader from '../../../components/Loader'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
import MuiAlert from '@material-ui/lab/Alert';
/* Custom hooks. */
import useQuestions from '../../../hooks/useQuestions'

const styles = {
    highlightedText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    }
}

const Questions = () => {

    const { questions, isLoading } = useQuestions()
    
    if ( isLoading ){
        return (
            <Grid item xs={12} md={8}>
                <Loader>Cargando preguntas...</Loader>
            </Grid>
        )
    }

    return (
        <Grid item xs={12} md={8}>
            {questions &&
                questions.map(question => 
                    <Question key={question.id} data={question}/>
                )
            }
            {!questions.length &&
               <MuiAlert elevation={6} variant="filled" severity="info">No hay preguntas contestadas de momento, vuelve más tarde...</MuiAlert>
            }
        </Grid>
    )
}

export default Questions