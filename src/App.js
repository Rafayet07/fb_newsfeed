import { useState } from "react";
import ProfileAppBar from "./components/Navbar.component";
import Posts from "./components/posts.component";
import { INITIAL_VALUE } from "./data";

function App() {

  const [editNewsfeed,setEditNewsfeed]=useState(INITIAL_VALUE);
  
  const handleNewPost = (post,i) => {
    const{newsfeed}=INITIAL_VALUE[i];
    newsfeed.push(post)
    console.log(newsfeed);
    setEditNewsfeed(INITIAL_VALUE[i]);
  };
  return (
    <div className="App">
      <ProfileAppBar />
      
      { INITIAL_VALUE.map(({newsfeed})=><Posts key ={Math.random()}newsfeed={newsfeed} editPost={handleNewPost} />) }
     
    </div>
  );
}

export default App;
