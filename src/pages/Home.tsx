import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import useApi from "../hooks/useApi";
import { useState } from "react";

const Home: React.FC = () => {
  const { searchData } = useApi;

  const { searchTerm, setSearchTerm } = useState("");
  const { type, setType } = useState("");
  const { results, setResults } = useState([]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My movie app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
