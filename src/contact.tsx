import './style/contact.css'
import airplane from './assets/airplane.svg'

export function Contact() {
    return (
        <>
            <div className="divImage">
                <div id="contact">
                    <h3 className="fancy italic">How to</h3>
                    <h1>Contact Us</h1>
                    <h3 className="fancy">For any questions, comments, or concerns, please email us at <a
                        href="mailto:sadfasf@gmail.com">sadfasf@gmail.com</a> or fill out the form below.</h3>
                </div>
                <img id="airplane" src={airplane} alt=""/>
            </div>
            <hr/>
            <div id="form" style="width:100%;height:500px;" data-fillout-id="4yW4vBTVFqus" data-fillout-embed-type="standard"
                 data-fillout-inherit-parameters="" data-fillout-dynamic-resize=""></div>
            <script src="https://server.fillout.com/embed/v1/"></script>
        </>
    );
}