import { useEffect, useState } from "react";
import Leaderboard from "./components/Leaderboard";
import Tabs from "./components/Tabs";
import Top3 from "./components/Top3";
import useFetchMedalData from "./hooks/useFetchMedalData";
import { CountryData } from "./types/types";

const App = () => {
  const { data, loading, error } = useFetchMedalData();
  const [storedData, setStoredData] = useState<CountryData[]>([]);

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get("medalData", (result) => {
        if (result.medalData) {
          setStoredData(result.medalData);
        }
      });
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const finalData = data.length ? data : storedData;

  return (
    <div className="bg-gray-100 p-4">
      <Tabs>
        <div>
          <h1>Top- 3</h1>
          <Top3 data={finalData} />
        </div>
        <div>
          <h1>Leaderboard</h1>
          <Leaderboard data={finalData} />
        </div>
      </Tabs>
    </div>
  );
};

export default App;
