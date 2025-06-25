import Link from "next/link";

const Page = () => {
    return (
        <div className="container mx-auto p-3.5">
            <Link href={'/privacy-policy'}>
                Privacy Policy
            </Link>
            <br />
            <Link href={'/about'}>
                About
            </Link>
        </div>
    );
};

export default Page;