"use client"
import React from 'react';
import { DealIcons } from '../icons';
import Image from 'next/image';
import logo from '/assets/logo.svg'
import { TopbarIconsData } from './data';
interface TopbarProps { }

const Topbar: React.FC<TopbarProps> = (props) => {
    const [selectedId, setSelectedId] = React.useState<number>();
    function handleSelect(index: number) {
        setSelectedId(index);
    }
    var count: number = 25;
    return (
        <div className="topbar">
            <div className="topbar-container">
                <div className="flex-wrapper">
                    <object data="/assets/logo.svg" type="image/svg+xml"></object>
                    <DealIcons icon="rightArrow" selected={false}></DealIcons>
                </div>
                <div className="icons-container">
                    {TopbarIconsData.map((item, index) => {
                        return (
                            <div
                                onClick={() => {
                                    handleSelect(item.id);
                                }}
                                key={index}
                            >
                                {
                                    index !== 2 ? <DealIcons icon={item.icon} selected={selectedId === item.id} /> :
                                        <div className="notification-wrapper">
                                            <DealIcons icon="notification" selected={selectedId === item.id} />
                                            <div className="badge">{count}</div>
                                        </div>
                                }
                            </div>
                        );
                    })}
                    <Image src="/assets/user.png" alt="" width="45" height="45"></Image>
                </div>

            </div>
        </div>
    );
};

export default Topbar;
