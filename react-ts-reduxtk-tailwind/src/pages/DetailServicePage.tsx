import { useNavigate, useParams } from "react-router-dom";
import { Heading } from "../components/Heading";
import { Divide } from "../components/Divide";
import { ServiceDetailTable } from "../components/DetailServicePageComponents/ServiceDetailTable";
import axios from "../axios/axios";
import { useEffect, useState } from "react";
import { IService } from "../Models/DataBaseModels/Service";
import { Pricing } from "../components/DetailServicePageComponents/Pricing";
import { Comment } from "../components/DetailServicePageComponents/Comment";
import { Footer } from "../components/Footer";
import { BackButton } from "../components/BackButton";


export function DetailServicePage() {

    const navigate = useNavigate();

    const params = useParams<'id'>();
    const [service, setService] = useState<IService | null>(null);

    async function fetchDetailService() {
        const response = await axios.get(`services/${params.id}`);
        setService(response.data.data);
    }

    useEffect(() => {
        fetchDetailService();
    }, []);


    return (
        <>
            <div className="container max-w-[1200px] mb-10 mx-auto mt-[30px] rounded shadow-xl p-6">
                <BackButton path="services" />
                <Heading text={`Сервисное обслуживание #${service?.Id}`} />
                <Divide />
                <ServiceDetailTable service={service} />
                <Comment comment={service?.Comments} />
                <Pricing service={service} />
            </div>
            <Footer />
        </>
    );
}
