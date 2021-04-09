import { Provider } from 'react-redux';

import QuestionForm from './components/questions/question_form'
import './App.scss';

function App({store}) {
  return (
  
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
          Hello Underworld
          </p>
          <QuestionForm />
        </header>
      </div>
    </Provider>
  );
}

export default App;
