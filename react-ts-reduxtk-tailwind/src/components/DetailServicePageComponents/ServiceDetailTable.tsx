import { useNavigate } from "react-router-dom";
import { IService } from "../../Models/DataBaseModels/Service";

interface IServiceDetailTable {
    service: IService | null
}

export function ServiceDetailTable({ service }: IServiceDetailTable) {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col cursor-default">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full  text-sm font-light">
                                <thead>
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="pb-10"
                                        >
                                            <span className="text-2xl font-light text-green-600 cursor-default">
                                                Данные:
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <thead className="font-medium">
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="py-4"
                                            onClick={() => navigate(`/cars/${service?.Client.Car.Id}`)}
                                        >
                                            <span className="text-lg font-medium text-green-600 cursor-pointer
                                                duration-150 hover:text-black">
                                                Авто
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Бренд</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Car.Brand.Brand}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Модель</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Car.Model}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Регистрационный номер</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Car.Plate}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Год выпуска</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Car.ReleaseYear}</td>
                                    </tr>
                                </tbody>
                                <thead className="font-medium">
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="py-4"
                                            onClick={() => navigate(`/clients/${service?.Client.Id}`)}
                                        >
                                            <span className="text-lg font-medium text-green-600 cursor-pointer
                                                duration-150 hover:text-black">
                                                Клиент
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Имя</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Person.Name}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Дата рождения</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Person.BornDate.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Номер</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Person.PhoneNumber}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Регистрация</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Client.Person.Registration}</td>
                                    </tr>
                                </tbody>
                                <thead className="font-medium">
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="py-4"
                                            onClick={() => navigate(`/workers/${service?.Worker?.Id}`)}
                                        >
                                            <span className="text-lg font-medium text-green-600 cursor-pointer
                                                duration-150 hover:text-black">
                                                Мастер
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Имя</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Worker?.Person.Name}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Принят на работу</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Worker?.Employment.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Специальность</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Worker?.Specialty.Specialty}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Ранг</td>
                                        <td className="whitespace-nowrap px-6 py-4">{service?.Worker?.Rank}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};