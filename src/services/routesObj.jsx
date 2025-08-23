import LoginPage from '../pages/LoginPage.jsx';
import RegistrationPage from '../pages/RegistrationPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import NoteCreateTab from '../components/NoteCreateTab.jsx';
import ShowTab from '../components/ShowTab.jsx';

export const routes = [
    {
        path:"/",
        element:<LoginPage />,
    },
    {
        path:"/registration",
        element:<RegistrationPage />,
    },
    {
        path:"/home",
        element:<HomePage />,
    },
    {
        path:"/notecreater",
        element:<ShowTab />,
    },
    
];

