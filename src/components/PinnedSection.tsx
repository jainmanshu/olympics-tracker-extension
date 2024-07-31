import { CountryData } from "../types/types";
import CountryRow from "./CountryRow";

interface PinnedSectionProps {
  pinnedData: CountryData[];
  isPinnedCollapsed: boolean;
  togglePinnedCollapse: () => void;
  expandedCountry: string | null;
  toggleExpand: (description: string) => void;
  togglePinCountry: (description: string) => void;
}

const PinnedSection = ({
  pinnedData,
  isPinnedCollapsed,
  togglePinnedCollapse,
  expandedCountry,
  toggleExpand,
  togglePinCountry,
}: PinnedSectionProps) => (
  <>
    <tr
      className="bg-gray-700 cursor-pointer rounded-t-lg"
      onClick={togglePinnedCollapse}
    >
      <td colSpan={6} className="py-2 px-4 text-gray-300 font-bold">
        <div className="flex justify-between">
          <span>
            Pinned Favorites {isPinnedCollapsed ? `(${pinnedData.length})` : ""}
          </span>
          <span>{isPinnedCollapsed ? "▼" : "▲"}</span>
        </div>
      </td>
    </tr>
    {!isPinnedCollapsed &&
      pinnedData.map((country) => (
        <CountryRow
          key={country.description}
          country={country}
          isExpanded={expandedCountry === country.description}
          isPinned={true}
          toggleExpand={toggleExpand}
          togglePinCountry={togglePinCountry}
        />
      ))}
  </>
);

export default PinnedSection;
