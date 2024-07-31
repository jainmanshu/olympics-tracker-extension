import { CountryData } from "../types/types";
import CountryRow from "./CountryRow";

interface UnpinnedSectionProps {
  unpinnedData: CountryData[];
  expandedCountry: string | null;
  showUnpinnedHeader: boolean;
  toggleExpand: (description: string) => void;
  togglePinCountry: (description: string) => void;
}

const UnpinnedSection = ({
  unpinnedData,
  expandedCountry,
  toggleExpand,
  togglePinCountry,
  showUnpinnedHeader = false,
}: UnpinnedSectionProps) => (
  <>
    {showUnpinnedHeader && (
      <tr className="bg-gray-700 rounded-t-lg mt-2">
        <td colSpan={6} className="py-2 px-4 text-gray-300 font-bold">
          Other Countries
        </td>
      </tr>
    )}
    {unpinnedData.map((country) => (
      <CountryRow
        key={country.description}
        country={country}
        isExpanded={expandedCountry === country.description}
        isPinned={false}
        toggleExpand={toggleExpand}
        togglePinCountry={togglePinCountry}
      />
    ))}
  </>
);

export default UnpinnedSection;
