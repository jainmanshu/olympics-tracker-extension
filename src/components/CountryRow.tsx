import React from "react";
import { getFlag } from "../misc/getFlagByProtocolOrder";
import { CountryData, Discipline } from "../types/types";
import DisciplineRow from "./DisciplineRow";

interface CountryRowProps {
  country: CountryData;
  isExpanded: boolean;
  isPinned: boolean;
  toggleExpand: (description: string) => void;
  togglePinCountry: (description: string) => void;
}

const CountryRow = ({
  country,
  isExpanded,
  isPinned,
  toggleExpand,
  togglePinCountry,
}: CountryRowProps) => {
  const totalMedals = country.medalsNumber.find(
    (type) => type.type === "Total"
  );

  return (
    <React.Fragment>
      <tr
        className="border-t border-gray-700 text-white cursor-pointer"
        onClick={() => toggleExpand(country.description)}
      >
        <td className="py-2 px-2 flex items-center">
          <span className="mr-3 text-gray-500">{country?.rank}</span>
          <div className="w-5 h-4 mr-2">{getFlag(country.protocolOrder)}</div>
          {country.description}
          <span
            className="ml-2 text-gray-500"
            title="Click to view disciplines"
          />
        </td>
        <td className="text-center py-2">{totalMedals?.gold || 0}</td>
        <td className="text-center py-2">{totalMedals?.silver || 0}</td>
        <td className="text-center py-2">{totalMedals?.bronze || 0}</td>
        <td className="text-center py-2 font-bold">
          {totalMedals?.total || 0}
        </td>
        <td className="text-center py-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePinCountry(country.description);
            }}
            title={isPinned ? "Unpin country" : "Pin country"}
          >
            {isPinned ? "📌" : "📍"}
          </button>
        </td>
      </tr>
      {isExpanded &&
        country.disciplines.map((discipline: Discipline, index: number) => (
          <DisciplineRow key={index} discipline={discipline} />
        ))}
    </React.Fragment>
  );
};

export default CountryRow;
