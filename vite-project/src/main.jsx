import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import './style.css'

const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <Header />
        <MainContent />
    </>
)