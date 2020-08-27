import React, { useState } from 'react'

import { css } from "emotion"

export const Asif = () =>{
    const [background, setBackground] = useState("#fdfdfd");
    const [font, setFont] = useState("#424246");

    const setStyle = (background, font)=>{
        setBackground(background);
        setFont(font);
    }





    const asif = css`
     max-width: 700px;
     padding: 60px;
     background-color: ${background};
     h1{
         font-family: "Times New Roman", Times, serif;
         font-weight: 400;
         font-size: 30px;
         margin-bottom: 10px;
         color: ${font};
     }
     p{
         font-family:"Poppins", sans-serif;
         font-weight: 300;
         font-size: 16px;
         margin-bottom: 20px;
         color: ${font};

     }
    
    
    `;
    const asifButtons = css`
     button{
        font-family:"Poppins", sans-serif;
        font-weight: 500;
        font-size: 16px;
        padding: 10px 30px;
        margin-right: 20px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
     }

    
    
    `;
    const blackButton = css`
     color: #fdfdfd;
     background-color: #424246;

    
    `;
    const blueButton = css`
     color: #fdfdfd;
     background-color: #1d499b;

    
    `;
    const darkButton = css`
     color: #fdfdfd;
     background-color: #FF8C00;

    
    `;
    const yellowButton = css`
     color: #424246;
     background-color: #f9d648;

    
    `;





    return(
        <div className={asif}>
            <h1>LIFE IS ALWAYS BEAUTIFULL</h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
            </p>
            <div className={asifButtons}>
                <button onMouseEnter={()=> setStyle("#424246", "#fdfdfd")}
                onMouseOut={()=> setStyle("#fdfdfd", "#424246")} className={blackButton}>Black</button>
                <button onMouseEnter={()=> setStyle(" #1d499b", "#fdfdfd")}
                onMouseOut={()=> setStyle("#fdfdfd", "#424246")} className={blueButton}>Blue</button>
                <button onMouseEnter={()=> setStyle("#FF8C00", "#fdfdfd")}
                onMouseOut={()=> setStyle("#fdfdfd", "#424246")} className={darkButton}>Dark</button>
                <button onMouseEnter={()=> setStyle("#f9d648", "#fdfdfd")}
                onMouseOut={()=> setStyle("#fdfdfd", "#424246")} className={yellowButton}>Yellow</button>

            </div>


        </div>
    )
}