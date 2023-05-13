import { useNavigate } from "react-router-dom";
import { IService } from "../Models/DataBaseModels/Service";

interface IServicesHistory {
    services: IService[] | null | undefined
}

export function ServicesHistory({ services }: IServicesHistory) {
    const navigate = useNavigate();
    return (
        <ol className="border-l-2 border-green-500">
            {services?.map(service => (
                <li key={service.Id} className="cursor-default">
                    <div className="flex-start flex items-center">
                        <div
                            className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-green-600"></div>
                        <h4 className="-mt-2 text-xl font-semibold">Обслуживание #{service.Id}</h4>
                    </div>
                    <div className="mb-6 ml-6 pb-6">
                        <p className="text-sm text-green-600 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
                        >{service.DateIssuance == null ? 'В обслуживании' : service.DateIssuance.toString()}</p>
                        <p className="my-1">
                            Авто: {service.Client.Car.Brand.Brand} {service.Client.Car.Model} {service.Client.Car.Plate}
                        </p>
                        <p className="my-1">
                            Клиент: {service.Client.Person.Name}
                        </p>
                        <p className="my-1">
                            Услуги: {service.Defect.Defect}
                        </p>
                        <p className="my-1">
                            Мастер: {service.Worker?.Person.Name} {service.Worker?.Specialty.Specialty}
                        </p>
                        <button type="button"
                            onClick={() => { navigate(`/services/${service.Id}`) }}
                            className="inline-block rounded border-2 border-green-600
                                 px-6 pb-[6px] pt-2 mr-5 mt-4 text-xs text-white bg-black font-medium uppercase
                                   transition duration-150 ease-in-out
                                   hover:text-black hover:bg-green-700 hover:border-black "
                        >
                            Подробнее
                        </button>
                    </div>
                </li>
            ))}
        </ol>
    );
};