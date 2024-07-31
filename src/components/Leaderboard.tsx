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
              <span className="sr-only">Total</span>🏅
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
