import {render} from 'preact'
import {Home} from './home.tsx'
import './style/main.css'
import facebook from './assets/facebook.svg'
import instagram from './assets/insta.svg'
import twitter from './assets/twitter.svg'

const html =
    <>
        <div id="header">
            <h1 id="headerTitle">strideforsuccess</h1>
            <div id="headerLinks">
                <a href="https://www.mcdonalds.com/">HOME</a>
                <a href="https://www.airbnb.com/help">RUNNING GRANTS</a>
                <a href="https://www.gofundme.com/f/bjzqz-help-me-buy-gaming-pc">DONATIONS</a>
                <a href="https://247wallst.com/investing/2023/09/12/the-20-american-companies-with-the-worst-reputations/">SPONSORSHIPS</a>
                <a href="https://www.clownfest.live/">OUR TEAM</a>
            </div>
        </div>

        <Home/>

        <div id="footer">
            <h4 id="copyright">Copyright © Stride For Success Foundation</h4>
            <div id="socialMedia">
                <a href="https://www.facebook.com/"><img src={facebook} alt="facebook"/></a>
                <a href="https://www.instagram.com/"><img src={instagram} alt="instagram"/></a>
                <a href="https://www.twitter.com/"><img src={twitter} alt="twitter"/></a>
            </div>
        </div>
    </>


render(html, document.getElementById('app')!)

