import React from 'react'
import Card from './Card'


const CardList = ({robots})=>{
    const cardsArray = robots.map((user,index)=>{
      return  <Card key={index} name={robots[index].name} id={robots[index].id}  email={robots[index].email}/>
    })

    return(
       <div>
            {cardsArray}
       </div> 
    )
}
export default CardList