import React from 'react';
import Paper from "material-ui/Paper";
import {redA700} from "material-ui/styles/colors";
import {Tab,Tabs} from "material-ui/Tabs";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from "material-ui/Divider";
import FlatButton from "material-ui/FlatButton";
import {TrendsBox,WhoToFollow,Feeds, UserCard} from './Commons';

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
		"Theme":"white",
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

class OptionsMenu extends React.Component {
	constructor(){
		super();
		this.state = {
			single_val:"3"
		}
	}
	update = (e, val) => {
		this.setState({
		  single_val: val
		});
	  };
	  render() {
		return (
		  <IconMenu
			  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			  onChange={this.update}
			  value={this.state.single_val}
			  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
			  targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
			  
			  <MenuItem val="1" primaryText="Search settings" />
			  <Divider />
			  <MenuItem val="2" primaryText="Save this search." />
			  <MenuItem val="3" primaryText="Embed this search." />
		  </IconMenu>
		);
	}	    
}

class Accordian extends React.Component{
	constructor(){
		super();
		this.state = {
			filterLabel: "Show",
			value1: 1,
			value2: 1,
			value3: 1
		}
	}

	handleChange1 = (event, index, value) => this.setState({value1:value});
	handleChange2 = (event, index, value) => this.setState({value2:value});
	handleChange3 = (event, index, value) => this.setState({value3:value});

	toggle(){
		this.setState({filterLabel:this.state.filterLabel==="Show"?"Hide":"Show"});
		for(let i = 1; i <=3;i++){
			document.getElementById('dropdown-'+i).style.display=this.state.filterLabel==="Show"?"block":"none"
			document.getElementById('divider-'+i).style.display=this.state.filterLabel==="Show"?"block":"none"
		}
		document.getElementById('FilterBox').style.height = this.state.filterLabel==="Show"?'300px':"50px";
		document.getElementById('Adv Srch').style.display=this.state.filterLabel==="Show"?"block":"none"
	}
	render(){
		return(
		<div className="filter-container">
			<div style={{backgroundColor:"rgba(255,0,0,0.5)"}}>
			<h2 style={{color:"#FFF",display:"inline",paddingRight:"5px",paddingLeft:"5px",marginLeft:"10px"}}>Search Filters</h2>
			<FlatButton label = {this.state.filterLabel} 
			   labelStyle = {{width:"25px",height:"25px"}}
			   onClick={this.toggle.bind(this)}/>
			</div>   
            <DropDownMenu id = "dropdown-1" style={{display:'none',marginLeft:"10px"}} value={this.state.value1} onChange={this.handleChange1}>
				<MenuItem style={{marginTop:"10px"}} value={1} primaryText="From Anyone" />
				<MenuItem style={{marginTop:"10px"}} value={2} primaryText="People you follow" />
			</DropDownMenu>
			<Divider id= "divider-1" style={{display:'none'}}/>
			<DropDownMenu id = "dropdown-2" style={{display:'none',marginLeft:"10px"}} value={this.state.value2} onChange={this.handleChange2}>
				<MenuItem style={{marginTop:"10px"}} value={1} primaryText="Anywhere" />
				<MenuItem style={{marginTop:"10px"}} value={2} primaryText="Near you." />
			</DropDownMenu>
			<Divider id= "divider-2" style={{display:'none'}}/>
			<DropDownMenu id = "dropdown-3" style={{display:'none',marginLeft:"10px"}} value={this.state.value3} onChange={this.handleChange3}>
				<MenuItem style={{marginTop:"10px"}} value={1} primaryText="All Languages" />
				<MenuItem style={{marginTop:"10px"}} value={2} primaryText="English" />
			</DropDownMenu>
			<Divider id= "divider-3" style={{display:'none'}}/>
			<h4 id = "Adv Srch" style={{color:"#80DEEA",display:"none",paddingTop:"10px",fontFamily:"roboto",paddingLeft:"10px"}}>Advanced Search</h4>	
		</div>);
	}
}

class RelatedSearches extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchlist: this.props.searchlist,
			searches: ""
		}
		var searchvar=""; 
		var i = 1
		this.state.searchlist.map(function(item) {
			searchvar = searchvar + "<div class = 'searchlist' id = 'searchlist-"+i+"' style = 'margin:10px'><strong style = 'display:block;color:#80DEEA'>" + item.title + "</strong></div>"
			i+=1;
			return searchvar;
		});
		this.state={searches:searchvar};
	}
	componentDidMount() {
		if(this.myDiv) {
		   this.myDiv.innerHTML = this.state.searches;
		}
	 }
	render(){
		return(
			<div>
				<Paper zDepth={3} className="searchlist-container"
				style={{backgroundColor:"#000",width:"300px",height:"200px", overflow:"hidden",
				marginLeft:"10px",marginTop:"10px",
				boxShadow:"5px 5px 50px #D50000", backgroundImage:"url('starry_bg_std.png')",border:"1px solid red"}}>
				<h2 style={{paddingLeft:"10px",borderBottom:"1px solid red",backgroundColor:"rgba(255,0,0,0.5)"}}>Related Searches</h2>
					<div id ="rel_srchs" ref = {c => this.myDiv = c}></div>
				</Paper>
			</div>
		);
	}
}

class SearchPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchword:this.props.searchword,
		}
	}
	render(){
	   return(
		  <div>
			<div className = "search_banner"
				style={{backgroundColor :"#112121",display:"flex",height:"50px",
				paddingLeft:"10%",paddingTop:"1%", position: "absolute",top:"73px",width:"90%",
				color:"#FFF",fontFamily: "Roboto, sans-serif",fontSize:"32px",fontWeight:"bolder"}}>
				{this.state.searchword}
		    </div>
			<div className="Search_subheader" width="100%">
				<Paper zDepth={3} style={{backgroundColor:redA700,marginTop:"125px",display:"flex",width:"100%"}}>
				<Tabs style={{height : "110%", width : "50%", marginRight:"35%", 
					boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px"}}>
					<Tab label="Top"/>
					<Tab label="Latest"/>
					<Tab label="People"/>
					<Tab label="Photos"/>
					<Tab label="Videos"/>
					<Tab label="News"/>
					<Tab label="Broadcasts"/>
				</Tabs>
				<OptionsMenu/>
				</Paper>
			</div>
			<div className="Feed_container" style={{display:"inline-block",marginLeft:"50px"}}>
			   <div className="People-Feeds" style={{marginTop:"-115px",marginLeft:"25px"}}>
				<Feeds feedList={feedJSON}/>
			   </div>	   
			   <Paper zDepth={3}
				  className = "FilterBox" id = "FilterBox"
				  style={{backgroundColor:"#000",width:"300px",height:"50px", overflow:"hidden",
				  marginLeft:"10px",marginTop:"135px",paddingTop:"10px",
				  boxShadow:"5px 5px 50px #D50000", backgroundImage:"url('starry_bg_std.png')",border:"1px solid red"}}>
				  <Accordian />	  
			   </Paper>
			   <RelatedSearches searchlist={tagJSON}/>
			   <WhoToFollow mleft = "10px" mtop = "10px" userList = {UserJSON}/>	  
			   <TrendsBox taglist={tagJSON}/>  
			</div>
		  </div>
	   );	 	 
	}

	
}
export default SearchPage