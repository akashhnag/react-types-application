interface ChildProps {
  color: String;
  handleClick: () => void;
}

//this cannot take children
export function Child({ color, handleClick }: ChildProps) {
  return (
    <>
      {color}
      <button onClick={handleClick}></button>
    </>
  );
}

//This clearly defines a react functional component. This can take children
export const ChildAsFC: React.FC<ChildProps> = ({ color, handleClick }) => {
  return (
    <>
      {color}
      <button onClick={handleClick}></button>
    </>
  );
};
