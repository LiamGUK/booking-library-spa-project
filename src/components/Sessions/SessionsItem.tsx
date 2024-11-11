import Image from "../UI/Image";
import Button from "../UI/Button";

interface SessionItemProps {
  title: string;
  image: string;
  summary: string;
  id: string;
}

function SessionsItem({ title, image, summary, id }: SessionItemProps) {
  return (
    <li>
      <div className="session-item">
        <Image src={image} alt={title} />
        <div className="session-data">
          <h3>{title}</h3>
          <p>{summary}</p>

          <div className="actions">
            <Button type="link" to={id} textOnly={false}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SessionsItem;
