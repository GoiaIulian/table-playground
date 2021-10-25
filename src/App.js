import { useMemo } from 'react';
import { Columns } from './data/columns';
import Grid from './components/Grid.js';
import MOCK_DATA from './data/MOCK_DATA.json';
import { IoMdAdd } from 'react-icons/io';
import { IoTrashOutline, IoSearchOutline } from 'react-icons/io5';
import { MdOutlineEdit } from 'react-icons/md';

function App() {
    const columns = useMemo(() => Columns, []);
    const data = useMemo(() => MOCK_DATA, []);

    return (
        <div className='main-container'>
            <div className='component-container'>
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
                    <Grid columns={columns} data={data}></Grid>
                </div>
            </div>
        </div>
    );
}

export default App;
