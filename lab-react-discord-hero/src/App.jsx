import './App.css'
import discordLogoWhite from './assets/DiscordLogoWhite.png';
import menuIcon from './assets/MenuIcon.png';

function App() {

  return (
    <div className="App">
      <nav className='navbar'>
        <img src={discordLogoWhite} alt="Logo of Discord" className='logo'/>
        <img src={menuIcon} alt="Menu icon" className='menuIcon'/>
      </nav>
      <div className='hero-container'>
        <h1 className='hero-title'>Imagine a place...</h1>
        <p className='hero-text'>... where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className='button-container'>
          <button className='btn'>Download for Mac</button>
          <button className='btn btn-black'>Open Discord in your browser</button>
        </div>
      </div>
    </div>
  )
}

export default App
