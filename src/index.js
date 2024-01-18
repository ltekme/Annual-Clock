import ReactDOM from 'react-dom';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import Prog24 from './comp/prog24';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Prog24 />
        <Analytics/>
    </React.StrictMode>
);