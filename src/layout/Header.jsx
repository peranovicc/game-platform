import  React  from "react"
import Logo from "../components/Logo"

const Header = ({ logedIn }) => {

    if(logedIn){
        return(
            <header>
                <Logo />
                <h1>Гејмер</h1>

                <button>Одјави се</button>
            </header>
        )
    }
    else {
        return (
            <header>
                <Logo />
                <h1>Гејмер</h1>

                <button>Регистрација</button>
                <button>Пријави се</button>
            </header>
        )
    }
}

export default Header
