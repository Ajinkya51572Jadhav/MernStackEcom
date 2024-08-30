// import {
//   AiOutlineSortAscending,
//   AiOutlineSortDescending,
// } from "react-icons/ai";
// import {
//   Column,
//   usePagination,
//   useSortBy,
//   useTable,
//   TableOptions,
//   Row,
//   Cell,
//   HeaderGroup,
// } from "react-table";

// function TableHOC<T extends object>(
//   columns: Column<T>[],
//   data: T[],
//   containerClassname: string,
//   heading: string,
//   showPagination: boolean = false
// ) {
//   return function HOC() {
//     const options: TableOptions<T> = {
//       columns,
//       data,
//       initialState: {
//         pageSize: 6,
//       },
//     };

//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       page,
//       prepareRow,
//       nextPage,
//       pageCount,
//       state: { pageIndex },
//       previousPage,
//       canNextPage,
//       canPreviousPage,
//     } = useTable(options, useSortBy, usePagination);

//     return (
//       <div className={containerClassname}>
//         <h2 className="heading">{heading}</h2>

//         <table className="table" {...getTableProps()}>
//           <thead>
//             {headerGroups.map((headerGroup: HeaderGroup<T>) => (
//               <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//                 {headerGroup.headers.map((column) => (
//                   <th
//                     {...column.getHeaderProps(column.getSortByToggleProps())}
//                     key={column.id}
//                   >
//                     {column.render("Header")}
//                     {column.isSorted && (
//                       <span>
//                         {column.isSortedDesc ? (
//                           <AiOutlineSortDescending />
//                         ) : (
//                           <AiOutlineSortAscending />
//                         )}
//                       </span>
//                     )}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {page.map((row: Row<T>) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()} key={row.id}>
//                   {row.cells.map((cell: Cell<T>) => (
//                     <td {...cell.getCellProps()} key={cell.column.id}>
//                       {cell.render("Cell")}
//                     </td>
//                   ))}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         {showPagination && (
//           <div className="table-pagination">
//             <button disabled={!canPreviousPage} onClick={previousPage}>
//               Prev
//             </button>
//             <span>{`${pageIndex + 1} of ${pageCount}`}</span>
//             <button disabled={!canNextPage} onClick={nextPage}>
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   };
// }

// export default TableHOC;











import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  Column,
  usePagination,
  useSortBy,
  useTable,
  TableOptions,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {

  return function HOC() {

    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      pageCount,
      state: { pageIndex },
      previousPage,
      canNextPage,
      canPreviousPage,
    } = useTable(options, useSortBy, usePagination);


    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>
                        {" "}
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row:any) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell:any) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
