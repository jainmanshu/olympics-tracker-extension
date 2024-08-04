import { Discipline } from "../types/types";

interface DisciplineRowProps {
  discipline: Discipline;
}

const DisciplineRow = ({ discipline }: DisciplineRowProps) => (
  <tr className="bg-gray-800 text-white text-xs">
    <td className="py-2 px-2 pl-10">{discipline.name}</td>
    <td className="text-center py-2">{discipline.gold || 0}</td>
    <td className="text-center py-2">{discipline.silver || 0}</td>
    <td className="text-center py-2">{discipline.bronze || 0}</td>
    <td className="text-center py-2 font-bold">{discipline.total || 0}</td>
  </tr>
);

export default DisciplineRow;
