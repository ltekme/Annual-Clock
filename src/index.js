import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './prog24.css';

const Prog24 = () => {
    const firstDateOf2024 = new Date(Date.UTC(2024, 0, 1));
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const currentDateString = currentDate.toDateString();
    const currentPersentage = (Math.abs(firstDateOf2024 - currentDate) / 1e3 / 60 / 60 / 24 / 365) * 100;
    const currentProgressPersentage = currentPersentage >= 100 ? 100 : currentPersentage;


    document.title = `2024 is ${Math.floor(currentProgressPersentage).toFixed(0)}% complete`;
    return (
        <div className='progress2024'>
            <div>
                <table>
                    <tr>
                        <td><p>Today is</p></td>
                        <td><p>&nbsp;<span style={{ color: '#ffa500' }}>{currentDateString}</span></p></td>
                    </tr>
                    <tr>
                        <td><p></p></td>
                        <td><p>&nbsp;<span style={{ color: '#ffa500' }}>{currentDate.getHours().toString().padStart(2, '0')}:{currentDate.getMinutes().toString().padStart(2, '0')}:{currentDate.getSeconds().toString().padStart(2, '0')}</span></p></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={2}>
                            <div className="bar"><div style={{ width: currentProgressPersentage + '%' }}></div></div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}><p>2024 is <span style={{ color: '#ffa500' }}>{Math.floor(currentProgressPersentage).toFixed(0)}%</span> complete</p></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><p>It's been a good run.</p></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Prog24 />
        <Analytics />
    </React.StrictMode>
);
