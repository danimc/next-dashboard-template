import Link from 'next/link'

const LinksProfile = ({text}) => {
    return (

        <Link href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">
                {text}
        </Link>

    )
}

export default LinksProfile