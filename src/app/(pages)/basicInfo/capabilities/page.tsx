import NewHomeLayout from '@/app/layouts/newHomeLayout';
import Home from '@/app/page';
import React from 'react';

interface PageProps { }

const Capabilities: React.FC<PageProps> = (props) => {
    return (
        <>
            <NewHomeLayout>
                <div className="dummy1">
                    <div className="dummy1">Capabilities</div>
                </div>
            </NewHomeLayout>
        </>
    );
};

export default Capabilities;
