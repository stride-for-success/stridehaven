import './style/home.css'
import './style/index.css'
import moneyLogo from './assets/money.svg'
import random from './assets/random.svg'
import trackStuff from './assets/trackStuff.svg'
import donation from './assets/donation.svg'


export function Home() {
    const marqueeElements = Array.from({length: 10}, (_, i) =>
        <div className="marqueeInside" key={i}>
            <a href="" target="_blank"> <img src={random} alt="track stuff"/> </a>
        </div>);

    return (


        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h3 className="fancy italic">A nonprofit for</h3>
                    <h1>Empowering low-income runners to pursue their passion</h1>
                    <h3 id="subtitle" className="fancy">Through grants and essential support</h3>
                    <a href="https://en.wikipedia.org/wiki/World_domination" target="_blank" className="miniClickHere">OUR
                        MISSION</a>
                </div>
                <img id="moneyImage" src={moneyLogo} alt=""/>
            </div>
            <br/>
            <hr/>
            <div id="sponsors">
                <h2 id="sponsorsText">Sponsors</h2>
                <div className="marquee">
                    {marqueeElements}
                </div>
            </div>
            <hr/>
            <br/>
            <div className="divImage">
                <img id="trackStuff" src={trackStuff} alt=""/>
                <div id="about">
                    <h1>Why</h1>
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
                    <h1>Support Us</h1>
                    <p id="donationParagraph">
                        Stride For Success Foundation is a 501(c)(3) nonprofit organization. Your donation is tax-deductible. We are a 100% volunteer-run organization, so your donation goes directly to supporting our mission.
                    </p>

                    <a href="https://en.wikipedia.org/wiki/World_domination" target="_blank" className="miniClickHere">OUR
                        MISSION</a></div>
                <img id="donation" src={donation} alt=""/>
            </div>

        </>
    )
}
