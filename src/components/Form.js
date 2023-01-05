import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import Lottie from 'react-lottie';
import animationData from './textanim.json'


export default function Form() {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    var chatTl = gsap.timeline()
    const messageEndRef = useRef(null)

    function showName(a) {
        setTimeout(() => {

            let chatOne = document.querySelector(".chatOne");
            let chatTwo = document.getElementById("chatTwo");
            let chatThree = document.getElementById("chatThree");

            let nameInput = document.querySelector(".name-input");
            let mailInput = document.querySelector(".mail-input");
            let messageInput = document.querySelector(".message-input");

            function scrollChat(a){
                setTimeout(() => {
                    let chatDisplay = document.querySelector(".chat-display");
                    chatDisplay.scrollTop = chatDisplay.scrollHeight;
                  },1000*a)
            }

            if(a == "chatOne" && nameInput.value.length > 0){
                chatOne.classList.add("chat-hidden");
                chatOne.classList.remove("chat-visible");
                chatTwo.classList.add("chat-visible");
                chatTwo.classList.remove("chat-hidden");

                chatTl.to(".name-me-chat", {duration: 0.5, opacity: 1, display: "block"})
                chatTl.to(".name-you-chat", {duration: 0.5, opacity: 1,delay: 0.5, display: "flex"})

                console.log(nameInput.value);
                
            }else if(a =="chatTwo" && mailInput.value.length > 0){
                chatTwo.classList.add("chat-hidden");
                chatTwo.classList.remove("chat-visible");
                chatThree.classList.add("chat-visible");
                chatThree.classList.remove("chat-hidden");
                console.log(mailInput.value);
                chatTl.to(".mail-me-chat", {duration: 0.5, opacity: 1, display: "block"})
                chatTl.to(".mail-you-chat", {duration: 0.5, opacity: 1,delay: 0.5, display: "flex"})
                scrollChat(0.5)
                scrollChat(1)
            }else if(a =="chatThree"){
                //const interval = setInterval(updateScroll,500);
                chatTl.to(".message-me-chat", {duration: 0.5, opacity: 1, display: "block"})
                chatTl.to(".message-you-chat", {duration: 0.5, opacity: 1,delay: 0.5, display: "flex"})
                scrollChat(0.1)
                scrollChat(0.5)
                scrollChat(1.25)
            }
        }, 0.1)
    }

    return (
        <div className='form-wrapper'>
            <form className='input-wrapper' data-multi-step>
                <div className="chat chat-visible chatOne" >
                    <input className='name-input' type="name" name="name" id="name" placeholder='name'></input>
                    <button className='chat-button' type="button" onClick={() => {showName("chatOne")}}>|</button>
                </div>
                <div className="chat chat-hidden" id='chatTwo'>
                    <input className='mail-input' type="email" name="name" id="name" placeholder='email'></input>
                    <button className='chat-button' type="button" onClick={() => {showName("chatTwo")}}>|</button>
                </div>
                <div className="chat chat-hidden" id='chatThree'>
                    <input className='message-input' type="text" name="name" id="name" placeholder='message'></input>
                    <button className='chat-button' type="button" onClick={() => {showName("chatThree")}}>|</button>
                </div>
                
            </form>
            <div className='chat-display'>
                
                <div className='me-chat name-me-chat'>
                    <p className='chat-text-wrap'>
                        default
                    </p>
                </div>
                <div className='you-chat name-you-chat'>
                    <p className='chat-text-wrap .chat-wrap-you'>
                        default
                    </p>
                    <div className="typing">
                    <Lottie options={defaultOptions} width={100} height={50}/>
                    </div>
                </div>
                <div className='me-chat mail-me-chat'>
                    <p className='chat-text-wrap'>
                        default
                    </p>
                </div>
                <div className='you-chat mail-you-chat'>
                    <p className='chat-text-wrap .chat-wrap-you'>
                        default
                    </p>
                    <div className="typing">
                    <Lottie options={defaultOptions} width={100} height={50}/>
                    </div>
                </div>
                <div className='me-chat message-me-chat'>
                    <p className='chat-text-wrap'>
                        default 
                    </p>
                </div>
                <div className='you-chat message-you-chat'>
                    <p className='chat-text-wrap .chat-wrap-you'>
                        default
                    </p>
                    <div ref={messageEndRef}></div>
                </div>
                
            </div>
        </div>
    )
}

