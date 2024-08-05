function o(...e){let n=chrome.runtime.id;return"chrome-extension://"+n+"/"+e.join("/")}function i(e){return new Promise((n,t)=>chrome.windows.create({url:e},r=>n(r)))}export{o as g,i as w};
