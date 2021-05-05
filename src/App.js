import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"/>
            </header>
            <nav className='nav'>
                <div>
                    <a>
                        Profile
                    </a>
                </div>
                <div>
                    <a>
                        Messages
                    </a>
                </div>
                <div>
                    <a>
                        News
                    </a>
                </div>
                <div>
                    <a>
                        Music
                    </a>
                </div>
                <div>
                    <a>
                        Settings
                    </a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                </div>
                <div>
                    ava + desk
                </div>
                <div>
                    my posts
                    <div>
                        new post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
