import { useState } from "react";
import { CountryData } from "../types/types";
import CountryLeaderboard from "./CountryLeaderboard";

interface LeaderboardProps {
  data: CountryData[];
}

const Leaderboard = ({ data }: LeaderboardProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = data.filter((country) =>
    country.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-lg mb-4 p-2 w-full text-gray-500 text-md"
        placeholder="Search for countries.... 🔎"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        <CountryLeaderboard data={filteredData} />
      </div>
    </div>
  );
};

export default Leaderboard;
