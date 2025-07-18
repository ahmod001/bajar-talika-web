import Content from './content/Content';
import Mockup from './mockup/Mockup';
import bg from '../../assets/image.png'; // Your background image asset
import Background from './Background';

export const Hero = () => {
    return (
        <Background bg={bg}>
            <section className="px-4 pt-8 pb-8 text-white h-full flex items-center justify-center">

                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-14">
                    <Content />
                    <Mockup />
                </div>
            </section>
        </Background>
    );
};
