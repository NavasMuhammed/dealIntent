import { Progress, Tabs } from 'antd';
import React from 'react';
import ProjectMenu from '../projectMenu';

interface IndexProps { }

const ProjectComponent = ({
    children,
}: {
    children: React.ReactNode
}) => {
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

                        <Tabs type="card" tabBarGutter={10} >
                            <Tabs.TabPane tab="Basic Info" key="tab1" >
                                <div className="left-menu-wrapper">
                                    <Tabs tabPosition="left">
                                        <Tabs.TabPane tab="Welcome" key="tab1">1</Tabs.TabPane>
                                        <Tabs.TabPane tab="Product Capabilities" key="tab2">2</Tabs.TabPane>
                                        <Tabs.TabPane tab="Product Capabilities" key="tab3">3</Tabs.TabPane>
                                        <Tabs.TabPane tab="Customer Success Stories" key="tab4">4</Tabs.TabPane>
                                        <Tabs.TabPane tab="File Sharing" key="tab5">5</Tabs.TabPane>
                                        <Tabs.TabPane tab="Our Deck" key="tab6">6</Tabs.TabPane>
                                    </Tabs>
                                </div>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Files" key="tab2">
                                <div >this is it 2</div>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Mutual Action Plan" key="tab3">
                                <div >this is it 2</div>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Contact" key="tab4">
                                <div >this is it 2</div>
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectComponent;
