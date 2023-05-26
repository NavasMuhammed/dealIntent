import NewHomeLayout from '@/app/layouts/newHomeLayout';
import Home from '@/app/page';
import React from 'react';

interface PageProps { }

const Welcome: React.FC<PageProps> = (props) => {
    return (
        <>
            <NewHomeLayout>
                <div className="dummy1">Welcome</div>
            </NewHomeLayout>
        </>
    );
};

export default Welcome;
