# LinkedIn Jobs Filter (Chrome Extension)

This Chrome extension makes LinkedIn job hunting easier by allowing you to **filter job postings by exact time frames** (e.g. last 15 minutes, last hour, last 24h, last 48h, last week, last month).  

No more scrolling through outdated job posts – stay on top of the **freshest opportunities** 🚀.

---

## ✨ Features
- ✅ Automatically detects when you are on a LinkedIn Jobs search page.  
- ✅ Enable/disable filters with a **modern ON/OFF switch**.  
- ✅ Custom time frame (in seconds) input.  
- ✅ Quick presets: **15min, 1h, 24h, 48h, 7d, 30d**.  
- ✅ Automatically refreshes the page when applied.  
- ✅ Saves your preferences between sessions.  

---

## 📦 Installation (Developer Mode)
1. Download or clone this repository.  
2. Open **Google Chrome** and go to:  


3. Enable **Developer mode** (top-right).  
4. Click **Load unpacked** and select the extension folder.  
5. You should now see the LinkedIn Jobs Filter extension in your toolbar.  

---

## 🚀 Usage
1. Go to [LinkedIn Jobs]([https://www.linkedin.com/jobs/](https://www.linkedin.com/jobs/search/?currentJobId=4282946935&geoId=103264854&origin=JOBS_HOME_LOCATION_HISTORY&refresh=true).  
2. Click the extension icon in your Chrome toolbar.  
3. Use the toggle to enable filters.  
4. Choose a **preset** or enter a custom time frame (in seconds).  
- Example:  
  - `900` = last 15 minutes  
  - `3600` = last 1 hour  
  - `86400` = last 24 hours  
5. Click **Apply & Refresh** – the page reloads with only fresh job postings.  

---

## 🛠️ Example URL Modifications
- `f_TPR=r900` → Jobs posted in the last 15 minutes  
- `f_TPR=r3600` → Jobs posted in the last 1 hour  
- `f_TPR=r86400` → Jobs posted in the last 24 hours  
- `f_TPR=r604800` → Jobs posted in the last 7 days  

The extension automatically updates these URL parameters when active.

---

## 💡 Notes
- This extension is **not affiliated with LinkedIn**.  
- Works best when combined with LinkedIn’s job search filters (keywords, location, etc.).  
- You can always disable it via the toggle switch in the popup.  

