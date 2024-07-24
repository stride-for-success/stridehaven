import { render } from 'preact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';import { Home } from './home.tsx';
import { RunningGrants, TravelGrant, EntryGrant, GearGrant, OtherGrant } from './grants.tsx';
import { About } from './about.tsx';
import { Blog, BlogPost } from './blog.tsx';
import { Sponsors } from "./sponsors";
import { Contact } from "./contact";
import { NotFound} from "./notfound";
import { Team } from './team.tsx';
import './style/main.css';
import './style/index.css'
import facebook from './assets/logos/facebook.svg';
import instagram from './assets/logos/insta.svg';
import twitter from './assets/logos/twitter.svg';
import github from './assets/logos/github.svg';
import {Donate} from "./donate";


let headerLinks = <nav id="headerLinks">
    <a href="/">HOME</a>
    <a href="/running-grants">RUNNING GRANTS</a>
    <a href="/donate">DONATIONS</a>
    <a href="/sponsorships">SPONSORSHIPS</a>
    <a href="/our-team">OUR TEAM</a>
    <a href="/contact">CONTACT</a>
</nav>

if (window.innerWidth < 880) {
    headerLinks = <select id="headerLinks" onChange={pageSwap}>
        <option value="">-MENU-</option>
        <option value="/">HOME</option>
        <option value="/running-grants">RUNNING GRANTS</option>
        <option value="/donate">DONATIONS</option>
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
            <option value="/donate">DONATIONS</option>
            <option value="/sponsorships">SPONSORSHIPS</option>
            <option value="/our-team">OUR TEAM</option>
            <option value="/contact">CONTACT</option>
        </select>

    } else {
        headerLinks = <nav id="headerLinks">
            <a href="/">HOME</a>
            <a href="/running-grants">RUNNING GRANTS</a>
            <a href="/donate">DONATIONS</a>
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
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/*" element={<BlogPost />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
        <div id="footer">
            <div id="footerTop">
                <h4 id="copyright">Copyright © Stride For Success Foundation</h4>
                <div id="socialMedia">
                    <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="facebook"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram"/></a>
                    <a href="https://www.twitter.com/" target="_blank"><img src={twitter} alt="twitter"/></a>
                    <a href="https://www.github.com/stride-for-success" target="_blank"><img src={github} alt="twitter"/></a>
                </div>
                <div id="newsletter">
                    <input type="email" id="newsletterEmail" placeholder="Email"/>
                    <button id="subscribe" onClick={subscribeToNewsletter}>Subscribe</button>
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
                    <a href="/blog/faq">FAQ</a><br/>
                    <a href="/blog">Blog</a>
                </div>
                <div id="evenMoreLinks">
                    <a href="/blog/transparency">Our Transparency</a><br/>
                    <a href="/blog/our-mission">Our Mission</a><br/>
                    <a href="/sponsorships">Sponsor Us</a>
                </div>
            </div>
            <div id="footerPhoneBottom">
                <h4 id="copyright">Copyright © Stride For Success Foundation</h4>
            </div>
        </div>
    </>
);


render(<App/>, document.getElementById('app')!);

//onload
window.addEventListener('load', () => {
    fixFooter();
});


window.addEventListener('hashchange', fixFooter);
window.addEventListener('load', fixFooter);
window.addEventListener('resize', fixFooter);
const resizeObserver = new ResizeObserver(() => {
    fixFooter();
});

// start observing a DOM node
resizeObserver.observe(document.body)

async function subscribeToNewsletter() {
    const email = (document.getElementById('newsletterEmail') as HTMLInputElement).value;
    console.log(`Subscribed ${email} to newsletter`);
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = 'Subscribed!';
    await new Promise(resolve => setTimeout(resolve, 1000));
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = '';
}



function fixFooter() {
    console.log('run')
    if (checkOverflow()) {
        const footer = document.getElementById('footer') as HTMLElement;
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    } else {
        const footer = document.getElementById('footer') as HTMLElement;
        footer.style.position = 'relative';
        footer.style.bottom = 'auto';
    }
}

function checkOverflow()
{
    const el = document.getElementsByTagName('html')[0];

    const elHeight = el.scrollHeight;
    const viewportHeight = window.innerHeight;

    return elHeight <= viewportHeight;
}


function pageSwap () {
    const page = (document.getElementById('headerLinks') as HTMLSelectElement).value;
    if (page) {
        window.location.href = page;
    }
}
