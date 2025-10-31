import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ap,{Helloworld} from "./App"
// import {Helloworld} from "./App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ap/>
    <Helloworld/>
  </StrictMode>,
)
