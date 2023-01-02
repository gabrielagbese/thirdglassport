import React from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';


export default function Form() {

    var chatTl = gsap.timeline()

    function showName(a) {
        setTimeout(() => {

            let chatOne = document.querySelector(".chatOne");
            let chatTwo = document.getElementById("chatTwo");
            let chatThree = document.getElementById("chatThree");

            let nameInput = document.querySelector(".name-input");
            let mailInput = document.querySelector(".mail-input");
            let messageInput = document.querySelector(".message-input");

            function updateScroll(){
                let chatDisplay = document.querySelector(".chat-display");
                chatDisplay.scrollTop = chatDisplay.scrollHeight;
            }

            setInterval(updateScroll,1010);

            if(a == "chatOne" && nameInput.value.length > 0){
                chatOne.classList.add("chat-hidden");
                chatOne.classList.remove("chat-visible");
                chatTwo.classList.add("chat-visible");
                chatTwo.classList.remove("chat-hidden");

                chatTl.to(".name-me-chat", {duration: 1, opacity: 1, display: "block"})
                chatTl.to(".name-you-chat", {duration: 1, opacity: 1,delay: 1, display: "block"})

                console.log(nameInput.value);
            }else if(a =="chatTwo" && mailInput.value.length > 0){
                
                chatTwo.classList.add("chat-hidden");
                chatTwo.classList.remove("chat-visible");
                chatThree.classList.add("chat-visible");
                chatThree.classList.remove("chat-hidden");
                console.log(mailInput.value);

                chatTl.to(".mail-me-chat", {duration: 1, opacity: 1, display: "block"})
                chatTl.to(".mail-you-chat", {duration: 1, opacity: 1,delay: 1, display: "block"})
            }else if(a =="chatThree"){
                chatTl.to(".message-me-chat", {duration: 1, opacity: 1, display: "block"})
                chatTl.to(".message-you-chat", {duration: 1, opacity: 1,delay: 1, display: "block"})
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
                    <p className='chat-text-wrap'>
                        default
                    </p>
                </div>
                <div className='me-chat mail-me-chat'>
                    <p className='chat-text-wrap'>
                        default
                    </p>
                </div>
                <div className='you-chat mail-you-chat'>
                    <p className='chat-text-wrap'>
                        default
                    </p>
                </div>
                <div className='me-chat message-me-chat'>
                    <p className='chat-text-wrap'>
                        default 
                    </p>
                </div>
                <div className='you-chat message-you-chat'>
                    <p className='chat-text-wrap'>
                        default
                    </p>
                </div>
            </div>
        </div>
    )
}

