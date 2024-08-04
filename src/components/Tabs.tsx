interface TabProps {
  activeTab: "medals" | "leaderboard";
  onTabChange: (tab: "medals" | "leaderboard") => void;
}

const Tabs = ({ activeTab, onTabChange }: TabProps) => {
  return (
    <div className="mb-4 flex justify-center">
      <div className="inline-flex rounded-lg bg-gray-700">
        <button
          className={`py-2 px-4 text-sm font-medium text-center rounded-l-lg ${
            activeTab === "leaderboard"
              ? "bg-yellow-600"
              : "text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => onTabChange("leaderboard")}
        >
          Leaderboard
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium text-center rounded-r-lg ${
            activeTab === "medals"
              ? "bg-yellow-600"
              : "text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => onTabChange("medals")}
        >
          Medal Standings
        </button>
      </div>
    </div>
  );
};

export default Tabs;
