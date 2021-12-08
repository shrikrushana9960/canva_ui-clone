
import './App.css';
import NavBar from "./components/Topbar";
import Search from "./components/SearchBar";
import Banner from "./components/Banner";
import Stackgird from './components/Stackgrid/Stackgird';
import WorkSolo from './components/WorkSolo/WorkSolo';
import Plan from './components/Plan/Plan';
import BlogItem from './components/Blogs/BlogItem';
import Blogs from './components/Blogs/Blogs';
function App() {
  
  return (
    <div>
      <NavBar />
      <Search />
      <Banner
        src="https://static.canva.com/anon_home/benefits-start-en-1200x780-compressed.mp4"
        heading="Start Inspired"
        subheading="With thousand of professional templates, images and quality content to choose from a get a headstart on bringing your best ideas and work in life"
        video={false}
        button="Create a design"
        left
      />
      <Banner
        src="https://static.canva.com/anon_home/benefits-collab-en-974x634.mp4"
        heading="Collaborate with ease"
        subheading="Invite people with you or set up your whole team in canva pro to mange brand assets, leave feedback and get work done,and scale your visual content"
        button="Work together"
        right
        video={false}
      />
      <Banner
        src="https://static.canva.com/anon_home/benefits-share-en-1260x796.png"
        heading="Share with pride"
        subheading="Whether you're presenation, downloading, sheduling, sharing, or printing, enjoy seeing your work an impact in the real world."
        button="Design your vision"
        left
        video={true}
      />
      <Stackgird/>
      <WorkSolo/>
      <Plan/>
      <Blogs/>
    </div>
  );
}

export default App;
