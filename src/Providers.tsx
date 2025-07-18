import { PropsWithChildren } from "react";
import NextUi from "./services/next-ui/NextUi";
import { Analytics } from "@vercel/analytics/next";

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <NextUi>
            {children}
            <Analytics />
        </NextUi>
    );
};

export default Providers;