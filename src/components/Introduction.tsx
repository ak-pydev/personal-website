import { useState } from 'react';
import { TextScramble } from './text-scramble';

export function Introduction() {
    const [isTrigger, setIsTrigger] = useState(false);

    return (
        <div className="mt-24">
            <a
                href='#'
                style={{ textDecoration: 'none' }}
                className='text-gray-200 transition-colors hover:text-gray-200'
                onMouseEnter={() => setIsTrigger(true)}
                onMouseLeave={() => setIsTrigger(false)}
            >
                <TextScramble
                    className='text-6xl font-bold text-white transition-colors duration-300'
                    as='span'
                    speed={0.01}
                    trigger={isTrigger}
                    onScrambleComplete={() => setIsTrigger(false)}
                >
                    Introduction
                </TextScramble>
            </a>
        </div>
    );
}

export default Introduction;
