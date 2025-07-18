import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { PropsWithChildren } from "react";




const Background = ({ children, bg }: { bg: StaticImport } & PropsWithChildren) => (
    <div className="relative overflow-hidden h-fit  select-none">
        <Image
            src={bg}
            alt="Background image for shopping list app hero section"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={80}
            priority
            className="absolute z-0 "
        />

        <div className=" z-10 inset-0 bg-opacity-50 backdrop-blur-md backdrop-brightness-30">

            {children}
        </div>
    </div>
)


export default Background 