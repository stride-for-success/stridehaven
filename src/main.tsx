import { render } from 'preact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';import { Home } from './home.tsx';
import { RunningGrants, TravelGrant, EntryGrant, GearGrant, OtherGrant } from './grants.tsx';
import { About } from './about.tsx';
// import { Donations } from './donations.tsx';
import { Sponsors } from "./sponsors";
import { Contact } from "./contact";
import { NotFound} from "./notfound";
import { Team } from './team.tsx';
import './style/main.css';
import './style/index.css'
import facebook from './assets/logos/facebook.svg';
import instagram from './assets/logos/insta.svg';
import twitter from './assets/logos/twitter.svg';


let headerLinks = <nav id="headerLinks">
    <a href="/">HOME</a>
    <a href="/running-grants">RUNNING GRANTS</a>
    <a href="/donations">DONATIONS</a>
    <a href="/sponsorships">SPONSORSHIPS</a>
    <a href="/our-team">OUR TEAM</a>
    <a href="/contact">CONTACT</a>
</nav>

if (window.innerWidth < 880) {
    headerLinks = <select id="headerLinks" onChange={pageSwap}>
        <option value="">-MENU-</option>
        <option value="/">HOME</option>
        <option value="/running-grants">RUNNING GRANTS</option>
        <option value="/donations">DONATIONS</option>
        <option value="/sponsorships">SPONSORSHIPS</option>
        <option value="/our-team">OUR TEAM</option>
        <option value="/contact">CONTACT</option>
    </select>
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 880) {
        headerLinks = <select id="headerLinks" onChange={pageSwap}>
            <option value="/">HOME</option>
            <option value="/running-grants">RUNNING GRANTS</option>
            <option value="/donations">DONATIONS</option>
            <option value="/sponsorships">SPONSORSHIPS</option>
            <option value="/our-team">OUR TEAM</option>
            <option value="/contact">CONTACT</option>
        </select>

    } else {
        headerLinks = <nav id="headerLinks">
            <a href="/">HOME</a>
            <a href="/running-grants">RUNNING GRANTS</a>
            <a href="/donations">DONATIONS</a>
            <a href="/sponsorships">SPONSORSHIPS</a>
            <a href="/our-team">OUR TEAM</a>
            <a href="/contact">CONTACT</a>
        </nav>
    }

    render(<App/>, document.getElementById('app')!);
});


const App = () => (
    <>
        <div id="header">
            <h1 id="headerTitle">strideforsuccess</h1>
            {headerLinks}
        </div>
        <div className="content">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/our-team" element={<Team />} />
                    <Route path="/running-grants" element={<RunningGrants />} />
                    <Route path="/sponsorships" element={<Sponsors />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/grants/travel" element={<TravelGrant />} />
                    <Route path="/grants/entry" element={<EntryGrant />} />
                    <Route path="/grants/gear" element={<GearGrant />} />
                    <Route path="/grants/other" element={<OtherGrant />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
        <div id="footer">
            <div id="footerTop">
                <h4 id="copyright">Copyright © Stride For Success Foundation</h4>
                <div id="newsletter">
                    <input type="email" id="newsletterEmail" placeholder="Email"/>
                    <button id="subscribe" onClick={subscribeToNewsletter}>Subscribe</button>
                </div>
                <div id="socialMedia">
                    <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="facebook"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram"/></a>
                    <a href="https://www.twitter.com/" target="_blank"><img src={twitter} alt="twitter"/></a>
                </div>
            </div>
            <div id="footerBottom">
                <div id="infoLinks">
                    <a href="/privacy.html">Privacy Policy</a><br/>
                    <a href="/terms.html">Terms of Service</a><br/>
                    <a href="/contact">Contact Us</a>
                </div>
                <div id="moreLinks">
                    <a href="/about">About Us</a><br/>
                    <a href="/faq">FAQ</a><br/>
                    <a href="/blog">Blog</a>
                </div>
                <div id="evenMoreLinks">
                    <a href="/transparency">Our Transparency</a><br/>
                    <a href="/our-mission">Our Mission</a><br/>
                    <a href="/sponsorships">Sponsor Us</a>
                </div>
            </div>
        </div>
    </>
);


render(<App/>, document.getElementById('app')!);

//onload
window.addEventListener('load', () => {
    console.log('overflow')

    if (checkOverflow()) {
        const footer = document.getElementById('footer') as HTMLElement;
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    }
});

window.addEventListener('hashchange', fixFooter);
window.addEventListener('load', fixFooter);
window.addEventListener('resize', fixFooter);


async function subscribeToNewsletter() {
    const email = (document.getElementById('newsletterEmail') as HTMLInputElement).value;
    console.log(`Subscribed ${email} to newsletter`);
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = 'Subscribed!';
    await new Promise(resolve => setTimeout(resolve, 1000));
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = '';
}

function fixFooter() {
    console.log('overflow')

    if (checkOverflow()) {
        const footer = document.getElementById('footer') as HTMLElement;
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    }
}

function checkOverflow()
{
    const el = document.getElementsByTagName('html')[0];

    const elHeight = el.scrollHeight;
    const viewportHeight = window.innerHeight;
    console.log(elHeight, viewportHeight)

    return elHeight <= viewportHeight;
}


function pageSwap () {
    const page = (document.getElementById('headerLinks') as HTMLSelectElement).value;
    if (page) {
        window.location.href = page;
    }
}
