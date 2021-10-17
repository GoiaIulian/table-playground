import { useMemo } from 'react';
import { Columns } from './data/columns';
import Grid from './components/Grid.js';
import MOCK_DATA from './data/MOCK_DATA.json';

function App() {
    const columns = useMemo(() => Columns, []);
    const data = useMemo(() => MOCK_DATA, []);

    return (
        <div className='main-container'>
            <Grid columns={columns} data={data}></Grid>
        </div>
    );
}

export default App;
