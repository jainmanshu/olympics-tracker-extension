import { useState } from "react";
import { getFlag } from "../misc/getFlagByProtocolOrder";
import { CountryData, Discipline } from "../types/types";

interface CountryLeaderboardProps {
  data: CountryData[];
}

const CountryLeaderboard = ({ data }: CountryLeaderboardProps) => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  const toggleExpand = (countryDescription: string) => {
    setExpandedCountry(
      expandedCountry === countryDescription ? null : countryDescription
    );
  };

  return (
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
            <>
              <tr
                key={country.description}
                className="border-t border-gray-700 text-white cursor-pointer"
                onClick={() => toggleExpand(country.description)}
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
              {expandedCountry === country.description &&
                country.disciplines.map(
                  (discipline: Discipline, index: number) => (
                    <tr key={index}>
                      <td className="py-2 px-2 pl-10 text-xs">
                        {discipline.name}
                      </td>
                      <td className="text-center py-2">
                        {discipline.gold || 0}
                      </td>
                      <td className="text-center py-2">
                        {discipline.silver || 0}
                      </td>
                      <td className="text-center py-2">
                        {discipline.bronze || 0}
                      </td>
                      <td className="text-center py-2 font-bold">
                        {discipline.total || 0}
                      </td>
                    </tr>
                  )
                )}
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountryLeaderboard;
