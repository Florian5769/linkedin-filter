const toggle = document.getElementById("toggleFilter");
const timeFrameInput = document.getElementById("timeFrame");
const applyBtn = document.getElementById("applyBtn");
const notLinkedInDiv = document.getElementById("notLinkedIn");
const controlsDiv = document.getElementById("linkedInControls");
const presetButtons = document.querySelectorAll(".preset-buttons button");

// Vérifie l'URL de l'onglet actif
chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  if (!tab || !tab.url.includes("linkedin.com/jobs/search")) {
    notLinkedInDiv.classList.remove("hidden");
    return;
  }

  controlsDiv.classList.remove("hidden");

  // Charger l’état sauvegardé
  chrome.storage.sync.get(["filterEnabled", "timeFrame"], (data) => {
    toggle.checked = data.filterEnabled || false;
    timeFrameInput.value = data.timeFrame || 86400;
  });

  // Toggle on/off
  toggle.addEventListener("change", () => {
    chrome.storage.sync.set({ filterEnabled: toggle.checked });
  });

  // Bouton appliquer
  applyBtn.addEventListener("click", () => {
    applyFilters(tab);
  });

  // Boutons presets rapides
  presetButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const seconds = btn.dataset.seconds;
      timeFrameInput.value = seconds;
      chrome.storage.sync.set({ timeFrame: parseInt(seconds, 10) });

      if (toggle.checked) {
        applyFilters(tab);
      }
    });
  });
});

// Fonction qui applique les filtres
function applyFilters(tab) {
  const enabled = toggle.checked;
  const timeFrame = parseInt(timeFrameInput.value, 10) || 86400;

  chrome.storage.sync.set({ filterEnabled: enabled, timeFrame });

  let url = new URL(tab.url);

  if (enabled) {
    url.searchParams.set("f_AL", "true");           // Recrute activement
    url.searchParams.set("f_TPR", "r" + timeFrame); // Temps en secondes
    url.searchParams.set("sortBy", "DD");           // Trier par date
  } else {
    url.searchParams.delete("f_AL");
    url.searchParams.delete("f_TPR");
    url.searchParams.delete("sortBy");
  }

  chrome.tabs.update(tab.id, { url: url.toString() });
}
