import React from "react";
import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

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

  const [isFormVisible, setIsFormVisible] = useState(false);

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
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2-rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form X" : "Add New Note +"}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          {/*text input*/}

          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          {/* <div className="mb-4">
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
        </div> */}

          {/*priority select */}

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: " ❗ High" },
              { value: "Medium", label: " ⚠️ Medium" },
              { value: "Low", label: " 🤏 Low" },
            ]}
          />

          {/* <div className="mb-4">
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
          </div> */}

          {/*category select */}

          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: " Work💼" },
              { value: "Personal", label: " Personal🧘" },
              { value: "Ideas", label: " Ideas💡" },
            ]}
          />

          {/* <div className="mb-4">
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
          </div> */}

          {/*text area input */}

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          {/* <div className="mb-4">
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
          </div> */}

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
