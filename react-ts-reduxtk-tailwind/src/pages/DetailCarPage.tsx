import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { BackButton } from "../components/BackButton";
import { Heading } from "../components/Heading";
import { Divide } from "../components/Divide";
import { Footer } from "../components/Footer";
import { ICar } from "../Models/DataBaseModels/Car";
import { CarDetailTable } from "../components/DetailCarPage.tsx/CarDetailTable";


export function DetailCarPage() {

    //извлекаем из строки запроса айди авто
    const params = useParams<'id'>();

    const [car, setCar] = useState<ICar | null>(null);

    async function fetchDetailCar() {
        const response = await axios.get(`cars/${params.id}`);
        setCar(response.data.data);
    }

    useEffect(() => {
        fetchDetailCar();
    }, []);

    return (
        <>
            <div className="container max-w-[1200px] mb-10 mx-auto mt-[30px] rounded shadow-xl p-6">
                <BackButton path="services" />
                <Heading text={`Авто #${car?.Id}`} />
                <Divide />
                <CarDetailTable car={car} />
            </div>
            <Footer />
        </>
    );
}
