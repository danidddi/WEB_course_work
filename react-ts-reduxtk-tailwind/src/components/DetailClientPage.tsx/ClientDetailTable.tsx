import { useNavigate } from "react-router-dom";
import { IClient } from "../../Models/DataBaseModels/Client";

interface IClientDetailTable {
    client: IClient | null
}

export function ClientDetailTable({ client }: IClientDetailTable) {
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
                                        >
                                            <span className="text-lg font-medium text-green-600 cursor-default">
                                                Клиент
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Имя</td>
                                        <td className="whitespace-nowrap px-6 py-4">{client?.Person.Name}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Дата рождения</td>
                                        <td className="whitespace-nowrap px-6 py-4">{client?.Person.BornDate.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Номер</td>
                                        <td className="whitespace-nowrap px-6 py-4">{client?.Person.PhoneNumber}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Регистрация</td>
                                        <td className="whitespace-nowrap px-6 py-4">{client?.Person.Registration}</td>
                                    </tr>
                                </tbody>
                                <thead className="font-medium">
                                    <tr>
                                        <th colSpan={4}
                                            scope="col"
                                            className="py-4"
                                            onClick={() => navigate(`/cars/${client?.Car.Id}`)}
                                        >
                                            <span className="text-lg font-medium text-green-600
                                                cursor-pointer duration-150 hover:text-black">
                                                Автомобиль
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Авто</td>
                                        <td className="whitespace-nowrap px-6 py-4">{client?.Car.Brand.Brand} {client?.Car.Model}</td>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">Регистрационный номер авто</td>
                                        <td className="whitespace-nowrap px-6 py-4">{client?.Car.Plate}</td>
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