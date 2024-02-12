import React from 'react'

const Sec1_Card = (props) => {
 
  return (
          <div >
    <strong className="text-2xl">{props.title}</strong>
    <br />
    <br />
    <p className="mt-4 mb-12 text-lg">{props.desc}</p>
</div>
  
  )
}

export default Sec1_Card
