"use client"
import {
    Navbar as Nav,
    NavbarBrand,
    Link,
    Button,
    useDisclosure,
} from "@heroui/react";

import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import { Logo } from "../Logo";
import Brand from "./ui/Brand";
import HorizontalNav from "./HorizontalNav";
import SidebarNav from "./SidebarNav";


export default function Navbar() {


    return (
        <Nav maxWidth="full" className="bg-white sticky " isBordered>
            <NavbarBrand className="">
                <Brand />
            </NavbarBrand>


            <HorizontalNav />
            <SidebarNav />

        </Nav>
    );
}

