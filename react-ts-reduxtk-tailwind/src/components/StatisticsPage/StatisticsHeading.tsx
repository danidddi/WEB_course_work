import { useEffect, useState } from 'react';
import { IService } from "../../Models/DataBaseModels/Service";

interface IStatisticsHeading {
    services: IService[]
}

export function StatisticsHeading({ services }: IStatisticsHeading) {

    const [servicesLength, setServicesLength] = useState(1);
    const [outlayCount, setOutlayCount] = useState(1);
    const [payCount, setPayCount] = useState(1);
    const [serviceDo, setServiceDo] = useState(1);
    const [serviceDone, setServiceDone] = useState(1);



    useEffect(() => {
        let outlayCnt = 0;
        let payCnt = 0;
        let serviceDo = 0;
        let serviceDone = 0;

        services.map(x => {
            outlayCnt += x.Outlay;
            payCnt += x.Pay;
            x.DateIssuance != null ? serviceDone += 1 : serviceDo += 1;

        });

        setServicesLength(services.length);
        setPayCount(payCnt);
        setOutlayCount(outlayCnt);
        setServiceDo(serviceDo);
        setServiceDone(serviceDone);

    }, []);



    return (
        <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800 text-center">
                <div className="grid lg:gap-x-12 md:grid-cols-3">
                    <div className="mb-12 md:mb-0">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">{servicesLength}</h3>
                        <h5 className="text-lg font-medium text-black">Всего обслуживаний</h5>
                    </div>
                    <div className="mb-12 md:mb-0">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">{serviceDo}</h3>
                        <h5 className="text-lg font-medium text-black">В обслуживании</h5>
                    </div>

                    <div className="mb-12 md:mb-0">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">{serviceDone}</h3>
                        <h5 className="text-lg font-medium text-black">Обслужено</h5>
                    </div>

                </div>
            </section>
            <section className="mb-32 text-gray-800 text-center">
                <div className="grid lg:gap-x-12 md:grid-cols-2">
                    <div className="mb-12 md:mb-0">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">{outlayCount} &#8381;</h3>
                        <h5 className="text-lg font-medium text-black">Потрачено на детали</h5>
                    </div>

                    <div className="mb-12 md:mb-0">
                        <h3 className="text-2xl font-bold text-green-600 mb-4">{payCount} &#8381;</h3>
                        <h5 className="text-lg font-medium text-black">Заработано</h5>
                    </div>
                </div>
            </section>

        </div>
    );
}