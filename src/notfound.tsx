import './style/notfound.css'
import image from './assets/notfound.svg'

export function NotFound() {
    return (
        <div id="notFound">
            <h1>404 - Not Found!</h1>
            <img src={image} alt="Not Found ):"/>
            <h3>This page either does not exist or has not been developed yet.</h3>

        </div>
    );
}