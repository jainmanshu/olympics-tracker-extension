import { useState } from "react";
import { CountryData } from "../types/types";

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
      <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
      <input
        type="text"
        className="border mb-4 p-2 w-full"
        placeholder="Search for countries..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredData.map((country) => (
        <div key={country.organisation} className="country mb-4">
          <h4 className="font-bold">{country.description}</h4>
          <p>
            Gold:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")?.gold ||
              0}
          </p>
          <p>
            Silver:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")
              ?.silver || 0}
          </p>
          <p>
            Bronze:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")
              ?.bronze || 0}
          </p>
          <p>
            Total:{" "}
            {country.medalsNumber.find((type) => type.type === "Total")
              ?.total || 0}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
