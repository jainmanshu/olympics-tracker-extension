import { useEffect, useState } from "react";
import { CountryData } from "../types/types";
import PinnedSection from "./PinnedSection";
import UnpinnedSection from "./UnpinnedSection";

interface CountryLeaderboardProps {
  data: CountryData[];
}

const CountryLeaderboard = ({ data }: CountryLeaderboardProps) => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [pinnedCountries, setPinnedCountries] = useState<string[]>([]);
  const [isPinnedCollapsed, setIsPinnedCollapsed] = useState<boolean>(false);

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get(["pinnedCountries"], (result) => {
        if (result.pinnedCountries) {
          setPinnedCountries(result.pinnedCountries);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.set({ pinnedCountries });
    }
  }, [pinnedCountries]);

  const toggleExpand = (countryDescription: string) => {
    setExpandedCountry(
      expandedCountry === countryDescription ? null : countryDescription
    );
  };

  const togglePinCountry = (countryDescription: string) => {
    setPinnedCountries((prevState) =>
      prevState.includes(countryDescription)
        ? prevState.filter((country) => country !== countryDescription)
        : [...prevState, countryDescription]
    );
  };

  const togglePinnedCollapse = () => {
    setIsPinnedCollapsed(!isPinnedCollapsed);
  };

  const pinnedData = data.filter((country) =>
    pinnedCountries.includes(country.description)
  );
  const unpinnedData = data.filter(
    (country) => !pinnedCountries.includes(country.description)
  );

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
          <th className="w-10 py-2 text-center">
            <span className="sr-only">Pin</span>📌
          </th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {pinnedData.length > 0 && (
          <PinnedSection
            pinnedData={pinnedData}
            isPinnedCollapsed={isPinnedCollapsed}
            togglePinnedCollapse={togglePinnedCollapse}
            expandedCountry={expandedCountry}
            toggleExpand={toggleExpand}
            togglePinCountry={togglePinCountry}
          />
        )}
        <UnpinnedSection
          unpinnedData={unpinnedData}
          expandedCountry={expandedCountry}
          toggleExpand={toggleExpand}
          togglePinCountry={togglePinCountry}
        />
      </tbody>
    </table>
  );
};

export default CountryLeaderboard;
