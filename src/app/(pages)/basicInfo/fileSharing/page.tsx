import NewHomeLayout from '@/app/layouts/newHomeLayout';
import Home from '@/app/page';
import React from 'react';

interface PageProps { }

const FileSharing: React.FC<PageProps> = (props) => {
    return (
        <>
            <NewHomeLayout>
                <div className="dummy1">File Sharing</div>
            </NewHomeLayout>
        </>
    );
};

export default FileSharing;
