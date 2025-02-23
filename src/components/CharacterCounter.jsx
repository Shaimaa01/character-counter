import { useState } from "react";
import patternCharacterCount from "/public/assets/images/pattern-character-count.svg";
import patternSentenceCount from "/public/assets/images/pattern-sentence-count.svg";
import patternWordCount from "/public/assets/images/pattern-word-count.svg";
import arrowForSeeMore from "/public/assets/images/arrowMore.svg";
import arrowForSeeLess from "/public/assets/images/arrowLess.svg";
import { calculateReadingTime } from "../utils/CalculateReadingTime";
import { letterFrequency } from "../utils/letterFrequency";

const CharacterCounter = () => {
  const [text, setText] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(false);
  const [maxCharacters, setMaxCharacters] = useState(300);
  const [error , setError] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleCheckboxChange = () => {
    setExcludeSpaces(!excludeSpaces);
  };

  const handleCharacterLimit = () => {
    setCharacterLimit(!characterLimit);
  };

  const handleInputMaxCharctersChange = (e) => {
    setMaxCharacters(e.target.value);
  };

 

  const characterCount = excludeSpaces
    ? text.replace(/\s/g, "").length.toString().padStart(2, "0")
    : text.length.toString().padStart(2, "0");

  const wordsCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .length.toString()
    .padStart(2, "0");

  const sentences = text
    .split(/[.!?]+/)
    .filter((i) => i.trim() !== "")
    .length.toString()
    .padStart(2, "0");

  const result = letterFrequency(text);
  const sortedEntries = Object.entries(result).sort(
    (a, b) => b[1].count - a[1].count
  );
  const displayedEntries = showAll ? sortedEntries : sortedEntries.slice(0, 5);

  return (
    <>
      <section className="w-full text-Neutral-200 flex flex-col gap-[16px]">
        <textarea
          className="w-full h-[200px] p-[20px] bg-Neutral-800 rounded-[12px] border-2 border-Neutral-700  text-[20px] font-normal tracking-[-0.6px] leading-[140%] placeholder:text-[20px] placeholder:text-Neutral-200 placeholder:leading-[140%] placeholder:tracking-[-0.6px] focus:outline-none focus:border-Blue-500 focus:shadow-[0_0_10px_0_#D3A0FA]  resize-none   "
          placeholder="Start typing here… (or paste your text)"
          value={text}
          onChange={handleInputChange}
        />

        <div className="flex justify-between items-center text-[16px] leading-[130%] tracking-[-0.6px]">
          <div className="flex gap-[24px]">
            <div className="flex items-center gap-[10px] relative">
              <input
                type="checkbox"
                id="exclude-spaces"
                checked={excludeSpaces}
                onChange={handleCheckboxChange}
                className=" cursor-pointer appearance-none w-[16px] h-[16px] rounded-[4px] border border-Neutral-200 checked:bg-Blue-400   checked:bg-[url('/assets/images/icon-check.svg')] bg-center bg-no-repeat checked:border-transparent"
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
                className=" cursor-pointer appearance-none w-[16px] h-[16px] rounded-[4px] border border-Neutral-200 checked:bg-Blue-400   checked:bg-[url('/assets/images/icon-check.svg')] bg-center bg-no-repeat checked:border-transparent"
              />
              <label htmlFor="character-limit" className="cursor-pointer">
                Set Character Limit
              </label>
              {characterLimit && (
                <input
                  type="text"
                  value={maxCharacters}
                  onChange={handleInputMaxCharctersChange}
                  className="w-[55px] h-[29px] border border-Neutral-600 rounded-[6px] px-[12px] py-[4px] outline-none text-Neutral-0"
                />
              )}
            </div>
          </div>
          <p>Approx. reading time: {calculateReadingTime(text)} minute </p>
        </div>
      </section>

      <section className="flex w-full gap-[16px] h-[150px] text-Neutral-900">
        <div className="w-1/3 bg-Blue-400 rounded-[12px] p-[16px] flex flex-col justify-center gap-[8px] relative overflow-hidden">
          <p className="font-bold text-[64px] leading-[100%] tracking-[-1px]">
            {characterCount}
          </p>
          <p className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal">
            Total Characters
          </p>
          <img
            src={patternCharacterCount}
            alt="pattern Character Count"
            className="absolute right-[-30.5px]"
          />
        </div>
        <div className="w-1/3 bg-Yellow-500 rounded-[12px] p-[16px] flex flex-col justify-center gap-[8px] relative overflow-hidden">
          <p className="font-bold text-[64px] leading-[100%] tracking-[-1px]">
            {wordsCount}
          </p>
          <p className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal">
            Word Count
          </p>
          <img
            src={patternWordCount}
            alt="pattern Word Count"
            className="absolute right-[-30.5px]"
          />
        </div>
        <div className="w-1/3 bg-Orange-500 rounded-[12px] p-[16px] flex flex-col justify-center gap-[8px] relative overflow-hidden">
          <p className="font-bold text-[64px] leading-[100%] tracking-[-1px]">
            {sentences}
          </p>
          <p className="text-[20px] leading-[140%] tracking-[-0.6px] font-normal">
            Sentence Count
          </p>
          <img
            src={patternSentenceCount}
            alt="pattern Sentence Count"
            className="absolute right-[-29.5px]"
          />
        </div>
      </section>

      <section className="text-Neutral-200 flex flex-col gap-[20px] w-full">
        <h2 className="font-semibold text-[24px] leading-[130%] tracking-[-1px]">
          Letter Density
        </h2>
        {sortedEntries.length > 0 ? (
          <div className="flex flex-col gap-[12px]">
            {displayedEntries.map(([letter, { count, percentage }]) => (
              <div
                key={letter}
                className="flex justify-between items-center gap-[14px] "
              >
                <p className="w-[16px]">{letter}</p>
                <div className="bg-Neutral-800 flex-1 h-[12px] rounded-full relative">
                  <p
                    style={{ width: `${percentage}` }}
                    className={`bg-Blue-400 absolute  left-0 h-full rounded-full`}
                  ></p>
                </div>

                <p className="w-[87px] text-end font-normal text-[16px] leading-[130%] tracking-[-0.6px]">
                  <span className="pr-[5px]">{count}</span>({percentage})
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-normal text-[16px] leading-[130%] tracking-[-0.6px]">
            No characters found. Start typing to see letter density.
          </p>
        )}

        {sortedEntries.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex gap-2 items-center font-normal text-[20px] leading-[140%] tracking-[-0.6px] cursor-pointer"
          >
            {showAll ? (
              <>
                <span>See Less</span>
                <img src={arrowForSeeLess} alt="arrow For see Less" />
              </>
            ) : (
              <>
                <span>See More</span>
                <img src={arrowForSeeMore} alt="arrow For see More" />
              </>
            )}
          </button>
        )}
      </section>
    </>
  );
};

export default CharacterCounter;
