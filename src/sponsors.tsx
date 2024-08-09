import './style/sponsors.css'
import support from './assets/support.svg'
import random from './assets/random.svg'
import moneyImage from './assets/money.svg'
import donation from './assets/donation.svg'


export function Sponsors() {
    const marqueeElements = Array.from({length: 10}, (_, i) =>
        <div className="marqueeInside" key={i}>
            <a href="" target="_blank"> <img src={random} alt="track stuff"/> </a>
        </div>);

    return (


        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h3 className="fancy italic">To help support these runners</h3>
                    <h1>We need your help</h1>
                    <h3 id="subtitle" className="fancy">Become a sponsor today</h3>
                </div>
                <img id="supportImg" src={support} alt="two holding hands that resemble a heart"/>
            </div>
            <br/>
            <hr/>
            <div id="sponsors">
                <h2 id="sponsorsText">Sponsors</h2>
                <h3 className="fancy italic"> We have no sponsors as of now. Maybe you could be
                    our first?</h3>
                <div className="marquee">
                    {marqueeElements}
                </div>
            </div>
            <hr/>
            <br/>
            <div className="divImage">
                <img id="moneyImage" src={moneyImage} alt="money"/>
                <div id="about">
                    <h1>How</h1>
                    <h3 className="fancy italic">Partner with us</h3>
                    <p id="aboutParagraph">You can support us by donating at least $500, providing discounted or free goods and services, or contributing in other ways. All our partners will be featured on our website and any future merchandise. If you're interested, <a href="/contact" aria-label="contact link">please send us an email.</a></p>
                </div>
            </div>
            <hr/>
            <br/>
            <div className="divImage">
                <div id="support">
                    <h1>Support Us</h1>
                    <p id="donationParagraph">
                        Stride For Success Foundation is a 501(c)(3) nonprofit organization. Your donation is tax-deductible. We are a 100% volunteer-run, so your donation goes directly to supporting our mission.
                    </p>
                </div>
                <img id="donation" src={donation} alt="two hands holding a heart"/>
            </div>

        </>
    )
}
