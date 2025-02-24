/* eslint-disable react/prop-types */
import patternCharacterCount from "/public/assets/images/pattern-character-count.svg";
import patternSentenceCount from "/public/assets/images/pattern-sentence-count.svg";
import patternWordCount from "/public/assets/images/pattern-word-count.svg";
const CountDisplay = ({ characterCount, wordsCount, sentences }) => {
  return (
    <div className="flex max-sm:flex-col w-full gap-[16px] sm:h-[150px] text-Neutral-900">
      <div className="w-1/3 max-sm:w-full max-sm:h-[130px] bg-Blue-400 rounded-[12px] p-[16px] max-lg:p-[12px] max-sm:p-[20px] flex flex-col justify-center gap-[8px] relative overflow-hidden">
        <p className="font-bold text-[64px] max-sm:text-[40px] leading-[100%] tracking-[-1px] z-10">
          {characterCount.toString().padStart(2, "0")}
        </p>
        <p className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal z-10">
          Total Characters
        </p>
        <img
          src={patternCharacterCount}
          alt="pattern Character Count"
          className="absolute right-[-30.5px] max-lg:right-[-70.5px] max-sm:right-[-50.5px]"
        />
      </div>
      <div className="w-1/3 max-sm:w-full max-sm:h-[130px] bg-Yellow-500 rounded-[12px] p-[16px] max-lg:p-[12px] max-sm:p-[20px] flex flex-col justify-center gap-[8px] relative overflow-hidden">
        <p className="font-bold text-[64px] max-sm:text-[40px] leading-[100%] tracking-[-1px] z-10">
          {wordsCount.toString().padStart(2, "0")}
        </p>
        <p className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal z-10">
          Word Count
        </p>
        <img
          src={patternWordCount}
          alt="pattern Word Count"
          className="absolute right-[-30.5px] max-lg:right-[-70px] max-sm:right-[-50.5px]"
        />
      </div>
      <div className="w-1/3 max-sm:w-full max-sm:h-[130px] bg-Orange-500 rounded-[12px] p-[16px] max-lg:p-[12px] max-sm:p-[20px] flex flex-col justify-center gap-[8px] relative overflow-hidden">
        <p className="font-bold text-[64px] max-sm:text-[40px] leading-[100%] tracking-[-1px] z-10">
          {sentences}
        </p>
        <p className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal z-10">
          Sentence Count
        </p>
        <img
          src={patternSentenceCount}
          alt="pattern Sentence Count"
          className="absolute right-[-29.5px] max-lg:right-[-70px] max-sm:right-[-50.5px]"
        />
      </div>
    </div>
  );
};

export default CountDisplay;
