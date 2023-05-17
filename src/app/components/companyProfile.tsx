import React from 'react';
import { DealIcons } from './icons';
import Image from 'next/image';
import { Divider } from 'antd';

interface CompanyProfileProps { }

const CompanyProfile: React.FC<CompanyProfileProps> = (props) => {
    var count: number = 8;
    return (
        <div className="company-profile">
            <div className="profile-title-wrapper">
                <section>
                    <span>Company Profile</span>
                    <div className="icon-arary-normal-res">
                        <span ></span>
                        <span ></span>
                        <span ></span>
                    </div>
                    <div className="icon-arary-normal">
                        <DealIcons icon="downArrow" selected={false} />
                        <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                        <DealIcons icon="hide" selected={false} />
                        <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                        <DealIcons icon="delete" selected={false} />
                    </div>
                </section>
            </div>
            <div className="profile-image-wrapper">
                <Image className="profile-image" src="/assets/Mask2.png" alt="" fill={true} />
                <div id="pos-abs" className="icon-arary-normal">
                    <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }}>
                        <DealIcons icon="document" selected={false} />
                        <span>1/15</span>
                    </div>
                    <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                    <DealIcons icon="download" selected={false} />
                    <Divider style={{ background: "#D3D7D7", height: "100%" }} type='vertical' />
                    <DealIcons icon="zoomOut" selected={false} />
                    <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                    <DealIcons icon="zoomIn" selected={false} />
                    <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                    <DealIcons icon="open" selected={false} />
                </div>
                <div id="pos-abs" className="icon-arary-normal-res2">
                    <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }}>
                        <DealIcons icon="document" selected={false} />
                        <span>1/15</span>
                    </div>
                    <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                    <DealIcons icon="download" selected={false} />
                    <Divider style={{ background: "#D3D7D7", height: "100%" }} type='vertical' />
                    <DealIcons icon="zoomOut" selected={false} />
                    <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                    <DealIcons icon="zoomIn" selected={false} />
                    <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                    <DealIcons icon="open" selected={false} />
                </div>
                <div id="pos-abs2">
                    <div className="we-work">
                        <Image className="we-image" src="/assets/weWorkLogo.png" alt="" height={64} width={200} />
                        <span>For all the ways you work, we&apos;re here</span>
                    </div>
                </div>
            </div>
            <div className="message-wrapper">
                <div className="notification-wrapper">
                    <DealIcons icon="message" selected={false} />
                    <div className="badge">{count}</div>
                </div>
                <Divider style={{ background: "#D3D7D7" }} type='vertical' />
                <DealIcons icon="share" selected={false} />
            </div>
        </div>
    );
};

export default CompanyProfile;
