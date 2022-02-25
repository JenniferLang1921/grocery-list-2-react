import { GiFruitBowl } from "react-icons/gi";


const Header = ({ title }) => {
  
 
  return (
    <header>
        <h1>{title}
        <GiFruitBowl />
        </h1>

    </header>
  )

}

Header.defaultProps = {
  title: "Default Title"
}

export default Header