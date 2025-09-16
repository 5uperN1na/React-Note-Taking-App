import React from "react";
import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  // const [title, setTitle] = useState("");
  // const [prioirty, setPriority] = useState("Medium");
  // const [category, setCategory] = useState("Work");
  // const [description, setDescription] = useState("");

  //consolidated state

  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title | !formData.description) return;

    //create note object
    const newNote = { id: Date.now(), ...formData };

    //add note note to state
    setNotes([newNote, ...notes]);

    //reset form data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          // onChange={(e) => setTitle(e.target.value)}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
          name="category"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          // onChange={(e) => setPriority(e.target.value)}
          onChange={handleChange}
        >
          <option value="High">High❗</option>
          <option value="Medium">Medium⚠️</option>
          <option value="Low">Low🤏</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
          name="category"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          // onChange={(e) => setCategory(e.target.value)}
          onChange={handleChange}
        >
          <option value="Work">Work💼</option>
          <option value="Personal">Personal🧘</option>
          <option value="Ideas">Ideas💡</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          name="description"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          // onChange={(e) => setDescription(e.target.value)}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* button className=
      .w-full.bg-purple-500.text-white.py-2.rounded-lg.cursor-pointer hover: bg-purple-600'

    <button className=""</button> */}

      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
