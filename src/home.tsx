import './style/home.css'
import moneyLogo from './assets/money.svg'
import './style/index.css'
import {Marquee} from './components/marquee'

export function Home() {
    const sponsors = <>hi</>;

    return (


        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h3 className="fancy italic">A nonprofit for</h3>
                    <h1>Empowering low-income runners to pursue their passion</h1>
                    <h3 id="subtitle" className="fancy">Through grants and essential support</h3>
                    <a href="https://en.wikipedia.org/wiki/World_domination" target="_blank" className="miniClickHere">OUR MISSION</a>
                </div>
                <img id="moneyImage" src={moneyLogo}  alt=""/>
            </div>
            <hr/>
            <div id="sponsors">
                <h2>Sponsors</h2>
                {/*<Marquee input={sponsors}/>*/}
            </div>
        </>
    )
}
