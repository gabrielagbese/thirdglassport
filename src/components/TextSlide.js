import * as React from "react"
import { useEffect } from "react";
import gsap from "gsap";
import memoji from "../images/mem.png"
import { SlSocialLinkedin } from "react-icons/sl"
import { CgFileDocument } from "react-icons/cg"



const TextSlide = ({props}) => {

  useEffect(() => {
    let i = 0;

    const randomizeText = () => {
      const phrase = document.querySelector('.random-word');
      const compStyles = window.getComputedStyle(phrase);
      const animation = compStyles.getPropertyValue('animation');
      const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
      
      const phrases = [props.first,props.second, props.third]   
      i = randomNum(i, phrases.length);
      const newPhrase = phrases[i];
      
      setTimeout(() => {
        phrase.textContent = newPhrase;
      }, 300); // time to allow opacity to hit 0 before changing word
    }
    
    const randomNum = (num, max) => {
        if(i === 0){
            return 1;
        }else if(i === 1){
            return 2;
        }
        else if(i === 2){
            return 0;
        }
    }
    
    const getAnimationTime = () => {
      const phrase = document.querySelector('.random-word');
      const compStyles = window.getComputedStyle(phrase);
      let animation = compStyles.getPropertyValue('animation');
      
      
      
      
      const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
      return animationTime;
    }
    
    randomizeText();
    setInterval(randomizeText, getAnimationTime());
  },);
    return(
        <div className="">
            <span className="random-word"></span>
        </div>
    )
}

export default TextSlide;