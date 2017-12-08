import React from 'react';
import Paper from "material-ui/Paper"
import {TrendsBox,WhoToFollow,SelfCard,Feeds} from './Commons';
import Avatar from "material-ui/Avatar";

var tagJSON = [
	{
		"title": "Ironman",
		"count": "100K"
	},
	{
		"title": "Tony Stark",
		"count": "46K"
	},
	{
		"title": "Avengers",
		"count": "80K"
	},
	{
		"title": "Infinity Wars",
		"count": "900K"
	},
	{
		"title": "Thanos",
		"count": "70K"
	},
	{
		"title": "Marvel vs DC",
		"count": "100K"
	},
	{
		"title": "Jarvis",
		"count": "9K"
	},
	{
		"title": "Thor Ragnorak",
		"count": "10K"
	}
]

var UserJSON = [
	{
		"key":0,
		"Name": "Steve Rogers",
		"ava": "cap.ico",
		"Tag":"@Cap_America",
		"Cover":"cap_cover.png",
		"Theme":"#003399",
		"Status":"Chose the wrong side of Civil War",
		"Tweets":"10K",
		"FlingCount":"100",
		"FlerCount":"15K",
		"FollowerList":["Bucky","Hulk","Spiderman"]
	},
	{
		"key":1,
		"Name": "Bruce Banner",
		"ava": "hulk.ico",
		"Tag":"@Hulk&Smash",
		"Cover":"hulk_cover.jpg",
		"Theme":"#006600",
		"Status":"HULK SMASH!",
		"Tweets":"5",
		"FlingCount":"3",
		"FlerCount":"25K",
		"FollowerList":["Black Widows","Ironman","Thor"]
	},
	{
		"key":2,
		"Name": "Natasha Romanoff",
		"ava": "widow.ico",
		"Tag":"@BlackWidow",
		"Cover":"widow.png",
		"Theme":"#212121",
		"Status":"Hulk is bae!<3",
		"Tweets":"12K",
		"FlingCount":"7",
		"FlerCount":"22K",
		"FollowerList":["Hulk","Ironman","Hawkeye"]
	},
	{
		"key":3,
		"Name": "Peter Parker",
		"ava": "spidey.ico",
		"Tag":"@WebberBoy",
		"Cover":"spidey_cover.jpg",
		"Theme":"#FFF",
		"Status":"Mr. Stark is awesome!",
		"Tweets":"25K",
		"FlingCount":"5K",
		"FlerCount":"20K",
		"FollowerList":["Ironman","Captain America","Hulk"]
	}
]

var feedJSON = [
	{	
		key:0,
		user:UserJSON[0],
		"timestamp":"42m",
		"text_content":UserJSON[0].Status,
		"embed_data":UserJSON[0].Cover
	},
	{
		key:1,
		user:UserJSON[1],
		"timestamp":"2h",
		"text_content":UserJSON[1].Status,
		"embed_data":UserJSON[1].Cover
	},
	{
		key:2,
		user:UserJSON[2],
		"timestamp":"1d",
		"text_content":UserJSON[2].Status,
		"embed_data":UserJSON[2].Cover
	},
	{
		key:3,
		user:UserJSON[3],
		"timestamp":"Dec 3rd",
		"text_content":UserJSON[3].Status,
		"embed_data":UserJSON[3].Cover
	}
]

var SelfJSON = {
	"key":0,
	"Name": "Tony Stark",
	"ava": "man.ico",
	"Tag":"@Ironman",
	"Cover":"man_cover.jpg",
	"Theme":"#000",
	"Status":"I miss Jarvis.",
	"Tweets":"15K",
	"FlingCount":"50",
	"FlerCount":"900K",
	"FollowerList":["Pepper Potts","Hulk","Spiderman"]
}


class HomePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchword:this.props.searchword,
		}
	}
	render(){
	   return(
		  <div>
			<SelfCard data = {SelfJSON}/>  
			<Paper zDepth={5}
			   	  style={{backgroundColor:"rgba(255,0,0,0.75)",width:"50%",height:"62px",
				  marginLeft:"330px",marginTop:"75px",position:"absolute",zIndex:"95",
				  boxShadow:"5px 5px 50px #100",border:"2.5px ridge black"}}>

				  <Avatar src="man.ico" style={{margin:"1%",marginLeft:"25px"}}/>
				  <input type="text" style={{position:"absolute",margin:"10px",height:"30px",width:"75%",
					borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",
					borderTopRightRadius:"10px",borderTopLeftRadius:"10px", paddingLeft:"15px",
					backgroundColor:"rgba(0,0,0,0.75)",color:"white",
					fontSize:"16px"}} placeholder="What's up fella?"/>
				  <input type="file" name="file" id="file" className="input-file"
						 accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
						 style={{position:"absolute",right:"100px",top:"19px",marginRight:"10px",
						 		width:"0.1px",height:"0.1px",zIndex:"-1",opacity:"0",overflow:"hidden"}}/>
				  <label id="inp_label" htmlFor="file" style={{backgroundColor: "rgba(255,0,0,0.25)",display: "inline",cursor:"pointer",position:"absolute",
					right:"95px",top:"13.5px",width:"35px",height:"30px"}}>
				  	<svg width="20" height="17" viewBox="0 0 20 17" style={{margin:"6px",marginLeft:"8px"}}>
					    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
					  </svg>
				  </label>				 
				  		 	
			</Paper>	  
			<Feeds feedList={feedJSON}/>
			<TrendsBox style={{position:"absolute",width:"300px",marginLeft:"10px",top:"350px", paddingTop:"0.25px",
				boxShadow:"5px 5px 50px #D50000", backgroundImage:"url('starry_bg_std.png')",border:"1px solid red"}} taglist={tagJSON}/>
			<WhoToFollow float="right" mright = "20px" mtop = "75px" userList = {UserJSON}/>	  
		  </div>
	   );	 	 
	}

	
}
export default HomePage