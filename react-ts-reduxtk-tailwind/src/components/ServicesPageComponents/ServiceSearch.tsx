import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { IService } from "../../Models/DataBaseModels/Service";
import { fetchServices } from "../../store/actions/serviceActions";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/input";
import axios from "../../axios/axios";

export function ServiceSearch() {

    //предлагаемые факты обслуживания 
    const [displayedServices, setDisplayedServices] = useState<IService[]>([]);

    //объект для навигации
    const navigate = useNavigate();

    //хук для отображения выпадающего списка поиск
    const [dropdown, setDropdown] = useState(false);

    //значение и обработчик поля ввода
    const input = useInput('');

    //ограничение по количеству запросов
    const debounced = useDebounce(input.value);

    async function uploadServices(parametr: string) {
        const response = await axios.options('services/search');
        searchServices(response.data.data, parametr);
    }

    useEffect(() => {
        if (debounced.length >= 2) {
            uploadServices(debounced);
            //если смогли что то найти включаем дропдаун
            setDropdown(displayedServices.length > 0 ? true : false);
        } else setDropdown(false);
    }, [debounced])

    // поиск фактов обслуживания
    // TODO: реализовать поиск на сервере
    function searchServices(services: IService[], parametr: string) {
        setDisplayedServices(services.filter(x => x.Client.Person.Name.toLowerCase().includes(parametr.toLowerCase())
            || x.Client.Person.PhoneNumber.toLowerCase().includes(parametr.toLowerCase())
            || x.Client.Car.Brand.Brand.toLowerCase().includes(parametr.toLowerCase())
            || x.Client.Car.Model.toLowerCase().includes(parametr.toLowerCase())
            || x.Client.Car.Plate.toLowerCase().includes(parametr.toLowerCase())
            || x.Client.Person.Registration.toLowerCase().includes(parametr.toLowerCase())
            || x.DateAcceptance?.toString().includes(parametr.toLowerCase())
            || x.Defect.Defect.toLowerCase().includes(parametr.toLowerCase())
            || x.Worker?.Person.Name.toLowerCase().includes(parametr.toLowerCase())
            || x.DateIssuance?.toString().toLowerCase().includes(parametr.toLowerCase())));
    };

    return (
        <div className="mb-4 relative" >
            <input
                id="searchInput"
                type="text"
                className="py-2 px-4 w-full border rounded h-[42px]"
                placeholder="Введите что нибудь..."
                {...input}
            />

            {dropdown && <ul className=" list-none absolute right-0 left-0 h-[220px] top-[42px] shadow-md bg-white
            overflow-y-scroll">
                {displayedServices.map(service => (
                    <li key={service.Id}
                        className='py-3 px-4 border-b hover:bg-black hover:text-white cursor-pointer'
                        onClick={() => navigate(`/services/${service.Id}`)}
                    >{service.Client.Car.Brand.Brand} {service.Client.Car.Model} {service.Client.Car.Plate} <b>Мастер:</b> {service.Worker?.Person.Name} <b>Клиент:</b> {service.Client.Person.Name}</li>
                ))}
            </ul>}
        </div >
    )
}