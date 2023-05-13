import Star from "../../assets/icons/star/star"
import { CardBody, CardContainer, CardHeader } from "./card.style"

interface Props{
  imagePerson: string,
  name: string,
  job: string,
  rating: string,
  message: string
}

function Card({imagePerson, job, name, message, rating}:Props) {
  return (
    <CardContainer>
      <CardHeader>
        <div className="person-data">
          <div className="image">
            <img src={imagePerson} alt="image person" />
          </div>
          <div className="data-text">
            <h3>{name}</h3>
            <p>{job}</p>
          </div>
        </div>
        <div className="rating">
          <Star/>
          <p>{rating}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{message}</p>
      </CardBody>
    </CardContainer>
  )
}

export default Card