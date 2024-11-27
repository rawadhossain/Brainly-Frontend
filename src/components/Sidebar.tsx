import { TwitterIcon } from '../icons/TwitterIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { SidebarItem } from './SidebarItem';
import { Logo } from '../icons/Logo';

export function Sidebar() {
    return (
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
            <div className="flex items-center pl-5 pt-6">
                <Logo />
                <span className="text-2xl font-semibold">Brainly</span>
            </div>

            <div className="pt-2 pl-8">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
            </div>
        </div>
    );
}
