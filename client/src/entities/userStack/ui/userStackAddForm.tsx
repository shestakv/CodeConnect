import { getAllStacks } from "@/entities/stack";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

export const UserStackAddForm: React.FC = () => {
  const { stacks } = useAppSelector((state) => state.stack);
  console.log(stacks,2222222222);  
  
  return (
    <div>
      {stacks ? (
        stacks.map((stack) => (
          <div>
            <p>{stack.title}</p>
            <img src={stack.image} alt={stack.title} />
          </div>
        ))
      ) : (
        <p>Загрузка программ...</p>
      )}
    </div>
  );
};
