import { GiHamburgerMenu } from 'react-icons/gi';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-5">
        <img src="/logo-transparent.webp"
            alt="Brokers logo" />
        <GiHamburgerMenu className="text-white text-[1.7rem]" />
    </header>
    )
}