import React from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import Carousel from "nuka-carousel";

const Card = (props:any) => {
    const { name, age, distance, text, pics } = props.objs[props.i];
    return (
        <animated.div
        key={props.i}
        style={{
          transform: to(
            [props.x, props.y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          style={{
            transform: to([props.rot, props.scale], props.trans)
          }}
        >
          <div className="card">
            <Carousel>
              {pics.map( (pic:string)=> (
                <img src={pic} alt="profilePicture" />
              ))}
            </Carousel>
            <h2>{name},</h2>
            <h2>{age}</h2>
            <h5>{distance}</h5>
            <h5>{text}</h5>
          </div>
        </animated.div>
      </animated.div>
    )
}

export default Card