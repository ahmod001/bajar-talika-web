"use client"
import {
    Navbar as Nav,
    NavbarBrand,
} from "@heroui/react";

import Brand from "./ui/Brand";
import HorizontalNav from "./HorizontalNav";
import SidebarNav from "./SidebarNav";


export default function Navbar() {


    return (
        <Nav maxWidth="full" className="sticky bg-white px-0 " isBordered >
            <div className="flex w-full container mx-auto ">
                <NavbarBrand className="">
                <Brand />
            </NavbarBrand>


            <HorizontalNav />
            <SidebarNav />
            </div>
        </Nav>
    );
}

