import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1); // Close the currently open accordion
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <div className="accordion-item">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeIndex === 1}
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            {activeIndex === 1 ? (
              <FaChevronUp className="w-3 h-3 rotate-180" />
            ) : (
              <FaChevronDown className="w-3 h-3" />
            )}
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`transition-all duration-300 ${
            activeIndex === 1 ? "block" : "hidden"
          }`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeIndex === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            {activeIndex === 2 ? (
              <FaChevronUp className="w-3 h-3 rotate-180" />
            ) : (
              <FaChevronDown className="w-3 h-3" />
            )}
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`transition-all duration-300 ${
            activeIndex === 2 ? "block" : "hidden"
          }`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
