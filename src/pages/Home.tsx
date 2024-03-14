import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import useApi, { SearchResult, SearchType } from "../hooks/useApi";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const { SearcData } = useApi;

  const { searchTerm, setSearchTerm } = useState("");
  const { type, setType } = useState<SearchType>(SearchType.all);
  const { results, setResults } = useState<SearchResult>([]);

  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
      return;
    }
    const loadData = async () => {
      const result = await searchData(searchTerm, type);

      setResults(result);

      console.log("~file: Home.tsx:31 ~ result", result);
    };
    loadData();
  }, [searchTerm]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>My Movie App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar
          value={searchTerm}
          debounce={300}
          onIonChange={(e) => setSearchTerm(e.detail.value!)}
        ></IonSearchbar>
        <IonItem>
          <IonLabel>Select SearchType</IonLabel>
          <IonSelect value={type} onIonChange={(e) => setType(e.detail.value!)}>
            <IonSelectOption value="">All</IonSelectOption>
            <IonSelectOption value="movie">Movie</IonSelectOption>
            <IonSelectOption value="series">Series</IonSelectOption>
            <IonSelectOption value="episode">Episode</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonList>
          {results.map((item: SearchResult) => (
            <IonItem>
              <IonLabel>{item.Title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
