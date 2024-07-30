const fetchMedalData = async () => {
  try {
    const response = await fetch(
      "https://sph-c-api.olympics.com/summer/competition/api/ENG/medals"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    chrome.storage.local.set({ medalData: data.medalStandings.medalsTable });
  } catch (error) {
    console.error("Error fetching medal data:", error);
  }
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("fetchMedalData", { periodInMinutes: 30 });
  fetchMedalData(); // Fetch immediately upon installation
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "fetchMedalData") {
    fetchMedalData();
  }
});
