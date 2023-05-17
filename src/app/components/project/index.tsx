import { Progress, Tabs, ConfigProvider } from 'antd';
import React from 'react';
import ProjectMenu from '../projectMenu';
import CompanyProfile from '../companyProfile';

interface IndexProps { }

const ProjectComponent = () => {
    return (
        <>
            <div className="project-section">
                <div className="project-title-wrapper">
                    <span>Project Scope Recap</span>
                    <div className="progress-wrapper">
                        <section>
                            <span>Mutual Action Plan</span>
                            <span>3%</span>
                        </section>
                        <div>
                            <Progress percent={10} trailColor="#D3D7D7" steps={17} strokeColor="#00B686" showInfo={false} size={11} />
                        </div>
                    </div>
                </div>
                <div className="project-content-wrapper">
                    <div>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#00b96b',
                                },
                            }}
                        >
                            <Tabs type="card" tabBarGutter={10} >
                                <Tabs.TabPane tab="Basic Info" key="tab1" >

                                    <div className="profile-responsive" >
                                        <CompanyProfile />
                                    </div>

                                    <div className="left-menu-wrapper">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    colorPrimary: '#657372',
                                                },
                                            }}
                                        >
                                            <Tabs tabPosition="left">
                                                <Tabs.TabPane tab="Overview" key="tab1">
                                                    <CompanyProfile />
                                                </Tabs.TabPane>
                                                <Tabs.TabPane tab="Welcome" key="tab2">
                                                    <div className="dummy">Welcome</div>
                                                </Tabs.TabPane>
                                                <Tabs.TabPane tab="Product Capabilities" key="tab3">
                                                    <div className="dummy">Product Capabilities</div>
                                                </Tabs.TabPane>
                                                <Tabs.TabPane tab="Customer Success Stories" key="tab4">
                                                    <div className="dummy">Customer Success Stories</div>
                                                </Tabs.TabPane>
                                                <Tabs.TabPane tab="File Sharing" key="tab5">
                                                    <div className="dummy">File Sharing</div>
                                                </Tabs.TabPane>
                                                <Tabs.TabPane tab="Our Deck" key="tab6">
                                                    <div className="dummy">Our Deck</div>
                                                </Tabs.TabPane>
                                            </Tabs>
                                        </ConfigProvider>
                                    </div>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Files" key="tab2">
                                    <div className="dummy">Files</div>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Mutual Action Plan" key="tab3">
                                    <div className="dummy">Mutual Action Plan</div>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Contact" key="tab4">
                                    <div className="dummy">Contact</div>
                                </Tabs.TabPane>
                            </Tabs>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectComponent;
