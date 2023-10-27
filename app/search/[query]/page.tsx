import React from 'react'

type Props = {
    params: { query: string };
}

// const Search = (props: Props) => {
//     const searchParams = props.params.query;
//   return (
//     <div>search for : {searchParams}</div>
//   )
// }
// export default Search


export default function Search(props: Props) {
    const searchParams = decodeURIComponent(props.params.query);
  return (
    <div>search for : {searchParams}</div>
  )
}
