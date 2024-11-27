import { ReactElement } from 'react';

export function SidebarItem({
    text,
    icon,
}: {
    text: string;
    icon: ReactElement;
}) {
    return (
        <div className="flex items-center gap-4 p-3 cursor-pointer text-gray-700 hover:bg-gray-300">
            {icon}
            {text}
        </div>
    );
}
