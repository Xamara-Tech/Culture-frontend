import React from 'react';
import { Button } from '../ui/button';


interface FooterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string;

}
const FooterButton = ({className, ...props}: FooterButtonProps) => {
    return (
        <Button
        {...props}
        className = {`rounded-none rounded-r-[2vw] bg-blue-800 hover:bg-blue-700 text-gray-200 font-medium px-6 py-2 ml-0${className}`}
        />

    );
        

};
export default FooterButton