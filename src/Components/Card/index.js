import React from 'react'
import './index.scss'

export const Card = () => {



    return (
        <div className=' relative flex items-center justify-center m-[300px] '>
            <div class="card">
                <div class="imgBox">
                    <div class="bark"></div>
                    <img src="https://github.com/GSAUC3/Birthday/blob/main/src/assets/img.jpeg?raw=true" />
                </div>
                <div class="details">
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
                <video width="640" height="360" controls>
                    <source src="tithi/src/assets/wish.mp4" type="video/mp4" />
                </video>
                </div>
            </div>
        </div>
    )
}
