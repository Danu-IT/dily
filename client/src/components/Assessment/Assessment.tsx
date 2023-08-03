import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface AssessmentProps {
  score: number;
}

const Assessment = ({ score }: AssessmentProps) => {
  return (
    <div>
      {Array.from(Array(5).keys()).map((el, i) => (
        <>
          {i + 1 <= score ? (
            <AiFillStar
              size={12}
              color="#00C65E"
            />
          ) : (
            <AiOutlineStar
              size={12}
              color="#00C65E"
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Assessment;
