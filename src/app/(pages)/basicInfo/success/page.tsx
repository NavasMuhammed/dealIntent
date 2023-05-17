import NewHomeLayout from '@/app/layouts/newHomeLayout';
import Home from '@/app/page';
import React from 'react';

interface PageProps { }

const Seccess: React.FC<PageProps> = (props) => {
    return (
        <>
            <NewHomeLayout>
                <div className="dummy1">Success</div>
            </NewHomeLayout>
        </>
    );
};

export default Seccess;
