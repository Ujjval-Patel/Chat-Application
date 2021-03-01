import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "5b8cc57c-c966-4e1b-b413-f466637860b4"
            userName = "Ujjval2206"
            userSecret = "123"
            renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
}

export default App;