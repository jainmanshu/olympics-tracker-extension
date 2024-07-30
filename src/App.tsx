import { useEffect, useState } from "react";
import Leaderboard from "./components/Leaderboard";
import MedalStandings from "./components/MedalStandings";
import Tabs from "./components/Tabs";
import useFetchMedalData from "./hooks/useFetchMedalData";
import { CountryData } from "./types/types";

const App = () => {
  const [activeTab, setActiveTab] = useState<"medals" | "leaderboard">(
    "medals"
  );

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
    <div className="w-[500px] bg-gray-800 text-white">
      <div className="text-white p-6 rounded-lg mx-4">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "medals" ? (
          <MedalStandings data={finalData} />
        ) : (
          <Leaderboard data={finalData} />
        )}
      </div>
    </div>
  );
};

export default App;
