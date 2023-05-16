"use client"
import RootLayout from "./layout";
import "./globals.scss"
import { Progress } from 'antd';
import { Tabs } from 'antd';
import ProjectMenu from "./components/projectMenu";
import ProjectComponent from "./components/project";
import NewHomeLayout from "./layouts/newHomeLayout";

export default function Home() {

  return (
    <RootLayout>
      <NewHomeLayout>
      </NewHomeLayout>
    </RootLayout>
  )
}
