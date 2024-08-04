import { getFlag } from "../misc/getFlagByProtocolOrder";
import { CountryData } from "../types/types";

interface MedalStandingsProps {
  data: CountryData[];
}

const MedalStandings = ({ data }: MedalStandingsProps) => {
  const topCountries = data.sort((a, b) => a.rank - b.rank).slice(0, 3);

  const getBackgroundColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-600";
    if (rank === 2) return "bg-gray-500";
    return "bg-yellow-900";
  };

  const getHeight = (rank: number) => {
    if (rank === 1) return "h-40";
    if (rank === 2) return "h-32";
    return "h-24";
  };

  const getTextColor = (rank: number) => {
    if (rank === 1) return "text-yellow-600";
    if (rank === 2) return "text-gray-500";
    return "text-yellow-900";
  };

  // Reorder countries for display
  const [firstPlace, secondPlace, thirdPlace] = topCountries;

  const renderCountry = (country: CountryData) => {
    const totalMedals = country.medalsNumber.find(
      (type) => type.type === "Total"
    );
    return (
      <div
        key={country.organisation}
        className={`flex flex-col items-center ${
          country.rank === 1
            ? "order-2"
            : country.rank === 2
            ? "order-3"
            : "order-1"
        }`}
      >
        <div className="w-16 h-10 mb-2 text-5xl">
          {getFlag(country.protocolOrder)}
        </div>
        <div
          className={`${getBackgroundColor(country.rank)} ${getHeight(
            country.rank
          )} w-32 flex flex-col gap-1 items-center justify-evenly text-sm rounded-t-lg`}
        >
          <div className="font-bold">{country.description}</div>
          <div className="text-sm">
            🥇 {totalMedals?.gold || 0} 🥈 {totalMedals?.silver || 0} 🥉{" "}
            {totalMedals?.bronze || 0}
          </div>
          <div className={`mt-2 font-semibold`}>
            Total: {totalMedals?.total || 0}
          </div>
        </div>
        <div
          className={`mt-2 text-2xl font-bold ${getTextColor(country.rank)}`}
        >
          {country.rank}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-1 items-center font-bold mb-4 text-yellow-400">
        <h2 className="text-2xl">Paris Olympics 2024</h2>
        <h3>Medal Standings (Top 3)</h3>
      </div>
      <div className="flex items-end justify-center space-x-4">
        {renderCountry(thirdPlace)}
        {renderCountry(secondPlace)}
        {renderCountry(firstPlace)}
      </div>
    </div>
  );
};

export default MedalStandings;
