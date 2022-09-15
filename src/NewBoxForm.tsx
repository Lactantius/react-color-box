import React, { useState } from "react";
import "./NewBoxForm.css";

interface BoxFormData {
  width: number;
  height: number;
  color: string;
}

interface BoxFormArgs {
  add: Function;
}

function NewBoxForm({ add }: BoxFormArgs): JSX.Element {
  const INITIAL_FORM_DATA: BoxFormData = {
    width: 0,
    height: 0,
    color: "#000000",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { width, height, color } = formData;
    add({ width: `${width}px`, height: `${height}px`, color: color });
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
        className="NewBoxForm-color-picker"
      />
      <button>New Box</button>
    </form>
  );
}

export default NewBoxForm;
