"use client"
import RootLayout from "./layout";
import "./globals.scss"
import { Progress } from 'antd';
import { Tabs } from 'antd';
import ProjectMenu from "./components/projectMenu";
import ProjectComponent from "./components/project";
import NewHomeLayout from "./layouts/newHomeLayout";
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs';

// Config `hashPriority` to `high` instead of default `low`
// Which will remove `:where` wrapper

export default function Home() {

  return (
    <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
      <RootLayout>
        <NewHomeLayout>
        </NewHomeLayout>
      </RootLayout>
    </StyleProvider>
  )
}
