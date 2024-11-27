interface InputProps {
    placeholder: string;
    ref?: any;
}

export function Input({ ref, placeholder }: InputProps) {
    return (
        <div>
            <input
                placeholder={placeholder}
                type={'text'}
                className="px-4 py-2 rounded-md border-2 w-full"
                ref={ref}
            />
        </div>
    );
}
