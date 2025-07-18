import React from 'react';
import {
    Link,
    Button,
    useDisclosure,
} from "@heroui/react";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/drawer";
import Brand from './ui/Brand';
import { FiMenu } from 'react-icons/fi';
const SidebarNav = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <aside className="sm:hidden">
            <OpenDrawer onClick={onOpen}/>

            <Drawer backdrop="blur" size="xs" placement="left" isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                    <DrawerHeader className="items-center gap-x-1.5">
                        <Brand />
                    </DrawerHeader>

                    <DrawerBody>
                        <Link href="/" color="foreground">
                            হোম
                        </Link>

                        <Link href="#" color="foreground">
                            ফিচারস
                        </Link>

                        <Link href="/feedback">
                            <Button color="primary" fullWidth >
                                ফিডব্যাক
                            </Button>
                        </Link>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </aside>
    );
}

const OpenDrawer = ({ onClick }: { onClick: VoidFunction }) =>
(<Button isIconOnly onPress={onClick} variant='light' >
    <FiMenu size={27} />
</Button>)

export default SidebarNav;