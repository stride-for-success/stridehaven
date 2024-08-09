import './style/home.css'
import moneyLogo from './assets/money.svg'
import random from './assets/random.svg'
import trackStuff from './assets/trackStuff.svg'
import donation from './assets/donation.svg'


export function Home() {
    const marqueeElements = Array.from({length: 10}, (_, i) =>
        <div className="marqueeInside" key={i}>
            <a href="" target="_blank" aria-label="(opens in a new tab)"> <img src={random} alt="track stuff"/> </a>
        </div>);

    return (


        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h3 className="fancy italic">A nonprofit for</h3>
                    <h1>Empowering low-income runners to pursue their passion</h1>
                    <h3 id="subtitle" className="fancy">Through grants and essential support</h3>
                    <a href="/blog/our-mission" target="_blank" aria-label="our mission link (opens in a new tab)" className="miniClickHere">OUR
                        MISSION</a>
                </div>
                <img id="moneyImage" src={moneyLogo} alt="Image of money"/>
            </div>
            <br/>
            <hr/>
            <div id="sponsors">
                <h2 id="sponsorsText">Sponsors</h2>
                <h3 className="fancy italic"> We have no sponsors as of now. <a href="/sponsorships" aria-label="sponsorships link">Maybe you could be our first?</a></h3>
                <div className="marquee">
                    {marqueeElements}
                </div>
            </div>
            <hr/>
            <br/>
            <div className="divImage">
                <img id="trackStuff" src={trackStuff} alt="An image of track stuff"/>
                <div id="about">
                    <h2>Why</h2>
                    <h3 className="fancy italic">50% of U.S. track athletes who rank in the Top 10 in their event made less than $15,000 annually from their sport as of 2014.</h3>
                    <p id="aboutParagraph">
                        Runners deserve to be able to pursue their passion without worrying about financial constraints. We provide grants to low-income runners to help them achieve their dreams.
                    </p>
                </div>
            </div>
            <hr/>
            <br/>
            <div className="divImage">
                <div id="support">
                    <h2>Support Us</h2>
                    <p id="donationParagraph">
                        Stride For Success Foundation is a 501(c)(3) nonprofit organization. Your donation is tax-deductible. We are a 100% volunteer-run, so your donation goes directly to supporting our mission.
                    </p>

                    <a href="/donate" className="miniClickHere" aria-label="donations link">DONATE</a></div>
                <img id="donation" src={donation} alt="Donation Image. Shows a hand reaching out with a heart"/>
            </div>

        </>
    )
}
