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
    <a href="/" aria-label="home link">HOME</a>
    <a href="/running-grants" aria-label="running grants link">RUNNING GRANTS</a>
    <a href="/donate" aria-label="donations link">DONATIONS</a>
    <a href="/sponsorships" aria-label="sponsorships link">SPONSORSHIPS</a>
    <a href="/our-team" aria-label="our team link">OUR TEAM</a>
    <a href="/contact" aria-label="contact link">CONTACT</a>
</nav>

if (window.innerWidth < 880) {
    headerLinks = <select id="headerLinks" onChange={pageSwap}>
        <option value="" aria-label="menu">-MENU-</option>
        <option value="/" aria-label="home link">HOME</option>
        <option value="/running-grants" aria-label="running grants link">RUNNING GRANTS</option>
        <option value="/donate" aria-label="donations link">DONATIONS</option>
        <option value="/sponsorships" aria-label="sponsorships link">SPONSORSHIPS</option>
        <option value="/our-team" aria-label="our team link">OUR TEAM</option>
        <option value="/contact" aria-label="contact link">CONTACT</option>
    </select>
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 880) {
        headerLinks = <select id="headerLinks" onChange={pageSwap}>
            <option value="" aria-label="menu">-MENU-</option>
            <option value="/" aria-label="home link">HOME</option>
            <option value="/running-grants" aria-label="running grants link">RUNNING GRANTS</option>
            <option value="/donate" aria-label="donations link">DONATIONS</option>
            <option value="/sponsorships" aria-label="sponsorships link">SPONSORSHIPS</option>
            <option value="/our-team" aria-label="our team link">OUR TEAM</option>
            <option value="/contact" aria-label="contact link">CONTACT</option>
        </select>

    } else {
        headerLinks = <nav id="headerLinks">
            <a href="/" aria-label="home link">HOME</a>
            <a href="/running-grants" aria-label="running grants link">RUNNING GRANTS</a>
            <a href="/donate" aria-label="donations link">DONATIONS</a>
            <a href="/sponsorships" aria-label="sponsorships link">SPONSORSHIPS</a>
            <a href="/our-team" aria-label="our team link">OUR TEAM</a>
            <a href="/contact" aria-label="contact link">CONTACT</a>
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
                    <a href="https://www.facebook.com/" target="_blank" aria-label="facebook link (opens in a new tab)"><img src={facebook} alt="facebook"/></a>
                    <a href="https://www.instagram.com/" target="_blank" aria-label="instagram link (opens in a new tab)"><img src={instagram} alt="instagram"/></a>
                    <a href="https://www.twitter.com/" target="_blank" aria-label="twitter link (opens in a new tab)"><img src={twitter} alt="twitter"/></a>
                    <a href="https://www.github.com/stride-for-success" target="_blank" aria-label="github link (opens in a new tab)"><img src={github} alt="github"/></a>
                </div>
                <div id="newsletter">
                    <label style="display:none" htmlFor="newsletterEmail">Subscribe to our newsletter</label>
                    <input type="email" id="newsletterEmail" placeholder="Email"/>
                    <button id="subscribe" onClick={subscribeToNewsletter}>Subscribe</button>
                </div>
            </div>
            <div id="footerBottom">
                <div id="infoLinks">
                    <a href="/privacy.html" aria-label="privacy policy link">Privacy Policy</a><br/>
                    <a href="/terms.html" aria-label="terms of service link">Terms of Service</a><br/>
                    <a href="/contact" aria-label="contact us link">Contact Us</a>
                </div>
                <div id="moreLinks">
                    <a href="/about" aria-label="about us link">About Us</a><br/>
                    <a href="/blog/faq" aria-label="frequently asked questions link">FAQ</a><br/>
                    <a href="/blog" aria-label="blog link">Blog</a>
                </div>
                <div id="evenMoreLinks">
                    <a href="/blog/transparency" aria-label="our transparency link">Our Transparency</a><br/>
                    <a href="/blog/our-mission" aria-label="our mission link">Our Mission</a><br/>
                    <a href="/sponsorships" aria-label="sponsorships link">Sponsor Us</a>
                </div>
            </div>
            <div id="footerPhoneBottom">
                <h4 id="copyrightPhone">Copyright © Stride For Success Foundation</h4>
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
