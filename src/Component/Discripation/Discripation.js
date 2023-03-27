import React from 'react';
import Unlilke from './Unlilke';

const Discripation = ({single}) => {
    const {title,date,description}=single
    return (
        <div>
                        <h1
                            class="text-lg font-semibold tracking-tight text-slate-800"
                        >
                            {title}
                        </h1>
                        <div
                            class="pb-4 flex items-center space-between border-b"
                        >
                            <h2
                                class="text-sm leading-[1.7142857] text-slate-600 w-full"
                            >
                                Uploaded on {date}
                            </h2>

                            {/* <!-- like/unlike --> */}
                            <Unlilke></Unlilke>
                        </div>

                        <div
                            class="mt-4 text-sm text-[#334155] dark:text-slate-400"
                        >
                            {description}
                        </div>
                    </div>
    );
};

export default Discripation;