const ArticleHotel = ({ id, title, cover }) => (
  <figure id={`article-${id}`}>
    <img src={cover} alt={title} />
    <figcaption>{title}</figcaption>
  </figure>
);

export default ArticleHotel;
