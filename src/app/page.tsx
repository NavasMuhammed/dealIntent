"use client"
import RootLayout from "./layout";
import HomeLayout from "./layouts/homeLayout";
import "./globals.scss"
import { Progress } from 'antd';
import { Tabs } from 'antd';

export default function Home() {

  return (
    <RootLayout>
      <HomeLayout>
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
                  <div>this is it </div>
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
      </HomeLayout>
    </RootLayout>
  )
}
