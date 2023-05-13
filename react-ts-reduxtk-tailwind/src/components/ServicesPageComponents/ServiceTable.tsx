import { IService } from "../../Models/DataBaseModels/Service";
import { useNavigate } from "react-router-dom";


interface IServiceTable {
    services: IService[]
};

export function ServiceTable({ services }: IServiceTable) {
    const navigate = useNavigate();


    return (
        <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4">Клиент</th>
                    <th className="px-6 py-4">Авто</th>
                    <th className="px-6 py-4">Мастер</th>
                    <th className="px-6 py-4">Услуги</th>
                    <th className="px-6 py-4">Начало работ</th>
                    <th className="px-6 py-4">Конец работ </th>
                </tr>
            </thead>
            <tbody>
                {services.map(service => (
                    <tr key={service.Id} className="border-b border-neutral-500 hover:shadow-xl hover:bg-green-600 hover:text-white cursor-pointer"
                        onClick={() => navigate(`/services/${service.Id}`)}
                    >
                        <th className="whitespace-nowrap px-6 py-4">{service.Id}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{service.Client.Person.Name}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{service.Client.Car.Brand.Brand} {service.Client.Car.Model} {service.Client.Car.Plate}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{service.Worker ? service.Worker.Person.Name : 'Не назначен!'}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{service.Defect.Defect}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{service.DateAcceptance?.toString()}</th>
                        <th className="whitespace-nowrap font-normal px-6 py-4">{service.DateIssuance ? service.DateIssuance.toString() : 'Обслуживается'}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};