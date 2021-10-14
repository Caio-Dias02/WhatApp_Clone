import React from "react";
import './ChatListItem.css';

function ChatListItem () {

    return (

        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png" alt=""></img>

            <div className="chatListItem--lines">

                <div className="chatListItem--line">

                    <div className="chatListItem--name">Caio</div>
                    <div className="chatListItem--date">19:00</div>

                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>hey, sup</p>
                    </div>
                </div>

            </div>
        </div>

    );
}    

export default ChatListItem;
  