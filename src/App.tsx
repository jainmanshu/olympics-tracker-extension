import { useState } from "react";
import Leaderboard from "./components/Leaderboard";
import LoadingSkeleton from "./components/LoadingSkeleton";
import MedalStandings from "./components/MedalStandings";
import Tabs from "./components/Tabs";
import useFetchMedalData from "./hooks/useFetchMedalData";

const App = () => {
  const [activeTab, setActiveTab] = useState<"medals" | "leaderboard">(
    "medals"
  );

  const { data, loading, error } = useFetchMedalData();

  if (loading)
    return (
      <div className="w-[500px] h-[300px] bg-gray-800 flex space-x-2 justify-center items-center">
        <LoadingSkeleton />
      </div>
    );

  if (error) return <div className="text-red-500 text-2xl">Error: {error}</div>;

  return (
    <div className="w-[500px] bg-gray-800 text-white">
      <div className="text-white p-6 rounded-lg mx-4">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "medals" ? (
          <MedalStandings data={data} />
        ) : (
          <Leaderboard data={data} />
        )}
      </div>
    </div>
  );
};

export default App;
