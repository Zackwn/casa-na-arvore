
import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import './MainTabs.css'

import { 
    home, 
    person, 
    gameController, 
    notifications, 
} from 'ionicons/icons';

/*Principais Abas */
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Games from '../pages/Games';
import Notifications from '../pages/Notifications';
// import Tutorial from '../pages/Tutorial';
// import Friend from '../pages/Friend';
import Quiz from "../pages/Quiz"
// import Leitor from "../pages/Leitor"

const MainTabs: React.FC = () => {

return (    
    <IonTabs>
    <IonRouterOutlet>
        
        <Redirect exact path="/abas" to="/abas/inicio" />

        <Route path="/abas/inicio" render={() => <Home />} exact />
        <Route path="/abas/perfil" render={() => <Profile />} exact />
        <Route path="/abas/games" render={() => <Games />} exact />
        <Route path="/abas/games/quiz" render={() => <Quiz />} exact />
        <Route path="/abas/notificacoes" render={() => <Notifications />} exact />
    </IonRouterOutlet>
    
    <IonTabBar slot="bottom" color="primary">
        <IonTabButton tab="home" href="/abas/inicio">
        <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="profile" href="/abas/perfil">
        <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="games" href="/abas/games">
        <IonIcon icon={gameController} />
        </IonTabButton>
        <IonTabButton tab="notifications" href="/abas/notificacoes">
        <IonIcon icon={notifications} />
        </IonTabButton>
    </IonTabBar>
    </IonTabs>
);
};

export default MainTabs;