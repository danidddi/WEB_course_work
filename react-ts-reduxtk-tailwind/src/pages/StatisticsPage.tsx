import { Divide } from "../components/Divide";
import { Heading } from "../components/Heading";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllServices } from "../store/actions/serviceActions";
import { StatisticsHeading } from "../components/StatisticsPage/StatisticsHeading";


export function StatisticsPage() {
    const { services } = useAppSelector(state => state.service);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllServices());
    }, [dispatch]);

    return (
        <div className="container max-w-[1200px] mx-auto mt-[30px] rounded shadow-lg p-6">
            <Heading text={`Статистика автосервиса`} />
            <Divide />

            <StatisticsHeading services={services} />

        </div>
    );
}
