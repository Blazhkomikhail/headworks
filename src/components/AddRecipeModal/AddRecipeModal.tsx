import React, { useState } from "react";
import './addRecipeModal.scss';

const AddRecipeModal = ({destroyHandler}: {destroyHandler: () => void}) => {
  const [name, setName] = useState('');
  const [instruction, setInstruction] = useState('');

  const updateName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }

  const updateInstruction = (e: React.FormEvent<HTMLInputElement>) => {
    setInstruction(e.currentTarget.value);
  }

  const createHandler = () => {
    destroyHandler();
  }
  
  return (
    <div className="modal">
      <div className="modal_wrapper">
        <form>
          <input type="text" name="name" value={name} onChange={updateName} />
          <input type="text" name="instruction" value={instruction} onChange={updateInstruction} />
        </form>

        <button type="button" onClick={destroyHandler}>Cancel</button>
        <button type="button" onClick={createHandler}>Create</button>
      </div>
    </div>
  )
}

export default AddRecipeModal;
