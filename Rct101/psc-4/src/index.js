
import ReactDom from "react-dom/client"
import App from "./App"
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from "./Context/AuthContext"
const root=ReactDom.createRoot(document.getElementById('root'))

root.render(
  <>
  
  <BrowserRouter>
  <AuthContextProvider>
  <ChakraProvider>
  <App/>
  </ChakraProvider>
  </AuthContextProvider>
  </BrowserRouter>
  </>
)