import React from 'react'

export const EbookCard = ({name, price, description, img}) => {
  return (
    <div className="card w-96 glass m-20">
  <figure><img src= {img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3 className="card-title">${price}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-amber-300 border-amber-500 hover:bg-amber-700  hover:border-amber-300 ">Ver detalles</button>
    </div>
  </div>
</div>
  )
}

export default EbookCard