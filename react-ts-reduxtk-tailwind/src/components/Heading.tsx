
interface IHeading {
    text: string
}

export function Heading({ text }: IHeading) {

    return (
        <>
            <h1 className="my-2 text-center text-3xl font-light leading-tight text-green-700 cursor-default">
                {text}
            </h1>

        </>
    );
}