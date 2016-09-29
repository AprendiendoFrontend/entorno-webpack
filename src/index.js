import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = ( props ) => <h1>{props.heading}</h1>

const Gatito = ( props ) => {
  return (
    <div>
      <HelloWorld heading={props.heading}/>
      {/* <HelloWorld {...props}/> */}
      <img src={props.img} />
      <small>{props.caption}</small>
    </div>
  )
}

ReactDOM.render(
  <Gatito
  caption={'Foto de Gatito'}
  img={'http://67.media.tumblr.com/avatar_04df97dc523a_128.png'}
  heading={'Hello Woooorld from PROPS!'} />,
  document.getElementById('app')
);
