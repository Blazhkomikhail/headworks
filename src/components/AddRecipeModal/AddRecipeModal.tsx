import React, { useState, useContext } from 'react';
import createStorageData from '../../utils/createStorageData';
import updateStorageData from '../../utils/updateStorageData';
import Button from '../Button/Button';
import TextInput from './TextInput/TextInput';
import { RecipesContext } from '../../shared/RecipeProvider';
import './addRecipeModal.scss';

const DESTROY_DELAY = 1500;

const AddRecipeModal = ({
  handleDestroyModal,
}: {
  handleDestroyModal: () => void;
}): JSX.Element => {
  const [name, setName] = useState('');
  const [instruction, setInstruction] = useState('');
  const [area, setArea] = useState('');
  const [categoty, setCategory] = useState('');
  const [createButtonText, setCreateButtonText] = useState('Create');
  const [recipes, handleSetRecipes] = useContext(RecipesContext);

  const updateName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const updateInstruction = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setInstruction(e.currentTarget.value);
  };

  const updateArea = (e: React.FormEvent<HTMLInputElement>) => {
    setArea(e.currentTarget.value);
  };

  const updateCategoty = (e: React.FormEvent<HTMLInputElement>) => {
    setCategory(e.currentTarget.value);
  };

  const handleAddDish = () => {
    setCreateButtonText('Adding...');
    setTimeout(() => {
      setCreateButtonText('Create');
    }, DESTROY_DELAY);
  };

  const handleCreateDish = () => {
    const customDish = {
      strArea: area || 'Any',
      strCategory: categoty || 'Any',
      strInstructions: instruction || 'Default',
      strMeal: name || 'Default',
      strMealThumb: '',
    };

    if (localStorage.getItem('recipes')) {
      updateStorageData(customDish);
    } else {
      createStorageData(customDish);
    }
    handleAddDish();
    handleSetRecipes(customDish);

    setTimeout(() => {
      handleDestroyModal();
    }, DESTROY_DELAY);
  };

  return (
    <div className="modal">
      <div className="modal_wrapper">
        <form className="modal_form">
          <TextInput
            labelName="Dish name"
            name="name"
            value={name}
            handler={updateName}
            classList="modal_text-input"
          />
          <TextInput
            labelName="Area of cuisine"
            name="area"
            value={area}
            handler={updateArea}
            classList="modal_text-input"
          />
          <TextInput
            labelName="Categoty"
            name="categoty"
            value={categoty}
            handler={updateCategoty}
            classList="modal_text-input"
          />
          <label className="modal_textarea-label" htmlFor="instruction">
            Instructions
            <textarea
              className="modal_textarea"
              name="instruction"
              value={instruction}
              onChange={updateInstruction}
            />
          </label>
        </form>
        <div className="modal_buttons-wrapper">
          <Button
            classList="modal_cancel-button"
            text="Cancel"
            handler={handleDestroyModal}
          />
          <Button
            classList="modal_create-button"
            text={createButtonText}
            handler={handleCreateDish}
          />
        </div>
      </div>
    </div>
  );
};

export default AddRecipeModal;
