import React, { ReactElement, useState } from "react";

interface TabProps {
  children: ReactElement[];
}

const Tabs = ({ children }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div className="flex">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tablink ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {(child as ReactElement).props.label}
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div className={`tabcontent ${activeTab === index ? "" : "hidden"}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
