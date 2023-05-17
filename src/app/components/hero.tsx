import React from 'react';
import { Button } from 'antd';
import Image from 'next/image';
import { DealIcons } from './icons';
interface HeroProps { }

const Hero: React.FC<HeroProps> = (props) => {
    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <span className="hero-title">WeWork + Salesforce</span>
                <Button style={{ background: "#00B686", fontFamily: "Montserrat", fontWeight: 600, fontSize: 15 }} type="primary" size="large">Publish/Share</Button>
            </div>

            <div className="hero-background">
                <div className="hero-image-container">
                    <Image className="hero-image" src="/assets/Mask3.png" alt="" fill={true} />
                </div>
                <div className="hero-left">
                    <div className="logo-wrapper">
                        <object data="/assets/weLogoS.svg" type="image/svg+xml"></object>
                        <DealIcons icon='plus' selected />
                        <object data="/assets/salesLogo.svg" type="image/svg+xml"></object>
                    </div>
                </div>
                <div className="hero-right">
                    <span className="proposal-wrapper">Workspace Proposal</span>
                </div>

            </div>
        </div>
    );
};

export default Hero;
