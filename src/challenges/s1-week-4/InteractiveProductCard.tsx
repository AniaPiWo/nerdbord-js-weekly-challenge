'use client'
import React from "react";
import css from "./InteractiveProductCard.module.css";
import Image from "next/image";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle3 from "../../assets/Rectangle3.png";
import Rectangle4 from "../../assets/Rectangle4.png";
import Rectangle5 from "../../assets/Rectangle5.png";
import Rectangle6 from "../../assets/Rectangle6.png";

export const InteractiveProductCard = () => {

  return (
    <div className={css.cardGrid}>

      <div className={css.cardItem}>
        <p className={css.cardText}>Small plant</p>
        <Image 
          className={css.cardImg} 
          src={Rectangle1} 
          alt='Small plant'
          width={245}
          height={147}
        />
      </div>

      <div className={css.cardItem}>
        <p className={css.cardText}>Long plant</p>
        <Image 
          className={css.cardImg} 
          src={Rectangle2} 
          alt='Long plant'
          width={245}
          height={147}
        />
      </div>
      
      <div className={css.cardItem}>
        <p className={css.cardText}>Stylish plant</p>
        <Image 
          className={css.cardImg} 
          src={Rectangle3} 
          alt='Stylish plant'
          width={245}
          height={147}
        />
      </div>
      
      <div className={css.cardItem}>
        <p className={css.cardText}>Glass plant</p>
        <Image 
          className={css.cardImg} 
          src={Rectangle4} 
          alt='Glass plant'
          width={245}
          height={147}
        />
      </div>
      
      <div className={css.cardItem}>
        <p className={css.cardText}>Standard plant</p>
        <Image 
          className={css.cardImg} 
          src={Rectangle5} 
          alt='Standard plant'
          width={245}
          height={147}
        />
      </div>
      
      <div className={css.cardItem}>
        <p className={css.cardText}>'Cosy plant'</p>
        <Image 
          className={css.cardImg} 
          src={Rectangle6} 
          alt='Cosy plant'
          width={245}
          height={147}
        />
      </div>


    </div>
  );
};



/* 'use client'
import React from "react";
import css from "./InteractiveProductCard.module.css";
import { plants } from "./plants.mjs";
import Image from "next/image";

export const InteractiveProductCard = () => {

  return (
    <div className={css.cardGrid}>

      {plants.map((plant, index) => {
        const imagePath = "/"
        const imagePath2 = `@/img/${plant.imageSrc}`
        const imageAlt = plant.text;
        
        console.log(imagePath);

        return (
          <div className={css.cardItem} key={index}>
            <p className={css.cardText}>{plant.text}</p>
            <Image 
              className={css.cardImg} 
              src={imagePath} 
              alt={imageAlt}   
              width={500}
              height={300}/>
          </div>
        );
      })}
    </div>
  );
}; */