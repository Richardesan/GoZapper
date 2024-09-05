type ButtonProps = {
  backgroundColor?: string;
  name?: string;
  weight?: string;
  textColor?: string;
  shadow?: string;
  rounded?: string;
  marginButton?: string;
  image?: string;
  borderCol?: string;
  borderWidth?: string;
  disabled?: boolean;
  perm?: "submit" | "button" | "reset";
};

export default function Button({
  backgroundColor,
  weight,
  name,
  textColor,
  rounded,
  shadow,
  marginButton,
  image,
  borderCol,
  borderWidth,
  disabled,
  perm = "button", // Default to "button"
}: ButtonProps) {
  return (
    <button
    disabled={disabled}
      type={perm}
      className={`flex text-sm justify-center items-center  gap-3 transition-all ${borderCol} ${borderWidth} p-3 ${rounded} ${backgroundColor} w-full ${textColor} ${weight} ${marginButton} ${shadow}`}
    >
      {image && <img src={image} alt={name} />}
      <p>{name}</p>
    </button>
  );
}
