import { render } from 'preact';
import { Router, RouteComponentProps, Link } from "@reach/router";
import { Home } from './home.tsx';
// import { RunningGrants } from './runningGrants.tsx';
// import { Donations } from './donations.tsx';
// import { Sponsorships } from './sponsorships.tsx';
import { Team } from './team.tsx';
import './style/main.css';
import facebook from './assets/facebook.svg';
import instagram from './assets/insta.svg';
import twitter from './assets/twitter.svg';



const App = () => (
    <>
        <div id="header">
            <h1 id="headerTitle">strideforsuccess</h1>
            <nav id="headerLinks">
                <Link to="/stridehaven/">HOME</Link>
                <Link to="/stridehaven/running-grants">RUNNING GRANTS</Link>
                <Link to="/stridehaven/donations">DONATIONS</Link>
                <Link to="/stridehaven/sponsorships">SPONSORSHIPS</Link>
                <Link to="/stridehaven/our-team">OUR TEAM</Link>
            </nav>
        </div>

        <Router basepath="/stridehaven">
            <RouterPage path="/" pageComponent={<Home />} />
            <RouterPage path="/our-team" pageComponent={<Team />} />
        </Router>

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

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

render(<App />, document.getElementById('app')!);

async function subscribeToNewsletter() {
    const email = (document.getElementById('newsletterEmail') as HTMLInputElement).value;
    console.log(`Subscribed ${email} to newsletter`);
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = 'Subscribed!';
    await new Promise(resolve => setTimeout(resolve, 1000));
    (document.getElementById('newsletterEmail') as HTMLInputElement).value = '';
}
