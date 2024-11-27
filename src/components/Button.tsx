import { ReactElement } from 'react';

interface ButtonProps {
    variant: 'primary' | 'secondary';
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses = {
    primary: 'bg-purple-600 text-white',
    secondary: 'bg-purple-200 text-purple-600',
};

const defaultStyles =
    'px-4 py-2 rounded-md font-normal flex justify-center items-center gap-1.5';

export function Button({
    variant,
    text,
    startIcon,
    onClick,
    fullWidth,
    loading,
}: ButtonProps) {
    return (
        <button
            onClick={!loading ? onClick : undefined} // Prevent clicks when loading
            disabled={loading}
            className={`${variantClasses[variant]} ${defaultStyles} ${
                fullWidth ? 'w-full' : ''
            } ${loading ? 'opacity-50 pointer-events-none' : ''}`}
        >
            {loading ? (
                <span className="flex items-center gap-2">
                    <span className="loader animate-spin border-2 border-t-2 border-white rounded-full h-4 w-4"></span>
                    Loading...
                </span>
            ) : (
                <>
                    {startIcon}
                    {text}
                </>
            )}
        </button>
    );
}
