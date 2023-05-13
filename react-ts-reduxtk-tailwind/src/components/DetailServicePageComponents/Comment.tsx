
interface IComment {
    comment: string | null | undefined
}

export function Comment({ comment }: IComment) {
    return (
        <>
            {
                comment &&
                <div
                    className="rounded-lg bg-neutral mx-auto my-16 p-6 w-3/4 text-neutral-700 shadow-xl ">
                    <h2 className="mb-5 text-3xl font-semibold">Комментарий</h2>
                    <p>{comment}</p>
                </div>
            }
        </>
    );
};