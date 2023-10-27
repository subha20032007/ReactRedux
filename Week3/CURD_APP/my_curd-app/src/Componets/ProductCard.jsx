import React from 'react'
import styled from 'styled-components';
const ProductCard = ({id,name,image,brand,price,category,gender}) => {
  return (
    <div>
       <DIV key={id}>
            <image src={`https://via.placeholder.com/600/24f355`} alt={name}/>
            <h5>{name}</h5>
            <h5>{price}</h5>
            <p>Brand:{brand}</p>
            <p>Category:{category}</p>
            <p>Gender:{gender}</p>
            <button>Edit</button>
        </DIV>
    </div>
  )
}

export default ProductCard;

const DIV=styled.div`
    border:1px solid green;
    padding: 30px;

`
//123





// name": "inkkar tshirt",
//       "image": "http://localhost:3000/",
//       "brand": "inkkar",
//       "price": 432424,
//       "category": "top-wear",
//       "gender": "male",
//       "id": 1