import { useNavigate } from "react-router-dom";

const CandidateCard = ({ candidate }) => {
  const { profile_picture, name, email, phone, id } = candidate;

  const navigate = useNavigate();

  const handleCandidate = () => {
    navigate(`/candidate/${id}`);
  };

  return (
    <div
      className="flex gap-4 truncate rounded-md border p-4"
      onClick={handleCandidate}
    >
      <img
        src={profile_picture}
        alt={name}
        className="aspect-square w-10 rounded-full"
      />
      <div>
        <p>{name}</p>
        <div className="flex gap-4">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export { CandidateCard };
