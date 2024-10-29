import Card from './Card';

function Cards() {

  const card1 = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Go somewhere"
  }

  const card2 = {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    btnText: "Go somewhere"
}

  return (
    <div className="Cards">
      <Card className="card" card={card1}>
        <img src="http://via.placeholder.com/286x180/" className="card-img-top" alt="..." />
      </Card>
      <Card className="card" card={card2}>

      </Card>
    </div>
  );
}

export default Cards;
