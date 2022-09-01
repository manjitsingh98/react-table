import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLOUMNS, GROUPED_COLUMNS } from './Columns'
import GlobalFilter from './GlobalFilter'

const SortingTable = () => {

    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        pageOptions,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data,
    },
        useGlobalFilter,
        usePagination
    )

    const { globalFilter } = state

    const { pageIndex, pageSize } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="page">
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {[10, 25, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show{pageSize}
                            </option>
                        ))}
                    </select>
                </span>
                <button onClick={() => previousPage()}>Previous</button>
                <button onClick={() => nextPage()}>Next</button>
            </div>
        </>
    )
}

export default SortingTable
