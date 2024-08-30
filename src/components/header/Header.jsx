
import nbaLogo from "../../assets/nba-logo.png"
import data from "../../data"

const Header = () => {


  return (
    <div className='text-center header'>

      <img src={nbaLogo} alt="" width="200px"/>
      <h1>NBA Legends</h1>
      
    </div>
  )
}

export default Header