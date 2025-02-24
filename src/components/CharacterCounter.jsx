import { useState, useEffect } from "react";
import { letterFrequency } from "../utils/letterFrequency";
import OptionalSetting from "./OptionalSetting";
import TextInputArea from "./TextInputArea";
import CountDisplay from "./CountDisplay";
import LetterDensity from "./LetterDensity";

const CharacterCounter = () => {
  const [text, setText] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Character limit settings
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(false);
  const [maxCharacters, setMaxCharacters] = useState(300);
  const [error, setError] = useState("");

  // Handlers
  const handleInputChange = (e) => setText(e.target.value);
  const handleCheckboxChange = () => setExcludeSpaces(!excludeSpaces);
  const handleCharacterLimit = () => setCharacterLimit(!characterLimit);
  const handleInputMaxCharctersChange = (e) => setMaxCharacters(e.target.value);

  const characterCount = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length;

  const wordsCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

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

  // Character limit effect
  useEffect(() => {
    setError(
      characterLimit && characterCount > maxCharacters
        ? "Limit reached! Your text exceeds the allowed characters."
        : ""
    );
  }, [characterLimit, characterCount, maxCharacters]);

  return (
    <>
      <section className="w-full dark:text-Neutral-200 text-Neutral-900 flex flex-col gap-[16px]">
        <TextInputArea
          text={text}
          handleInputChange={handleInputChange}
          error={error}
          characterLimit={characterLimit}
        />

        <OptionalSetting
          excludeSpaces={excludeSpaces}
          handleCheckboxChange={handleCheckboxChange}
          characterLimit={characterLimit}
          handleCharacterLimit={handleCharacterLimit}
          maxCharacters={maxCharacters}
          handleInputMaxCharctersChange={handleInputMaxCharctersChange}
          wordsCount={wordsCount}
        />
      </section>

      <section className="flex flex-col gap-[24px] w-full">
        <CountDisplay
          characterCount={characterCount}
          wordsCount={wordsCount}
          sentences={sentences}
        />

        <LetterDensity
          sortedEntries={sortedEntries}
          displayedEntries={displayedEntries}
          showAll={showAll}
          setShowAll={setShowAll}
        />
      </section>
    </>
  );
};

export default CharacterCounter;
