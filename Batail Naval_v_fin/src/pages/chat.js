import React, { useState, useEffect, useRef } from "react";
import "../Chat.scss";
const { Manager } = require("socket.io-client");



export default function Chat() {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const manager = new Manager("http://localhost:3001");
  const socket = manager.socket("/");

  useEffect(() => {
    socket.on("your id", (id) => {
      setYourID(id);
    });

    socket.on("message", (message) => {
      receivedMessage(message);
    });
  });

  function receivedMessage(message) {
    setMessages((oldMessages) => [...oldMessages, message]);
  }

  function sendMessage(e) {
    e.preventDaufault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socket.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="page-chat">
      <div className="container-chat">
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <div className="row-chat" key={index}>
                <div className="message-chat">{message.body}</div>
              </div>
            );
          }
          return (
            <div className="row2-chat" key={index}>
              <div className="message-received">{message.body}</div>
            </div>
          );
        })}
      </div>
      <form className="form-chat" onSubmit={sendMessage}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Say somthing ...."
        />
        <button className="btn-chat">Send</button>
      </form>
    </div>
  );
}








// import "./Chat.scss";

// const { Manager } = require("socket.io-client");

// function Message({ user, message }) {
//   return;
//   <div>
//     <span>{user}:</span>
//     <span>{message}</span>
//   </div>;
// }

// function Messages() {
//   let message = ["Bonjour "];
//   return (
//     <>
//       <div class="container">
//       <ul id="messages">
//         <ol>{message}</ol>
//       </ul>

//       </div>
//     </>
//   );
// }

// function InputMessage() {
//   return (
//     <form id="form" action="">
//       <input id="input" autocomplete="off" type="text" /><button>Send</button>
//     </form>
//   );
// }

//         const manager = new Manager("http://localhost:3001");
//         const socket = manager.socket("/");
//           //recevoir un message
//         socket.on('message', (msg) => {
//             console.log('RESEIVE :' +msg);
//         })
//         // Envoyer un message sur serveur
//         socket.emit('message', 'msg');

//         // Avoir un message du serveur

// export default function Chat() {
//   return (
//     <div className="App">
//       <Messages />
//       <InputMessage/>
//     </div>
//   );
// }

{
  /* <header className="App-header">
      
      <button onClick={() =>{
        const manager = new Manager("http://localhost:3001");
        const socket = manager.socket("/"); 
          //recevoir un message
        socket.on('message', (message) => {
            console.log('RESEIVE :' +message);
        })
        // Envoyer un message sur serveur
        socket.emit('message', 'test');
       
        // Avoir un message du serveur
      }}></button>
</header> */
}
