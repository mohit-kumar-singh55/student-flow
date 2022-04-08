import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {
    ActiveHomeIcon,
    ActiveProfileIcon,
    HomeIcon,
    MessageIcon,
    ProfileIcon,
    RevenueIcon,
    ReviewIcon,
    SessionIcon,
    SettingIcon,
} from '../icons';

function StudentSideBar() {
    const router = useRouter()
    const links = [
        {
            name: 'Home',
            link: '/studentDashboard',
            active: router.pathname === '/studentDashboard',
            icons: <HomeIcon />,
            activeIcons: <ActiveHomeIcon />,
        },
        {
            name: 'My Sessions',
            link: '/studentDashboard/sessions',
            active: router.pathname === '/studentDashboard/sessions',
            icons: <SessionIcon />,
            activeIcons: <ActiveProfileIcon />,
        },
        {
            name: 'My Progress',
            link: '/studentDashboard/progress',
            active: router.pathname === '/studentDashboard/progress',
            icons: <SessionIcon />,
            activeIcons: <ActiveProfileIcon />,
        },
        {
            name: 'Messages',
            link: '/studentDashboard/messages',
            active: router.pathname === '/studentDashboard/messages',
            icons: <MessageIcon />,
            activeIcons: <ActiveProfileIcon />,
        },
        {
            name: 'My Reviews',
            link: '/studentDashboard/myreviews',
            active: router.pathname === '/studentDashboard/myreviews',
            icons: <ReviewIcon />,
            activeIcons: <ReviewIcon />,
        },
        {
            name: 'My Shortlist',
            link: '/studentDashboard/shortlist',
            active: router.pathname === '/studentDashboard/shortlist',
            icons: <RevenueIcon />,
            activeIcons: <ActiveProfileIcon />,
        },
        {
            name: 'My Wallet',
            link: '/studentDashboard/wallet',
            active: router.pathname === '/studentDashboard/wallet',
            icons: <RevenueIcon />,
            activeIcons: <ActiveProfileIcon />,
        },
        {
            name: 'Settings',
            link: '/studentDashboard/settings/nameAndLogin',
            active: router.pathname?.split('/').includes('settings'),
            icons: <SettingIcon />,
            activeIcons: <ActiveProfileIcon />,
        },
    ]
    return (
        <div className=" hidden w-[232px] min-w-[232px] max-w-[232px] whitespace-nowrap rounded-r-lg bg-white px-2 lg:block ">
            <span className="block bg-gradient-to-r from-[#FC4D6D] to-[#FDA02F] bg-clip-text py-8 text-center font-poppins text-2xl font-bold tracking-widest text-transparent">
                Dashboard
            </span>
            <StudentSideBarLinks links={links} />
        </div>
    )
}

export default StudentSideBar

export function StudentSideBarLinks({ links, hideIcon = false }) {
    return (
        <nav className="w-full">
            <ul className="">
                {links.map((item, i) => (
                    <li
                        key={i}
                        className={`align-center mb-5 block justify-center text-left font-roboto text-lg  font-bold ${item.active
                            ? 'rounded-2xl bg-pink px-4 py-3 xl:px-5 2xl:px-9'
                            : 'px-4 py-3 xl:px-5 2xl:px-9'
                            } font-roboto`}
                    >
                        <Link href={item.link}>
                            <a className={`flex ${item.active ? 'text-white' : null}`}>
                                {hideIcon ? null : item.active ? item.activeIcons : item.icons}
                                <span className="pl-3">{item.name}</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
