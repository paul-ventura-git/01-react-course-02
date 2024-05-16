import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("The child is being rendered.");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        console.log( `<p key=${index}>${todo}</p>` );
        return <p key={index}>This single component being rendered: {todo}</p>;        
      })}
    </>
  );
};

export default memo(Todos);