import HeroCard from "../ChefsCard/ChefsCard";

const Header = () => {
  // Sample data for each hero card
  
  const italianCuisineData = [
    {
      chefPicture: "https://i.ibb.co/WVDTDyf/chef16.jpg",
      chefName: "Mario Rossi",
      yearsOfExperience: 15,
      numberOfRecipes: 100,
      likes: 5000,
      description: "Chef Mario Rossi is a renowned Italian chef with 15 years of experience in preparing exquisite Italian dishes. He has created a diverse collection of 100 delicious Italian recipes that have garnered 5000 likes from food enthusiasts around the world."
    },
    {
      chefPicture: "https://i.ibb.co/4YQNrWV/portrait-pensive-old-man-chef-dressed-uniform-posing-against-dark-background.jpg",
      chefName: "Isabella Bianchi",
      yearsOfExperience: 12,
      numberOfRecipes: 80,
      likes: 4500,
      description: "Meet Chef Isabella Bianchi, an Italian culinary artist with 12 years of experience in crafting authentic Italian delicacies. Her collection of 80 mouthwatering recipes has won the hearts of many, earning her 4500 likes from delighted food lovers."
    },
    {
      chefPicture: "https://i.ibb.co/3zk4dp7/portrait-smiling-chef-uniform-1.jpg",
      chefName: "Luigi Verdi",
      yearsOfExperience: 20,
      numberOfRecipes: 150,
      likes: 6000,
      description: "Chef Luigi Verdi, a veteran in the culinary world, brings 20 years of experience in creating delectable Italian masterpieces. His impressive repertoire includes 150 delightful recipes that have earned him 6000 likes and counting."
    },
    {
      chefPicture: "https://i.ibb.co/BLr9FKK/portrait-smiling-chef-uniform.jpg",
      chefName: "Giovanna Russo",
      yearsOfExperience: 8,
      numberOfRecipes: 60,
      likes: 3000,
      description: "Introducing Chef Giovanna Russo, a rising star in Italian gastronomy. With 8 years of experience, she has crafted a collection of 60 captivating Italian recipes that have gained her a devoted following of 3000 likes."
    },
    {
      chefPicture: "https://i.ibb.co/f09vnVn/chef4.jpg",
      chefName: "Alessandro Conti",
      yearsOfExperience: 18,
      numberOfRecipes: 120,
      likes: 5500,
      description: "Chef Alessandro Conti, a culinary virtuoso, boasts 18 years of experience in creating culinary magic. His treasury of 120 delightful Italian recipes has garnered him a legion of fans, with 5500 likes and growing."
    },
    {
      chefPicture: "https://i.ibb.co/sqxkJCv/chef3.jpg",
      chefName: "Elena Ferrari",
      yearsOfExperience: 10,
      numberOfRecipes: 70,
      likes: 4000,
      description: "Meet Chef Elena Ferrari, a passionate Italian chef with 10 years of experience. Her repertoire of 70 mouthwatering Italian recipes has earned her appreciation from food enthusiasts worldwide, with 4000 likes and counting."
    }
  ];
  
  

  return (
    <div className="carousel w-full">
      {italianCuisineData.map((card, index) => (
        <div key={`slide${index + 1}`} id={`slide${index + 1}`} className="carousel-item relative w-full">
          <HeroCard imageUrl={card.chefPicture} title={card.chefName} description={card.description} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? italianCuisineData.length : index}`} className="btn btn-circle">❮</a>
            <a href={`#slide${index === italianCuisineData.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;

