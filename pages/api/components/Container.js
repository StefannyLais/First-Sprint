import React, { useState } from 'react';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';


function ParentContainer() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
};

    return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <select value={selectedOption}
        onChange={handleOptionChange}  className="input-container">
        <option value="">Project Name</option>
        <option value="">Facilisis viverra a</option>
        <option value="">Faucibus at a</option>
        <option value="">Commodo blandit ultrices</option>
        <option value="">Et nibh egestas</option>
        <option value="">Vivamys amet neque</option>
        <option value="">Pulvinar aliquam quis</option>
        <option value="">Et nibh egestas</option>
        <option value="">Vivamys amet neque</option>
        </select>
        <div style={{ flex: 1, display: 'flex' }}></div>
        <div className="parent">
        <p> View All</p>
        <p ><CreateNewFolderIcon className="icon"/>Active  34</p>
        <p ><CreateNewFolderIcon className="icon"/>Active  34</p>
        <p ><CreateNewFolderIcon className="icon"/>Active  34</p>
        </div>
        





    </div>
    
);
}

export default ParentContainer;
