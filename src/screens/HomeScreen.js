import React from "react";
import './HomeScreen.css'
import Nav from "../Nav";
import Banner from "../Banner";
import Requests from "../Requests";
import Row from "../Row"
function HomeScreen()
{

    return(
          <div className="homeScreen">
           <Nav/>
           <Banner/>
           <br/>
           <Row title="Trending Now" fetchUrl={Requests.fetchTrending}/>
           <Row title="Top Rated" fetchUrl={Requests.fetchTopRated}/>
           <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies}/>
           <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies}/>
           <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies}/>
           <Row title="Romance Movies" fetchUrl={Requests.getchRomanceMovies}/>
           <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries}/>

          </div>
    );
}
export default HomeScreen;