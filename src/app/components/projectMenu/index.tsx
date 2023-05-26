import React from "react";
import { ProjectMenuData } from "./data";
import { usePathname, useRouter } from "next/navigation";

export default function ProjectMenu() {
    const router = useRouter();
    const pathName = usePathname()
    function checkActive(item: any) {
        const result = pathName.split("/").map((element) => element.trim());
        const match = result.find((element) => {
            if (element == item.name) {
                return true;
            }
        });

        if (item.path == pathName) {
            return true;
        } else if (item.name == "summary" && pathName == "/") {
            return true;
        } else if (match) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className="leftMenu">
            <div className="items">
                {ProjectMenuData.map((item, index) => {
                    return (
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(item.path);
                            }}
                            key={index}
                            className="item"
                        >
                            <span className={checkActive(item) ? "selected" : ""}>
                                {item.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}