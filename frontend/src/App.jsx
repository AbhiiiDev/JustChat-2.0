import  {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed.jsx'

const App=()=>{
    return(
        <ChatEngine
        height='100vh'
        projectID='01472057-4daa-4240-83b5-55cc3387e02f'
        userName='Ironman'
        userSecret='ironman'
        renderChatFeed={(ChatAppProps)=> <ChatFeed {...ChatAppProps}/> }
        
        />
    )
}
export default App;