export default function Input({label, type="number", value, handleChange, identifier}){
    return(
        <p>
            <label>{label}</label>
            <input value={value} type={type} required onChange={(event)=>handleChange(identifier, event.target.value)}/>
        </p>
    );
}