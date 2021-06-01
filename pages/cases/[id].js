import {useRouter} from 'next/router'

export default function () {
    const {query} = useRouter();
    console.log(query)
    return (
        <div>
            Пользователь с id: {query.id}
        </div>
    )
}
