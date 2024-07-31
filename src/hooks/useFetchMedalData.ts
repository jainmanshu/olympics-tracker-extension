import { useEffect, useState } from "react";
import { CountryData, MedalStandings } from "../types/types";

const useFetchMedalData = () => {
  const [data, setData] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sph-c-api.olympics.com/summer/competition/api/ENG/medals"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const jsonData: MedalStandings = await response.json();
        setData(jsonData.medalStandings.medalsTable);
        // if (typeof chrome !== "undefined" && chrome.storage) {
        //   chrome.storage.local.set({
        //     medalData: jsonData.medalStandings.medalsTable,
        //   });
        // }
      } catch (error) {
        setError("Something went wrong. Pleaase try again!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // if (
    //   typeof chrome !== "undefined" &&
    //   chrome.storage &&
    //   chrome.storage.onChanged
    // ) {
    //   const handleStorageChange = (changes: {
    //     [key: string]: chrome.storage.StorageChange;
    //   }) => {
    //     if (changes.medalData) {
    //       setData(changes.medalData.newValue);
    //     }
    //   };
    //   chrome.storage.onChanged.addListener(handleStorageChange);

    //   return () => {
    //     chrome.storage.onChanged.removeListener(handleStorageChange);
    //   };
    // }
  }, []);

  return { data, loading, error };
};

export default useFetchMedalData;
