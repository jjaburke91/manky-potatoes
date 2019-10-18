(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(e,n,a){"use strict";a.r(n);a(142),a(143),a(21),a(16),a(12),a(8);var t=a(0),r=a.n(t),o=a(210),i=a(209);a(213);var s=function(e){var n,a;function t(){return e.apply(this,arguments)||this}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props.film;if(!e.title)return null;var n=e.title,a=e.year,t=e.director,o=e.reviewRating,i=e.reviewComment,s=e._getGenres().join(", ");return r.a.createElement("div",{className:"film"},r.a.createElement("span",{className:"film__title"},n," ",o),r.a.createElement("div",null,s," | ",a," | ",t),r.a.createElement("div",null,i))},t}(r.a.Component);var l=function(e){var n,a;function t(){return e.apply(this,arguments)||this}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props.films;return r.a.createElement("div",null,e.map((function(e,n){return r.a.createElement(s,{film:e,key:n,isFirstRow:0===n})})))},t}(r.a.Component),h=function(){function e(e){this.title=e[0],this.year=e[1]||"",this.director=e[15]||"",this.actors=e[14]||"",this.reviewRating=e[17]||"",this.reviewComment=e[18]||"",this.genres={doc:!!e[2],romance:!!e[3],sciFi:!!e[4],comedy:!!e[5],crime:!!e[6],drama:!!e[7],horror:!!e[8],thriller:!!e[9],action:!!e[10],fantasy:!!e[11],animation:!!e[12],dtw:!!e[13]}}return e.prototype._getGenres=function(){var e=this;return Object.keys(this.genres).filter((function(n){return!!e.genres[n]}))},e}();a(214);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).state={films:null,genres:null,searchValue:"",selectedGenre:null},a._requestFilms=a._requestFilms.bind(c(a)),a._initGapi=a._initGapi.bind(c(a)),a._setSearchValue=a._setSearchValue.bind(c(a)),a._renderGenre=a._renderGenre.bind(c(a)),a}a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var s=t.prototype;return s.componentDidMount=function(){var e=this;setTimeout((function(){gapi.load("client",e._initGapi)}),1e3)},s.componentDidUpdate=function(){console.log(this.state.searchValue)},s._initGapi=function(){gapi.client.init({apiKey:"AIzaSyDU7ArjrrMpoVsFVkXha32sPUWff7yqYBY",clientId:"759156115005-rj8aq7fuo23b867u1ddnjsmso32gls40.apps.googleusercontent.com",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets.readonly"}).then(this._requestFilms).catch((function(e){console.log("error initing gapi",e)}))},s._requestFilms=function(){var e=this;console.log("Requesting films..."),gapi.client.sheets.spreadsheets.values.get({spreadsheetId:"1eH17SHg_JACgmAe3VJ3fOATLcTC0QwLkK42iyjp1IJE",range:"Sheet1!B:T"}).then((function(n){for(var a=n.result,t=[],r=2;r<a.values.length;r++){var o=new h(a.values[r]);t.push(o)}var i=Object.keys(t[0].genres);e.setState({films:t,genres:i})})).catch((function(e){console.error("error making spreadsheet request:",e)}))},s._setSearchValue=function(e){this.setState({searchValue:e.target.value})},s._renderInputForm=function(){return r.a.createElement("input",{type:"text",value:this.state.searchValue,onChange:this._setSearchValue})},s._renderGenres=function(){var e=this;return this.state.genres?this.state.genres.map((function(n){return e._renderGenre(n)})):null},s._renderGenre=function(e){var n=this,a={padding:"0 2px",cursor:"pointer",fontWeight:e===this.state.selectedGenre?"bold":"normal"};return r.a.createElement("span",{onClick:function(){return n.setState({selectedGenre:e})},style:a},e)},s.render=function(){var e=this,n=this.state.films;return n&&this.state.searchValue&&(n=this.state.films.filter((function(n){return n.title.toLowerCase().includes(e.state.searchValue.toLowerCase())}))),n&&this.state.selectedGenre&&(n=this.state.films.filter((function(n){return!0===n.genres[e.state.selectedGenre]}))),r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home"}),!this.state.films&&r.a.createElement("img",{src:"https://i.gifer.com/ZJtI.gif",alt:"potatoes loading"}),!!n&&r.a.createElement("div",null,this._renderInputForm(),this._renderGenres(),r.a.createElement(l,{films:n})))},t}(r.a.Component);n.default=u},214:function(e){e.exports=JSON.parse('{"range":"Sheet1!B1:T1011","majorDimension":"ROWS","values":[[],["Title ","Year","Doc","Romance","Sci Fi","Comedy","Crime","Drama","Horror","Thriller","Action","Fantasy","Animation","DTW","Notable Actors","Director","Description","Review Rating","Review Comment"],["Behind The Curve (Flat Earthers)","2018","x","","","","","","","","","","","","","Daniel J. Clark","Flat earthers doc","😐","Mildly interesting. Too long as all Netflix docs seem to be now"],["The Fly","1986","","","","","","","x","","","","","","Jeff Goldblum","David Cronenberg","","👍👍","gorey and funny, such a sick 80s horror."],["Se7en","1995","","","","","","","","x","","","","","Brad Pitt, Morgan Freeman, Gwyneth Paltrow, Kevin Spacey","David Fincher","","👍👍","Good pace, good gore, Brad, Morgan and Gwenny at their peak, wet and miserable city sets an uncomfortable scene and stands the test of time. Who knew it was actually Kevin Spacey. Ending is a stonker."],["Sleepaway Camp","1983","","","","","","","x","","","","","","","Robert Hiltzik","Cult slasher","👍","Genuinely terrifying ending. haunted in sleep. Rest of film very okay."],["Joker","2019","","","","","","","","x","","","","","Joaquin Phoenix","Todd Philips","","👍","Didn\'t need to see killing of Batman\'s parents - I get it already, batman and joker are nemesis. Scene dancing on the stairs killed the malaise and dread the film built up so well, would love to see the film without and that playful and amusing segment so the film\'s dread just builds up until the finale. Tone down the batman connections a little bit, too many. Phoenix ridiculously good, physical acting too."],["Free Solo","2018","x","","","","","","","","","","","","","Jimmy Chin","","👍","Well told, fascinating character. Good subject matter. Nerve wracking."],["Suspiria","2018","","","","x","","","x","","","","","","Tilda Swinton","Luca Guadagnino"],["Bad Taste","1987","","","x","x","","","x","","","","","Yes!","","Peter Jackson","Cult slapstick comedy / horror / sci fi about aliens using human flesh for an alien fast food chain"],["Critters","1986","","","x","x","","","x","","","","","","","Stephen Herek"],["The Vengence Trilogy No1 Sympathy for Mr Vengeance","2002 - 2005","","","","","","","x","","","","","","","Park Chan-wook","Korean Cult"],["The Vengence Trilogy No3 Lady Vengeance","2002 - 2005","","","","","","","x","","","","","","","Park Chan-wook","Korean Cult"],["Mother!","2018","","","","","","","x","","","","","YES","Jennifer Lawrence, javier bardem","Darren Aronofsky"],["Train to Busan","2016","","","","","","","x","x","x","","","","","Sang-ho Yeon","Korean Cult"],["The Wailing","2016","","","","","","","x","","","","","","","Hong-jin Na","Korean Cult"],["It Follows","2014","","","","","","","x","","","","","","","David Robert Mitchell"],["Cabin In The Woods (not Cabin Fever)","2011","","","","","","","x","","","","","","","Drew Goddard","Reputably a good horror movie, Chris Hemsworth before he blossomed"],["Hide and Seek","2005","","","","","","","x","","","","","YES","","Jung Huh","Korean cult horror"],["Wishing Stairs","2003","","","","","","","x","","","","","","","Jae-yeon Yun"],["Phone","2002","","","","","","","x","","","","","","","Byeong-ki Ahn","Korean cult horror"],["The Blair Witch Project","1999","","","","","","","x","","","","","YES","","Daniel Myrick"],["The Exorcist III","1990","","","","","","","x","","","","","","","William Peter Blatty","Supposed to be very very good, best jump scare ever made."],["The Thing","1982","","","x","","","","x","","","","","","Kurt Russel","John Carpenter"],["The Evil Dead","1981","","","","","","","x","","","","","","","Sam Raimi"],["Alien","1979","","","x","","","","x","","","","","","Sigourney Weaver","Ridley Scott"],["Don\'t Look Now","1973","","","","","","","x","","","","","","Julie Christie, Donald Sutherland","Nicolas Roeg"],["The Exorcist","1973","","","","","","","x","","","","","YES","","William Friedkin"],["Nomad: in the Footsteps of Bruce Chatwin","2019","x","","","x","","","","","","","","","","Werner Herzog"],["Benjamin","2018","","x","","x","","","","","","","","","","Simon Amstell"],["Vice","2018","","","","x","","x","","","","","","","Christian Bale, Amy Adams, Steve Carrell","Adam McKay"],["Youth","2015","","","","x","","","","","","","","","Michael Caine, Rachel Weisz, Paul Dano","Paulo Sorrentino"],["24 Hour Party People","2002","","","","x","","x","","","","","","YES","Steve Coogan, Paddy Considine","Michael Winterbottom"],["Being John Malkovich","2000","","","","x","","x","","","","","","yeh","John Cusack, John Malkovich, Cameron Diaz","Spike Jonze"],["Cecil B DeMented","2000","","","","x","x","","","x","","","","","Stephen Dorff, Maggie G","John Waters"],["Drop Dead Gorgeous","1999","","","","x","","","","x","","","","","Kirsten Dunst","Michael Patrick Dann"],["200 Cigarettes","1999","","x","","x","","x","","","","","","YES","Ben & Casey Affleck, Kate Hudson, Dave Chapelle","Risa Bramon Garcia","awful but cult"],["A Room for Romeo Brass","1999","","","","x","","x","","","","","","Yes","Paddy Considine","Shane Meadows"],["Wild At Heart","1991","","","","x","","x","","","","","","","Nicolas Cage, Laura Dern","David Lynch"],["Cocoon","1985","","","x","x","","","","","","","","","","Ron Howard","oldies swimming in contaminated water"],["Grey Gardens","1975","x","","","x","","x","","","","","","","","Ellen Hoyde"],["Barberella","1968","","","x","x","","","","","","x","","","Jane Fonda","Roger Vadim"],["Une Femme est Une Femme","1961","","x","","x","","","","","","","","","Anna Karina","Jean-Luc Godard"],["In The Loop","","","","","x","","","","","","","","","","Armando Ianucci","Very funny political comedy from Glasgow legend Armando Ianucci"],["Paddington","","","","","x","","","","","","","","","","","Kiddie warm fuzzy feels film about a marmalade loving bear"],["For Sama","2019","x","","","","","","","","","","","YES YES","Hamza Al-Khateab","Waad Al-Khateab","Won best doc at cannes 2019 and loads of other awards. Harrowing"],["Untouchable","2019","x","","","","","","","","","","","","","Ursula Macfarlane","doc on Harvey Weinstein"],["XY Chelsea","2019","x","","","","","","","","","","","","Chelsea Manning","Tim Travers Hawkins"],["Anthropocene: the human epoch","2018","x","","","","","","","","","","","","","Jennifer Baichwell","Likely depressing - how humans are impacting the world"],["Isle Of Dogs","2018","","","x","","","","","","","","x","yeh","","Wes Anderson"],["Beautiful Boy","2018","","","","","","x","","","","","","yeh","Steve Carrell, Timmy Chalamet","Felix van Groeningen"],["Wildlife","2018","","","","","","x","","","","","","","Jakey, Carey Mulligan","Paul Dano"],["Human Flow","2017","x","","","","","","","","","","","","","Ai WeiWei","sad - global refugee crisis :("],["No Stone Unturned","2017","x","","","","","","","","","","","YES","","Alex Gibney"],["Blade Runner 2049","2017","","","","","","x","","x","x","","","","Harrison Ford, Ryan Gosling","Denis Villeneuve"],["Call Me By Your Name","2017","","x","","","","x","","","","","","YESSS","Armie Hammer, Timmy Chalamet","Luca Guadagnino"],["Chasing tomorrow.earth","2017","x","","","","","","","","","","","","","","A guy I worked with made a doc "],["Darkest Hour","2017","","","","","","x","","","","","","","Gary Oldman","Joe Wright"],["Risk","2016","x","","","","","","","","","","","","Julian Assange","Laura Poitras"],["American Honey","2016","","x","","","","x","","","","","","","Shia LeBeef","Andrea Arnold"],["Boyhood","2014","","","","","","x","","","","","","","","Richard Linklater"],["Looper","2012","","","x","","","","","","x","","","","Bruce Willis, Joseph Gordon-Levitt, Emily Blunt","Rian Johnson","Sci fi ish. "],["Argo","2012","","","","","","x","","x","","","","","Ben Affleck, Bryan Cranston","Ben Affleck"],["Being Flynn","2012","","","","","","x","","","","","","","Paul Dano, Robert De Niro","Paul Weitz"],["For Ellen","2012","","","","","","x","","","","","","","Paul Dano","SoYong Kim"],["Uncle boonme who can recall his past lives","2010","","","","","","x","","","","x","","",""," Apichatpong Weerasethakul","Thai?"],["Dogtooth","2009","","","","","","x","","x","","","","","","Yorgos Lanthimos"],["Hunger","2008","","","","","","x","","","","","","x","Michael Fassbender, Liam Cunningham","Steve McQueen","IRA hunger strike drama"],["The Host","2006"],["Minutemen \'We Jam Encoo\'","2005","x","","","","","","","","","","","","Minutemen (band)","Tim Irwin","doc about early 80s punk rock 80s band Minutemen"],["The Vengeance Trilogy No2 Oldboy","2003","","","","","","","","x","x","","","","","Park Chan-wook","Cult action thriller, big twist ending. No2 in The Vengence Trilogy"],["Catch Me If You Can","2002","","","","","x","x","","","","","","","Leo, Tom Hanks, Christopher Walken","Steven Spielberg"],["A Beautiful Mind","2001","","","","","","x","","","","","","","Russel Crowe, Jennifer Connelly","Ron Howard"],["Pi","1999","","","","","","","","x","","","","","","Darren Aronofsky","Won the cannes award in the 90s"],["American History X","1998","","","","","","x","","","","","","","Edward Norton","Tony Kaye"],["Nil By Mouth","1997","","","","","","x","","","","","","YES","Kathy Burke, Ray Winstone","Gary Oldman"],["Romeo & Juliet","1996","","x","","","","x","","","","","","always","Leo, Paul Rudd","Baz"],["Leon","1994","","","","","","","","x","x","","","","Jean Reno, Gary Oldman, Natalie Portman","Luc Besson"],["Blue","1993","","","","","","x","","","","","","yeh","Tilda Swinton","Derek Jarman"],["Basic Instinct","1992","","","","","","x","","x","","","","yeh","Michael Douglas, Sharon Stone","Paul Verhoeven"],["Silence Of The Lambs","1991","","","","","","","","x","","","","","Jodie Foster, Anthony Hopkins","Jonathan Demme"],["Die Hard","1989","","","","","","","","","x","","","","Bruce Wilis","John McTiernan"],["Rain Man","1988","","","","","","x","","","","","","","Dustin Hoffman, Tom Cruise","Barry Levinson"],["Wings of Desire","1987","","x","","","","","","","","x","","","","Wim Wenders","Martin won\'t stop banging on about this film in Berlin"],["Blue Velvet","1986","","","","","","x","","x","","","","","Kyle the guy from SATC","David Lynch"],["Brazil","1985","","","x","","","","","","","","","x","","Terry Gilliam","Dystopia sci fi"],["Paris, Texas","1984","","","","","","x","","","","","","","","Wim Wenders","ry cooder music"],["Amadeus","1984","","","","","","x","","","","","","","","Milos Furman"],["Body Heat","1981","","x","","","x","x","","","","","","","","Lawrence Kasdan"],["Shock of the New","1980","x","","","","","","","","","","","","","Robert Hughes","TV mini series on rise and fall of modern art movement"],["Apocalypse Now","1979","","","","","","x","","","","","","yeh","Marlon Brando","Francis Ford Coppola"],["Deer Hunter","1978","","","","","","x","","","","","","","Robert De Niro, Christopher Walken","Michael Cimino","De Niro war classic"],["The World at War","1973","x","","","","","","","","","","","","","","docu series on WW2"],["Salesman","1969","x","","","","","x","","","","","","","","Albert & David Maysles"],["Blow Up","1966","","","","","","x","","x","","","","","","Michelangelo Antonioni"],["Ben-Hur","1959","","","","","","x","","","","","","","","William Wyler"],["12 Angry Men","1957","","","","","","x","","","","","","","","Sidney Lumet"],["The Bridge on the River Kwai","1957","","","","","","x","","","","","","","Alec Guiness","David Lean"],["All About Eve","1950","","","","","","x","","","","","","","Bette Davis","Joseph L. Mankiewicz"],["Eyes Wide Shut","","","","","","","","","x","","","","","Tom Cruise, Nicole Kidman","Stanley Kubrick","Sexy thriller."],["Requiem For A Dream","","","","","","","","","x","","","","","Jared Leto, Jennifer Connelly","Darren Aronofsky "],["All Daniel Day Lewis films"],["All keanu reeves films"],["All of the hellraisers"],["All PTA films"],["All Stanley kubrick"],["All the Indiana Jones"],["All the monty pythons"],["Bad Blood","","","","","","","","","","","","","","","","there are about 15 Bad Blood movies and I don\'t know which one was on the list"],["Dick"],["Dior & I"],["Doctor Zhivago"],["Fargo","","","","","","","x","","","","","","","","Coen Brothers"],["Fatal Attraction"],["Fish tank"],["Foxcatcher","","","","","","","x","","","","","","","Steve Carrell, Channing Tatum, Mark Ruffallo","Bennett Miller","Real life story of psycho wrestling manager."],["Friday The 13th"],["Full Metal Jacket","","","","","","","x","","","","","","","","Stanley Kubrick","Classic war film"],["Gallivant"],["Gigantic","","","","","","","","","","","","","","Paul Dano"],["Gladiator"],["Good Times"],["Good Will Hunting"],["Halston"],["Invasion of the Body Snatchers"],["Japanese horror films"],["Jaws","","","","","","","","","","","","","YES"],["Joyride"],["Ladybird"],["Lars and the Real Girl"],["Laurence of Arabia"],["Let the corpses tan"],["Local hero"],["LONDON","","","","","","","","","","","","","","","Patric Keiller"],["Lost In Translation"],["Love & Mercy"],["Marie"],["Memento"],["Metropolis"],["Nuts in May"],["Oceans 11","","","","","","","","","","","","","","","","the old one"],["Texas Chainsaw Massacre","","","","","","","","","","","","","","","","the old one"],["Prisoners"],["Psycho"],["Raiders of the lost ark"],["Rover"],["Ruby Sparkes","","","","","","","","","","","","","","","Paul Dano"],["Saving Private Ryan"],["Scanners"],["Selena"],["SFW"],["Shakespeare in love"],["Song to song"],["Steel magnolias","","","","","","","","","","","","","","","","cheeeesy"],["Stephen king"],["Swallow"],["Swiss Army Man","","","","","","","","","","","","","","Paul Dano"],["Temporary death"],["Terms of endearment"],["The brave little toaster"],["The brother from another planet"],["The dark knight and other Batman’s"],["The duke of burgundy"],["The godfather all of them"],["The headless woman"],["The hunt"],["The long good Friday"],["The Matrix Series"],["The Mummy (Tom Cruise Edition)","","","","","","","","","","x","","","","Tom Cruise"],["The Omen"],["The Piano"],["The rum diary - read it too"],["The social network"],["The Wicker Man"],["Theatre of blood"],["This Is War"],["To kill a mockingbird"],["Parasite"],["Maradonna"]]}')}}]);
//# sourceMappingURL=component---src-pages-index-js-30798ed5ae239cf37192.js.map