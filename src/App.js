import React, {useState, useEffect} from "react";
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListitem';
import ChatIntro from './components/ChatIntro'
import ChatWindow from "./components/ChatWindow";

function App() {

  const [chatlist, setChatList] = useState([{}, {}, {}, {},  {},  {},  {} ,  {},  {} , {}]);

  const [activeChat, setActiveChat] = useState({});

  return(

    <div className="app-window">

      {/* Beginning of sidebar */}
      <div className="sidebar">
      
      {/* Beginning of header */}
      <header>
        <img className="header--avatar" src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" alt=""></img>

        <div className="header--buttons">

            <div className="header--btn">
             <DonutLargeIcon style={{color: '#919191'}}/>
            </div>

            <div className="header--btn">
             <ChatIcon style={{color: '#919191'}}/>
            </div>

            <div className="header--btn">
             <MoreVertIcon style={{color: '#919191'}}/>
            </div>

        </div>

      </header>

    {/* End of header  */}

      <div className="search">
        <div className="search--input">

          <SearchIcon fontSize="small" style={{color: '#919191'}}/>

          <input type="search" placeholder="Search or start new chat"></input>
        </div>
      </div>

      <div className="chatlist">

        {chatlist.map((item, key)=>(

          <ChatListItem
            key={key}
            onClick={()=>setActiveChat(chatlist[key])}
          />
        ))}

      </div>

      </div>

          {/* Beginning of contentarea */}

      <div className="contentarea">
        
          {activeChat.chatId !== undefined &&
            <ChatWindow/>
          }

          {activeChat.chatId === undefined &&
          
          <ChatIntro/>
          }

      </div>

          {/* End of contentarea */}

    </div>
  );
}

export default App