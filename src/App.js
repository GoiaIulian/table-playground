import { useMemo } from 'react';
import { Columns } from './data/columns';
import Grid from './components/Grid.js';
import MOCK_DATA from './data/MOCK_DATA.json';

function App() {
    const columns = useMemo(() => Columns, []);
    const data = useMemo(() => MOCK_DATA, []);

    return (
        <div className='main-container'>
            <div className='component-container'>
                <div className='tab-title'>Contracte</div>
                <button className='crud-button'></button>
                <div className='grid-container'>
                    <Grid columns={columns} data={data}></Grid>
                </div>
            </div>
        </div>
    );
}

export default App;
