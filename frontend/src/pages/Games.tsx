import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Games.css';

const Games: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Games</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Games</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br />
        <IonTitle>Games</IonTitle>
      </IonContent>
    </IonPage>
  );
};
export default Games;
