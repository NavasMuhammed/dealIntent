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
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.991 38C29.4795 38 37.9821 29.4934 37.9821 19C37.9821 8.50659 29.4795 0 18.991 0C8.50258 0 0 8.50659 0 19C0 29.4934 8.50258 38 18.991 38Z" fill="#04433B" />
                        <path d="M18.991 31C25.6153 31 30.9854 25.6274 30.9854 19C30.9854 12.3726 25.6153 7 18.991 7C12.3668 7 6.9967 12.3726 6.9967 19C6.9967 25.6274 12.3668 31 18.991 31Z" fill="#00B686" />
                    </svg>
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
