import NewHomeLayout from '@/app/layouts/newHomeLayout';
import Home from '@/app/page';
import React from 'react';

interface PageProps { }

const Deck: React.FC<PageProps> = (props) => {
    return (
        <>
            <NewHomeLayout>
                <div className="dummy1">Our Deck</div>
            </NewHomeLayout>
        </>
    );
};

export default Deck;
