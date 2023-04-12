import  {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm.jsx'


const App=()=>{



    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
        height='100vh'
        projectID='01472057-4daa-4240-83b5-55cc3387e02f'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(ChatAppProps)=> <ChatFeed {...ChatAppProps}/> }
        
        />
    )
}
export default App;