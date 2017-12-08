import React from "react"

class Phoenix extends React.Component{
    constructor()
    {
        super();
        this.state = {
            ctxs: null,
            globGrad: null 
        }
        this.draw_phoenix=this.draw_phoenix.bind(this);
        this.drawBody=this.drawBody.bind(this);
        this.drawLeftWing=this.drawLeftWing.bind(this);
        this.drawRightWing=this.drawRightWing.bind(this);
        this.drawLeftWingDetails=this.drawLeftWingDetails.bind(this);
        this.drawRightWingDetails=this.drawRightWingDetails.bind(this);
        this.drawTheAss=this.drawTheAss.bind(this);
        this.drawFeather=this.drawFeather.bind(this);
    }
    
    render(){
        return(
           <canvas id="phoenix" width="460" height="450" style={{position:"fixed",right:"0"}} onClick={this.draw_phoenix} /> 
        );
    }

    draw_phoenix(){
		console.log("Drawing the phoenix");
		
		var ctx = document.getElementById("phoenix").getContext("2d");
        var globalGradient = ctx.createLinearGradient(196, 279, 275, 207);
        globalGradient.addColorStop(0, "#d34700");
        globalGradient.addColorStop(.8, "#fdc000");
        this.setState({ctxs:ctx,globGrad:globalGradient});
        
        setTimeout(this.drawBody, 1000);
		setTimeout(this.drawLeftWing, 1000);
		setTimeout(this.drawLeftDetails, 1000);
		setTimeout(this.drawRightWing, 1000);
		setTimeout(this.drawRightWingDetails, 1000);
		setTimeout(this.drawTheAss, 1000);
		
    }	
		// let the party start ------------------------------------------------------------
		// --------------------------------------------------------------------------------
	drawBody(){
        console.log("Drawing the body");
        var bg = this.state.ctxs.createLinearGradient(275, 207, 196, 279);
        bg.addColorStop(0, "#fdc000");
        bg.addColorStop(.20, "#fc4e19");
        bg.addColorStop(.50, "#fdc000");
    
        this.state.ctxs.beginPath();
        var ctx = this.state.ctxs;
        ctx.fillStyle = bg;
        this.setState({ctxs:ctx});
    
        // ass of the phoenix
        this.state.ctxs.bezierCurveTo(196,279,202,274,201,267);
        this.state.ctxs.bezierCurveTo(199,260,201,246,208,235);
        this.state.ctxs.bezierCurveTo(215,227,217,226,220,221);
        this.state.ctxs.bezierCurveTo(223,218,227,219,234,213);
        this.state.ctxs.bezierCurveTo(249,200,263,195,270,202);
        this.state.ctxs.bezierCurveTo(277,201,277,201,284,207);
    
        // head
        this.state.ctxs.lineTo(275,207);
        this.state.ctxs.lineTo(280,210);
        this.state.ctxs.bezierCurveTo(280,210,279,213,270,210);
        this.state.ctxs.bezierCurveTo(259,216,251,224,247,231);
        this.state.ctxs.bezierCurveTo(245,234,246,238,246,238);
        this.state.ctxs.bezierCurveTo(246,238,237,247,235,253);
        this.state.ctxs.bezierCurveTo(232,261,213,288,196,279);
        this.state.ctxs.fill();
        }
	drawLeftWing(){
            // left wing
            console.log("Drawing the left wing");
			var bg = this.state.ctxs.createLinearGradient(248, 240, 234, 254);
			bg.addColorStop(1, "#fdc000");
		
            this.state.ctxs.beginPath();
            var ctx2 = this.state.ctxs;
            ctx2.fillStyle = bg;
            this.setState({ctxs:ctx2})
			this.state.ctxs.bezierCurveTo(248,240,277,260,285,238);
			this.state.ctxs.bezierCurveTo(286,231,285,227,285,227);
			this.state.ctxs.bezierCurveTo(281,202,360,228,366,250);
			this.state.ctxs.bezierCurveTo(367,261,355,270,337,279);
			this.state.ctxs.bezierCurveTo(323,284,280,288,265,277);
			this.state.ctxs.bezierCurveTo(252,271,242,266,234,254);
			this.state.ctxs.bezierCurveTo(234,254,240,241,246,239);
			this.state.ctxs.fill();
		}
	drawRightWing(){
			// right wing
		    console.log("Drawing the right wing");
			var bg = this.state.ctxs.createLinearGradient(248, 240, 234, 254);
			bg.addColorStop(1, "#fdc000");
		
            this.state.ctxs.beginPath();
            var ctx3 = this.state.ctxs;
            ctx3.fillStyle = bg;
            this.setState({ctxs:ctx3});
			this.state.ctxs.bezierCurveTo(219,220,201,200,207,188);
			this.state.ctxs.bezierCurveTo(214,175,227,179,231,179);
			this.state.ctxs.bezierCurveTo(235,179,244,169,234,156);
			this.state.ctxs.bezierCurveTo(218,136,204,109,203,102);
			this.state.ctxs.bezierCurveTo(201,94,174,107,174,145);
			this.state.ctxs.bezierCurveTo(175,163,174,186,190,200);
			this.state.ctxs.bezierCurveTo(197,219,208,235,208,239);
			this.state.ctxs.bezierCurveTo(208,239,212,229,220,223);
			this.state.ctxs.fill();
		}
	drawLeftWingDetails(){
            console.log("Drawing the left wing details");        
			this.drawFeather(182,18,204,104,198,104,190,58,188,66,192,94,172,54);
			this.drawFeather(160,4,198,106,190,106,174,42,184,88,172,80,158,44);
			this.drawFeather(144,32,198,110,192,120,144,32,168,80,170,86,148,60);
			this.drawFeather(118,30,189,112,185,116,142,55,179,97,152,82,136,71);
			this.drawFeather(153,30,158,54,153,46,157,47,155,49,154,42,152,24);
			this.drawFeather(134,62,184,122,179,129,150,89,174,114,138,92,136,75);
			this.drawFeather(124,57,186,116,179,122,136,80,181,113,148,108,128,69);
			this.drawFeather(118,98,177,132,175,139,148,114,168,128,162,138,135,117);
			this.drawFeather(139,95,179,129,172,134,151,108,168,123,148,119,137,96);
			this.drawFeather(123,117,177,141,176,146,153,136,167,138,162,148,119,123);
			this.drawFeather(131,128,179,151,178,159,144,140,169,148,136,144,133,134);
			this.drawFeather(152,156,180,159,178,167,161,153,176,154,177,164,164,159);
			this.drawFeather(113,159,179,178,178,185,128,164,161,179,166,185,122,175);
			this.drawFeather(128,144,181,176,178,181,142,155,177,174,173,182,140,168);
			this.drawFeather(156,153,181,180,192,190,162,163,169,175,173,187,158,177);
			this.drawFeather(119,170,187,194,192,201,141,180,172,192,180,203,129,186);
			this.drawFeather(148,147,179,194,161,193,156,180,167,189,157,190,152,184);
			this.drawFeather(145,193,192,204,202,212,145,193,186,205,171,211,158,204);
			this.drawFeather(149,190,200,213,200,223,172,208,191,213,177,222,159,201);
			this.drawFeather(172,222,201,221,204,228,184,225,198,222,189,232,171,227);
			this.drawFeather(175,237,205,228,206,235,175,237,177,229,198,231,207,240);
			this.drawFeather(189,242,207,233,209,239,196,240,205,235,198,245,192,244);
		
		}
	drawRightWingDetails(){
            console.log("Drawing the right wing details");
            this.drawFeather(454,281,342,250,362,243,443,285,396,292,393,273,420,279);
			this.drawFeather(435,286,363,259,366,249,399,291,374,273,372,260,398,279);
			this.drawFeather(450,295,345,270,353,260,448,297,430,313,368,272,409,296);
			this.drawFeather(438,310,345,249,361,252,434,315,371,290,365,263,427,306);
			this.drawFeather(450,316,344,270,350,263,447,321,405,320,355,267,373,292);
			this.drawFeather(407,300,348,270,354,261,394,301,375,301,359,271,387,296);
			this.drawFeather(378,301,340,276,344,270,373,304,340,288,346,275,352,286);
			this.drawFeather(376,320,333,276,339,272,372,318,352,306,346,286,365,306);
			this.drawFeather(355,317,324,273,329,273,350,317,329,296,330,273,333,292);
			this.drawFeather(358,321,314,275,318,271,342,316,318,295,319,271,333,301);
			this.drawFeather(318,300,304,277,314,276,314,283,309,276,317,274,319,290);
			this.drawFeather(320,296,292,282,298,276,313,293,306,291,298,273,304,283);
			this.drawFeather(333,319,290,278,298,274,324,318,300,296,300,283,324,311);
			this.drawFeather(337,334,284,283,289,280,331,334,310,327,289,280,315,322);
			this.drawFeather(307,299,267,278,282,281,302,300,292,302,283,286,297,296);
			this.drawFeather(315,332,265,275,278,282,297,320,284,307,278,282,304,319);
			this.drawFeather(276,313,251,266,262,268,272,290,251,266,271,278,278,304);
			this.drawFeather(253,287,242,261,249,266,249,283,240,276,248,266,250,279);
			this.drawFeather(236,286,235,253,243,261,240,275,231,267,244,272,239,281);
		}
	drawTheAss(){
            console.log("Drawing the ass");    
			this.drawFeather(243,308,218,272,222,271,238,311,222,296,221,271,227,296);
			this.drawFeather(236,309,218,271,223,269,236,309,223,304,222,269,225,296);
			this.drawFeather(248,373,206,277,215,274,209,323,216,290,218,295,247,359);
			this.drawFeather(269,349,211,274,218,271,250,347,214,317,218,271,224,314);
			this.drawFeather(213,325,205,279,212,275,207,314,201,300,209,288,209,302);
			this.drawFeather(203,374,197,278,207,280,189,361,196,278,200,289,204,360);
			this.drawFeather(199,328,200,278,206,278,194,313,200,278,202,285,199,328);
			this.drawFeather(189,318,201,277,205,279,185,302,201,277,200,283,192,307);
			this.drawFeather(177,314,199,274,203,280,178,301,199,274,200,281,185,303);
			this.drawFeather(144,312,196,276,199,281,166,306,195,276,196,285,161,313);
			this.drawFeather(157,297,200,273,201,278,166,285,182,280,201,278,164,291);
			this.drawFeather(152,277,200,269,201,274,152,277,193,275,201,275,177,285);
			this.drawFeather(157,263,202,262,201,268,177,266,202,262,192,274,161,270);
			this.drawFeather(125,287,202,267,202,276,151,286,201,267,138,297,125,287);
		}
		
		
		// helper function for all feathers
	drawFeather(pt1x,pt1y,pt2x,pt2y,pt3x,pt3y,
								bez1pt1x,bez1pt1y,bez2pt1x,bez2pt1y,
								bez1pt2x,bez1pt2y,bez2pt2x,bez2pt2y){
			var gradient = this.state.ctxs.createLinearGradient(pt1x, pt1y, pt2x, pt2y);
		
			this.state.ctxs.beginPath();
			this.state.ctxs.moveTo(pt1x,pt1y);
			this.state.ctxs.bezierCurveTo(bez1pt1x,bez1pt1y,bez2pt1x,bez2pt1y,pt2x,pt2y);
			this.state.ctxs.lineTo(pt3x,pt3y);
            this.state.ctxs.bezierCurveTo(bez1pt2x,bez1pt2y,bez2pt2x,bez2pt2y,pt1x,pt1y);
            var ctx4 = this.state.ctxs;
            ctx4.shadowBlur = 0;
            this.setState({ctxs:ctx4})
			gradient.addColorStop(0, "#d34700");
            gradient.addColorStop(0.8, "#fdc000");
            var ctx5 = this.state.ctxs;
            ctx5.fillStyle = gradient;
            this.setState({ctxs:ctx5});
			this.state.ctxs.fill();
			}
	}

    export default Phoenix