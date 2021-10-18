export function Link(props: any) {
    return (
        <a href={props.url} className="border-gray-600 rounded border px-2 py-1">{props.children}</a>
    )
}