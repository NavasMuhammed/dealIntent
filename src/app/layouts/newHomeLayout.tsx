"use client"
import Hero from "../components/hero";
import Topbar from "../components/topBar"
import { Divider } from 'antd';
import "../globals.scss"
import ProjectComponent from "../components/project";
export default function NewHomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Topbar />
            <Divider style={{ margin: "20px 0px", background: "#D3D7D7" }} />
            <Hero />
            <ProjectComponent />
        </>
    )
}
