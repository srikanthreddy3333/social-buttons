const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div class="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button className="like-button button" buttonText="like" />
      <Button className="comment-button button" buttonText="comment" />
      <Button className="share-button button" buttonText="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
