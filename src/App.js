// import {ChatEngine} from "react-chat-engine";
import './App.css';
import {ChatEngine} from 'react-chat-engine';
// import { ChatFeed } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';


const projectID="f744f94e-8671-428c-a5a6-b9e4314c5756";
const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(

        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // userName="secretadmire"
            // userSecret="abcd"
            // userName="Kartik"
            // userSecret="1234"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;