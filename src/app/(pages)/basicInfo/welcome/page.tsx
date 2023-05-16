import NewHomeLayout from '@/app/layouts/newHomeLayout';
import Home from '@/app/page';
import React from 'react';

interface PageProps { }

const Page: React.FC<PageProps> = (props) => {
    return (
        <>
            <NewHomeLayout>welcome</NewHomeLayout>
        </>
    );
};

export default Page;
