import { Child } from "./Child";

function Parent() {
  return <Child color="red" handleClick={() => console.log("clicked")} />;
}

export default Parent;
