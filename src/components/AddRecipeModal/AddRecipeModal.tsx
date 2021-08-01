import React, { useState } from "react";
import updateStorageData from "../../utils/updateStorageData";
import Button from "../Button/Button";
import './addRecipeModal.scss';

const DESTROY_DELAY = 1500; 

const AddRecipeModal = ({destroyHandler}: {destroyHandler: () => void}): JSX.Element => {
  const [name, setName] = useState('');
  const [instruction, setInstruction] = useState('');
  const [area, setArea] = useState('');
  const [categoty, setCategory] = useState('');
  const [createButtonText, setCreateButtonText] = useState('Create');

  const updateName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }

  const updateInstruction = (e: React.FormEvent<HTMLInputElement>) => {
    setInstruction(e.currentTarget.value);
  }

  const updateArea = (e: React.FormEvent<HTMLInputElement>) => {
    setArea(e.currentTarget.value);
  }

  const updateCategoty = (e: React.FormEvent<HTMLInputElement>) => {
    setCategory(e.currentTarget.value);
  }

  const addDishHandler = () => {
    setCreateButtonText('Adding');
    setTimeout(() => {
      setCreateButtonText('Create');
    }, DESTROY_DELAY);
  }

  const createHandler = () => {
    const customDish = {
      strArea: area || 'World',
      strCategory: categoty || 'Just food',
      strInstructions: instruction || 'Default',
      strMeal: name || 'Default',
      strMealThumb: ''
    }

    if (localStorage.getItem('recipes')) {
      updateStorageData(customDish, addDishHandler, addDishHandler);
    }
    console.log(customDish)
    setTimeout(() => {
      destroyHandler();
    }, DESTROY_DELAY)
  }
  
  return (
    <div className="modal">
      <div className="modal_wrapper">
        <form>
          <label htmlFor="name">
            Dish name:
            <input type="text" name="name" value={name} onChange={updateName} />
          </label>
          <label htmlFor="instruction">
            Instructions:
            <input type="text" name="instruction" value={instruction} onChange={updateInstruction} />
          </label>
          <label htmlFor="area">
            Area of cuisine:
            <input type="text" name="area" value={area} onChange={updateArea} />
          </label>
          <label htmlFor="categoty">
            Categoty:
            <input type="text" name="categoty" value={categoty} onChange={updateCategoty} />
          </label>
        </form>
        <Button 
          classList={'modal_cancel-button'}
          text={'Cancel'}
          handler={destroyHandler}
        />
        <Button 
          classList={'modal_create-button'}
          text={createButtonText}
          handler={createHandler}
        />
      </div>
    </div>
  )
}

export default AddRecipeModal;
