import {
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@heroui/react";
const HorizontalNav = () => (
    <NavbarContent className="hidden sm:flex gap-5 font-semibold " justify="end">
        <NavbarItem>
            <Link href="#">
                হোম
            </Link>
        </NavbarItem>

        <NavbarItem>
            <Link href="#">
                ফিচারস
            </Link>
        </NavbarItem>
        <NavbarItem>
            <Link href="/feedback">
                <Button color="primary">
                    ফিডব্যাক
                </Button>
            </Link>
        </NavbarItem>
    </NavbarContent>
)

export default HorizontalNav;