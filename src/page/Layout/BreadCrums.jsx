
import { FaHome } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";


const BreadCrums = () => {
  return (
    <nav className="flex items-center" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <FaHome className="w-3 h-3 me-2.5" />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <AiOutlineRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
          </div>
        </li>
     
      </ol>
    </nav>
  );
}

export default BreadCrums;
