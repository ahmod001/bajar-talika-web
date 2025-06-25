import Content from './content/Content';
import Mockup from './mockup/Mockup';
export const Hero = () => {
    
    return (
        <section className="px-4 pt-8 pb-16 md:pt-16  text-white" style={{ background: 'radial-gradient(circle at top, #144B26, #7BAD88)' }}>
            <div className="container  mx-auto flex flex-col lg:flex-row items-center gap-y-14">
                <Content />
                <Mockup />
            </div>
        </section>
    );
};