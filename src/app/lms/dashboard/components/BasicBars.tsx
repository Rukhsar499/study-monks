import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
    return (
        <section>
            <div className='flex flex-col md:flex-row justify-between gap-8'>
                <div className="w-full md:w-[50%] bg-[#fff] rounded-2xl">
                    <p className='text-[24px] text-[#14311B] font-semibold px-4 py-8'>Video Tutorials Progress</p>
                    <BarChart
                        xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
}