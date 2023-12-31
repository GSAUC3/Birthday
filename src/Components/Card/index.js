import React, { useRef, useState, useEffect } from 'react'
import './index.scss'

export const Card = () => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      if (videoRef.current && isHovered && isLoaded) {
        videoRef.current.play().catch(error => console.error(error));
      }
    }, [isHovered, isLoaded]);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsHovered(false);
    };
  
    const handleVideoLoaded = () => {
      setIsLoaded(true);
    };
    return (
        <div className=' relative flex items-center justify-center m-[300px] '>
            <div class="card">
                <div class="imgBox">
                    <div class="bark"></div>
                    <img src="https://github.com/GSAUC3/Birthday/blob/main/src/assets/img.jpeg?raw=true" />
                </div>
                <div class="details" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <h4 class="color1">Happy Birthday TITHIIIIII</h4>
                    <br />
                    <p>Dear Darling,</p>
                    <p>Wishing you a lovely birthday </p>
                    <p> and a very happy new year</p>
                    <p> May this year brings all  </p>
                    <p> that you deserve and ever wanted</p>
                    <p> I want you to be genuinly happy in life.</p>
                    <p> </p>

                    <p class="text-right">Happy Birthday,Tithi!</p>
                    <p class="text-right">♥Rajarshi</p>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <video
                            ref={videoRef}
                            width="640"
                            height="360"
                            // controls
                            onLoadedData={handleVideoLoaded}
                >                        <source src="https://github.com/GSAUC3/Birthday/blob/main/src/assets/wish.mp4?raw=true" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}
