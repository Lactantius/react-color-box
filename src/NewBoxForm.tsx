import React, { useState } from "react";

interface BoxFormData {
  width: number;
  height: number;
  color: string;
}

function NewBoxForm({ add }): JSX.Element {
  const INITIAL_FORM_DATA: BoxFormData = {
    width: 0,
    height: 0,
    color: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e: SubmitEvent) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    add(formData);
    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <form onSubmit={handleSubmit} className="NewBoxForm">
      <label htmlFor="width">Box Width</label>
      <input
        name="width"
        type="number"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Box Height</label>
      <input
        name="height"
        type="number"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="color">Box Color</label>
      <input
        name="color"
        type="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>New Box</button>
    </form>
  );
}

export default NewBoxForm;
