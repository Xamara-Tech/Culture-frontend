import { Input } from '@/components/ui/input';
import React from 'react'

interface FooterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
const FooterInput = ({className, ...props}: FooterInputProps) => {
    return (
        <Input
        {...props}
        className={`bg-white text-gray-500 placeholder-gray-400 rounded-none rounded-l-[2vw] px-4 py-2 focus:outline-none border-none ${className || ''}`}
        />
    );
};
export default FooterInput;