/* eslint-disable react/prop-types */
import { InfoIcon } from "./InfoIcon";

const TextInputArea = ({ text, handleInputChange, error, characterLimit }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <textarea
        className={`text-Neutral-700 dark:text-Neutral-200 cursor-pointer w-full h-[200px] p-[20px] dark:bg-Neutral-800 bg-Neutral-100 hover:dark:bg-Neutral-700 hover:bg-Neutral-200 rounded-[12px] border-2 dark:border-Neutral-700 border-Neutral-200 hover:dark:border-Neutral-600  hover:border-Neutral-200  text-[20px] font-normal tracking-[-0.6px] leading-[140%]
           placeholder:text-[20px]   placeholder:leading-[140%] placeholder:tracking-[-0.6px] focus:outline-none  resize-none 
           ${
             error
               ? "focus:dark:border-Orange-500 focus:border-Orange-800  focus:border-[1px] focus:dark:shadow-[0_0_8px_0_#FE8159] focus:shadow-[0_0_8px_0_#DA3701]"
               : "focus:border-Blue-500 focus:dark:border-Blue-500 focus:shadow-[0_0_10px_0_#D3A0FA]"
           } `}
        placeholder="Start typing here… (or paste your text)"
        value={text}
        onChange={handleInputChange}
      />

      {characterLimit && error && (
        <div className="dark:text-Orange-500  text-Orange-800 text-[16px] leading-[130%] tracking-[-0.6px] flex gap-[8px] items-center max-sm:items-start ">
         
         <InfoIcon />
          <p className="sm:mb-[-1px] max-sm:mt-[-3px]">{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextInputArea;
