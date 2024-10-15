interface ButtonProps {
    label: string;
}

const Button = ({ label }: ButtonProps) => {
    return <button className="bg-red-500 px-4 py-2">{label || "no label provide"}</button>;
};

export default Button;
