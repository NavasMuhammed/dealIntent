"use client"
import RootLayout from "./layout";
import HomeLayout from "./layouts/homeLayout";
import "./globals.scss"
import { Progress } from 'antd';

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
                <Progress percent={10} trailColor="#D3D7D7" steps={17} strokeColor="#00B686" showInfo={false} size={10} />
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </RootLayout>
  )
}
