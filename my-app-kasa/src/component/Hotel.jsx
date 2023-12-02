import DropdownList from "./DropDownList";
import StarRating from "./StarRating";
import Gallery from "./Gallery";
const Hotel = ({
  title,
  cover,
  id,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) => (
  <div className="hotel-details">
    <div className="info-pannel-flex">
      <div className="gallery">
        {" "}
        <Gallery pictures={pictures} />
      </div>
      <div className="main-info">
        <div>
          <div>
            <h2>{title}</h2>
            <span>{location}</span>
          </div>
          <div className="dropdown-description">
            <div className="tags-flex">
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="host-section-rating">
            <div className="host-section">
              <div>
                <p>{host.name}</p>
              </div>
              <div>
                <img src={host.picture} alt="owner picture" />
              </div>
            </div>
            <div className="host-rating">
              <StarRating rating={rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Description-Equipement-flex">
      <div className="dropdown-description">
        <DropdownList title="Description" content={<p>{description}</p>} />
      </div>
      <div className="dropdown-description">
        <DropdownList
          className="equipements-style"
          title="Equipments"
          content={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  </div>
);

export default Hotel;
