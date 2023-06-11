import react from 'react';

const NavBar = () => {
    return (
        <nav className='nav'>
            <a className='logo'>SuccesRoutine</a>
            <ul className='leftButtons'>
                <li>
                    <button className='leftButton' id='home'>Home</button>
                </li>
                <li>
                    <button className='leftButton' id='rankings'>Rankings</button>
                </li>
                <li>
                    <button className='leftButton' id='new'>New Routine</button>
                </li>
                <li>
                    <button className='leftButton' id='leftButton4'>Profile</button>
                </li>
            </ul>
            <ul className='rightButtons'>
                <li className='rightButton' id='login'>Login</li>
                <li className='rightButton'id='register'>Register</li>
            </ul>
        </nav>
    );
}

export default NavBar;
