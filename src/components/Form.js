import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './textanim.json'
import emailjs from '@emailjs/browser';



export default function Form() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            'gmail',
            'My Default Template',
            e.target,
            'ziQXvShVG_n6UqNnh'
          )
          .then(
            (result) => {
              alert('message sent successfully...');
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        }

    const [name, setName] = useState("name")
    const [email, setEmail] = useState("mail@site.com")
    const [message, setMessage] = useState("message")
    const [followUp, setFollowUp] = useState("follow up")

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    let scrollable = true;

    function scrollChat(a) {
        let chatDisplay = document.querySelector(".chat-display");
        setTimeout(() => {
            if (chatDisplay != null) {
                chatDisplay.scrollTop = chatDisplay.scrollHeight;
            }else{

            }
            
        }, 1000 * a)
    }

    
    const scrollInterval = setInterval(() => { scrollChat(0.1) }, 10);
    
    var chatTl = gsap.timeline()
    let chatOne = document.querySelector(".chatOne");
    const messageEndRef = useRef(null)

    setTimeout(() => {
        chatTl.to(".start-you-chat", { duration: 1.5, opacity: 1, delay: 0.5, display: "flex" })
        chatTl.to(".start-typing", { duration: 0.5, display: "none" })
        chatTl.to(".chat-wrap-you-start", { duration: 0, opacity: 1, display: "flex" })
        chatTl.to(".start-me-chat", { duration: 0, opacity: 1,delay: 1, display: "block" })
    }, 2000);
    
    let clicked = false;
    function chatStart(){
        if (clicked == false){
            chatTl.to(".chatOne", { duration: 0, opacity: 1})
            chatTl.to(".inquiry-you-chat", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
            chatTl.to(".inquiry-typing", { duration: 1, display: "none" })
            chatTl.to(".chat-wrap-you-inquiry", { duration: 0, opacity: 1, display: "flex" })
            chatTl.to(".inquiry-me-chat", { duration: 0, opacity: 1,delay: 1, display: "block" })
            clicked = true;
        }else{

        }
    }

    function showName(a) {
        setTimeout(() => {

            let chatOne = document.querySelector(".chatOne");
            let chatTwo = document.getElementById("chatTwo");
            let chatThree = document.getElementById("chatThree");
            let chatFour = document.getElementById("chatFour");

            let nameInput = document.querySelector(".name-input");
            let mailInput = document.querySelector(".mail-input");
            let messageInput = document.querySelector(".message-input");
            let followUpInput = document.querySelector(".follow-up-input");

            let typing = document.querySelector(".typing");
            let chatWrapYou = document.querySelector(".chat-wrap-you");


            if (a == "chatOne" && nameInput.value.length > 0) {

                setName(nameInput.value);

                chatOne.classList.add("chat-hidden");
                chatOne.classList.remove("chat-visible");
                chatTwo.classList.add("chat-visible");
                chatTwo.classList.remove("chat-hidden");

                
                chatTl.to(".name-me-chat", { duration: 0.5, opacity: 1, display: "block" })
                chatTl.to(".name-you-chat", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".name-typing", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-name", { duration: 0, opacity: 1, display: "flex" })
                

                //chatTl.to(".name-me-chat", { duration: 0.5, opacity: 1, display: "block" })
                chatTl.to(".name-you-chat-2", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".name-typing-2", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-name-2", { duration: 0, opacity: 1, display: "flex" })
                
                console.log(nameInput.value);
                

            } else if (a == "chatTwo" && mailInput.value.length > 0) {

                setEmail(mailInput.value);

                chatTwo.classList.add("chat-hidden");
                chatTwo.classList.remove("chat-visible");
                chatThree.classList.add("chat-visible");
                chatThree.classList.remove("chat-hidden");
                console.log(mailInput.value);

                chatTl.to(".mail-me-chat", { duration: 0.5, opacity: 1, display: "block" })
                chatTl.to(".mail-you-chat", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".mail-typing", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-mail", { duration: 0, opacity: 1, display: "flex" })

                chatTl.to(".mail-you-chat-2", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".mail-typing-2", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-mail-2", { duration: 0, opacity: 1, display: "flex" })
                
            } else if (a == "chatThree" && messageInput.value.length > 0) {

                setMessage(messageInput.value);

                chatThree.classList.add("chat-hidden");
                chatThree.classList.remove("chat-visible");
                chatFour.classList.add("chat-visible");
                chatFour.classList.remove("chat-hidden");
                console.log(mailInput.value);

                //const interval = setInterval(updateScroll,500);
                chatTl.to(".message-me-chat", { duration: 0.5, opacity: 1, display: "block" })
                chatTl.to(".message-you-chat", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".messages-typing", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-message", { duration: 0, opacity: 1, display: "flex" })
                chatTl.to(".message-you-chat-2", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".messages-typing-2", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-message-2", { duration: 0, opacity: 1, display: "flex" })
                
                
                scrollable = false;
                //return scrollable;
            } else if (a == "chatFour" && followUpInput.value.length > 0) {

                setFollowUp(followUpInput.value);

                chatTl.to(".follow-up-me-chat", { duration: 0.5, opacity: 1, display: "block" })
                chatTl.to(".follow-up-you-chat", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".follow-up-typing", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-follow-up", { duration: 0, opacity: 1, display: "flex" })
                chatTl.to(".follow-up-you-chat-2", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".follow-up-typing-2", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-follow-up-2", { duration: 0, opacity: 1, display: "flex" })
                chatTl.to(".follow-up-you-chat-3", { duration: 0.5, opacity: 1, delay: 0.5, display: "flex" })
                chatTl.to(".follow-up-typing-3", { duration: 1.5, display: "none" })
                chatTl.to(".chat-wrap-you-follow-up-3", { duration: 0, opacity: 1, display: "flex" })

                setTimeout(() => {
                    chatFour.style.opacity = "0";
                    chatFour.disbled = false;
                    chatFour.style.cursor = "default";
                }, 4000);
            }
        }, 0.1)
    }

    return (
        <div className='form-wrapper'>
            <form className='input-wrapper' ref={form} onSubmit={sendEmail} data-multi-step>
                <div className="chat chat-visible chatOne" >
                    <input className='name-input' type="name" name="name" id="name" placeholder='name' onClick={() => { chatStart() }}></input>
                    <button className='chat-button' type="button" onClick={() => { showName("chatOne") }}>|</button>
                </div>
                <div className="chat chat-hidden" id='chatTwo'>
                    <input className='mail-input' type="email" name="email" id="email" placeholder='email'></input>
                    <button className='chat-button' type="button" onClick={() => { showName("chatTwo") }}>|</button>
                </div>
                <div className="chat chat-hidden" id='chatThree'>
                    <input className='message-input' type="text" name="message" id="message" placeholder='message'></input>
                    <button className='chat-button' type="button" onClick={() => { showName("chatThree")}}>|</button>
                </div>
                <div className="chat chat-hidden" id='chatFour'>
                    <input className='follow-up-input' type="text" name="followup" id="followup" placeholder='follow up'></input>
                    <button className='chat-button' type="submit" onClick={() => { showName("chatFour"); setTimeout(() => { clearInterval(scrollInterval) }, 10000); }}>|</button>
                </div>

            </form>
            <div className='chat-display'>
                <div className='you-chat start-you-chat'>
                        <p className='chat-wrap-you chat-wrap-you-start'>
                            Want to work together? Want me on your team? Just want to chat? send me a message. &#128071;
                        </p>
                        <div className="typing start-typing">
                            <Lottie options={defaultOptions} width={50} height={25} />
                        </div>
                    </div>

                <div className='me-chat start-me-chat'>
                    <p className='chat-text-wrap'>
                        Sure!
                    </p>
                </div>

                <div className='you-chat inquiry-you-chat'>
                    <p className='chat-wrap-you chat-wrap-you-inquiry'>
                        What's your name?
                    </p>
                    <div className="typing inquiry-typing">
                        <Lottie options={defaultOptions} width={50} height={25} />
                    </div>
                </div>

                <div className='me-chat name-me-chat'>
                    <p className='chat-text-wrap'>
                        {name}
                    </p>
                </div>

                <div className='you-chat name-you-chat'>
                    <p className='chat-wrap-you chat-wrap-you-name'>
                        Nice to meet you &#x1F44B;
                    </p>
                    <div className="typing name-typing">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>

                <div className='you-chat name-you-chat-2'>
                    <p className='chat-wrap-you chat-wrap-you-name-2'>
                        What's your email?
                    </p>
                    <div className="typing name-typing-2">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>

                <div className='me-chat mail-me-chat'>
                    <p className='chat-text-wrap'>
                        {email}
                    </p>
                </div>
                <div className='you-chat mail-you-chat'>
                    <p className='chat-wrap-you chat-wrap-you-mail'>
                        Great! &#x1F44D;
                    </p>
                    <div className="typing mail-typing">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>
                <div className='you-chat mail-you-chat-2'>
                    <p className='chat-wrap-you chat-wrap-you-mail-2'>
                        So what would you like to talk about?
                    </p>
                    <div className="typing mail-typing-2">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>
                <div className='me-chat message-me-chat'>
                    <p className='chat-text-wrap'>
                        {message}
                    </p>
                </div>
                <div className='you-chat message-you-chat'>
                    <p className='chat-wrap-you chat-wrap-you-message'>
                        Thanks! &#x1F64F;
                    </p>
                    <div className="typing messages-typing">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>
                <div className='you-chat message-you-chat-2'>
                    <p className='chat-wrap-you chat-wrap-you-message-2'>
                        anything else you want to tell me?
                    </p>
                    <div className="typing messages-typing-2">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>
                <div className='me-chat follow-up-me-chat'>
                    <p className='chat-text-wrap'>
                        {followUp}
                    </p>
                </div>
                <div className='you-chat follow-up-you-chat'>
                    <p className='chat-wrap-you chat-wrap-you-follow-up'>
                        Ok, got it! &#x2705;
                    </p>
                    <div className="typing follow-up-typing">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>
                <div className='you-chat follow-up-you-chat-2'>
                    <p className='chat-wrap-you chat-wrap-you-follow-up-2'>
                        I'll get back to you as soon as I can &#128231;
                    </p>
                    <div className="typing follow-up-typing-2">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>
                <div className='you-chat follow-up-you-chat-3'>
                    <p className='chat-wrap-you chat-wrap-you-follow-up-3'>
                        Talk soon &#x270C;
                    </p>
                    <div className="typing follow-up-typing-3">
                        <Lottie options={defaultOptions} width={75} height={37.5} />
                    </div>
                </div>
            </div>
        </div>
    )
}

