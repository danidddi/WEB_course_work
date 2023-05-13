import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useState, ChangeEvent, useEffect } from 'react'
import { IServiceFilter } from "../../Models/ServiceFilter";
import { serviceSlice } from "../../store/slices/ServiceSlice";
import { fetchBrands } from "../../store/actions/brandActions";
import { fetchDefects } from "../../store/actions/defectActions";
import { fetchWorkers } from "../../store/actions/workerActions";

export function ServiceFilter() {

    const dispatch = useAppDispatch();

    //категории фильтра
    const brands = useAppSelector(state => state.brand.brands);
    const defects = useAppSelector(state => state.defect.defects);
    const workers = useAppSelector(state => state.worker.workers);

    //загружаем данные из базы данных
    useEffect(() => {
        dispatch(fetchWorkers());
        dispatch(fetchBrands());
        dispatch(fetchDefects());
    }, []);

    //объект содержащий категории фильтрации
    const optionsItems = {
        brands: brands.map(x => x),
        defects: defects.map(x => x),
        workers: workers.map(x => x),
    }

    //фильтр
    const [filter, setFilter] = useState<IServiceFilter>({ brand: '', defect: '', worker: '' });

    //при изменении фильтра устанавливаем новое условие фильтрации
    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    //при изменении фильтра фильтруем данные
    useEffect(() => { dispatch(serviceSlice.actions.filter(filter)) }, [filter]);

    return (
        <div className="py-2 mb-2">

            <select name="brand"
                className="px-4 py-2 rounded border hover:bg-black hover:text-white"
                onChange={changeHandler}
                value={filter.brand}>
                <option className="hidden" >Брэнд</option>
                {optionsItems.brands.map(x => <option value={x.Id} key={x.Id}>{x.Brand}</option>)}
            </select>

            <select
                name="defect"
                className="mx-4 px-4 py-2 rounded border  hover:bg-black hover:text-white"
                onChange={changeHandler}
                value={filter.defect}
            >
                <option className="hidden">Дефекты</option>
                {optionsItems.defects.map(x => <option value={x.Id} key={x.Id}>{x.Defect}</option>)}
            </select>

            <select
                name="worker"
                className="mx-4 px-4 py-2 rounded border  hover:bg-black hover:text-white"
                onChange={changeHandler}
                value={filter.worker}
            >
                <option className="hidden">Работник</option>
                {optionsItems.workers.map(x => <option value={x.Id} key={x.Id}>{x.Person.Name}</option>)}
            </select>

            <button
                className=" border rounded px-4 py-2 hover:bg-black hover:text-white"
                onClick={() => setFilter({ brand: '', defect: '', worker: '' })}
            >
                Очистить
            </button>
        </div >

    )
}