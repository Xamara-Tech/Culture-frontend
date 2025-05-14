import { Input } from '@/components/ui/input';
import React from 'react'

interface FooterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
const FooterInput = ({className, ...props}: FooterInputProps) => {
    return (
        <Input
        {...props}
            className={`flex-grow px-3 py-2 text-white rounded-l-md bg-grey-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600${className || ''}`}
        />
    );
};
export default FooterInput;