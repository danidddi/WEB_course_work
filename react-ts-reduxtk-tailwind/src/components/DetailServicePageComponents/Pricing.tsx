import { useEffect, useState } from "react";
import { IService } from "../../Models/DataBaseModels/Service";
import axios from "../../axios/axios";

interface IPricing {
    service: IService | null
}

export function Pricing({ service }: IPricing) {

    const [serviceState, setService] = useState(service);

    useEffect(() => {
        setService(service);
    }, [service]);


    async function IssuanceHandler() {

        const response = (await axios.put(`services/closeService/${service?.Id}`));

        setService(response.data.data);
    }

    return (
        <>
            <div className="flex justify-around my-6">
                <div className="block w-[400px] rounded-lg shadow-2xl bg-white h-full">
                    <div className="p-6 border-b border-green-600 text-center">
                        <div className="mb-4 text-base">
                            <p className="text-2xl">Принят</p>
                            <p className="text-green-700 mt-5">{serviceState?.DateAcceptance?.toString()}</p>
                        </div>
                        <div className="text-base mb-6">
                            <p className="text-2xl">Затраты на детали</p>
                            <p className="text-green-700 mt-5">{serviceState?.Outlay} &#8381;</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-center text-2xl">Услуги</p>
                        <ol className="list-inside">
                            <li className="mb-4 flex items-center">
                                <p>&#128295; {serviceState?.Defect.Defect}</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="block w-[400px] rounded-lg shadow-2xl bg-white h-full">
                    <div className="p-6 text-center">
                        <div className="mb-4 text-base">
                            {
                                serviceState?.DateIssuance != null ?
                                    <>
                                        <p className="text-2xl">Обслужен</p>
                                        <p className="text-green-700 mt-5">{serviceState?.DateIssuance?.toString()}</p>
                                    </>
                                    :
                                    <>
                                        <p className="text-2xl">В обслуживании</p>
                                        <button type="button" onClick={IssuanceHandler}
                                            className="rounded border-2 border-green-600
                                                px-6 pb-[6px] pt-2 mt-4 text-base text-white bg-black                                    transition duration-150 ease-in-out
                                                hover:text-black hover:bg-green-700 hover:border-black ">
                                            Завершить обслуживание
                                        </button>
                                    </>
                            }
                        </div>
                        <div className="text-base mb-6">
                            <p className="text-2xl">К оплате</p>
                            <p className="text-green-700 mt-5">{serviceState?.Pay} &#8381;</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};