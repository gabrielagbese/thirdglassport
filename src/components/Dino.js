import React from 'react'
import ground from "../images/ground.png";
import dinoStationary from "../images/dino-stationary.png";
import { useEffect } from 'react';

export default function Dino() {
   
    useEffect(() => {
        const worldElem = document.querySelector('[data-world]')
        const WORLD_WIDTH = 100;
        const WORLD_HEIGHT = 30;

        setPixelsToWorldScale()
        window.addEventListener("resize",setPixelsToWorldScale())
        console.log("we:"+worldElem)
    
        function setPixelsToWorldScale() {
            let worldToPixelScale;

            if(window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT)
            {
                worldToPixelScale = (window.innerWidth / WORLD_WIDTH)*0.80;
            }else
            {
                worldToPixelScale = (window.innerHeight / WORLD_HEIGHT)*0.95;
            }
    
            worldElem.style.width = WORLD_WIDTH * worldToPixelScale + "px";
            worldElem.style.height = WORLD_HEIGHT * worldToPixelScale + "px";
        }
        
        
    },);
    
  return (
    <div className='dino-wrapper'>
        <div className='above-nav'>
            <div className='world' id='world' data-world>
                <div className='score'>0</div>
                <div className='start-screen'>click to start</div>
                <img className='ground' src={ground}></img>
                <img className='ground' src={ground}></img>
                <img className='dino' src={dinoStationary}></img>
            </div>
        </div>
        <div className='below-nav'></div>
    </div>
  )
}
