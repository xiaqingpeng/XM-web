import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  useEffect(() => {
    fetch("http://127.0.0.1:7001/find_user")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }, []);
  console.log("history===>", history);
  return <div>主页</div>;
};
export default Home;
