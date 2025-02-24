/* eslint-disable react/prop-types */
import { ArrowIconToTop } from "./ArrowIconToTop";
import { ArrowIconToButton } from "./ArrowIconToBottom";

const LetterDensity = ({
  sortedEntries,
  displayedEntries,
  showAll,
  setShowAll,
}) => {
  return (
    <div className="dark:text-Neutral-200 text-Neutral-900 flex flex-col gap-[20px] w-full">
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
              <p className="w-[16px] text-[16px] leading-[130%] tracking-[-0.6px]">
                {letter}
              </p>
              <div className="dark:bg-Neutral-800 bg-Neutral-100 flex-1 h-[12px] rounded-full relative">
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
        <p className="font-normal dark:text-Neutral-200 text-Neutral-600  text-[16px] leading-[130%] tracking-[-0.6px]">
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
              <ArrowIconToTop />
            </>
          ) : (
            <>
              <span>See More</span>
              <ArrowIconToButton />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default LetterDensity;
