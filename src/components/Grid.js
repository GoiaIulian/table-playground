import React from 'react';
import { useTable, usePagination } from 'react-table';
import { IoMdAdd, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoTrashOutline, IoSearchOutline } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';

const Grid = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2 },
        },
        usePagination
    );

    return (
        <>
            <div className='top-bar'>
                <div className='left-element'>
                    <div className='tab-title'>Contracte</div>
                    <div className='top-button-container'>
                        <button className='crud-button'>
                            <IoMdAdd></IoMdAdd>
                        </button>
                        <button className='crud-button'>
                            <MdOutlineEdit></MdOutlineEdit>
                        </button>
                        <button className='crud-button'>
                            <IoTrashOutline></IoTrashOutline>
                        </button>
                    </div>
                </div>
                <div className='right-element'>
                    <input
                        type='text'
                        className='search-field'
                        placeholder='Search ...'
                    />
                    <button className='search-button'>
                        <IoSearchOutline></IoSearchOutline>
                    </button>
                </div>
            </div>
            <div className='grid-container'>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='bottom-bar'>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}>
                    {[10, 20, 30].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <div className='pagination-right'>
                    <button
                        className='navigation-button'
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}>
                        {' '}
                        <BiArrowToLeft />{' '}
                    </button>
                    <button
                        className='navigation-button'
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}>
                        {' '}
                        <IoIosArrowBack />{' '}
                    </button>
                    <span className='current-page'>
                        Page <strong>{pageIndex + 1}</strong> of
                        <strong>{pageOptions.length}</strong>
                    </span>
                    <button
                        className='navigation-button'
                        onClick={() => nextPage()}
                        disabled={!canNextPage}>
                        {' '}
                        <IoIosArrowForward />{' '}
                    </button>
                    <button
                        className='navigation-button'
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}>
                        {' '}
                        <BiArrowToRight />{' '}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Grid;
