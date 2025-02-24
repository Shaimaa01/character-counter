/* eslint-disable react/prop-types */
import { calculateReadingTime } from "../utils/CalculateReadingTime";

const OptionalSetting = ({
  excludeSpaces,
  handleCheckboxChange,
  characterLimit,
  handleCharacterLimit,
  maxCharacters,
  handleInputMaxCharctersChange,
  wordsCount,
}) => {
  return (
    <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-[12px] justify-between items-center text-[16px] leading-[130%] tracking-[-0.6px]">
      <div className="flex gap-[24px] max-sm:flex-col max-sm:gap-[12px]">
        <div className="flex items-center gap-[10px] relative">
          <input
            type="checkbox"
            id="exclude-spaces"
            checked={excludeSpaces}
            onChange={handleCheckboxChange}
            className=" cursor-pointer appearance-none w-[16px] h-[16px] rounded-[4px] border dark:border-Neutral-200 border-Neutral-900 hover:dark:border-Neutral-0 hover:border-Neutral-600
             checked:bg-Blue-400 checked:hover:bg-Blue-500 checked:hover:border-transparent  
             checked:bg-[url('/assets/images/icon-check.svg')] bg-center bg-no-repeat checked:border-transparent 
             focus:bg-Neutral-0 focus:border-Neutral-200 focus:checked:bg-Blue-400 focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#D3A0FA]"
          />
          <label htmlFor="exclude-spaces" className="cursor-pointer">
            Exclude Spaces
          </label>
        </div>
        <div className="flex items-center gap-[10px] relative">
          <input
            type="checkbox"
            id="character-limit"
            checked={characterLimit}
            onChange={handleCharacterLimit}
            className=" cursor-pointer appearance-none w-[16px] h-[16px] rounded-[4px] border dark:border-Neutral-200 border-Neutral-900 hover:dark:border-Neutral-0 hover:border-Neutral-600
             checked:bg-Blue-400 checked:hover:bg-Blue-500 checked:hover:border-transparent  
             checked:bg-[url('/assets/images/icon-check.svg')] bg-center bg-no-repeat checked:border-transparent 
             focus:bg-Neutral-0 focus:border-Neutral-200 focus:checked:bg-Blue-400 focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#D3A0FA]"
          />
          <label htmlFor="character-limit" className="cursor-pointer">
            Set Character Limit
          </label>
          {characterLimit && (
            <input
              type="text"
              value={maxCharacters}
              onChange={handleInputMaxCharctersChange}
              className="w-[55px] h-[29px] border border-Neutral-600 rounded-[6px] px-[12px] py-[4px] outline-none dark:text-Neutral-0 text-Neutral-900"
            />
          )}
        </div>
      </div>
      <p>Approx. reading time: &lt;{calculateReadingTime(wordsCount)} minute</p>
    </div>
  );
};

export default OptionalSetting;
