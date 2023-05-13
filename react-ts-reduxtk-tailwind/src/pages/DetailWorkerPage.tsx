import { useNavigate, useParams } from "react-router-dom";
import { IWorker } from "../Models/DataBaseModels/Worker";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { Heading } from "../components/Heading";
import { BackButton } from "../components/BackButton";
import { Divide } from "../components/Divide";
import { Footer } from "../components/Footer";
import { WorkerDetailTable } from "../components/DetailWorkerPage.tsx/WorkerDetailTable";
import { ServicesHistory } from "../components/ServicesHistory";


export function DetailWorkerPage() {

    const navigate = useNavigate();

    //извлекаем из строки запроса айди работника
    const params = useParams<'id'>();
    const [worker, setWorker] = useState<IWorker | null>(null);

    async function fetchDetailWorker() {
        const response = await axios.get(`workers/${params.id}`);
        setWorker(response.data.data);
    }

    useEffect(() => {
        fetchDetailWorker();
    }, []);


    return (
        <>
            <div className="container max-w-[1200px] mb-10 mx-auto mt-[30px] rounded shadow-xl p-6">
                <BackButton path="workers" />
                <Heading text={`Мастер автосервиса #${worker?.Id}`} />
                <Divide />
                <WorkerDetailTable worker={worker} />

                <p className="my-10 text-center text-2xl font-light text-green-600 cursor-default"
                >
                    История работ мастера:
                </p>

                <ServicesHistory services={worker?.Services?.sort((a, b) => (a.DateIssuance != null && b.DateIssuance == null) ? 1 : -1)} />


            </div>
            <Footer />
        </>
    );
}
