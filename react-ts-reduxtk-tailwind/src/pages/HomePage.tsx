import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { Masters } from "../components/HomePageComponents/Masters";
import { Operation } from "../components/HomePageComponents/Operation";
import { Order } from "../components/HomePageComponents/Order";
import { Step } from "../components/HomePageComponents/Step";

export function HomePage() {
    return (
        <div>
            <Order />
            <div className="w-3/4 m-auto">
                <div className="py-20">
                    <Heading text="Проще не придумаешь" />
                    <Step />
                </div>
                <div className="py-16">
                    <Masters />
                </div>
                <div className="py-16">
                    <Heading text="Широкий спектр услуг" />
                    <Operation />
                </div>
            </div>
            <Footer />
        </div>
    );
}
