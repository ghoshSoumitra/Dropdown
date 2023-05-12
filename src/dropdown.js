import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  //handleing the mouse over the dropdown button
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
 // handleing the outside area of dropdown button
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
//handleing the onclick option on the items
  const handleOptionClick = (item) => {
    setIsOpen(false);
    setSelectedItem(item);
    console.log(`Selected item: ${item}`);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-button">
        Select Your Favourite
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* //showing the selected items */}
     {selectedItem && <p className="selected">My Current Favourite is: {selectedItem}</p>}
    </div>
     
  );
};

export default Dropdown;


