import { getFlag } from "../misc/getFlagByProtocolOrder";
import { CountryData } from "../types/types";

interface LeaderboardProps {
  data: CountryData[];
}

const Leaderboard = ({ data }: LeaderboardProps) => {
  return (
    <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
      <table className="w-full">
        <thead className="sticky top-0 bg-gray-800 custom-scrollbar">
          <tr className="text-gray-400 text-sm">
            <th className="text-left py-2 px-4">Team</th>
            <th className="w-10 py-2 text-center">
              <span className="sr-only">Gold</span>🥇
            </th>
            <th className="w-10 py-2 text-center">
              <span className="sr-only">Silver</span>🥈
            </th>
            <th className="w-10 py-2 text-center">
              <span className="sr-only">Bronze</span>🥉
            </th>
            <th className="w-10 py-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((country) => {
            const totalMedals = country.medalsNumber.find(
              (type) => type.type === "Total"
            );
            return (
              <tr
                key={country.description}
                className="border-t border-gray-700 text-white"
              >
                <td className="py-2 px-2 flex items-center">
                  <span className="mr-3 text-gray-500">{country?.rank}</span>
                  <div className="w-5 h-4 mr-2">
                    {getFlag(country.protocolOrder)}
                  </div>
                  {country.description}
                </td>
                <td className="text-center py-2">{totalMedals?.gold || 0}</td>
                <td className="text-center py-2">{totalMedals?.silver || 0}</td>
                <td className="text-center py-2">{totalMedals?.bronze || 0}</td>
                <td className="text-center py-2 font-bold">
                  {totalMedals?.total || 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
