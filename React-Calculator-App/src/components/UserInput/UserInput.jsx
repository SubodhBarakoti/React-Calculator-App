import Input from "./Input.jsx";
export default function UserInput({investmentValues, handleChange}){
    return(
        <section id="user-input">
            <div className="input-group">
                <Input handleChange={handleChange} label="Initial Investment" value={investmentValues.initialInvestment} identifier="initialInvestment"/>
                <Input handleChange={handleChange} label="Annual Investment" value={investmentValues.annualInvestment} identifier="annualInvestment"/>
            </div>
            <div className="input-group">
                <Input handleChange={handleChange} label="Expected Return" value={investmentValues.expectedReturn} identifier="expectedReturn"/>
                <Input handleChange={handleChange} label="Duration" value={investmentValues.duration} identifier="duration"/>
            </div>
        </section>
    );
}