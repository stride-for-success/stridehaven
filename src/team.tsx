import './style/team.css'
import people from './assets/people.svg'


export function Team() {
    return (
        <>
            <div className="divImage">
                <div id="topPageInfo">
                    <h1>OUR TEAM</h1>
                    <h3 id="subtitle" className="fancy"><i><u><b>100%</b></u></i> Volunteers, High School Students and Runners</h3>
                </div>
                <img id="people" src={people} alt=""/>
            </div>


        </>
    )
}
