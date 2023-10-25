import {Link} from "react-router-dom"
import styled from "styled-components"

export const Navbar=()=>{

const Links=[{path:"/",element:"Home"},
{path:"/login",element:"Login"},
{path:"/add_products",element:"Admin"}
]
// console.log(Links)
    return(
        <>
        <DIV>
            {
                Links.map((el,i)=>(
                   <Link to={el.path}>{el.element}</Link>
                ))
            }
        </DIV>
       
        </>
    )
}

const DIV=styled.div`
  display:flex;
  justify-content: space-evenly;
    height:50px; 
`
//112