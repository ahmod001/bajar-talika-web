"use client" 

import { HeroUIProvider } from "@heroui/react";
import { PropsWithChildren } from "react";

export default function NextUi({ children }: PropsWithChildren) {
    return (
        <HeroUIProvider>
            <main className="light ">
                {children}
            </main>
        </HeroUIProvider>
    );
}