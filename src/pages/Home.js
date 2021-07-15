
import illustration from '../assets/illustration.svg';
import logo from '../assets/logo.svg';
import icon from '../assets/icon.svg';

export const Home = () => {

    return (

        <div>
            <div>
                <img src={illustration} alt="talking" />
                <h1>Ask me any thing</h1>
                <p>When you ask questions you learn. So don't be shy.</p>
            </div>

            <div>
                <img src={logo} alt="Ask me" />
                <button>
                    <img src={icon} alt="google Icon" />
                    Login with Google to create a Room
                </button>
            </div>
        </div>
    )
}