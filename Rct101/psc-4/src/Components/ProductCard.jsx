
import { Center,Image, Stack,Box,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function ProductCard ({id,img,title,price}){
    
  return (
    <Center>
         <Link to={`/products/${id}`}>
        <Box m="20px" w="200px" h="300px" boxShadow="lg" rounded="md">
      
        <Center> <Image h="150px" w="120px" src={img}/> </Center>
            <Stack>
                <Text p="20px">{title.substring(0,30)+"..."}</Text>
                <Text>{price}</Text>
            </Stack>
        </Box>
        </Link>
    </Center>
  )
}



export default ProductCard