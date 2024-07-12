import './style/about.css'
import aboutSvg from './assets/about.svg'

export function About() {
    return (
        <>
            <div className="divImage">
                <div id="contact">
                    <h3 className="fancy italic">About</h3>
                    <h1>Us</h1>
                    <h3 className="fancy">And why our mission is to improve the world of running.</h3>
                </div>
                <img id="aboutImg" src={aboutSvg} alt=""/>
            </div>
            <br/>
            <br/>
            <br/>
            <hr/>
            <div id="ourRoots">
                <h1>Our Roots</h1>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stride for Success Foundation was founded in 2024 by a group of high school runners (and a pole vaulter) that wanted
                to help change the running scene. While running may not appear to be an expensive sport, it's hard to compete at
                a high level without being able to afford what you need. Compared to other sports, sponsorships (how you make money)
                are hard to come by - especially for someone who doesn't have the time and resources to market themselves on social media or run major events.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We want to change that. We want to make sure that every runner has the opportunity to succeed, regardless of their financial
                situation. We believe that everyone should have the chance to run, and we want to help make that happen. We have been
                successful due to <a href="/our-team">our great team</a> and people just like you.</p>
                 <a href="/donate"><h3 className="fancy italic">Help us achieve our dream</h3></a>
            </div>
        </>
    );
}