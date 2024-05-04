import React from "react";
import categories from "../categories";

interface Props {
    onSelectCategory: (category: string) => void; 
}

const Filter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select onChange={(event) => onSelectCategory(event.target.value)} className="form-select">
        <option value="All Categories">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
