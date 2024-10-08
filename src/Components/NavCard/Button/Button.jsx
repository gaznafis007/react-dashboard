// eslint-disable-next-line react/prop-types
const Button = ({buttonTitle, className}) => {
    return (
        <button className={`rounded-md text-white px-3 text-md capitalize ${className}`}>{buttonTitle}</button>
    );
};

export default Button;