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
  <div className="test-list">
    <div>
      <ul>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
    <div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Hotel;
