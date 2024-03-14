import React, { useState } from "react";

const ResourceComponent = () => {
  const [resources, setResources] = useState([]);
  const [showAddResourceForm, setShowAddResourceForm] = useState(false);
  const [newResourceTitle, setNewResourceTitle] = useState("");
  const [newResourceFile, setNewResourceFile] = useState(null);
  const [selectedResourceType, setSelectedResourceType] = useState("video");
  const [instructorName, setInstructorName] = useState("");
  const [description, setDescription] = useState("");
  const [videoUpload, setVideoUpload] = useState("");
  const [readingMaterialContent, setReadingMaterialContent] = useState("");
  const [quizQuestions, setQuizQuestions] = useState("");
  const [labInstructions, setLabInstructions] = useState("");

  const handleAddResource = () => {
    const newResource = {
      title: newResourceTitle,
      type: selectedResourceType,
      instructorName,
      description,
      videoUpload,
      readingMaterialContent,
      quizQuestions,
      labInstructions,
    };

    setResources([...resources, newResource]);

    // Clear the form fields
    setNewResourceTitle("");
    setNewResourceFile(null);
    setSelectedResourceType("video");
    setInstructorName("");
    setDescription("");
    setVideoUpload("");
    setReadingMaterialContent("");
    setQuizQuestions("");
    setLabInstructions("");

    // Hide the add resource form
    setShowAddResourceForm(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Resource Management</h2>

      {resources.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Existing Resources:</h3>
          <ul>
            {resources.map((resource, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{resource.title}</span> - {resource.type}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <button
          onClick={() => setShowAddResourceForm(!showAddResourceForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {showAddResourceForm ? "Cancel" : "Add a Resource"}
        </button>

        {showAddResourceForm && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Add a Resource:</h3>
            <div className="flex items-center mb-4">
              <label className="mr-2">Resource Type:</label>
              <select
                value={selectedResourceType}
                onChange={(e) => setSelectedResourceType(e.target.value)}
                className="border border-gray-400 rounded-md px-2 py-1"
              >
                <option value="video">Video</option>
                <option value="reading">Reading Material</option>
                <option value="quiz">Quiz</option>
                <option value="lab">Lab</option>
              </select>
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2">Title:</label>
              <input
                type="text"
                value={newResourceTitle}
                onChange={(e) => setNewResourceTitle(e.target.value)}
                className="border border-gray-400 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2">Instructor Name:</label>
              <input
                type="text"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                className="border border-gray-400 rounded-md px-2 py-1"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2">Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-400 rounded-md px-2 py-1"
              />
            </div>
            {selectedResourceType === "video" && (
              <>
                <div className="flex items-center mb-4">
                  <label className="mr-2">Video Upload:</label>
                  <input
                    type="text"
                    value={videoUpload}
                    onChange={(e) => setVideoUpload(e.target.value)}
                    className="border border-gray-400 rounded-md px-2 py-1"
                  />
                </div>
              </>
            )}
            {selectedResourceType === "reading" && (
              <>
                <div className="flex items-center mb-4">
                  <label className="mr-2">Reading Material Content:</label>
                  <textarea
                    value={readingMaterialContent}
                    onChange={(e) => setReadingMaterialContent(e.target.value)}
                    className="border border-gray-400 rounded-md px-2 py-1"
                  />
                </div>
              </>
            )}
            {/* Similar sections for quiz and lab */}
            <button
              onClick={handleAddResource}
              disabled={!newResourceTitle}
              className={`${
                !newResourceTitle ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
              } text-white px-4 py-2 rounded-md`}
            >
              Add Resource
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceComponent;
