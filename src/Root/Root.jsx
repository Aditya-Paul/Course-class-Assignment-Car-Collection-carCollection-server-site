import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import "../App.css";

const Root = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className={`App ${theme}`}>
            <ThemeSwitch></ThemeSwitch>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;