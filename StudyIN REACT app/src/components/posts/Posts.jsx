import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    
    {
      id: 1,
      name: "Pr.Thziri Asma",
      userId: 2,
      profilePic:
        "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhZHl8ZW58MHx8MHx8&w=1000&q=80",
      desc: "Si tu veux comprendre le monde, comprends la physique",
      img: "https://cabl.org/wp-content/uploads/2016/08/iStock_42219486_LARGE-e1471986466392.jpg",
    },
    {
      id: 2,
      name: "khodja Yasmine",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "L'anglais est la langue la plus parlée au monde, apprenez-la à vos enfants",
      img: "https://cdn.cdnparenting.com/articles/2018/07/712919656-H.webp"
      },
    {
      id: 1,
      name: "Hakim Malki",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Si vous trouvez les mathématiques difficiles, vous changerez d'avis aujourd'hui",
      img: "https://d20x1nptavktw0.cloudfront.net/wordpress_media/2022/04/Blog-Image-28.jpg",
    },
    {
      id: 1,
      name: "Drablia Houssam",
      userId: 3,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k_diWUsRHVBkqha52d-ket1R0bcwMoTmHg&usqp=CAU",
      desc: "maths is the lunguage of the univers , join us next week ",
      img: "https://i.guim.co.uk/img/media/60723ede9e188f083d5074f9b8b2f9aff600ef3d/0_0_4635_2781/master/4635.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1f7fc14bd1adc0c61eb1e148bb451111",
    },
   
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;