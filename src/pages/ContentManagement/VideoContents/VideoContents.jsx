import React, { useState } from "react";
import "./VideoContents.css";

function VideoContents() {
  const [showPopup, setShowPopup] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);

  const handleCreateFolder = () => {
    setFolders([...folders, folderName]);
    setFolderName(""); // Reset folder name
    setShowPopup(false); // Close the popup after creation
  };

  return (
    <div className="vid-video-container">
      <section className=".section">
        <h1 className="vid-title">Documents</h1>
      </section>

      <div>
        <button className="vid-create-button" onClick={() => setShowPopup(true)}>
          Create a folder
        </button>
      </div>

      {showPopup && (
        <div className="vid-popup">
          <h2>Create Folder</h2>
          <input
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="Enter folder name"
          />
          <div className="vid-popup-buttons">
            <button className="vid-create-folder-btn" onClick={handleCreateFolder}>
              Create
            </button>
            <button className="vid-cancel-folder-btn" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="vid-folder-container">
        {folders.map((folder, index) => (
          <div key={index} className="vid-folder">
            <span className="vid-folder-icon">📁</span>
            <div className="vid-pfolder-name">{folder}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoContents;
