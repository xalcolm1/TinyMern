
import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { submitQuestion } from '../../actions/question_actions';
import '../../stylesheets/questions.scss';

const QuestionForm = ({ submitQuestion }) => {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState({
        name: '',
        text: '', 
        repo: '',
        live: ''
    });
    const handleUpdate = (location, value) => {
       
            setState({
                ...state,
                 [location]: value
            })
    
    
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setOpen(!open)
        submitQuestion(state);
    }   

    return (
        open ? (
            <div className="backdrop">
                <form 
                    className="question column form"
                    onSubmit={(event) => handleSubmit(event)}>
                

                    <input 
                        type='text' 
                        placeholder='name' 
                        onChange={(event) => handleUpdate('name', event.target.value)} 
                        value={state.name}/>

                    <textarea 
                        placeholder='text' 
                        onChange={(event) => handleUpdate('text', event.target.value)} 
                        value={state.text}/>

                    <input 
                        type='text' 
                        placeholder='repo' 
                        onChange={(event) => handleUpdate('repo', event.target.value)} 
                        value={state.repo}/>

                    <input 
                        type='text' 
                        placeholder='live' 
                        onChange={(event) => handleUpdate('live', event.target.value)} 
                        value={state.live}/>

                    <input type="submit"/>

                </form>
            </div>
        ) : (
            <button onClick={() => setOpen(!open)}>Ask a Question</button>
        )


    )
}

const mDTP = dispatch => ({
    submitQuestion: question => dispatch(submitQuestion(question))
})

export default connect(null, mDTP)(QuestionForm)