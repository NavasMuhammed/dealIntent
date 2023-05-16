"use client"
import Topbar from "../components/topBar"
import { Divider } from 'antd';
export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="home-layout">
            <Topbar />
            <Divider style={{ margin: "20px 0px" }} />
            <div className="vLine"></div>
            <div>{children}</div>
        </div>
    )
}
