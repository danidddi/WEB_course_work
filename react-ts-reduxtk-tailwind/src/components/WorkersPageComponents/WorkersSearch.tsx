import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { IService } from "../../Models/DataBaseModels/Service";
import { fetchServices } from "../../store/actions/serviceActions";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/input";
import axios from "../../axios/axios";
import { IWorker } from "../../Models/DataBaseModels/Worker";

export function WorkersSearch() {

    //предлагаемые мастера 
    const [displayedWorkers, setDisplayedWorkers] = useState<IWorker[]>([]);

    //объект для навигации
    const navigate = useNavigate();

    //хук для отображения выпадающего списка поиск
    const [dropdown, setDropdown] = useState(false);

    //значение и обработчик поля ввода
    const input = useInput('');

    //ограничение по количеству запросов
    const debounced = useDebounce(input.value);

    async function uploadWorkers(parametr: string) {
        const response = await axios.get('workers');
        console.log(response.data.data);

        searchWorkers(response.data.data, parametr);
    }

    useEffect(() => {
        if (debounced.length > 0) {
            uploadWorkers(debounced);
            //если смогли что то найти включаем дропдаун
            setDropdown(displayedWorkers.length > 0 ? true : false);
        } else setDropdown(false);
    }, [debounced])

    // поиск мастеров 
    // TODO: реализовать поиск на сервере
    function searchWorkers(workers: IWorker[], parametr: string) {
        setDisplayedWorkers(workers.filter(x => x.Person.Name.toLowerCase().includes(parametr.toLowerCase())
            || x.Person.Registration.toLowerCase().includes(parametr.toLowerCase())
            || x.Person.PhoneNumber.toLowerCase().includes(parametr.toLowerCase())
            || x.Rank.toLowerCase().includes(parametr.toLowerCase())
            || x.Specialty.Specialty.toLowerCase().includes(parametr.toLowerCase())));
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
                {displayedWorkers.map(worker => (
                    <li key={worker.Id}
                        className='py-3 px-4 border-b hover:bg-black hover:text-white cursor-pointer'
                        onClick={() => navigate(`/workers/${worker.Id}`)}
                    >
                        {worker.Person.Name} {worker.Specialty.Specialty}({worker.Rank})
                    </li>
                ))}
            </ul>}
        </div >
    )
}