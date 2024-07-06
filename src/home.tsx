import './style/home.css'
import moneyLogo from './assets/money.svg'
import './style/index.css'


export function Home() {

    return (
        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h3 className="fancy italic">A nonprofit for</h3>
                    <h1>Empowering low-income runners to pursue their passion</h1>
                    <h3 id="subtitle" className="fancy">Through grants and essential support</h3>
                </div>
                <img id="moneyImage" src={moneyLogo}  alt=""/>
            </div>
        </>
    )
}
