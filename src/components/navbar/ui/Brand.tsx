import Image from "next/image";
import logo from '@/assets/logo/logo_without-title.png';

const Brand = () => {
    return (
        <header className="flex items-center gap-x-2">
            <Logo size={33} />
            <h3 className="font-bold text-inherit text-lg">Bazar Talika</h3>
        </header>
    );
};


const Logo = ({ size = 50, className }: { size?: number, className?: string }) => (
    <Image
        src={logo}
        width={size}
        height={size}
        alt="বাজার তালিকা - Shopping List"
        className={className}
    />
)

export default Brand;