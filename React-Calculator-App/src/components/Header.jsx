import Logo from "../assets/investment-calculator-logo.png";

export default function Header({children}){
    return(
        <div id="header">
            <img src={Logo} alt="Logo" />
            <h1>{children}</h1>
        </div>
    );
}