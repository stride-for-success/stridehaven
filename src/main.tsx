import { render } from 'preact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';import { Home } from './home.tsx';
// import { RunningGrants } from './runningGrants.tsx';
// import { Donations } from './donations.tsx';
// import { Sponsorships } from './sponsorships.tsx';
import { NotFound} from "./notfound";
import { Team } from './team.tsx';
import './style/main.css';
import './style/index.css'
import facebook from './assets/facebook.svg';
import instagram from './assets/insta.svg';
import twitter from './assets/twitter.svg';



const App = () => (
    <>
        <div id="header">
            <h1 id="headerTitle">strideforsuccess</h1>
            <nav id="headerLinks">
                <a href="/">HOME</a>
                <a href="/running-grants">RUNNING GRANTS</a>
                <a href="/donations">DONATIONS</a>
                <a href="/sponsorships">SPONSORSHIPS</a>
                <a href="/our-team">OUR TEAM</a>
            </nav>
        </div>
        <div className="content">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-team" element={<Team />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Router>
        </div>
        <div id="footer">
            <h4 id="copyright">Copyright © Stride For Success Foundation</h4>
            <div id="newsletter">
                <input type="email" id="newsletterEmail" placeholder="Email" />
                <button id="subscribe" onClick={subscribeToNewsletter}>Subscribe</button>
            </div>
            <div id="socialMedia">
                <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram" /></a>
                <a href="https://www.twitter.com/" target="_blank"><img src={twitter} alt="twitter" /></a>
            </div>
        </div>
    </>
);


render(<App />, document.getElementById('app')!);

//onload
window.addEventListener('load', () => {
    console.log('overflow')

    if (checkOverflow()) {
        const footer = document.getElementById('footer') as HTMLElement;
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    }
});

window.addEventListener('hashchange', () => {
    console.log('overflow')

    if (checkOverflow()) {
        const footer = document.getElementById('footer') as HTMLElement;
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    }
});




async function subscribeToNewsletter() {
    const email = (document.getElementById('newsletterEmail') as HTMLInputElement).value;
    console.log(`Subscribed ${email} to newsletter`);
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = 'Subscribed!';
    await new Promise(resolve => setTimeout(resolve, 1000));
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = '';
}


function checkOverflow()
{
    const el = document.getElementsByTagName('html')[0];

    const elHeight = el.scrollHeight;
    const viewportHeight = window.innerHeight;
    console.log(elHeight, viewportHeight)

    return elHeight <= viewportHeight;
}