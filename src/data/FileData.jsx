export const FilesArray = [
  {
    id: 1,
    projectName: "VSCODE-CLONE",
    fileName: "Modal.js",
    language: "javascript",
    content: `
    (function () {
      document.querySelectorAll(".open-modal").forEach(function (trigger) {
          trigger.addEventListener("click", function () {
              hideAllModalWindows();
              showModalWindow(this);
          });
      });
      
      document.querySelectorAll(".modal-hide").forEach(function (closeBtn) {
          closeBtn.addEventListener("click", function () {
              hideAllModalWindows();
          });
      });
      
      document.querySelector(".modal-fader").addEventListener("click", function () {
          hideAllModalWindows();
      });
  })();
  
  function showModalWindow (buttonEl) {
      var modalTarget = "#" + buttonEl.getAttribute("data-target");
      
      document.querySelector(".modal-fader").className += " active";
      document.querySelector(modalTarget).className += " active";
  }
  
  function hideAllModalWindows () {
      var modalFader = document.querySelector(".modal-fader");
      var modalWindows = document.querySelectorAll(".modal-window");
      
      if(modalFader.className.indexOf("active") !== -1) {
          modalFader.className = modalFader.className.replace("active", "");
      }
      
      modalWindows.forEach(function (modalWindow) {
          if(modalWindow.className.indexOf("active") !== -1) {
              modalWindow.className = modalWindow.className.replace("active", "");
          }
      });
  }
          `,
  },
  {
    id: 2,
    fileName: "Modal.css",
    language: "css",
    content: `
    .darkBG {
        background-color: rgba(0, 0, 0, 0.2);
        width: 100vw;
        height: 100vh;
        z-index: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
      }
      
      .centered {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .modal {
        width: 250px;
        height: 170px;
        background: white;
        color: white;
        z-index: 10;
        border-radius: 16px;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
      }
      
      .modalHeader {
        height: 50px;
        background: white;
        overflow: hidden;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      }
      
      .heading {
        margin: 0;
        padding: 10px;
        color: #2c3e50;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
      }
      
      .modalContent {
        padding: 10px;
        font-size: 14px;
        color: #2c3e50;
        text-align: center;
      }
      
      .modalActions {
        position: absolute;
        bottom: 2px;
        margin-bottom: 10px;
        width: 100%;
      }
      
      .actionsContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      
      .closeBtn {
        cursor: pointer;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 8px;
        border: none;
        font-size: 18px;
        color: #2c3e50;
        background: white;
        transition: all 0.25s ease;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
        position: absolute;
        right: 0;
        top: 0;
        align-self: flex-end;
        margin-top: -7px;
        margin-right: -7px;
      }
      
      .closeBtn:hover {
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
        transform: translate(-4px, 4px);
      }
      
      .deleteBtn {
        margin-top: 10px;
        cursor: pointer;
        font-weight: 500;
        padding: 11px 28px;
        border-radius: 12px;
        font-size: 0.8rem;
        border: none;
        color: #fff;
        background: #ff3e4e;
        transition: all 0.25s ease;
      }
      
      .deleteBtn:hover {
        box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
        transform: translateY(-5px);
        background: #ff3e4e;
      }
      
      .cancelBtn {
        margin-top: 10px;
        cursor: pointer;
        font-weight: 500;
        padding: 11px 28px;
        border-radius: 12px;
        font-size: 0.8rem;
        border: none;
        color: #2c3e50;
        background: #fcfcfc;
        transition: all 0.25s ease;
      }
      
      .cancelBtn:hover {
        box-shadow: none;
        transform: none;
        background: whitesmoke;
      }
          `,
  },
  {
    id: 3,
    fileName: "index.js",
    language: "javascript",
    content: `
        import React from "react";
        import ReactDOM from "react-dom/client";
        import "./index.css";
        import App from "./App";
    
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
        );
          `,
  },

  {
    id: 4,
    fileName: "index.html",
    language: "html",
    content: `
<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app"/>

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <title>VSCode - Clone</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
    `,
  },
  {
    id: 5,
    fileName: "package.json",
    language: "json",
    content: `
    "name": "vscode-clone",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "highlight.js": "^11.7.0",
      "marked-react": "^1.3.2",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-highlight": "^0.15.0",
      "react-highlight-js": "^0.15.0",
      "react-icons": "^4.7.1",
      "react-lowlight": "^3.0.0",
      "react-resizable": "^3.0.4",
      "react-scripts": "5.0.1",
      "react-split": "^2.0.14",
      "styled-components": "^5.3.6",
      "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
    `,
  },
];
