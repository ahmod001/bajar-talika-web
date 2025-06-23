import Block from "./Block";
import PageTitle from "./PageTitle";
import Title from "./Title";

const Content = {
    Block: Block,
    Title: Title,
    PageTitle: PageTitle
}

export default Content;
export type ContentType = typeof Content;