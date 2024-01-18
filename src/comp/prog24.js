
import { useState, useEffect } from 'react';
import './prog24.css';

const Prog24 = () => {
    const e = new Date(Date.UTC(2024, 0, 1));
    const [t, setT] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setT(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    let d = (Math.abs(e - t)/1e3/60/60/24/365)*100;

    return (
        <div className='progress2024'>  
        <div>
            <table>
                <tr>
                    <td><p>Today is</p></td>
                    <td><p>&nbsp;<span style={{color: '#ffa500'}}>{t.toDateString()}</span></p></td>
                </tr>
                <tr>
                    <td><p>Time</p></td>
                    <td><p>&nbsp;<span style={{color: '#ffa500'}}>{t.getHours()}:{t.getMinutes()}:{t.getSeconds()}</span></p></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td colSpan={2}>
                        <div className="bar"><div style={{width: d+'%'}}></div></div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}><p>2024 is <span style={{color: '#ffa500'}}>{d.toFixed(6)}%</span> complete</p></td>
                </tr>
            </table>
        </div>
        </div>
    );
}
export default Prog24;