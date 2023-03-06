import React, { useState } from 'react';
import { QuestionMark } from '../../icons/icons';
import { ChevronUp } from '../../icons/icons';
import { ChevronDown } from '../../icons/icons';
import { Camera } from '../../icons/icons';
import { Question } from '../../icons/icons';

const Accordion = ({title, description}) => {
    const [active, setActive] = useState(false);
    return(
        <div className="w-full mx-auto shadow-md">
                <div onClick={() => setActive(!active)}  className={`${active ? 'bg-fancy rounded-tl-lg rounded-tr-lg' : 'bg-darker rounded-lg'} transition-all duration-500 hover:rounded-bl-none hover:rounded-br-none py-6 px-8 hover:bg-fancy group cursor-pointer flex items-center justify-start gap-5`}>
                    {/* <span className='pt-0.5'><QuestionMark/></span> */}
                    {/* <span className='pt-0.5'><Camera/></span> */}
                    <p className={`text-lg ${active ? 'text-darker' : 'text-gray-300'} group-hover:text-darker`}>{title}</p>
                    <span onClick={() => setActive(!active)} className={`ml-auto transition-all bg-darker rounded-full p-2 duration-500 ${active ? '-rotate-180' : null}`}><ChevronDown/></span>
                </div>
                <div className={`bg-gray-100 transition-all duration-700 overflow-hidden ${active ? 'max-h-96 rounded-bl-xl rounded-br-xl' : 'max-h-0'}`}>
                    <p className="p-8 font-light text-xl">{description}</p>
                </div>
            
        </div>
    );
};

export default Accordion;