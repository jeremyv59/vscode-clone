export const FilesArray = [
  {
    id: 1,
    fileName: "Modal.js",
    language: "javascript",
    content: `
          import React from "react";
          import styles from "./Modal.module.css";
          import { RiCloseLine } from "react-icons/ri";
          
          const Modal = ({ setIsOpen }) => {
            return (
              <>
                <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
                <div className={styles.centered}>
                  <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                      <h5 className={styles.heading}>Dialog</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                      <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className={styles.modalContent}>
                      Are you sure you want to delete the item?
                    </div>
                    <div className={styles.modalActions}>
                      <div className={styles.actionsContainer}>
                        <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                          Delete
                        </button>
                        <button
                          className={styles.cancelBtn}
                          onClick={() => setIsOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          };
          
          export default Modal;
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
];
