import NextLink from 'next/link'
import Content from "../content"

const ContactInfo = () => {
    return (
        <>
            <Content.Title>
                Contact
            </Content.Title>
            <Content.Block>
                Got feedback, questions, or ideas? I’d love to hear from you!<br />
                Email: <Link href="mailto:hasan.webdev1@gmail.com">hasan.webdev1@gmail.com</Link> <br />
                Phone: <Link href="tel:+8801743477288">+8801743477288</Link>
            </Content.Block>
        </>
    )
};

const Link = ({ children, href }: { children: string, href: string }) => (
    <NextLink className='underline hover:text-[#1F6B38] active:text-[#1F6B38]' href={href}>{children}</NextLink>
);
Link.displayName = 'Link';

export default ContactInfo