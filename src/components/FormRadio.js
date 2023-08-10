export const FormRadio = ({
  options,
  name,
  label,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div id="new-category--type" className="radio">
      <label className="label label--form">{label}</label>
      {options.map((option) => (
        <div key={crypto.randomUUID()} className="radio-option">
          <input
            name={name}
            type="radio"
            className="radio-option btn btn--radio"
            value={option.toLowerCase()}
            checked={selectedOption === option.toLowerCase()}
            onChange={() => setSelectedOption(option.toLowerCase())}
          />
          <label className="label label--radio-option">{option}</label>
        </div>
      ))}
    </div>
  );
};
