'use client';

import { FC, memo, useEffect } from 'react'
import cn from 'clsx'
import s from './SearchBar.module.css'
import { useRouter } from 'next/navigation';

interface Props {
  className?: string
  id?: string
}

const SearchBar: FC<Props> = ({ className, id = 'search' }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const query = e.currentTarget.value;
      
      router.push(`/search/${query}` );
    }
  }

  return (
    <div role='search' className={cn(s.root, className)}>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={s.input}
        placeholder="Search for products..."
        onKeyUp={handleKeyUp}
      />
      <div className={s.iconContainer}>
        <svg className={s.icon} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
    </div>
  )
}

export default memo(SearchBar)


// import { useEffect, useRef, useState } from "react";

// interface Props<T> {
//   results?: T[];
//   onChange?: React.ChangeEventHandler;
//   onSelect?: (item: T) => void;
//   handleClick: any;
//   value?: string;
// }

// const SearchBar = <T extends object>({
//   results = [],
//   onChange,
//   onSelect,
//   handleClick,
//   value,
// }: Props<T>) => {
//   const [inputValue, setInputValue] = useState('');
//   const inputContainer = useRef<HTMLInputElement>(null);

//   const handleSelection = () => {
//     //console.log(inputValue);
    
//     onChange;
//   };


//   const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
//     const { key } = e;
    
//     if (key === "Enter") {
//       e.preventDefault();
//       handleClick();
//     }
//   };

//   useEffect(() => {
//   }, []);
//   return (
//     <div className="relative w-full max-w-lg transform transition-all opacity-100 scale-100">
//       <div className="overflow-hidden bg-slate-500 bg-opacity-50 shadow-md">
//         <div className="relative" onKeyDown={handleKeyDown}>
//           <input
//             ref={inputContainer}
//             onChange={onChange}
//             // onChange={e => setInputValue(e.target.value) }
//             className="block w-full appearance-none bg-transparent py-2 pl-4 pr-12 text-base text-slate-300 placeholder:text-slate-400 focus:outline-none sm:text-sm sm:leading-6"
//             placeholder="Search all products..."
//             aria-label="Search all products"
//             type="text"
//             aria-expanded="false"
//             autoComplete="off"
//           />
//           <svg
//             onClick={handleClick}
//             className="cursor-pointer pointer-events-auto absolute right-4 top-2 h-6 w-6 fill-slate-400"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchBar;
