import { useNavigate, useParams } from "react-router-dom";
import { IClient } from "../Models/DataBaseModels/Client";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { BackButton } from "../components/BackButton";
import { Heading } from "../components/Heading";
import { Divide } from "../components/Divide";
import { Footer } from "../components/Footer";
import { ServicesHistory } from "../components/ServicesHistory";
import { ClientDetailTable } from "../components/DetailClientPage.tsx/ClientDetailTable";
import { IService } from "../Models/DataBaseModels/Service";


export function DetailClientPage() {

    //извлекаем из строки запроса айди клиента
    const params = useParams<'id'>();

    const [client, setClient] = useState<IClient | null>(null);

    async function fetchDetailClient() {
        const response = await axios.get(`clients/${params.id}`);
        setClient(response.data.data);
    }



    useEffect(() => {
        fetchDetailClient();
    }, []);

    return (
        <>
            <div className="container max-w-[1200px] mb-10 mx-auto mt-[30px] rounded shadow-xl p-6">
                <BackButton path="services" />
                <Heading text={`Клиент #${client?.Id}`} />
                <Divide />
                <ClientDetailTable client={client} />

                <p className="my-10 text-center text-2xl font-light text-green-600 cursor-default">История обслуживания клиента: </p>

                <ServicesHistory services={client?.Services?.sort((a, b) => (a.DateIssuance != null && b.DateIssuance == null) ? 1 : -1)} />

            </div>
            <Footer />
        </>
    );
}
