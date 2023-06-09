//интерфейс для данных, которые приходят после запроса с сервера
//в дальнейшем можно маштабировать приложение и передавать доп.информацию
export interface IServerResponse<T> {
    data: T,
    meta: {
        "total": number
    }
};