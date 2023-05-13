import { BackButton } from "../components/BackButton";
import { Divide } from "../components/Divide";
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { ServiceForm } from "../components/ServiceForm";



export function AdminFormPage() {
    return (
        <>
            <div className="container max-w-[1200px] mx-auto mt-[30px] rounded shadow-lg p-6 mb-10">
                <BackButton path="services" />
                <Heading text={'Новое обслуживание'} />
                <Divide />

                <ServiceForm />



            </div>
            <Footer />
        </>
    );
}
