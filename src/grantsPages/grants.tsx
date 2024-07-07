import '../style/grants.css'
import plane from '../assets/plane.svg'
import entry from '../assets/entry.svg'
import receive from '../assets/receive.svg'
import gear from '../assets/gear.svg'
import question from '../assets/question.svg'

export function RunningGrants() {
    return (
        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h1>GRANTS</h1>
                    <h3 id="subtitle" className="fancy">The support you need for your running journey.</h3>
                </div>
                <img id="moneyImage" src={receive} alt=""/>
            </div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <div id="grants">
                <div className="grant">
                    <h2>Travel</h2>
                    <img id="planeImg" src={plane} alt="Travel"/>
                </div>
                <div className="grant">
                    <h2>Entry</h2>
                    <img src={entry} alt="Entry"/>
                </div>
                <div className="grant">
                    <h2>Gear</h2>
                    <img src={gear} alt="Shoe"/>
                </div>
                <div className="grant">
                    <h2>Something Else</h2>
                    <img src={question} alt="Shoe"/>
                </div>
            </div>
        </>);
}