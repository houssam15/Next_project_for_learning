import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Logo() {
    return (
        <header className="row-span-1  flex items-center justify-center">
                 <FontAwesomeIcon icon={['fas','user']} width={"20%"} color='rgb(14, 116, 144)' />
        </header>
    );
}