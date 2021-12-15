/**
 * Dynamic Welcome Page for Cornerstone OnDemand
 * @desc Dynamic welcome page engine for Cornerstone OnDemand. The script is using the navigation menu as base to generate the page.
 * @author 		kanundby@csod.com	-	Klas Anundby
 * @version 	0.9
 */

 const gpeABOUTCARDDIV 		= "gpewp_topcontainer_upper"; 					// where do we want to put the user photo name/job?
 const gpeUSRMAINDIV 		= "USR-right";									// User Main div element ID (biggest area)
 const gpeUSRCONTENTDIV 	= "USR-content";								// User Main div (overall)
 const gpeUSRLEFTDIV 		= "USR-left";									// User left div
 const gpeDEMOPERSONADIV 	= "demopersona";								// id of persona div (user record custom field)
 const gpeDEMOMODULEDIV	 	= "demomodules";								// User name
 const gpeDEMONAMEDIV	 	= "demousername";								// User name
 const gpeTARGETNAVDIV 		= "gpewp_topcontainer_nav"; 					// where do we want to put the navigation menu?
 const gpeDEMOROLE 			= getDemoRole( document.getElementById( gpeDEMOPERSONADIV ).getAttribute( gpeDEMOPERSONADIV ) );
 const gpeDEMMOMODULES		= getDemoModules(document.getElementById( gpeDEMOMODULEDIV ).getAttribute( gpeDEMOMODULEDIV ) );
 const gpeDEMOUNAME 		= document.getElementById( gpeDEMONAMEDIV ).getAttribute( gpeDEMONAMEDIV ).split(';');
 const gpePRIMARYBGCSS 		= $( '.c-nav-user' ).css( 'background-color' );	
 const gpeQUICKLINKSMAINDIV = "QLS-content";


 /**
  * @desc Viewport definition for mobile devices
  */
 var meta = document.createElement('meta');
 meta.name = "viewport";
 meta.content = "width=device-width, initial-scale=1.0";
 document.getElementsByTagName('head')[0].appendChild(meta);

/**
 * @const approvalURLs
 * @desc Array of translated welcome page data points.
 */
const approvalURLs = {
	training: {
		url: "/reports/trackemployee/TrackEmpRequest.aspx",
		icon: "gpe-appr-training",
		imgname: "appr_training_002.png",
		title: {
			"en-US": "Training Request",
			"en-UK": "Training Request",
			"de-DE": "Schulungsanfrage",
		},
	},
	goals: {
		url: "/EPM/Goals/PendingGoals.aspx?tab_page_id=-580170",
		icon: "gpe-appr-goals",
		imgname: "appr_goals_002.png",
		title: {
			"en-US": "Goal Request",
			"en-UK": "Goal Request",
			"de-DE": "Antrag auf Zielgenehmigung",
		},
	},
	feedback: {
		url: "/Social/SocialFeedback/FeedbackRequests.aspx",
		icon: "gpe-appr-feedback",
		imgname: "appr_feedback_002.png",
		title: {
			"en-US": "Feedback Request",
			"en-UK": "Feedback Request",
			"de-DE": "Feedback-Anfrage",
		},
	},
	connections: {
		url: "/phnx/driver.aspx?routename=Social/UniversalProfile/PendingConnections",
		icon: "gpe-appr-connection",
		imgname: "appr_connection_002.png",
		title: {
			"en-US": "Connection Request",
			"en-UK": "Connection Request",
			"de-DE": "Verbindungsanfrage",
		},
	},
	formapproval: {
		url: "../phnx/driver.aspx?routename=Social/UniversalProfile/Requests",
		icon: "gpe-appr-form",
		imgname: "appr_form_002.png",
		title: {
			"en-US": "Form Approval",
			"en-UK": "Form Approval",
			"de-DE": "Formulargenehmigung",
		},
	},
	compensation: {
		url: "/EPM/Compensation/User/ApprovalsList.aspx",
		icon: "gpe-appr-form",
		imgname: "appr_comp_002.png",
		title: {
			"en-US": "Compensation Plan",
			"en-UK": "Compensation Plan",
			"de-DE": "Kompensationsplan",
		},
	}
};

/**
 * @var cs_DashboardArray
 * @desc This array outlines which the Report IDs to be used by the demouser (Role).
 *
 */
var cs_DashboardArray = {
	"MGR": {
		//          "reports": [],
		// "reports": [ 2, 3, 14, 19, 46, 47, 48 ],
		"reports": [ 2, 3, 14, 19, 46, 48 ],
		//		"reports": [3],
	},
	"HRD": {
		//    "reports": [],
		"reports": [ 2, 12, 13, 15, 16, 25, 32, 46 ],
	},
	"INS": {
		"reports": [ 14, 28, 30, 42, 47 ],
	},
	"REC": {
		"reports": [ 17, 23, 24, 27 ],
	},
	"ADM": {
		"reports": [ 16, 28, 29, 43, 50 ],
	},
	"USR": {
		"reports": [],
	},
	"ONB": {
		"reports": [],
	}
};

/**
 * @var cs_DashboardDetailsArray
 * @desc Array which sets the default settings to be used in chartJS based on report type + the width in bootstrap columns to be used per report (ID from csod report builder)
 */
var cs_DashboardDetailsArray = {
	1: {
		type: "pie",
		indexAxis: "",
		scale: {
			xdisplay: false,
			ydisplay: false,
		},
	},
	2: {
		type: "bar",
		indexAxis: "y",
		scale: {
			xdisplay: true,
			ydisplay: true,
		},
	},
	3: {
		type: "bar",
		indexAxis: "x",
		scale: {
			xdisplay: true,
			ydisplay: true,
		},
	},
	4: {
		type: "line",
		indexAxis: "",
		scale: {
			xdisplay: true,
			ydisplay: true,
		},
	},
	reports: {
		"2": {
			"width": 6
		},
		"3": {
			"width": 3
		},
		"4": {
			"width": 3
		},
		"7": {
			"width": 3
		},
		"8": {
			"width": 3
		},
		"10": {
			"width": 3
		},
		"11": {
			"width": 3
		},
		"12": {
			"width": 3
		},
		"13": {
			"width": 3
		},
		"14": {
			"width": 3
		},
		"15": {
			"width": 3
		},
		"16": {
			"width": 3
		},
		"17": {
			"width": 3
		},
		"18": {
			"width": 3
		},
		"19": {
			"width": 3
		},
		"22": {
			"width": 3
		},
		"23": {
			"width": 3
		},
		"24": {
			"width": 3
		},
		"25": {
			"width": 3
		},
		"26": {
			"width": 3
		},
		"27": {
			"width": 3
		},
		"28": {
			"width": 3
		},
		"29": {
			"width": 3
		},
		"30": {
			"width": 3
		},
		"31": {
			"width": 3
		},
		"32": {
			"width": 3
		},
		"36": {
			"width": 3
		},
		"38": {
			"width": 3
		},
		"41": {
			"width": 3
		},
		"42": {
			"width": 3
		},
		"43": {
			"width": 3
		},
		"44": {
			"width": 3
		},
		"46": {
			"width": 3
		},
		"47": {
			"width": 6
		},
		"48": {
			"width": 3
		},
		"49": {
			"width": 3
		},
		"50": {
			"width": 3
		}
	}
};

const gpeUSERREPORTID = {
	MGR: {
		reportid: 51,
		filterid: -2,
		showcolumns: [ "User Full Name_70", "user_hire_dt_orig_70", "user_pos_70" ]
	},
	// HRD: {
	// 	reportid: 51,
	// 	filterid: 774,
	// 	showcolumns: [ "User Full Name_70", "user_hire_dt_orig_70", "user_pos_70" ]
	// }
};

/**
 * Returns demorole abbreviation from custom field
 * @param {String} elementArg - div/element holding the required value
 * @returns {String} The first three characters from argument (USR/HRD/ADM/INS/REC/MGR)
 */
function getDemoRole( elementArg ) {
	if ( elementArg.substr( 0, 3 ) == "HRM" ) return "HRD";
	if ( elementArg.substr( 0, 3 ) == "" ) return "USR";
	else return elementArg.substr( 0, 3 );
}

/**
 * Returns all modules included in the demo.
 * @param {String} elementArg - div/element holding the required value
 * @returns {array} The first three characters from argument (USR/HRD/ADM/INS/REC/MGR)
 */
 function getDemoModules( elementArg ) {
	 return elementArg.match(/.{1,3}/g);
}

/**
 * Gets details of user's navmenu (titles & urls)
 * @param {Array} accessURLsArg - The array of possible access items a user might/could have.
 * @returns {Array} An array filtered on access items user has.
 */
function getAccessDetails( accessURLsArg ) {
	let accessArr = [];
	var urlData = [];
	for ( var URL in accessURLsArg ) {
		$( "a[id*='headerResponsive_responsiveNav_rptMenu_'][href*='" + accessURLsArg[ URL ].url + "']" ).text( function() {
			urlData = {
				"id": accessURLsArg[ URL ].title,
				"title": $( this ).text(),
				"url": $( this ).attr( 'href' ),
				"icon": accessURLsArg[ URL ].icon,
				"module": accessURLsArg[ URL ].module,
				"quicklinkPrio": accessURLsArg[ URL ].quicklinkPrio,
				"widgetPrio": accessURLsArg[ URL ].widgetPrio
			};
			accessArr[ URL ] = urlData;
		} );
	}
	return accessArr;
}

/**
 * Sorts an array of objects by column/property.
 * @param {Array} array - The array of objects.
 * @param {object} sortObject - The object that contains the sort order keys with directions (asc/desc). e.g. { age: 'desc', name: 'asc' }
 * @returns {Array} The sorted array.
 */
function multiSort( array, sortObject = {} ) {
	const sortKeys = Object.keys( sortObject );

	// Return array if no sort object is supplied.
	if ( !sortKeys.length ) {
		return array;
	}

	// Change the values of the sortObject keys to -1, 0, or 1.
	for ( let key in sortObject ) {
		sortObject[ key ] = sortObject[ key ] === 'desc' || sortObject[ key ] === -1 ? -1 :
			( sortObject[ key ] === 'skip' || sortObject[ key ] === 0 ? 0 : 1 );
	}

	const keySort = ( a, b, direction ) => {
		direction = direction !== null ? direction : 1;

		if ( a === b ) { // If the values are the same, do not switch positions.
			return 0;
		}

		// If b > a, multiply by -1 to get the reverse direction.
		return a > b ? direction : -1 * direction;
	};

	return array.sort( ( a, b ) => {
		let sorted = 0;
		let index = 0;

		// Loop until sorted (-1 or 1) or until the sort keys have been processed.
		while ( sorted === 0 && index < sortKeys.length ) {
			const key = sortKeys[ index ];

			if ( key ) {
				const direction = sortObject[ key ];

				sorted = keySort( a[ key ], b[ key ], direction );
				index++;
			}
		}

		return sorted;
	} );
}

/**
 * Builds the navigation menu for the new welcome page.
 * @param {string} demoRoleArg - demorole data derived from custom field.
 * @param {string} cultureArg - culture to be used (EN-us, EN-uk, DE-de, ...). This is coming from sessionStorage.
 * @param {array} accessURLsArg -
 * @returns a promise
 */
function buildNav( demoRoleArg, cultureArg, accessURLsArg ) {
	/* Set top menu space  START */
	if ( !document.getElementById( "framework-oldnav-home" ) ) {

		const cs_customLocale = JSON.parse(sessionStorage.csCustomLocale);

		let tmpNav = document.createElement( "nav" );
		tmpNav.className = "header__nav header__nav--custom";

		let tmpNavLink = document.createElement( "a" );
		tmpNavLink.className = "nav-link--custom text-uppercase text-no-underline active";
		tmpNavLink.setAttribute( 'title', 'Home' );
		tmpNavLink.setAttribute( 'id', 'framework-oldnav-home' );
		// tmpNavLink.setAttribute('href','#');
		tmpNavLink.innerHTML = "";

		tmpNav.appendChild( tmpNavLink );

		let mainContent = document.getElementById( "ctl00_masterPageBody" );
		mainContent.before( tmpNav );
		/* Set top menu space  END */

		/* Replace hamburger menu with user image */
		$( "a[id*='header_headerResponsive_lnkNavBar'] i" ).replaceWith( $( "img[id*='header_headerResponsive_responsiveNav_imgPhoto']" ).clone() );

		let topNavUL = document.createElement( "ul" );
		topNavUL.className = "nav nav-tabs trq-tab-group ng-star-inserted";
		topNavUL.setAttribute( "id", "gpewp_nav" );
		topNavUL.setAttribute( "role", "tablist" );
		topNavUL.setAttribute( "_ngcontent-nml-c325", "" );

		let topNavItmUSR = document.createElement( "li" );
		topNavItmUSR.className = "trq-tab-group-item ng-star-inserted";
		topNavItmUSR.setAttribute( "role", "presentation" );
		topNavItmUSR.setAttribute( "_ngcontent-nml-c325", "" );
		topNavItmUSR.setAttribute( "trqid", "group-item" );
		topNavItmUSR.setAttribute( "trqiduseparent", "true" );

		let topNavBtnUSR = document.createElement( "a" );
		topNavBtnUSR.className = "trq-tab-link--flat ng-star-inserted active";
		topNavBtnUSR.setAttribute( "id", "nav-USR-tab" );
		topNavBtnUSR.setAttribute( "data-bs-toggle", "tab" );
		topNavBtnUSR.setAttribute( "data-bs-target", "#nav-USR" );
		topNavBtnUSR.setAttribute( "type", "button" );
		topNavBtnUSR.setAttribute( "role", "tab" );
		topNavBtnUSR.setAttribute( "aria-controls", "nav-USR" );
		topNavBtnUSR.setAttribute( "aria-selected", "true" );
		topNavBtnUSR.setAttribute( "_ngcontent-nml-c376", "" );
		topNavBtnUSR.innerHTML = cs_customLocale[0].topNavigationTitle.USR[ cultureArg ]; //sessionStorage["csCulture"]

		topNavItmUSR.appendChild( topNavBtnUSR );
		let topNavItmRole = 0;
		if ( demoRoleArg == "HRM" ) demoRoleArg = "HRD"; // Fix until we have update all the different areas from HRM to HRD
		switch ( demoRoleArg ) {
			case "REC":
			case "MGR":
			case "HRD":
			case "INS":
			case "ADM":
				if ( gpeUSERREPORTID[ demoRoleArg ] ) buildExtendedWidgetV2( getAccessDetails( accessURLsArg ), demoRoleArg + "-right");
				topNavItmRole = buildExtraNavItem( demoRoleArg, cultureArg );
				break;
		}

		// let topNavItmQLS = document.createElement( "li" );
		// topNavItmQLS.className = "trq-tab-group-item ng-star-inserted";
		// topNavItmQLS.setAttribute( "role", "presentation" );
		// topNavItmQLS.setAttribute( "_ngcontent-nml-c325", "" );
		// topNavItmQLS.setAttribute( "trqid", "group-item" );
		// topNavItmQLS.setAttribute( "trqiduseparent", "true" );

		// if ( demoRoleArg != "ONB") {

		// 	let topNavBtnQLS = document.createElement( "a" );
		// 	topNavBtnQLS.className = "trq-tab-link--flat ng-star-inserted";
		// 	topNavBtnQLS.setAttribute( "id", "nav-QLS-tab" );
		// 	topNavBtnQLS.setAttribute( "data-bs-toggle", "tab" );
		// 	topNavBtnQLS.setAttribute( "data-bs-target", "#nav-QLS" );
		// 	topNavBtnQLS.setAttribute( "type", "button" );
		// 	topNavBtnQLS.setAttribute( "role", "tab" );
		// 	topNavBtnQLS.setAttribute( "aria-controls", "nav-QLS" );
		// 	topNavBtnQLS.setAttribute( "aria-selected", "true" );
		// 	topNavBtnQLS.setAttribute( "_ngcontent-nml-c376", "" );
		// 	topNavBtnQLS.innerHTML = cs_customLocale.topNavigationTitle.QLS[ cultureArg ]; // sessionStorage["csCulture"]

		// 	topNavItmQLS.appendChild( topNavBtnQLS );
		// }
		

		// topNavUL.appendChild( topNavItmQLS );

		topNavUL.appendChild( topNavItmUSR );
		if ( topNavItmRole != 0 ) {
			topNavUL.appendChild( topNavItmRole );
		}

		let w1 = document.createElement( "nav" );
		w1.className = "profile-nav trq-mb-3 trq-bg-white trq-shadow-bottom-lg ng-star-inserted";
		w1.setAttribute( "_ngcontent-nml-c376", "" );
		w1.setAttribute( "id", "profile-tabs" );

		let w2 = document.createElement( "trq-tab-group" );
		w2.className = "trq-tab-group";
		w2.setAttribute( "_ngcontent-nml-c376", "" );
		w2.setAttribute( "_nghost-nml-c325", "" );

		let w3 = document.createElement( "trq-scroller" );
		w3.className = "trq-scroller--flat trq-scroller__container ng-star-inserted";
		w3.setAttribute( "_ngcontent-nml-c325", "" );
		w3.setAttribute( "trqid", "" );
		w3.setAttribute( "trqiduseparent", "true" );
		w3.setAttribute( "_nghost-nml-c320", "" );
		w3.setAttribute( "id", "profile-tabs-trq-scroller" );

		let w4 = document.createElement( "div" );
		w4.className = "trq-scroller";
		w4.setAttribute( "_ngcontent-nml-c320", "" );

		let w5 = document.createElement( "div" );
		w5.className = "trq-scroller__list";
		w5.setAttribute( "style", "height: 50px;" );

		let w6 = document.createElement( "div" );
		w6.className = "trq-scroller__list__track";
		w6.setAttribute( "style", "position: relative;" );

		w6.appendChild( topNavUL );
		w5.appendChild( w6 );
		w4.appendChild( w5 );
		w3.appendChild( w4 );
		w2.appendChild( w3 );
		w1.appendChild( w2 );

		document.getElementById( gpeTARGETNAVDIV ).innerHTML = w1.outerHTML;
		return w1;
	} else {
		return true;
	}
}

/**
 * Builds extra navigation item
 * @param {string} demoRoleArg -
 * @param {string} cultureArg - Sessionstorage value (EN-us, EN-uk, DE-de, ... )
 * @returns
 */
function buildExtraNavItem( demoRoleArg, cultureArg ) {
	const cs_customLocale = JSON.parse(sessionStorage.csCustomLocale);

	var topNavItmRole = document.createElement( "li" );
	topNavItmRole.className = "trq-tab-group-item ng-star-inserted";
	topNavItmRole.setAttribute( "role", "presentation" );
	topNavItmRole.setAttribute( "_ngcontent-nml-c325", "" );
	topNavItmRole.setAttribute( "trqid", "group-item" );
	topNavItmRole.setAttribute( "trqiduseparent", "true" );

	var topNavBtnRole = document.createElement( "a" );
	topNavBtnRole.className = "trq-tab-link--flat ng-star-inserted";
	topNavBtnRole.setAttribute( "id", "nav-" + demoRoleArg + "-tab" );
	topNavBtnRole.setAttribute( "data-bs-toggle", "tab" );
	topNavBtnRole.setAttribute( "data-bs-target", "#nav-" + demoRoleArg );
	topNavBtnRole.setAttribute( "type", "button" );
	topNavBtnRole.setAttribute( "role", "tab" );
	topNavBtnRole.setAttribute( "aria-controls", "nav-" + demoRoleArg );
	topNavBtnRole.setAttribute( "aria-selected", "true" );
	topNavBtnRole.setAttribute( "_ngcontent-nml-c376", "" );
	topNavBtnRole.innerHTML = cs_customLocale[0].topNavigationTitle[ demoRoleArg ][ cultureArg ]; //sessionStorage["csCulture"]
	test = 2;
	topNavItmRole.appendChild( topNavBtnRole );

	return topNavItmRole;
}

/**
 * Creates content for the ONB user
 * @param
 * @param
 * @returns
 */
async function buildOnbWidget(demoRoleArg, cultureArg){
	if(demoRoleArg == "ONB") {

		const cs_customLocale = JSON.parse(sessionStorage.csCustomLocale);

		// Remove left column
		$(".gpewp_USR").css("grid-template-columns", "1fr");
		$(".gpewp_USR").css("grid-template-areas", "gpewp_USR-right");

		// Wrapper
		let onbWrapperContent = document.createElement( "div" );
		onbWrapperContent.className = "onbwrapper";

		// Header
		let onbHeader = document.createElement( "div" );
		onbHeader.className = "onbheader";
		// Get header
		let onbHeaderTitle = document.createElement( "h5" );
		onbHeaderTitle.innerHTML = cs_customLocale[0].onboarding[cultureArg].headertitle;
		// Get text
		let onbHeaderText = document.createElement( "p" );
		onbHeaderText.innerHTML = cs_customLocale[0].onboarding[cultureArg].headertext;

		// Get video
		let onbHeaderVideoDiv = document.createElement( "div" );
		onbHeaderVideoDiv.className = "video";

		let onbHeaderVideoObj = document.createElement( "video" );
		onbHeaderVideoObj.setAttribute("width", "70%");
		onbHeaderVideoObj.setAttribute("height", "420");
		onbHeaderVideoObj.setAttribute("controls", "");
		let onbHeaderVideoSrc = document.createElement( "source" );
		onbHeaderVideoSrc.setAttribute("src", cs_customLocale[0].onboarding[cultureArg].videourl);
		onbHeaderVideoSrc.setAttribute("type", "video/mp4");
		onbHeaderVideoObj.appendChild(onbHeaderVideoSrc);
		onbHeaderVideoDiv.appendChild(onbHeaderVideoObj);

		onbHeader.appendChild(onbHeaderTitle);
		onbHeader.appendChild(onbHeaderText);
		onbHeader.appendChild(onbHeaderVideoDiv);

		/* ONB PROCESS */

		let onbProcess = document.createElement('div');
		onbProcess.className = "onbProcess";

		let onbProcessTitle = document.createElement('h5');
		onbProcessTitle.className = "processtitle";
		onbProcessTitle.innerHTML = cs_customLocale[0].onboarding[cultureArg].onbprocess.title;

		let onbProcessDesc = document.createElement('div');
		onbProcessDesc.className = "processdesc";
	
		let tmpOnbProcessTextOl = document.createElement('ol');
		tmpOnbProcessTextOl.className = "list";

		for(let textItem in cs_customLocale[0].onboarding[cultureArg].onbprocess.text) {
			let tmpOnbProcessTextLi = document.createElement('li');
			tmpOnbProcessTextLi.className = "item";

			let tmpOnbProcessTextLiHeadline = document.createElement('h2');
			tmpOnbProcessTextLiHeadline.className = "headline";
			tmpOnbProcessTextLiHeadline.innerHTML = cs_customLocale[0].onboarding[cultureArg].onbprocess.text[textItem].headline;

			let tmpOnbProcessTextLiText = document.createElement('span');
			tmpOnbProcessTextLiText.innerHTML = cs_customLocale[0].onboarding[cultureArg].onbprocess.text[textItem].text;

			let tmpOnbResourceDiv = document.createElement('div');
			tmpOnbResourceDiv.className = "resourceTitle";
			tmpOnbResourceDiv.innerHTML = "<br>"+cs_customLocale[0].onboarding[cultureArg].onbprocess.resourceTitle;

			let tmpOnbResourceUl = document.createElement('ul');
			tmpOnbResourceUl.className = "resList";
			for(let resItem in cs_customLocale[0].onboarding[cultureArg].onbprocess.text[textItem].resources) {
				let tmpOnbResourceLi = document.createElement("li");
				tmpOnbResourceLi.className = "resItem";
				if(cs_customLocale[0].onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].type == "url"){
					tmpOnbResourceLi.innerHTML = "<a href='"+cs_customLocale[0].onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].url+"' target='_blank'>"+cs_customLocale[0].onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].text+"</a>";
				}else {
					tmpOnbResourceLi.innerHTML = cs_customLocale[0].onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].text;
				}
				tmpOnbResourceUl.appendChild(tmpOnbResourceLi);
			}
			tmpOnbResourceDiv.appendChild(tmpOnbResourceUl);

			tmpOnbProcessTextLiText.appendChild(tmpOnbResourceDiv);

			tmpOnbProcessTextLi.appendChild(tmpOnbProcessTextLiHeadline);
			tmpOnbProcessTextLi.appendChild(tmpOnbProcessTextLiText);

			tmpOnbProcessTextOl.appendChild(tmpOnbProcessTextLi);
		}
		onbProcessDesc.appendChild(onbProcessTitle);
		onbProcessDesc.appendChild(tmpOnbProcessTextOl);
		
		let onbProcessImg = document.createElement('div');
		onbProcessImg.className = "processimg";
		onbProcessImg.style.backgroundImage = cs_customLocale[0].onboarding[cultureArg].onbprocess.imgurl;
		onbProcessImg.style.backgroundRepeat = "no-repeat";
		onbProcessImg.style.backgroundPosition = "center";
		onbProcessImg.style.width = "100%";
		onbProcessImg.style.height = "270px";

		onbProcess.appendChild(onbProcessDesc);
		onbProcess.appendChild(onbProcessImg);

		onbWrapperContent.appendChild(onbHeader);
		onbWrapperContent.appendChild(onbProcess);

		generateHTMLCard(
			"",
			"#",
			12,
			"gpe_onboarding",
			"row_left_1",
			"USR-right",
			"onboardingContent",
			onbWrapperContent
		);		

		return onbHeader;	
	} else {
		return true;
	}
}

async function buildModuleWidget(moduleArg) {

	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);

	modulesDiv = document.createElement( "div" );
	modulesDiv.className = "gpeWelcomePageModules";
	modulesDiv.setAttribute("style", "display:flex;flex-direction:column;");

	for(let module in moduleArg){
		switch ( moduleArg[module] ) {
			case "ATS":
			case "LMS":
			case "EPM":
				let modContainer = document.createElement( "div" );
				modContainer.className = "moduleContainer";
				modContainer.setAttribute("id", "module_"+moduleArg[module]);
				modContainer.setAttribute("style", "order:"+cs_widgetConfig[0].EMPLOYEE.MODULEORDER[moduleArg[module]]+";");

				let modContainerTitleDiv = document.createElement( "div" );
				modContainerTitleDiv.className = "moduleTitleDiv";

				let modContainerTitle = document.createElement( "h3" );
				modContainerTitle.className = "moduleTitle";
				modContainerTitle.innerHTML = cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].MODULETITLE[sessionStorage.csCulture];

				let modWidgetContainer = document.createElement( "div" );
				modWidgetContainer.className = "moduleWidgetContainer row";

				for(let widget in cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].WIDGETS) {
					let modWidget = document.createElement( "div" );
					modWidget.className = "moduleWidget col-md-"+cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].WIDGETS[widget].COLUMNSIZE;
					modWidget.setAttribute("id", moduleArg[module]+"-"+widget); /* IMPORTANT ID - This is used to target the widget card */
					modWidget.setAttribute("style", "order:"+cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].WIDGETS[widget].ORDER+";");

					modWidgetContainer.appendChild(modWidget);
				}

				let moduleLinkWrapper = document.createElement( "div" );
				moduleLinkWrapper.className = "moduleLinkWrapper row";

				let moduleLinkWrapperCol = document.createElement( "div" );
				moduleLinkWrapperCol.className = "moduleLinkWrapperCol col-md-12";
			
				let modLinkContainer = document.createElement( "ul" );
				modLinkContainer.className = "moduleLinkContainer";

				// BUILD QUICKLINKS
				for(let link in cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].LINKS) {
					let modLink = document.createElement( "li" );
					modLink.className = "moduleLink";
					modLink.setAttribute("id", moduleArg[module]+"-"+link);
					modLink.setAttribute("style", "order:"+cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].LINKS[link].ORDER+";");

					let modLinkItemLink = document.createElement( "a" );
					modLinkItemLink.className = "modLinkItemLink";
					modLinkItemLink.href = cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].LINKS[link].URL;

					let modLinkItem = document.createElement( "div" );
					modLinkItem.className = "modLinkItem";

					let modLinkIcon = document.createElement( "div" );
					modLinkIcon.className = "moduleLinkIcon";
					modLinkIcon.style.backgroundImage = "url('https://scfiles.csod.com/Baseline/Config/Images/gpeWelcomePage/"+cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].LINKS[link].ICON +"')";

					let modLinkTitle = document.createElement( "div" );
					modLinkTitle.className = "moduleLinkTitle";
					modLinkTitle.innerHTML = cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg[module]].LINKS[link].TITLE[sessionStorage.csCulture];
					
					modLinkItem.appendChild(modLinkIcon);
					modLinkItem.appendChild(modLinkTitle);
					modLinkItemLink.appendChild(modLinkItem);
					modLink.appendChild(modLinkItemLink);

					modLinkContainer.appendChild(modLink);
				}


				modContainerTitleDiv.appendChild(modContainerTitle);
				modContainer.appendChild(modContainerTitleDiv);
				modContainer.appendChild(modWidgetContainer);
				moduleLinkWrapperCol.appendChild(modLinkContainer);
				moduleLinkWrapper.appendChild(moduleLinkWrapperCol);
				modContainer.appendChild(moduleLinkWrapper);

				modulesDiv.appendChild(modContainer);
			break;
		}
	}

	let gpewpMain = document.getElementById(gpeUSRMAINDIV);
	gpewpMain.appendChild(modulesDiv);
}


/**
 *
 * @param
 * @param
 * @returns
 */
async function buildWidgets_v2( accessArrArg) {
	if (Array.isArray(accessArrArg) && arr.length) {
		setPreloader(gpeUSRCONTENTDIV, "on");

		let widgetPromisesArray = [];
		accessArrArg.forEach(function(widget) {
			widgetPromisesArray.push(getWidgetData_v2(widget));
		});

		return await Promise.all( widgetPromisesArray )
		.then(async function(widgetPromisesArrayComplete) {
			return widgetPromisesArrayComplete.map( async function(widgetData, index)  {
				if(widgetData != null){
					widgetData.forEach(function(widget){
						console.log(widget);
						return generateHTMLWidget(
							widget.id, 
							"12", 
							"widgetCard_"+ widget.id, 
							"widgetWrapper_"+ widget.id,
							widget.id,
							"cs_"+ widget.id, 
							widget);					
					});
				}
			});
		})
		.then(async function(renderedWidgetsResp) {
			setPreloader(gpeUSRCONTENTDIV, "off");
			$("canvas").each(function() {
				var chart = Chart.getChart($(this).attr("id"));
				chart.update();
			});
			return renderedWidgetsResp;
		})
		.catch( error => console.error( "Error in getting widget data: " + error ) );
	}
	else {
		console.log("accessArrArg is empty - cannot build widgets.");
	}
}

/**
 * getWidgetData - Executes different functions based on widget availability
 * @param {array} widgetIDArg - Array 
 * @returns Content from function
 */
 async function getWidgetData_v2( moduleArg ) {
	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);

	switch ( moduleArg ) {
		case "LMS":
			const lmsWidget_InspiredBySubjects = getInspiredBySubjects(cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg].WIDGETS.INSPIRED_BY_SUBJECTS.ID, moduleArg);
			const lmsWidget_TrendingforJob = getTrendingForJob(cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg].WIDGETS.TRENDING_FOR_JOB.ID, moduleArg);
//			const lmsWidget_AssignedTraining = getAssignedTraining(cs_widgetConfig.EMPLOYEE.MODULES[moduleArg].WIDGETS.ASSIGNED_TRAINING.ID, moduleArg);
			const lmsWidget_TranscriptMetics = getTranscriptMetrics(cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg].WIDGETS.TRAINING_METRICS.ID, moduleArg);
			
			return await Promise.all([lmsWidget_InspiredBySubjects, lmsWidget_TrendingforJob, lmsWidget_TranscriptMetics]);
		case "EPM":
			const checkinWidget 	= await getCheckinsDetails( cs_widgetConfig[0].EMPLOYEE.MODULES.EPM.WIDGETS.CHECKINS.ID, moduleArg );
			const goalWidget 		= await Promise.resolve(getDonutDetails( cs_widgetConfig[0].EMPLOYEE.MODULES.EPM.WIDGETS.GOAL_PROGRESS.ID,  "/phnx/driver.aspx?routename=Goals/GoalList", moduleArg));
			const devplanWidget 	= await Promise.resolve(getDonutDetails( cs_widgetConfig[0].EMPLOYEE.MODULES.EPM.WIDGETS.DEVPLAN_PROGRESS.ID,  "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot", moduleArg));
			
			return await Promise.all([checkinWidget, goalWidget, devplanWidget]);
		case "ATS":
			const atsWidget_AllCandidates 	= getAllCandidates(cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg].WIDGETS.TOTALCANDIDATES.ID, moduleArg);
			const atsWidget_NewSubmissions 	= getNewSubmissions(cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg].WIDGETS.NEWSUBMISSIONS.ID, moduleArg);
			const atsWidget_NewHires 		= getNewHires(cs_widgetConfig[0].EMPLOYEE.MODULES[moduleArg].WIDGETS.NEWHIRES.ID, moduleArg);
			
			return await Promise.all([atsWidget_AllCandidates,atsWidget_NewSubmissions,atsWidget_NewHires]);
	}
}

/**
 * generateHTMLWidget - Builds a bootstrap card dynamically based on arguments given.
 * @param {string} widgetIDArg - Title of the card.
 * @param {string} columnWidthArg - URL on the card title.
 * @param {integer1} columnIDArg - Bootstrap column width. Max 12.
 * @param {string} rowIDArg - ID of the card column.
 * @param {string} rowIDArg - ID of the card row. Check is made to either create new or reuse existing row.
 * @param {string} targetColDivIDArg - where to put the card. This ID need to exist in the HTML of the skeleton structure of the welcome page.
 * @param {string} contentDivClassArg - css class name of the content. This in order to be able to further style the card.
 * @param {object} widgetContentArg - main content of the card.
 * @returns
 */
function generateHTMLWidget( widgetIDArg, columnWidthArg, columnIDArg, rowIDArg, targetColDivIDArg, contentDivClassArg, widgetContentArg ) {

	const cs_widgetConfig 	= JSON.parse(sessionStorage.csWidgetConfig);
	const accessURLs 		= JSON.parse(sessionStorage.csAccessURLs);
	let widgetData = accessURLs.find(widgetDetails => {
		return widgetDetails.title === widgetIDArg;
	});

	var tmpRowDiv = "";
	if ( document.getElementById( rowIDArg ) ) {
		tmpRowDiv = document.getElementById( rowIDArg );
	} else {
		tmpRowDiv = document.createElement( "div" );
		tmpRowDiv.setAttribute( "id", rowIDArg );

		tmpRowDiv.className = "widgetData col-md-" + columnWidthArg;
	}

	var tmpColDiv = document.createElement( "div" );
	tmpColDiv.setAttribute( "id", columnIDArg +"widget");

	var tmpCardParent = document.createElement( "div" );
	tmpCardParent.className = "card";

	var tmpCardHeader = document.createElement( "a" );
	tmpCardHeader.className = "card-header";
	tmpCardHeader.innerHTML = cs_widgetConfig[0][widgetIDArg].title[sessionStorage.csCulture];
	tmpCardHeader.setAttribute( 'href', cs_widgetConfig[0][widgetIDArg].url );

	var tmpCardBody = document.createElement( "div" );
	tmpCardBody.className = "card-body";

	var tmpCardContent = document.createElement( "div" );
	tmpCardContent.className = contentDivClassArg;
	
	tmpCardContent = widgetContentArg;

	tmpCardBody.appendChild( tmpCardContent );

	tmpCardParent.append( tmpCardHeader, tmpCardBody );
	tmpColDiv.appendChild( tmpCardParent );
	tmpRowDiv.appendChild( tmpColDiv );

	var mainContent = document.getElementById( targetColDivIDArg );
	mainContent.appendChild( tmpRowDiv );

	return tmpRowDiv;
}

/**
 * This function builds a bootstrap card dynamically based on arguments given.
 * @param {string} cardTitleArg - Title of the card.
 * @param {string} cardTitleHrefArg - URL on the card title.
 * @param {integer} colArg - Bootstrap column width. Max 12.
 * @param {string} colIDArg - ID of the card column.
 * @param {string} rowIDArg - ID of the card row. Check is made to either create new or reuse existing row.
 * @param {string} targetColDivIDArg - where to put the card. This ID need to exist in the HTML of the skeleton structure of the welcome page.
 * @param {string} contentDivClassArg - css class name of the content. This in order to be able to further style the card.
 * @param {object} contentArg - main content of the card.
 * @returns
 */
async function generateHTMLCard( cardTitleArg, cardTitleHrefArg, colArg, colIDArg, rowIDArg, targetColDivIDArg, contentDivClassArg, contentArg ) {
	var tmpRowDiv = "";
	if ( document.getElementById( rowIDArg ) ) {
		tmpRowDiv = document.getElementById( rowIDArg );
	} else {
		tmpRowDiv = document.createElement( "div" );
		tmpRowDiv.setAttribute( "id", rowIDArg );
		tmpRowDiv.className = "row";
	}

	var tmpColDiv = document.createElement( "div" );
	tmpColDiv.className = "col-md-" + colArg;
	tmpColDiv.setAttribute( "id", colIDArg );

	var tmpCardParent = document.createElement( "div" );
	tmpCardParent.className = "card";

	var tmpCardHeader = document.createElement( "a" );
	tmpCardHeader.className = "card-header";
	tmpCardHeader.innerHTML = cardTitleArg;
	tmpCardHeader.setAttribute( 'href', cardTitleHrefArg );

	var tmpCardBody = document.createElement( "div" );
	tmpCardBody.className = "card-body";

	var tmpCardContent = document.createElement( "div" );
	tmpCardContent.className = contentDivClassArg;

	tmpCardContent = contentArg;

	tmpCardBody.appendChild( tmpCardContent );

	tmpCardParent.append( tmpCardHeader, tmpCardBody );
	tmpColDiv.appendChild( tmpCardParent );
	tmpRowDiv.appendChild( tmpColDiv );

	var mainContent = document.getElementById( targetColDivIDArg );
	mainContent.appendChild( tmpRowDiv );

	return rowIDArg;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function buildAboutCard() {
	if ( !document.getElementById( "gpeAboutCard" ) ) {
		var tmpContainerDiv = document.createElement( "div" );
		tmpContainerDiv.className = "container-fluid topcontent";
		tmpContainerDiv.setAttribute( "id", "gpeAboutCard" );


		var tmpRowDiv = document.createElement( "div" );
		tmpRowDiv.className = "row";

		var tmpColImageDiv = document.createElement( "div" );
		tmpColImageDiv.className = "col-md-2";

		var tmpCardAboutImageLink = document.createElement( "a" );
		tmpCardAboutImageLink.setAttribute("href", "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio");

		var tmpCardAboutImage = document.createElement( "img" );
		tmpCardAboutImage.className = "abt-image";
		tmpCardAboutImage.setAttribute( "src", document.querySelector( "img[id*='header_headerResponsive_responsiveNav_imgPhoto']" ).getAttribute( "src" ) );

		tmpCardAboutImageLink.appendChild(tmpCardAboutImage);
		tmpColImageDiv.appendChild( tmpCardAboutImageLink );

		var tmpColNameDiv = document.createElement( "div" );
		tmpColNameDiv.className = "col-md-10";

		var tmpAboutDiv = document.createElement( "div" );
		tmpAboutDiv.className = "abt";

		// Get Name
		var tmpUserNameDiv = document.createElement( "div" );
		tmpUserNameDiv.className = "abt-name";

		var tmpUserNameSpan = document.createElement( "span" );
		tmpUserNameSpan.className = "abt-name-text";
		tmpUserNameSpan.innerHTML = document.querySelector( "[id*='header_headerResponsive_responsiveNav_lblName']" ).innerHTML;

		// Get Job
		var tmpUserJobDiv = document.createElement( "div" );
		tmpUserJobDiv.className = "abt-job";

		var tmpUserJobSpan = document.createElement( "span" );
		tmpUserJobSpan.className = "abt-job-text";
		tmpUserJobSpan.innerHTML = document.querySelector( "[id*='header_headerResponsive_responsiveNav_lblPosition']" ).innerHTML;
		tmpUserJobDiv.appendChild( tmpUserJobSpan );

		tmpUserNameDiv.appendChild( tmpUserNameSpan );

		tmpAboutDiv.appendChild( tmpUserNameDiv );
		tmpAboutDiv.appendChild( tmpUserJobDiv );

		tmpColNameDiv.appendChild( tmpAboutDiv );

		tmpRowDiv.appendChild( tmpColImageDiv );
		tmpRowDiv.appendChild( tmpColNameDiv );
		tmpContainerDiv.appendChild( tmpRowDiv );

		var mainContent = document.getElementById( gpeABOUTCARDDIV );
		mainContent.appendChild( tmpContainerDiv );

		return mainContent;
	} else {
		return true;
	}
}

/**
 *
 * @param
 * @param
 * @returns
 */
function getApprovalDetails( approvalURLsArg, cultureArg, demoRoleArg ) {
	let aprvlDiv = document.createElement( "div" );
	aprvlDiv.className = "gpewp_approvals";

	let count = 0;
	let check;
	for ( let item in approvalURLsArg ) {
		count += 1;
		$( "table[id*='plnInbox_content'] a[href*='" + approvalURLsArg[ item ].url + "']" ).text( function() {

			let tmpAprvlDiv = document.createElement( "div" );
			tmpAprvlDiv.className = "approval-item approval-" + item + " app" + count;

			let tmpAprvlDivHref = document.createElement( "div" );
			tmpAprvlDivHref.className = "position-relative " + item;
			// tmpAprvlDivHref.setAttribute( "href", $( this ).attr( 'href' ) );

			let tmpAprvlButton = document.createElement( "button" );
            tmpAprvlButton.setAttribute( "content", approvalURLsArg[ item ].title[ cultureArg ]);
            tmpAprvlButton.setAttribute("data-href", $( this ).attr( 'href' ));
            tmpAprvlButton.setAttribute("type", "button");
			tmpAprvlButton.className = "approval_button";
            tmpAprvlButton.textContent = approvalURLsArg[ item ].title[ cultureArg ];

			let tmpAprvlDivBadge = document.createElement( "span" );
			tmpAprvlDivBadge.className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger";
			tmpAprvlDivBadge.innerHTML = $( "table[id*='plnInbox_content'] a[href*='" + approvalURLsArg[ item ].url + "'] ~ span:first" ).text().match( /\d+/ )[ 0 ];

			// tmpAprvlDivHref.appendChild( tmpAprvlDivImg );
			tmpAprvlDivHref.appendChild( tmpAprvlButton );
			tmpAprvlDivHref.appendChild( tmpAprvlDivBadge );
			tmpAprvlDiv.appendChild( tmpAprvlDivHref );

			aprvlDiv.appendChild( tmpAprvlDiv );
			check = "ok";
		} );
	}
	//console.log(aprvlDiv);
	if ( check == "ok" ) {

		generateHTMLCard(
			$( "td[id$='_ctl00_plnInbox_titleMiddle'] h2" ).text(),
			"#",
			12,
			"gpe_approvalswidget",
			"row_left_1",
			demoRoleArg + "-left",
			"approvalContent",
			aprvlDiv
		);
	}
	return aprvlDiv;
}


/**
 *
 * @param
 * @param
 * @returns
 */
async function getDonutDetails( widgetIDArg, urlArg, moduleArg) {
	
	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);
	let csConfigModuleWidget = moduleArg+"-"+widgetIDArg;

	return await Promise.resolve( await fetch( urlArg ) )
		.then( async function( data) {
		    // console.log("%cDONUT DATA LOAD: "+ data, "color:#ccaa00;");
			return await data.text();
		})
		.then( async function( dataResponse ) {
			// console.log("%cDONUT CHECK: "+ contentDivClassArg, "color:#ccaa00;");
			switch(widgetIDArg) {
				case cs_widgetConfig[0].EMPLOYEE.MODULES.EPM.WIDGETS.GOAL_PROGRESS.ID:
					return await $( dataResponse ).find( '.percentage' ).attr( "data-percent" );
				case cs_widgetConfig[0].EMPLOYEE.MODULES.EPM.WIDGETS.DEVPLAN_PROGRESS.ID:
					return await $( dataResponse ).find( "a[href*='/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew']" ).closest( "div[class*='dashboard-widget-content']" ).find(".percentage span").text();
			}
		})
		.then(async function(achievedData) {
			// console.log("%cDONUT DATA: "+ achievedData, "color:#ccaa00;");
			// IF ACHIEVED == 0 DO SOMETHING ELSE
			let tmpContentDiv = document.createElement( "div" );
			tmpContentDiv.className = widgetIDArg;
			tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetIDArg);
			if(achievedData != 0) {
				return await Promise.resolve(await drawDonut( achievedData, widgetIDArg, tmpContentDiv));
			}else {
				let tempTitle = cs_widgetConfig[0][csConfigModuleWidget].nocontenttitle[ sessionStorage.csCulture ];
				let noContentStr = "<div class='nocontent donut'>";
				noContentStr += "<button type='button' id='"+widgetIDArg+"_nodata' class='getstarted_button' data-href='"+cs_widgetConfig[0][csConfigModuleWidget].getstartedurl+"'>" + tempTitle + "</button>";
				noContentStr += "</div>";
				tmpContentDiv.innerHTML = noContentStr; 
				return await tmpContentDiv;
			}
		})
		.catch( error => console.error( "Error in getDonutDetails: " + error ) );
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function drawDonut(completeArg, contentDivClassArg, tmpContentDivArg) {
	// console.log("%cdrawDonut: INIT DONUT ********************* "+contentDivClassArg, "color:#00cccc;");
	let dataDonutArr = [completeArg, (100 - completeArg)];

	let data = {
		labels: [
			'Achieved'
		],
		datasets: [{
			label: 'dataset',
			data: dataDonutArr,
			backgroundColor: [
				gpePRIMARYBGCSS,
				'rgb(200, 200, 200)'
			],
			borderRadius: 5,
		}]
	};

	let counter = {
		id: "counter",
		beforeDraw(chart, arg, options) {
			const {
				ctx,
				chartArea: {
					top,
					right,
					bottom,
					left,
					width,
					height
				}
			} = chart;
			ctx.save();
			ctx.font = options.fontSize + "px " + options.fontFamily;
			ctx.textAlign = "center";
			ctx.fillStyle = options.fontColor;
			ctx.fillText(dataDonutArr[0] + "%", width / 2, (height / 2) + (options.fontSize * 0.34));
		}
	};

	let config = {
		type: 'doughnut',
		data,
		options: {
			responsive: "true",
			events: [],
			plugins: {
				tooltip: {
					enabled: false
				},
				hover: {
					mode: null
				},
				counter: {
					fontColor: "black",
					fontSize: 30,
					fontFamily: "sans-serif",
				},
				legend: {
					display: false
				},
				title: {
					display: false
				},
			},
		},
		plugins: [counter],
	};
	// console.log(config);
	// console.log("%cdrawDonut: RETURN DONUT CONFIG ********************* "+ contentDivClassArg, "color:#00cccc;");

	const tmpCanvas = document.createElement( "canvas" );
	tmpCanvas.id = contentDivClassArg+"_chart";
	tmpCanvas.setAttribute( "style", "height: 120px, width: 100%" );
	tmpContentDivArg.appendChild(tmpCanvas);

	let ctx = tmpCanvas.getContext("2d");
	let myChart = new Chart(ctx, config);

	return await tmpContentDivArg;
}

/* Update JWT */
/**
 *
 * @param
 * @param
 * @returns
 */
async function updateJWT() {
	return fetch( "/ui/perf-check-ins/Check-Ins", {
			method: 'GET',
			headers: {
				'Content-Type': 'text/html'
			}
		} )
		.then( response => response.text() )
		.then( tokenStr => {
			sessionStorage.csToken = tokenStr.substring( tokenStr.indexOf( '"token"' ) + 9, tokenStr.indexOf( '",', tokenStr.indexOf( '"token"' ) ) );
			sessionStorage.csCloud = tokenStr.substring( tokenStr.indexOf( '"cloud"' ) + 9, tokenStr.indexOf( '",', tokenStr.indexOf( '"cloud"' ) ) );
			sessionStorage.csUser = tokenStr.substring( tokenStr.indexOf( '"user":' ) + 7, tokenStr.indexOf( ",", tokenStr.indexOf( '"user"' ) ) );
			sessionStorage.csCorp = tokenStr.substring( tokenStr.indexOf( '"corp"' ) + 8, tokenStr.indexOf( '",', tokenStr.indexOf( '"corp"' ) ) );
			sessionStorage.csCulture = tokenStr.substring( tokenStr.indexOf( '"cultureName"' ) + 15, tokenStr.indexOf( '",', tokenStr.indexOf( '"cultureName"' ) ) );
			return sessionStorage.csToken;
		} )
		.catch( error => {
			console.error( "Function updateJWT failed: ", error );
		} );
}

/* Check JWT */
/**
 *
 * @param
 * @param
 * @returns
 */
function checkJWT() {
	return new Promise( ( resolve, reject ) => {
		if ( sessionStorage.csToken ) {
			var checkReturningUser = $( "[id*='pnlActionItems_titleMiddle'] a[href*='TargetUser=" + sessionStorage.csUser + "']" ).length ? true : false;
			if ( checkReturningUser == true ) {

				var jwt = JSON.parse( atob( sessionStorage.csToken.split( '.' )[ 1 ] ) );
				var year = jwt.exp.substring( 0, 4 );
				var month = jwt.exp.substring( 4, 6 );
				var day = jwt.exp.substring( 6, 8 );
				var hour = jwt.exp.substring( 8, 10 );
				var minute = jwt.exp.substring( 10, 12 );
				var second = jwt.exp.substring( 12, 14 );
				var tokenDate = new Date( Date.UTC( year, month - 1, day, hour, minute, second ) );
				var validity = tokenDate.getTime() > Date.now();

				if ( validity == false ) {
					//console.log("-[ UPDATING JWT ]-");
					resolve( updateJWT() );
					return sessionStorage.csToken;
				} else {
					//console.log("-[ JWT OK ]-");
					resolve( sessionStorage.csToken );
				}
			} else {
				//console.log("-[ UPDATING JWT ]-");
				resolve( updateJWT() );
			}
		} else {
			//console.log("-[ UPDATING JWT ]-");
			resolve( updateJWT() );
		}
	} );
}

/**
 * !!! NOT IN USE !!!! buildExtendedWidget - Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
 * @param {array} accessArrArg -
 * @param {string} appendDivArg -
 * @param {array} usernameArg -
 * @param {string} demoRoleArg -
 * @returns HTML table to be put on the welcome page
 */
async function buildExtendedWidget( accessArrArg, appendDivArg, reportIDArg, usernameArg, demoRoleArg ) {
	const cs_customLocale = JSON.parse(sessionStorage.csCustomLocale);
	const userName = usernameArg[ 0 ][ 0 ].concat( usernameArg[ 1 ] );
	var rowID = "";
	let reportToken = checkReportToken();
	$.when( reportToken )
		.then( ( data ) => {

			var reportContentDiv = document.createElement( "div" );
			reportContentDiv.setAttribute( "id", "userReport" + reportIDArg );
			reportContentDiv.className = "user_table";

			var cardTitle = cs_customLocale[0].ManagerWidgetTitle[ sessionStorage.csCulture ]; // cardTitleArg - Title of the card.
			var cardLink = ""; // cardTitleHrefArg - URL on the card title.
			var cardWidth = 12; // colArg - Bootstrap column width. Max 12.
			var cardColID = "userReport_Col_" + reportIDArg; // colIDArg - ID of the card column.
			var cardRowID = "userReport_Row_" + reportIDArg; // rowIDArg - ID of the card row. Check is made to either create new or reuse existing row.
			var targetColDivID = appendDivArg; // targetColDivIDArg - where to put the card. This ID need to exist in the HTML of the skeleton structure of the welcome page.
			var contentDivClass = "userReport"; // contentDivClassArg - css class name of the content. This in order to be able to further style the card.
			var content = reportContentDiv; // contentArg - main content of the card.

			generateHTMLCard( cardTitle, cardLink, cardWidth, cardColID, cardRowID, targetColDivID, contentDivClass, content );

			return fetchManagerReport( reportIDArg, userName, demoRoleArg );
		} )
		.then( reportresp => {
			const userArr = reportresp[ 0 ].data;
			const userMetaArr = reportresp[ 1 ];
			const [ , ...userData ] = [ ...new Set( userArr.map( x => x ) ) ];

			// Fix columns array for the table
			var tempCol = userMetaArr.columns.map( ( e ) => {
				return {
					field: e.name + "_" + e.entityId,
					title: e.title,
					visible: gpeUSERREPORTID[ demoRoleArg ].showcolumns.includes( e.name + "_" + e.entityId ),
					sortable: true
				};
			} );

			// Fix data array for the table
			var tempData = userData.map( function( row ) {
				return row.reduce( function( result, field, index ) {
					result[ tempCol[ index ].field ] = field;
					return result;
				}, {} );
			} );

			var reportContentDiv = document.getElementById( "userReport" + reportIDArg );
			var $table;
			$table = $( "<table id='extReport" + reportIDArg + "'>" );
			//$table = $("ReportTable"+reportResponse[2]);
			$table.appendTo( reportContentDiv );
			$table.bootstrapTable( {
				locale: sessionStorage.csCulture,
				exportDataType: true,
				exportTypes: [ 'json', 'xml', 'csv', 'txt', 'sql', 'excel' ],
				pageSize: 25,
				pagination: true, // Allow pagination
				search: true, // Allow search
				searchHighlight: true,
				showColumns: true,
				showColumnsSearch: true,
				sortClass: "table-active",
				checkboxHeader: true,
				showToggle: false,
				detailView: false,
				showColumnsToggleAll: true,
				columns: tempCol,
				data: tempData
			} );
            // console.log(reportContentDiv);
			return reportContentDiv;
		} )
		.catch( error => console.error( "error with building manager page: " + error ) );
}

/**
 * getGoalProgress - Get Goal Progress on several users
 * @usedby buildExtendedWidgetV2
 * @param {array} userIDArrayArg -
 * @returns JSON Array
 */
async function getGoalProgress(userIDArrayArg){
    let promiseArray = [];
    userIDArrayArg.data.map(async function(userID){
        var urlStr = "/services/api/goalSummary/summary/" + userID.id +"?StartDate="+new Date().getFullYear()+"-01-01&EndDate="+new Date().getFullYear()+"-12-24";
        promiseArray.push(fetch(urlStr, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.csToken,
            },
        } )
        .then(response => response.json())
        .then(async function(response){
            return await response;
        }));
    });
    return await Promise.all(promiseArray);
}

/**
 * getTranscriptsStats - Get Transcripts from several users
 * @usedby buildExtendedWidgetV2
 * @param {array} userIDArrayArg -
 * @returns JSON Array
 */
async function getTranscriptsStats(userIDArrayArg){
	let promiseArray = [];
	await userIDArrayArg.data.map(async function(user){
		let params = {
			"UserId": user.externalId,
			"InprogressOnly": true
		};
		let query = Object.keys(params)
					.map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
					.join('&');
		  
		let urlStr = '/services/api/TranscriptAndTask/Transcript?' + query;

        promiseArray.push(fetch(urlStr, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		})
		.then(response => response.json())
        .then(async function(response){
			let returnArr = {};
			returnArr.data = response.data;
			returnArr.id = user.id;
            return returnArr;
        })
		.catch( error => {
			console.error( "Error fetching transcript data - ", error );
		})
		);
    });

    return await Promise.all(promiseArray);
}

/**
 * buildExtendedWidgetV2 - Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
 * @param {array} accessArrArg - Array of available navigation items which is based on user's security role (permissions).
 * @param {string} appendDivArg - Where to put the card...
 * @returns HTML table to be put on the welcome page
 */
async function buildExtendedWidgetV2( accessArrArg, appendDivArg ) {

	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);
	const cs_customLocale = JSON.parse(sessionStorage.csCustomLocale);

    return await checkJWT()
    	.then( async function() {
//			let rptUrl = "/services/api/Search/Team/"+ sessionStorage.csUser;
    		let rptUrl = "/services/api/x/odata/api/views/vw_rpt_user?$filter=user_mgr_id eq " + sessionStorage.csUser + "&$select=user_id";
    		return await fetch( rptUrl, {
    			method: 'GET',
    			headers: {
    				'Content-Type': 'application/json',
    				'Authorization': 'Bearer ' + sessionStorage.csToken,
    			},
    		} );
    	} )
    	.then( response => response.json() )
    	.then( async function( userData ) {
			return await userData.value.map( function( user ) {
				return user.user_id;
    		} );
    	} )
    	.then( async function( userIDs ) {
    		let empURL = "/services/api/x/users/v2/employees?ids=" + userIDs.join();
    		return await Promise.resolve(fetch( empURL, {
    			method: 'GET',
    			headers: {
    				'Content-Type': 'application/json',
    				'Authorization': 'Bearer ' + sessionStorage.csToken,
    			},
    		} ));
    	} )
    	.then( response => response.json() )
    	.then( async function( userData ) {
			// Get goal
            let userArr = userData.data;

			// let lmsCheck = accessArrArg.some(function(accessItem) { 
			// 	return accessItem.module == "lms";
			// });
			// if(lmsCheck) {
			// 	let transcriptData = await Promise.resolve(getTranscriptsStats(userData));
			// 	transcriptDataArr = transcriptData.map(function(transcriptArr, index){
			// 		console.log(index);
			// 		console.log(transcriptArr);
			// 	});
			// }

			//If user has access to Goal then go ahead and get the data.
			let goalCheck = accessArrArg.some(function(accessItem) { 
				return accessItem.module == "epm-careers";
			});

			if(goalCheck){
				let goalData = await Promise.resolve(getGoalProgress(userData));
				let goalDataArr = [];
				let goalSummaryArr = [];
				goalDataArr = goalData.map(function(goalArr){
					return goalArr.data; 
				});
				for(let goalArr in goalDataArr){
					let goalProgress = 0;
					let goalWeight = 0;
					for(let goalItem in goalDataArr[goalArr]){
						goalProgress += goalDataArr[goalArr][goalItem].Weight * goalDataArr[goalArr][goalItem].Progress;
						goalWeight += goalDataArr[goalArr][goalItem].Weight;
					}
					console.log(goalDataArr[goalArr]);
					if(goalDataArr[goalArr].length !== 0) {
					 	goalSummaryArr[goalArr] = {
					 		id: goalDataArr[goalArr][0].User.Id,
					 		goalprogress: Math.round(goalProgress / goalWeight)+"%"
					 	};
					}
				}
				console.log(goalSummaryArr);
				const finalArr =  userArr.map(e => goalSummaryArr.some(({ id }) => id == e.id) ? ({ ...e, ...goalSummaryArr.find(({ id }) => id == e.id)}) : e);
				return await finalArr;
			}else {
				return userArr;
			}			
        })
        .then(async function(userData) {
    		let emplData = await userData.map( function( user ) {
    			return {
    				id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    fullName: user.firstName + " "+ user.lastName,
    				username: user.userName,
    				primaryEmail: user.primaryEmail,
    				mobilPhone: user.mobilePhone,
    				workPhone: user.workPhone,
                    goalProgress: (user.goalprogress && user.goalprogress),
    				language: user.settings.displayLanguage,
    				timezone: user.settings.timeZone,
    				hiredate: (user.workerStatus.lastHireDate && user.workerStatus.lastHireDate.substring(0,10)),
    				address: {
    					line1: user.address.line1,
    					city: user.address.city,
    					country: user.address.country,
    					state: user.address.state
    				}
    			};
    		});

            let emplCols = [{
                title: "User ID",
                field: "id",
                visible: false
                }, {
                    title: cs_widgetConfig[0].managerwidget.tableheader.name[sessionStorage.csCulture],
                    field: "fullName"
                }, {
                    title: cs_widgetConfig[0].managerwidget.tableheader.hiredate[sessionStorage.csCulture],
                    field: "hiredate"
                },
                {
                    title: cs_widgetConfig[0].managerwidget.tableheader.actions[sessionStorage.csCulture],
                    field: "action",
                    align: "center",
                    clickToSelect: false,
                    formatter: operateFormatter
                }
            ];

			//If user has access to Goal then add this as a column on manager widget.
			let goalCheck = accessArrArg.some(function(accessItem){ return accessItem.id == "Goals";});
			if(goalCheck) {

				emplCols.splice(3, 0, {
                    title: "Goal Progress",
                    field: "goalProgress",
                    align: "center",
                });
			}

            var reportContentDiv = document.createElement( "div" );
			// reportContentDiv.setAttribute( "id", "userReport" + reportIDArg ); // userReport51
			reportContentDiv.setAttribute( "id", "extendedUserWidget");
			reportContentDiv.className = "user_table";

			let $table;
			$table = $( "<table id='extendedUserTable'>" );
			$table.appendTo( reportContentDiv );
			$table.bootstrapTable( {
				locale: sessionStorage.csCulture,
				showColumns: false,
				showColumnsSearch: false,
				checkboxHeader: false,
				showToggle: false,
				detailView: true,
				detailFormatter: detailFormatter,
				columns: emplCols,
				data: emplData
			} );

			var cardTitle = cs_customLocale[0].ManagerWidgetTitle[ sessionStorage.csCulture ]; // cardTitleArg - Title of the card.
			var cardLink = "#"; // cardTitleHrefArg - URL on the card title.
			var cardWidth = 12; // colArg - Bootstrap column width. Max 12.
			var cardColID = "userReport_Col"; // colIDArg - ID of the card column.
			var cardRowID = "userReport_Row"; // rowIDArg - ID of the card row. Check is made to either create new or reuse existing row.
			var targetColDivID = appendDivArg; // targetColDivIDArg - where to put the card. This ID need to exist in the HTML of the skeleton structure of the welcome page.
			var contentDivClass = "userReport"; // contentDivClassArg - css class name of the content. This in order to be able to further style the card.
			var content = reportContentDiv; // contentArg - main content of the card.

			return await generateHTMLCard( cardTitle, cardLink, cardWidth, cardColID, cardRowID, targetColDivID, contentDivClass, content );
    	} )
    	.catch( error => {
    		console.error( "Error building buildExtendedWidgetV2 - ", error );
    	} );
}

/**
 * operateFormatter - Supporting function for bootstrap-table
 * @param {string} value -
 * @param {array} row -
 * @param {integer} index -
 * @returns html array to put inside the right cell within the table
 */
function operateFormatter(value, row, index) {
	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);

	return [
		'<div class="dropdown">',
		'<a class="btn btn-secondary dropdown-toggle" data-boundary="viewport" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
		cs_widgetConfig[0].managerwidget.tableheader.actions[sessionStorage.csCulture],
		'</a>',
		'<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">',
			'<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser='+ row.id +'">'+ cs_widgetConfig[0].managerwidget.actionsitems.openup[sessionStorage.csCulture] +'</a></li>',
			'<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&TargetUser='+ row.id +'">'+ cs_widgetConfig[0].managerwidget.actionsitems.viewtranscript[sessionStorage.csCulture] +'</a></li>',
			'<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot&TargetUser='+ row.id +'">'+ cs_widgetConfig[0].managerwidget.actionsitems.viewsnapshot[sessionStorage.csCulture] +'</a></li>',
			'<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Goals&TargetUser='+ row.id +'">'+ cs_widgetConfig[0].managerwidget.actionsitems.viewgoals[sessionStorage.csCulture] +'</a></li>',
			'<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew&targetUser='+ row.id +'">'+ cs_widgetConfig[0].managerwidget.actionsitems.viewdevplan[sessionStorage.csCulture] +'</a></li>',
		'</ul>',
		'</div>'
	].join('');
}

/**
 * detailFormatter - Supporting function for bootstrap-table
 * @param {string} index -
 * @param {array} row -
 * @returns html array to put inside the right cell within the table
 */
function detailFormatter(index, row) {

	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);

	let html = [];

	html.push('<div class="col-xs-12 col-sm-12 col-md-12">');
	html.push('<div class="well well-sm">');
	html.push('<div class="row">');

	html.push('<div class="col-sm-6 col-md-6">');
	// html.push('<h5>');
	// html.push('<b>'+ row.fullName  +'</b></h5>');
	html.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.firstname[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.firstName +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.lastname[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.lastName +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.email[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.primaryEmail +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.phone[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.workPhone +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.hiredate[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.hiredate +'</td>');
	html.push('</tr>');
	html.push('</table>');
	html.push('</div>');
   
	html.push('<div class="col-sm-6 col-md-6">');
	// html.push('<h5><b>'+ cs_widgetConfig.managerwidget.detailtable.addressdetails[sessionStorage.csCulture] +'</b></h5>');
	html.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.address[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.address.line1 +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.city[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.address.city +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.state[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.address.state +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig[0].managerwidget.detailtable.country[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.address.country +'</td>');
	html.push('</tr>');
	html.push('</table>');
	html.push('</div>');
   
	html.push('</div>');
	html.push('</div>');
	html.push('</div>');
   
	return html.join('');
   }

async function getNewHires(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetArg );

	return fetch( "/phnx/driver.aspx?routename=ONB/Dashboard", {
		method: 'GET',
		headers: {
			'Content-Type': 'text/html'
		}
	})
	.then( response => response.text() )
	.then( response => {
	
		var editor = jQuery("<div>").append(response);
		editor.find("div[rel='dropDownButton']").remove();
		var newHtml = editor.html();

		let	htmlStr = $(newHtml).find(".content > div[ct='HBoxLayout'] ");
		let summaryStr = "<div class='ATS totalCandidates gpe-cap row'>";
		htmlStr.each(function(index, newhireItem){
			summaryStr += "<div class='summaryItem col-md-6'>";
			summaryStr += "<div class='gpe-left'>";
			
			summaryStr += "<div class='newHires '>"+newhireItem.outerHTML+"</div>";
			summaryStr += "</div>";
			summaryStr += "</div>";		
		});
		summaryStr += "</div>";		
		
		tmpContentDiv.innerHTML = summaryStr;	
		return tmpContentDiv;
	})
	.catch( error => {
		console.error( "Function getNewHires failed: ", error );
	} );

}

async function getNewSubmissions(widgetArg, moduleArg){

	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);
	let csConfigModuleWidget = moduleArg+"-"+widgetArg;

	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetArg );

	return await checkJWT()
	.then( async function() {
		let rptURL = sessionStorage.csCloud+"rec-manage-candidates/v1/candidates";

		var payload = 	{"filters":{"statusIds":[],"flagIds":[],"sourceIds":[],"requisitionIds":[],"candidateIds":[],"onlyOpenRequisitions":true,"onlyActiveCandidates":true,"keywords":"","onlyMyRequisitions":true,"requisitionNameSearchTerm":""},"paging":{"pageSize":20,"pageNumber":1,"sortOrder":"SubmissionDateDescending"},"include":["Candidates","AvailableFilters","StatusCategories"]};
		return await fetch( rptURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
			body: JSON.stringify( payload )
		} );
	} )
	.then( response => response.json() )
	.then( async function( localStr ) {
		let summaryStr = "<div class='ATS totalCandidates gpe-cap row'>";
		summaryStr += "<div class='summaryItem col-md-12'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='"+cs_widgetConfig[0][csConfigModuleWidget].url+"'>";
		summaryStr += "<div class='totalCandidates gpe-bold gpe-text40'>"+localStr.data.statusCategories[1].count+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";		
		summaryStr += "</div>";		
		tmpContentDiv.innerHTML = summaryStr;

		return tmpContentDiv;		
	})
	.catch( error => {
		console.error( "Error building getNewSubmissions - ", error );
	});
}

async function getAllCandidates(widgetArg, moduleArg){

	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);
	let csConfigModuleWidget = moduleArg+"-"+widgetArg;

	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", csConfigModuleWidget );

	return await checkJWT()
	.then( async function() {
		let rptURL = sessionStorage.csCloud+"rec-manage-candidates/v1/candidates";

		var payload = 	{"filters":{"statusIds":[],"flagIds":[],"sourceIds":[],"requisitionIds":[],"candidateIds":[],"onlyOpenRequisitions":true,"onlyActiveCandidates":true,"keywords":"","onlyMyRequisitions":true,"requisitionNameSearchTerm":""},"paging":{"pageSize":20,"pageNumber":1,"sortOrder":"SubmissionDateDescending"},"include":["Candidates","AvailableFilters","StatusCategories"]};
		return await fetch( rptURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
			body: JSON.stringify( payload )
		} );
	} )
	.then( response => response.json() )
	.then( async function( localStr ) {
		let summaryStr = "<div class='ATS totalCandidates gpe-cap row'>";
		summaryStr += "<div class='summaryItem col-md-12'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='"+cs_widgetConfig[0][csConfigModuleWidget].url+"'>";
		summaryStr += "<div class='totalCandidates gpe-bold gpe-text40'>"+localStr.data.totalItems+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";		
		summaryStr += "</div>";		
		tmpContentDiv.innerHTML = summaryStr;

		return tmpContentDiv;		
	})
	.catch( error => {
		console.error( "Error building getAllCandidates - ", error );
	});
}

async function getTranscriptMetrics(widgetArg, moduleArg) {

	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);
	let csConfigModuleWidget = moduleArg+"-"+widgetArg;

	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetArg );
	
	return await checkJWT()
	.then( async function() {
		return await fetch( "/services/api/bff/learnerhome/user/"+sessionStorage.csUser+"/stats", {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		} );
	})
	.then( response => response.json() )
	.then( async function(localStr)  {

		let summaryStr = "<div class='summaryPanel gpe-cap row'>";
		summaryStr += "<div class='summaryItem col-md-4'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>";
		summaryStr += "<div class='pastDueCount gpe-bold gpe-text20'>"+localStr.data[0].metrics.pastDueCount+"</div>";
		summaryStr += "<div class='pastdueDesc gpe-desc'>"+cs_widgetConfig[0][csConfigModuleWidget].pastdueDesc[sessionStorage.csCulture]+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";
		summaryStr += "<div class='summaryItem col-md-4'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>";
		summaryStr += "<div class='dueSoonCount gpe-bold gpe-text20'>"+localStr.data[0].metrics.dueSoonCount+"</div>";
		summaryStr += "<div class='dueSoonDesc gpe-desc'>"+cs_widgetConfig[0][csConfigModuleWidget].dueSoonDesc[sessionStorage.csCulture]+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";
		summaryStr += "<div class='summaryItem col-md-4'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>";
		summaryStr += "<div class='noDueDateCount gpe-bold gpe-text20'>"+localStr.data[0].metrics.noDueDateCount+"</div>";
		summaryStr += "<div class='assignedNoDueDateDesc gpe-desc'>"+cs_widgetConfig[0][csConfigModuleWidget].assignedNoDueDateDesc[sessionStorage.csCulture]+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";
		summaryStr += "</div>";

		summaryStr += "<div class='summaryPanel gpe-cap row'>";
		summaryStr += "<div class='summaryItem col-md-4'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='/ui/lms-learner-playlist/UsersPlaylists'>";
		summaryStr += "<div class='pastDueCount gpe-bold gpe-text20'>"+localStr.data[0].playlists.numPlaylists+"</div>";
		summaryStr += "<div class='pastdueDesc gpe-desc'>"+cs_widgetConfig[0][csConfigModuleWidget].playlists.createdDesc[sessionStorage.csCulture]+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";
		summaryStr += "<div class='summaryItem col-md-4'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='/ui/lms-learner-playlist/UsersPlaylists'>";
		summaryStr += "<div class='dueSoonCount gpe-bold gpe-text20'>"+localStr.data[0].playlists.numFollowers+"</div>";
		summaryStr += "<div class='dueSoonDesc gpe-desc'>"+cs_widgetConfig[0][csConfigModuleWidget].playlists.followersDesc[sessionStorage.csCulture]+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";
		summaryStr += "<div class='summaryItem col-md-4'>";
		summaryStr += "<div class='gpe-center'>";
		summaryStr += "<a href='/ui/lms-learner-playlist/UsersPlaylists?section=followed'>";
		summaryStr += "<div class='noDueDateCount gpe-bold gpe-text20'>"+localStr.data[0].playlists.numFollowed+"</div>";
		summaryStr += "<div class='assignedNoDueDateDesc gpe-desc'>"+cs_widgetConfig[0][csConfigModuleWidget].playlists.followedDesc[sessionStorage.csCulture]+"</div>";
		summaryStr += "</a>";
		summaryStr += "</div>";
		summaryStr += "</div>";
		summaryStr += "</div>";

		tmpContentDiv.innerHTML = summaryStr;

		return tmpContentDiv;		
	})
	.catch( error => {
		console.error( "Error building getTranscriptMetrics - ", error );
	});		
}

async function getAssignedTraining(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetArg );
	
	return await checkJWT()
	.then( async function() {
		return await fetch( "/services/api/lms/user/"+sessionStorage.csUser+"/transcript?isCompleted=false&isArchived=false&isRemoved=false&isStandAlone=true&sortCriteria=StatusChangeDate&pageSize=20&pageNum=1", {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		} );
	})
	.then( response => response.json() )
	.then( async function(localStr)  {

		let carouselMain = document.createElement( "div" );
		carouselMain.className = "carousel slide";
		carouselMain.setAttribute( "id", widgetArg+"Carousel");
		carouselMain.setAttribute( "data-bs-ride", "carousel");
		carouselMain.setAttribute( "data-bs-interval", "false");
		carouselMain.setAttribute( "data-pause", "hover");

		let carouselIndicators = document.createElement("div");
		carouselIndicators.className = "carousel-indicators";
		
		let activeCarousel = "";
		localStr.data.forEach(function(subjectItem, index){
			let carouselIndicator = document.createElement("button");
			carouselIndicator.setAttribute("type", "button");
			carouselIndicator.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
			carouselIndicator.setAttribute("data-bs-slide-to", index);
			if(activeCarousel == "") {
				carouselIndicator.className = "active";
				activeCarousel = "active";
			}
			carouselIndicators.appendChild(carouselIndicator);
		});
		
		carouselMain.appendChild(carouselIndicators);

		let carouselItems = document.createElement("div");
		carouselItems.className = "carousel-inner";

		let activeItem = "";
		localStr.data.forEach(function(subjectItem, index){
			let carouselItem = document.createElement("div");
			carouselItem.className = "carousel-item";
			if(activeItem == "") {
				carouselItem.className += " active";
				activeItem = "active";
			}

			let carouselItemTile = document.createElement("div");
			carouselItemTile.className = "carouselItemTile";
			carouselItemTile.setAttribute("data-tag", subjectItem.id);
			carouselItemTile.style.height = "225px";

				let carouselItemPanel = document.createElement("div");
				carouselItemPanel.className = "carouselItemPanel";
				carouselItemPanel.setAttribute("data-tag", subjectItem.id);
				carouselItemPanel.setAttribute("style", "height: 100%; overflow: hidden;");

					let carouselItemPanelC = document.createElement("div");

						let carouselItemPanelItem = document.createElement("div");
						carouselItemPanelItem.className = "carouselItemPanelItem";

							let carouselItemPanelBody = document.createElement("div");
							carouselItemPanelBody.className = "carouselItemPanelBody";

								let carouselItemPanelD = document.createElement("div");

									let carouselItemPanelTileBody = document.createElement("div");
									carouselItemPanelTileBody.className = "carouselItemPanelTileBody";

										let carouselItemPanelTileLink = document.createElement("a");
										carouselItemPanelTileLink.className = "carouselItemPanelTileLink";
										carouselItemPanelTileLink.href = subjectItem.trainingDetailsUrl;
										carouselItemPanelTileLink.title = subjectItem.title;

											let carouselItemPanelTileLinkThmb = document.createElement("div");
											carouselItemPanelTileLinkThmb.className = "carouselItemPanelTileLinkThmb";
											carouselItemPanelTileLinkThmb.style.backgroundImage = "url('"+subjectItem.thumbnailImage+"')";
											carouselItemPanelTileLinkThmb.style.height = "100%";
											carouselItemPanelTileLinkThmb.style.overflow = "hidden";
										
										carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
									carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
								carouselItemPanelD.appendChild(carouselItemPanelTileBody);
							carouselItemPanelBody.appendChild(carouselItemPanelD);
						carouselItemPanelItem.appendChild(carouselItemPanelBody);

						carouselItemPanelCourseDesc = document.createElement("div");
						carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

							carouselItemPanelCourseDescDiv = document.createElement("div");
							carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

								carouselItemPanelCourseDescDivType = document.createElement("span");
								carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
								carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
								carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

								carouselItemPanelCourseDescDivTitle = document.createElement("a");
								carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
								carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
								carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

									carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
									carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
									carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

										carouselItemPanelCourseDescD = document.createElement("div");
										carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

											carouselItemPanelCourseDescTitleText = document.createElement("div");
											carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
											carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

												carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
												carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

											// carouselItemPanelCourseDescDuration
											carouselItemPanelCourseDescDueDate = document.createElement("div");
											carouselItemPanelCourseDescDueDate.className = "carouselItemPanelCourseDescDueDate";
											carouselItemPanelCourseDescDueDate.innerHTML = subjectItem.dueDateString;

											carouselItemPanelCourseDescTitleText.appendChild(carouselItemPanelCourseDescTitleTextFader);
										carouselItemPanelCourseDescD.appendChild(carouselItemPanelCourseDescTitleText);
									carouselItemPanelCourseDescDivTitleWrapper.appendChild(carouselItemPanelCourseDescD);
								carouselItemPanelCourseDescDivTitle.appendChild(carouselItemPanelCourseDescDivTitleWrapper);
							
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivType);
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivTitle);
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDueDate);
						
						carouselItemPanelCourseDesc.appendChild(carouselItemPanelCourseDescDiv);

					carouselItemPanelC.appendChild(carouselItemPanelItem);
					carouselItemPanelC.appendChild(carouselItemPanelCourseDesc);

				carouselItemPanel.appendChild(carouselItemPanelC);
			
			carouselItemTile.appendChild(carouselItemPanel);
		
			carouselItem.appendChild(carouselItemTile);
			carouselItems.appendChild(carouselItem);

		});		
		carouselMain.appendChild(carouselItems);

		let controlPrev = document.createElement("button");
		controlPrev.className = "carousel-control-prev";
		controlPrev.setAttribute("type", "button");
		controlPrev.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		controlPrev.setAttribute("data-bs-slide", "prev");

		let controlPrevIcon = document.createElement("span");
		controlPrevIcon.className = "carousel-control-prev-icon";

		let controlNext = document.createElement("button");
		controlNext.className = "carousel-control-next";
		controlNext.setAttribute("type", "button");
		controlNext.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		controlNext.setAttribute("data-bs-slide", "next");

		let controlNextIcon = document.createElement("span");
		controlNextIcon.className = "carousel-control-next-icon";


		controlPrev.appendChild(controlPrevIcon);
		carouselMain.appendChild(controlPrev);

		controlNext.appendChild(controlNextIcon);
		carouselMain.appendChild(controlNext);

		tmpContentDiv.appendChild(carouselMain);
		return tmpContentDiv;		
	})
	.catch( error => {
		console.error( "Error building getAssignedTraining - ", error );
	});		
}

async function getTrendingForJob(widgetArg, moduleArg){
	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetArg );
	
	return await checkJWT()
	.then( async function() {
		return await fetch( "/services/api/lms/user/"+sessionStorage.csUser+"/recommendedtraining?type=Position&pageSize=20&pageNum=1", {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		} );
	})
	.then( response => response.json() )
	.then( async function(localStr)  {

		let carouselMain = document.createElement( "div" );
		carouselMain.className = "carousel slide";
		carouselMain.setAttribute( "id", widgetArg+"Carousel");
		carouselMain.setAttribute( "data-bs-ride", "carousel");
		carouselMain.setAttribute( "data-bs-interval", "false");
		carouselMain.setAttribute( "data-pause", "hover");

		// let carouselIndicators = document.createElement("div");
		// carouselIndicators.className = "carousel-indicators";
		
		// let activeCarousel = "";
		// localStr.data.forEach(function(subjectItem, index){
		// 	let carouselIndicator = document.createElement("button");
		// 	carouselIndicator.setAttribute("type", "button");
		// 	carouselIndicator.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		// 	carouselIndicator.setAttribute("data-bs-slide-to", index);
		// 	if(activeCarousel == "") {
		// 		carouselIndicator.className = "active";
		// 		activeCarousel = "active";
		// 	}
		// 	carouselIndicators.appendChild(carouselIndicator);
		// });
		
		// carouselMain.appendChild(carouselIndicators);

		let carouselItems = document.createElement("div");
		carouselItems.className = "carousel-inner";

		let activeItem = "";
		localStr.data.forEach(function(subjectItem, index){
			let carouselItem = document.createElement("div");
			carouselItem.className = "carousel-item";
			if(activeItem == "") {
				carouselItem.className += " active";
				activeItem = "active";
			}

			let carouselItemTile = document.createElement("div");
			carouselItemTile.className = "carouselItemTile";
			carouselItemTile.setAttribute("data-tag", subjectItem.id);
			carouselItemTile.style.height = "225px";

				let carouselItemPanel = document.createElement("div");
				carouselItemPanel.className = "carouselItemPanel";
				carouselItemPanel.setAttribute("data-tag", subjectItem.id);
				carouselItemPanel.setAttribute("style", "height: 100%; overflow: hidden;");

					let carouselItemPanelC = document.createElement("div");

						let carouselItemPanelItem = document.createElement("div");
						carouselItemPanelItem.className = "carouselItemPanelItem";

							let carouselItemPanelBody = document.createElement("div");
							carouselItemPanelBody.className = "carouselItemPanelBody";

								let carouselItemPanelD = document.createElement("div");

									let carouselItemPanelTileBody = document.createElement("div");
									carouselItemPanelTileBody.className = "carouselItemPanelTileBody";

										let carouselItemPanelTileLink = document.createElement("a");
										carouselItemPanelTileLink.className = "carouselItemPanelTileLink";
										carouselItemPanelTileLink.href = subjectItem.trainingDetailsUrl;
										carouselItemPanelTileLink.title = subjectItem.title;

											let carouselItemPanelTileLinkThmb = document.createElement("div");
											carouselItemPanelTileLinkThmb.className = "carouselItemPanelTileLinkThmb";
											carouselItemPanelTileLinkThmb.style.backgroundImage = "url('"+subjectItem.thumbnailImage+"')";
											carouselItemPanelTileLinkThmb.style.height = "100%";
											carouselItemPanelTileLinkThmb.style.overflow = "hidden";
										
										carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
									carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
								carouselItemPanelD.appendChild(carouselItemPanelTileBody);
							carouselItemPanelBody.appendChild(carouselItemPanelD);
						carouselItemPanelItem.appendChild(carouselItemPanelBody);

						carouselItemPanelCourseDesc = document.createElement("div");
						carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

							carouselItemPanelCourseDescDiv = document.createElement("div");
							carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

								carouselItemPanelCourseDescDivType = document.createElement("span");
								carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
								carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
								carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

								carouselItemPanelCourseDescDivTitle = document.createElement("a");
								carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
								carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
								carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

									carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
									carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
									carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

										carouselItemPanelCourseDescD = document.createElement("div");
										carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

											carouselItemPanelCourseDescTitleText = document.createElement("div");
											carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
											carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

												carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
												carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

											carouselItemPanelCourseDescDuration = document.createElement("div");
											carouselItemPanelCourseDescDuration.className = "carouselItemPanelCourseDescDuration";
											carouselItemPanelCourseDescDuration.innerHTML = subjectItem.durationString;
													

											carouselItemPanelCourseDescTitleText.appendChild(carouselItemPanelCourseDescTitleTextFader);
										carouselItemPanelCourseDescD.appendChild(carouselItemPanelCourseDescTitleText);
									carouselItemPanelCourseDescDivTitleWrapper.appendChild(carouselItemPanelCourseDescD);
								carouselItemPanelCourseDescDivTitle.appendChild(carouselItemPanelCourseDescDivTitleWrapper);
							
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivType);
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivTitle);
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDuration);
						
						carouselItemPanelCourseDesc.appendChild(carouselItemPanelCourseDescDiv);

					carouselItemPanelC.appendChild(carouselItemPanelItem);
					carouselItemPanelC.appendChild(carouselItemPanelCourseDesc);

				carouselItemPanel.appendChild(carouselItemPanelC);
			
			carouselItemTile.appendChild(carouselItemPanel);
		
			carouselItem.appendChild(carouselItemTile);
			carouselItems.appendChild(carouselItem);

		});		
		carouselMain.appendChild(carouselItems);

		let controlPrev = document.createElement("button");
		controlPrev.className = "carousel-control-prev";
		controlPrev.setAttribute("type", "button");
		controlPrev.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		controlPrev.setAttribute("data-bs-slide", "prev");

		let controlPrevIcon = document.createElement("span");
		controlPrevIcon.className = "carousel-control-prev-icon";

		let controlNext = document.createElement("button");
		controlNext.className = "carousel-control-next";
		controlNext.setAttribute("type", "button");
		controlNext.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		controlNext.setAttribute("data-bs-slide", "next");

		let controlNextIcon = document.createElement("span");
		controlNextIcon.className = "carousel-control-next-icon";


		controlPrev.appendChild(controlPrevIcon);
		carouselMain.appendChild(controlPrev);

		controlNext.appendChild(controlNextIcon);
		carouselMain.appendChild(controlNext);

		tmpContentDiv.appendChild(carouselMain);
		return tmpContentDiv;
	})
	.catch( error => {
		console.error( "Error building getTrendingForJob - ", error );
	});	
}

async function getInspiredBySubjects(widgetArg, moduleArg){
	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetArg );

	return await checkJWT()
	.then( async function() {
		return await fetch( "/services/api/lms/user/"+sessionStorage.csUser+"/recommendedtraining?type=Subjects&pageSize=20&pageNum=1", {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		} );
	})
	.then( response => response.json() )
	.then( async function(localStr)  {

		let carouselMain = document.createElement( "div" );
		carouselMain.className = "carousel slide";
		carouselMain.setAttribute( "id", widgetArg+"Carousel");
		carouselMain.setAttribute( "data-bs-ride", "carousel");
		carouselMain.setAttribute( "data-bs-interval", "false");
		carouselMain.setAttribute( "data-pause", "hover");

		// let carouselIndicators = document.createElement("div");
		// carouselIndicators.className = "carousel-indicators";
		
		// let activeCarousel = "";
		// localStr.data.forEach(function(subjectItem, index){
		// 	let carouselIndicator = document.createElement("button");
		// 	carouselIndicator.setAttribute("type", "button");
		// 	carouselIndicator.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		// 	carouselIndicator.setAttribute("data-bs-slide-to", index);
		// 	if(activeCarousel == "") {
		// 		carouselIndicator.className = "active";
		// 		activeCarousel = "active";
		// 	}
		// 	carouselIndicators.appendChild(carouselIndicator);
		// });
		
		// carouselMain.appendChild(carouselIndicators);

		let carouselItems = document.createElement("div");
		carouselItems.className = "carousel-inner";

		let activeItem = "";
		localStr.data.forEach(function(subjectItem, index){
			let carouselItem = document.createElement("div");
			carouselItem.className = "carousel-item";
			if(activeItem == "") {
				carouselItem.className += " active";
				activeItem = "active";
			}

			let carouselItemTile = document.createElement("div");
			carouselItemTile.className = "carouselItemTile";
			carouselItemTile.setAttribute("data-tag", subjectItem.id);
			carouselItemTile.style.height = "225px";

				let carouselItemPanel = document.createElement("div");
				carouselItemPanel.className = "carouselItemPanel";
				carouselItemPanel.setAttribute("data-tag", subjectItem.id);
				carouselItemPanel.setAttribute("style", "height: 100%; overflow: hidden;");

					let carouselItemPanelC = document.createElement("div");

						let carouselItemPanelItem = document.createElement("div");
						carouselItemPanelItem.className = "carouselItemPanelItem";

							let carouselItemPanelBody = document.createElement("div");
							carouselItemPanelBody.className = "carouselItemPanelBody";

								let carouselItemPanelD = document.createElement("div");

									let carouselItemPanelTileBody = document.createElement("div");
									carouselItemPanelTileBody.className = "carouselItemPanelTileBody";

										let carouselItemPanelTileLink = document.createElement("a");
										carouselItemPanelTileLink.className = "carouselItemPanelTileLink";
										carouselItemPanelTileLink.href = subjectItem.trainingDetailsUrl;
										carouselItemPanelTileLink.title = subjectItem.title;

											let carouselItemPanelTileLinkThmb = document.createElement("div");
											carouselItemPanelTileLinkThmb.className = "carouselItemPanelTileLinkThmb";
											carouselItemPanelTileLinkThmb.style.backgroundImage = "url('"+subjectItem.thumbnailImage+"')";
											carouselItemPanelTileLinkThmb.style.height = "100%";
											carouselItemPanelTileLinkThmb.style.overflow = "hidden";
										
										carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
									carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
								carouselItemPanelD.appendChild(carouselItemPanelTileBody);
							carouselItemPanelBody.appendChild(carouselItemPanelD);
						carouselItemPanelItem.appendChild(carouselItemPanelBody);

						carouselItemPanelCourseDesc = document.createElement("div");
						carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

							carouselItemPanelCourseDescDiv = document.createElement("div");
							carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

								carouselItemPanelCourseDescDivType = document.createElement("span");
								carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
								carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
								carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

								carouselItemPanelCourseDescDivTitle = document.createElement("a");
								carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
								carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
								carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

									carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
									carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
									carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

										carouselItemPanelCourseDescD = document.createElement("div");
										carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

											carouselItemPanelCourseDescTitleText = document.createElement("div");
											carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
											carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

												carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
												carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

											carouselItemPanelCourseDescDuration = document.createElement("div");
											carouselItemPanelCourseDescDuration.className = "carouselItemPanelCourseDescDuration";
											carouselItemPanelCourseDescDuration.innerHTML = subjectItem.durationString;
													

											carouselItemPanelCourseDescTitleText.appendChild(carouselItemPanelCourseDescTitleTextFader);
										carouselItemPanelCourseDescD.appendChild(carouselItemPanelCourseDescTitleText);
									carouselItemPanelCourseDescDivTitleWrapper.appendChild(carouselItemPanelCourseDescD);
								carouselItemPanelCourseDescDivTitle.appendChild(carouselItemPanelCourseDescDivTitleWrapper);
							
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivType);
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivTitle);
							carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDuration);
						
						carouselItemPanelCourseDesc.appendChild(carouselItemPanelCourseDescDiv);

					carouselItemPanelC.appendChild(carouselItemPanelItem);
					carouselItemPanelC.appendChild(carouselItemPanelCourseDesc);

				carouselItemPanel.appendChild(carouselItemPanelC);
			
			carouselItemTile.appendChild(carouselItemPanel);
		
			carouselItem.appendChild(carouselItemTile);
			carouselItems.appendChild(carouselItem);

		});		
		carouselMain.appendChild(carouselItems);

		let controlPrev = document.createElement("button");
		controlPrev.className = "carousel-control-prev";
		controlPrev.setAttribute("type", "button");
		controlPrev.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		controlPrev.setAttribute("data-bs-slide", "prev");

		let controlPrevIcon = document.createElement("span");
		controlPrevIcon.className = "carousel-control-prev-icon";

		let controlNext = document.createElement("button");
		controlNext.className = "carousel-control-next";
		controlNext.setAttribute("type", "button");
		controlNext.setAttribute("data-bs-target", "#"+widgetArg+"Carousel");
		controlNext.setAttribute("data-bs-slide", "next");

		let controlNextIcon = document.createElement("span");
		controlNextIcon.className = "carousel-control-next-icon";


		controlPrev.appendChild(controlPrevIcon);
		carouselMain.appendChild(controlPrev);

		controlNext.appendChild(controlNextIcon);
		carouselMain.appendChild(controlNext);

		tmpContentDiv.appendChild(carouselMain);
		return tmpContentDiv;
	})
	.catch( error => {
		console.error( "Error building getInspiredBySubjects - ", error );
	});	
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getCheckinsDetails( widgetArg, moduleArg ) {

	const cs_widgetConfig = JSON.parse(sessionStorage.csWidgetConfig);
	let csConfigModuleWidget = moduleArg+"-"+widgetArg;

	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute( "id", moduleArg+"-"+widgetArg );

	let localResponse = {};
	return await checkJWT()
	.then( async function() {
		return await fetch( "/services/x/localization/v1/localizations/ui?groups=GoalPanel,DevPlanPanel,CheckIns&culture=" + sessionStorage.csCulture, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		} );
	})
	.then( response => response.json() )
	.then( async function(localStr)  {
		//		console.log("checkins 1 - done");
		let endpointURL = sessionStorage.csCloud + "perf-conversations-api/v1/conversations";
		localResponse = localStr.data;
		return await fetch( endpointURL, {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken
			}
		} );
	} )
	.then( response => response.json() )
	.then( async function(checkinObjects) {
		//		console.log("checkins 2 - done");
		//		console.log(checkinObjects.length);
		let checkinStr = "";
		if ( checkinObjects.length != 0 ) {
			//			console.log("HERE I AM!");
			var hostName = window.location.host.split( '.' );

			checkinStr = "<table border='0' cellspacing='0' cellpadding='0' width='100%' class='table table-hover'>";
			checkinStr += "<thead>";
			checkinStr += "<tr>";
			checkinStr += "<th class='checkHeaderCol'>" + localResponse[ "Perf.Check-Ins.LandingPage.upcomingConversationsOverview.checkInLabel" ] + "</th>";
			checkinStr += "<th class='checkHeaderCol'>" + localResponse[ "Perf.Check-Ins.LandingPage.recentConversationsRow.conversationRecentlyModifiedText" ] + "</th>";
			checkinStr += "<th class='checkHeaderCol'>" + localResponse[ "Perf.Check-Ins.LandingPage.upcomingConversationsOverview.nextMeetingLabel" ] + "</th>";
			checkinStr += "</tr>";
			checkinStr += "</thead>";
			for ( let checkinItem in checkinObjects ) {

				var avatarUrl = "/clientimg/" + hostName[ 0 ] + "/users/photos/" + checkinObjects[ checkinItem ].participants[ 1 ].pictureUrl;


				checkinStr += "<tr id='checkinItem-" + checkinItem + "' class='checkinItem clickable-row' data-href='/ui/perf-check-ins/Check-Ins/view/" + checkinObjects[ checkinItem ].id + "/meeting/" + checkinObjects[ checkinItem ].meetingsSummary.nextMeetingId + "'>";
				//				checkinStr += "<a href='/ui/perf-check-ins/Check-Ins/view/"+ checkinObjects[checkinItem]["id"] +"/meeting/"+ checkinObjects[checkinItem]["meetingsSummary"]["nextMeetingId"] +"'>";

				checkinStr += "<td class='checkItemCol'>";
				checkinStr += "<div class='cellContent'>";
				checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell' role='button' tabindex='0'>";
				checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-avatar' aria-hidden='true'>";
				checkinStr += "<div class='chkAvatarImage' style='background-image:url(" + avatarUrl + ")'></div>";
				checkinStr += "</div>";
				checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail'>";
				checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__user-name'>" + checkinObjects[ checkinItem ].participants[ 1 ].firstName + " " + checkinObjects[ checkinItem ].participants[ 1 ].lastName + "</div>";
				checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'>" + checkinObjects[ checkinItem ].title + "</div>";
				checkinStr += "</div>";
				checkinStr += "</div>";
				checkinStr += "</div>";
				checkinStr += "</td>";

				var lastModMonth = new Date( checkinObjects[ checkinItem ].lastModifiedDate ).toLocaleDateString( 'en-GB', {
					month: 'short'
				} ).split( ' ' );
				var lastModDay = new Date( checkinObjects[ checkinItem ].lastModifiedDate ).toLocaleDateString( 'en-GB', {
					day: 'numeric'
				} ).split( ' ' );
				//				var lastMod = new Date(checkinObjects[checkinItem]["lastModifiedDate"]).toLocaleDateString('en-GB', { day : 'numeric',  month : 'short'}).split(' ').join('-');
				checkinStr += "<td class='lastMod checkItemColDate'><div class='month'>" + lastModMonth + "</div><div class='day'>" + lastModDay + "</div></td>";

				if ( checkinObjects[ checkinItem ].meetingsSummary.isNextMeetingCreated ) {
					var nextMeetingMonth = new Date( checkinObjects[ checkinItem ].meetingsSummary.nextMeetingDate ).toLocaleDateString( 'en-GB', {
						month: 'short'
					} ).split( ' ' );
					var nextMeetingDay = new Date( checkinObjects[ checkinItem ].meetingsSummary.nextMeetingDate ).toLocaleDateString( 'en-GB', {
						day: 'numeric'
					} ).split( ' ' );
					checkinStr += "<td class='nextMeeting checkItemColDate'><div class='month'>" + nextMeetingMonth + "</div><div class='day'>" + nextMeetingDay + "</div></td>";
				} else {
					checkinStr += "<td class='checkItemColDate'>-</td>";
				}
				//			checkinStr += "</a>";
				checkinStr += "</tr>";
			}
			checkinStr += "</table>";

		} else {
			checkinStr = "<div class='checkins nocontent'>";
			checkinStr += "<button type='button' id='createNewCheckInsBTN' class='getstarted_button' data-href='"+cs_widgetConfig[0][csConfigModuleWidget].getstartedurl+"'>" + cs_widgetConfig[0][csConfigModuleWidget].nocontenttitle[ sessionStorage.csCulture ] + "</button>";
			checkinStr += "</div>";
		}
		//		console.log("checkinStr : "+ checkinStr);
		tmpContentDiv.innerHTML = checkinStr;
		return tmpContentDiv;
	} )
	.catch( error => {
		console.error( "Error building Checkins - ", error );
	} );
}

/* Status function - used to pause 202 responses */
/**
 *
 * @param
 * @param
 * @returns
 */
function status( response ) {
	switch ( response.status ) {
		case 202:
			return new Promise( r => setTimeout( () => r( response ), 1200 ) );
		case 200:
			return Promise.resolve( response );
		case 204:
			return Promise.resolve( response );
	}
}

/**
 * Checks if Report Token needs to be refreshed
 * @returns true
 */
async function checkReportToken() {
	if ( sessionStorage.reportToken ) {
		var tokenDate = sessionStorage.reportTokenDate;
		var dateDiff = Math.floor( ( Date.now() - tokenDate ) / 1000 / 60 );
		if ( dateDiff < 10 ) {
			return sessionStorage.reportToken;
		} else {
			return await updateReportToken();
		}
	} else {
		return await updateReportToken();
	}
}

/**
 * Updates sessionStorage with refreshed token details
 * @returns
 */
function updateReportToken() {
	return fetch( "/Analytics/ReportBuilder/index.aspx", {
		method: 'GET',
		headers: {
			'Content-Type': 'text/html'
		}
	} )
	.then( response => response.text() )
	.then( tokenStr => {
		sessionStorage.reportToken = tokenStr.substring( tokenStr.indexOf( "accessToken:" ) + 14, tokenStr.indexOf( "',", tokenStr.indexOf( "accessToken" ) ) );
		return sessionStorage.csToken;		
	} )
	.catch( error => {
		console.error( "Function updateJWT failed: ", error );
	} );
}
/* Get reporta meta */
/**
 *
 * @param
 * @param
 * @returns
 */
function fetchReport( reportIDArg ) {
	console.log("REPORTID: "+ reportIDArg);
	var rptDataSet = {};
	return fetch( "/reportarchitect/rctmetacore/metaapi/v1/report/" + reportIDArg, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': sessionStorage.reportToken,
			},
		} )
		//.then(response => response.json())
		.then( function( response ) {
			console.log(response.status);
			if ( !response.ok ) {
				throw new Error( "HTTP status " + response.status );
			}
			return response.json();
		} )
		.then( reportDetailsResponse => {

			var payload = {
				"filters": [],
				"sorting": []
			};
			payload.filters = [ ...reportDetailsResponse.filters ];
			payload.sorting = [ ...reportDetailsResponse.sorting ];

			rptDataSet = reportDetailsResponse;

			return fetch( "/reportarchitect/rctdatacore/metaapi/v1/report/" + reportIDArg + "/rendered", {
				method: 'POST',
				mode: 'cors',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': sessionStorage.reportToken
				},
				body: JSON.stringify( payload )
			} );
		} )
		.then( status )
		.then( response => response.json() )
		.then( metaresponse => {
			return fetch( "/reportarchitect/rctdatacore/metaapi/v1" + metaresponse.location, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': sessionStorage.reportToken,
				},
			} );
		} )
		.then( status )
		.then( reportdata => reportdata.json() )
		.then( finalData => {
			return [ finalData, rptDataSet ];
		} )
		.catch( error => {
			console.error( "Error with fetchReport function - ", error );
		} );
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function createDashboard( reportIDArg, chartTitleArg, chartDivTitleArg, chartDivTargetArg ) {
	return fetchReport( reportIDArg )
		.then( function( reportJson ) {
			// console.log("------------------------------ reportJson ------------------------------");
			// console.log(reportJson);
			// console.log("------------------------------------------------------------------------\n\n\n");
			const reportData = reportJson[ 0 ];
			const rptDataSet = reportJson[ 1 ];

			let [ , ...labels ] = [ ...new Set( reportData.chartData.map( x => x[ 0 ] ) ) ];

			let [ , ...reportCols ] = [ ...new Set( reportData.chartData.map( status => status[ 1 ] ) ) ];

			const chartData = {
				labels: [ ...labels ],
				datasets: [],
			};

			let legendFlag = "";

			let dataSet = [];

			// console.log("chartDimensions.length: "+ rptDataSet.charts[ 0 ].chartDimensions.length);

			// If simple graph (one dimension)
			if ( rptDataSet.charts[ 0 ].chartDimensions.length == 1 ) {
				// console.log("chartDimensions.length: "+ rptDataSet.charts[ 0 ].chartDimensions.length);
				let chBgColor = [];
				chBgColor = reportData.chartPalette.map( function( e ) {
					return e.color;
				} );

				$.each( rptDataSet.charts[ 0 ].chartDimensions, function( e, i ) { // for each dimension we need to get the data...
					$.each( reportData.chartData, function( labelIndex, labelValue ) {
						dataSet = reportData.chartData.map( function( value, index ) {
							return value.slice( -1 )[ 0 ];
						} );
					} );

				} );
				dataSet.shift();
				// chartData.shift();
				chartData.datasets.push( {
					backgroundColor: chBgColor,
					hoverBackgroundColor: chBgColor,
					data: dataSet,
					fill: true,
				} );
				legendFlag = false;
				
				// console.log("chartData ***************************");
				// console.log(chartData);
			// If advanced graph (two dimensions)
			} else {
				// console.log("Jag ska inte köras....");
				for ( let i in reportCols ) {
					dataSet[ reportCols[ i ] ] = [];
					for ( let labelIndex in labels ) {
						dataSet[ reportCols[ i ] ][ labelIndex ] = [];
						for ( let k in reportData.chartData ) {
							if ( ( labels[ labelIndex ] == reportData.chartData[ k ][ 0 ] ) && ( reportData.chartData[ k ][ rptDataSet.charts[ 0 ].chartDimensions.length - 1 ] == reportCols[ i ] ) ) {
								dataSet[ reportCols[ i ] ][ labelIndex ] = reportData.chartData[ k ][ rptDataSet.charts[ 0 ].chartDimensions.length ];
							}
						}
					}
					let bgColor = reportData.chartPalette.filter( function( item ) {
						return item.displayName === reportCols[ i ];
					} );

					let bgColor1 = bgColor.map( function( item ) {
						return item.color;
					} );

					chartData.datasets.push( {
						label: reportCols[ i ],
						backgroundColor: bgColor,
						data: dataSet[ reportCols[ i ] ],
						fill: true,
						datalabels: {
							anchor: 'end',
							align: 'start',
						},
					} );
				}
				legendFlag = true;
			}

			const config = {
				type: cs_DashboardDetailsArray[ rptDataSet.charts[ 0 ].chartTypeId ].type,
				data: chartData,
				options: {
					responsive: true,
					plugins: {
						legend: {
							display: legendFlag,
							position: "top",
						},
						title: {
							display: false,
							text: rptDataSet.charts[ 0 ].title
						},
					},
					scales: {
						y: {
							display: cs_DashboardDetailsArray[ rptDataSet.charts[ 0 ].chartTypeId ].scale.ydisplay,
						},
						x: {
							display: cs_DashboardDetailsArray[ rptDataSet.charts[ 0 ].chartTypeId ].scale.xdisplay,
						},
					},
				},

			};

			// console.log("REPORT CONFIG"+ rptDataSet.charts[ 0 ].title);
			// console.log(config);

			// Set the title of the chart (card-header)
			$( "div[id='cs_report_" + reportIDArg + "'] .card-header" ).text( reportData.title );
            // console.log("reportData.data[0]");
            // console.log(reportData.data[0]);
			let reportTBLColumns = [ ...reportData.data[ 0 ] ];
			let [ , ...reportTBLData ] = reportData.data;

			let canvas = document.getElementById( chartTitleArg );

			// 2021-10-27
			let ctx = canvas.getContext( "2d" );
			let myChart = new Chart( ctx, config );

            // console.log("reportTBLColumns");
            // console.log(reportTBLColumns);
			let tempCol = generateColumns( reportTBLColumns );
			// console.log("tempCol");
			// console.log(tempCol);
			let tempData = generateReportData( reportTBLData, reportTBLColumns );
			return Promise.all( [ tempCol, tempData ] )
				.then( response => {
					return [ response[ 0 ], response[ 1 ], reportIDArg, reportData.title ];
				} )
				.catch( error => console.error( "Error in createDashboard (Promise all) function: " + error ) );
		} )
		.catch( error => console.error( "Error in createDashboard function: " + error ) );
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function generateColumns( colArg ) {
	return colArg.map( ( e ) => {
		return {
			//field: e.replace(/ /g,"_"),
			field: e.replace( /[/()\ \s-]+/g, '' ),
			title: e,
			sortable: true
		};
	} );
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function generateReportData( dataArg, colArg ) {
	return dataArg.map( function( row ) {
		return row.reduce( function( result, field, index ) {
			result[ colArg[ index ].replace( /\s/g, '' ) ] = field;
			return result;
		}, {} );
	} );
	//	return result;
}

/**
 * buildDashboards - if the user (demorole) has reports which should be available to display it will match that against what reports actually being shared and then go ahead and fetch data for those reports.
 * @param {string} demoRoleArg - USR/MGR/ADM/HRD/INS/REC
 * @returns
 */
async function buildDashboards( demoRoleArg ) {
	if ( cs_DashboardArray[ demoRoleArg ].reports.length != 0 ) {
		return await checkReportToken()
    	.then( async function(reportToken) {
			return await fetch( "/reportarchitect/rctmetacore/metaapi/v1/reports", {
    			method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',				
    			headers: {
    				'Content-Type': 'application/json',
    				'Authorization': sessionStorage.reportToken,
    			},
    		} );
    	} )
		.then(availreportresponse => availreportresponse.json())
		.then(async function(availableReports){
			return await availableReports.map(function(report, index){
				if (cs_DashboardArray[demoRoleArg].reports.indexOf(report.id) != -1) {
					return report.id;
				}
			}).filter(n => n);
		})
		.then(async function(availableReports) { 
			return await getReportData( availableReports, demoRoleArg );
		})
		.catch( error => console.error( "Error bulding navigation menu: " + error ) );
	} else {
		//console.log("no reports");
		return "No reports for user";
	}
}

/**
 * Gathering ALL dashboards (report IDs) to be fetched
 * @param {array} - reports
 * @param
 * @returns
 */
var getReportData = async ( reports, demoRoleArg ) => {
	const requests = reports.map(async function( reportID ) {
		//console.log("Building dashboard in element: " + demoRoleArg + "-right");

		var tmpCanvas = document.createElement( "canvas" );
		tmpCanvas.setAttribute( "id", "report" + reportID );
		// tmpCanvas.setAttribute( "style", "height: 250px, width: 100%" );
//		tmpCanvas.setAttribute( "style", "height: 250px !important, width: 100% !important" );

		generateHTMLCard( "", "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/" + reportID, cs_DashboardDetailsArray.reports[ reportID ].width, "cs_report_" + reportID, "cs_report", demoRoleArg + "-dashboards", "reportContents", tmpCanvas );

		return await createDashboard( reportID, "report" + reportID, 'reportData' + reportID, demoRoleArg + "-right" )
			.catch( error => {
				console.error( "Error in getting report data for Report ID: " + reports );
				console.error( error );
			} );
	} );
	return Promise.all( requests )
		.then( async function(reportResponseData) {

			// reportResponseData.forEach( function( reportResponse ) {

			// 	var reportColumns = reportResponse[ 0 ];
			// 	var reportData = reportResponse[ 1 ];
			// 	var reportID = reportResponse[ 2 ];
			// 	//console.log(response);

            //     // console.log("COLUMNS");
            //     // console.log(reportColumns);

			// 	var modalTbl = document.createElement( "div" );
			// 	modalTbl.setAttribute( "id", "modalTable_" + reportResponse[ 2 ] );
			// 	modalTbl.setAttribute( "tabindex", "-1" );
			// 	modalTbl.setAttribute( "role", "dialog" );
			// 	modalTbl.className = "modal fade reportModal";

			// 	var modalDia = document.createElement( "div" );
			// 	modalDia.className = "modal-dialog modal-dialog-centered modal-lg modal-fullscreen-md-down";

			// 	var modalCont = document.createElement( "div" );
			// 	modalCont.className = "modal-content";

			// 	var modalHdr = document.createElement( "div" );
			// 	modalHdr.className = "modal-header";

			// 	var modalHdrTitle = document.createElement( "h5" );
			// 	modalHdrTitle.className = "modal-title";
			// 	modalHdrTitle.innerHTML = reportResponse[ 3 ] + " (data)";

			// 	var modalHdrCloseBtn = document.createElement( "button" );
			// 	modalHdrCloseBtn.setAttribute( "type", "button" );
			// 	modalHdrCloseBtn.className = "btn-close";
			// 	modalHdrCloseBtn.setAttribute( "data-bs-dismiss", "modal" );
			// 	//modalHdrCloseBtn.innerHTML = "Close";

			// 	var modalContent = document.createElement( "div" );
			// 	modalContent.setAttribute( "id", "cs_reportModal_table" + reportResponse[ 2 ] );
			// 	modalContent.className = "modal-body";

			// 	modalHdr.appendChild( modalHdrTitle );
			// 	modalHdr.appendChild( modalHdrCloseBtn );
			// 	modalCont.appendChild( modalHdr );
			// 	modalCont.appendChild( modalContent );
			// 	modalDia.appendChild( modalCont );
			// 	modalTbl.appendChild( modalDia );

			// 	// var divTemp = document.getElementById("cs_report_"+reportID);
			// 	var $table;
			// 	$table = $( "<table id='ReportTable" + reportResponse[ 2 ] + "'>" );
			// 	//$table = $("ReportTable"+reportResponse[2]);
			// 	$table.appendTo( modalContent );
			// 	$table.bootstrapTable( {
			// 		locale: sessionStorage.csCulture,
			// 		exportDataType: true,
			// 		exportTypes: [ 'json', 'xml', 'csv', 'txt', 'sql', 'excel' ],
			// 		pageSize: 25,
			// 		pagination: true, // Allow pagination
			// 		search: true, // Allow search
			// 		searchHighlight: true,
			// 		showColumns: true,
			// 		showColumnsSearch: true,
			// 		sortClass: "table-active",
			// 		height: "500",
			// 		checkboxHeader: true,
			// 		showToggle: false,
			// 		detailView: false,
			// 		showColumnsToggleAll: true,
			// 		columns: reportColumns,
			// 		data: reportData
			// 	} );

			// 	var divTemp = document.getElementById( "cs_report_" + reportID );
			// 	divTemp.appendChild( modalTbl );

			// 	$( "#cs_report_" + reportID + " .card-body" ).click( function() {
			// 		$( "#modalTable_" + reportID ).modal( "toggle" );
			// 		// $("[id*='cs_reportModal_table']").bootstrapTable('refreshOptions', {});
			// 	} );
			// } );
			//						$("div[id='cs_report_"+reportIDresp+"'] .loader").css("display","none");
			return "All done here with the dashboards";
		} )
		.catch( error => console.error( "Error in getting report data: " + error ) );
};

/**
 * lastinline - message printed when all is done
 * @param {String} printStrArg - optional string to be printed as part of last then method.
 * @returns {string} - Message to be printed via console.log
 */
function lastinline(printStrArg) {
	const mad = String.fromCodePoint( 0x1F631 );
	const flame = String.fromCodePoint( 0x1F525 );
	const happy = String.fromCodePoint( 0x1F600 );
	const horns = String.fromCodePoint( 0x1F918 );
	var lastinline = happy +" "+ mad +" "+ flame +" "+ mad +" "+ happy +"\n";
	lastinline += "%cWe'll know for the first time.\n";
	lastinline += "If we're evil or divine\n";
	lastinline += "We're the last in line!\n";
	lastinline += "--[ "+ printStrArg +" ]--\n";
	lastinline += "--[ "+ gpeDEMOROLE +" ]--\n";
	lastinline += horns +" "+ flame +" "+ mad +" "+ flame +" "+ horns;
	return lastinline;
}

function setPreloader(mainDivArg, visibleArg) {

	switch(visibleArg) {
		case "on":
			let tmpInnerSpinner = document.createElement("span");
			tmpInnerSpinner.className = "inner-spinner";

			let tmpLoader = document.createElement( "span");
			tmpLoader.className = "loader";

			let preLoaderDiv = document.createElement( "div");
			preLoaderDiv.setAttribute("id", "preloader_div");

			let preLoader = document.createElement( "div");
			preLoader.setAttribute( "id", "preloader");

			tmpLoader.appendChild(tmpInnerSpinner);
			preLoaderDiv.appendChild(tmpLoader);
			preLoader.appendChild(preLoaderDiv);

			var targetDiv = document.getElementById(mainDivArg);
			targetDiv.appendChild(preLoader);
		break;
		case "off":
			$("#"+mainDivArg +" #preloader").hide();
			$("#"+mainDivArg +" .loader").hide();
		break;
		default:
			$(mainDivArg).hide();
		break;
	}
}

/**
 *
 * @param
 * @param
 * @returns
 */

 (async function() {
 	await checkJWT()
 		.then(async function(tokenResponse) {
			const gpe_widgetConfig_v2 = await fetch("https://scfiles.csod.com/Baseline/Config/json/gpe_widgetConfig.json").then(jsonData => jsonData.json());
			const gpe_customLocale_v2 = await fetch("https://scfiles.csod.com/Baseline/Config/json/gpe_customLocale.json").then(jsonData => jsonData.json());
			const gpe_accessURLs = await fetch("https://scfiles.csod.com/Baseline/Config/json/accessURLs.json").then(jsonData => jsonData.json());

			return await Promise.all([gpe_widgetConfig_v2, gpe_customLocale_v2, gpe_accessURLs]);
		})
		.then(async function(gpeJson) {
			let gpe_widgetConfig_v2 	= gpeJson[0];
			let gpe_customLocale_v2 	= gpeJson[1];
			let gpe_accessURLs 			= gpeJson[2];

			sessionStorage.setItem("csWidgetConfig", JSON.stringify(gpe_widgetConfig_v2));
			sessionStorage.setItem("csCustomLocale", JSON.stringify(gpe_customLocale_v2));
			sessionStorage.setItem("csAccessURLs", JSON.stringify(gpe_accessURLs));

			const gpeNav 			= await buildNav(gpeDEMOROLE, sessionStorage.csCulture, getAccessDetails(gpe_accessURLs));
			const gpeAboutCard 		= await buildAboutCard();
			const gpeApprovals 		= await getApprovalDetails(approvalURLs, sessionStorage.csCulture, gpeDEMOROLE);
			const gpeOnboarding 	= await buildOnbWidget(gpeDEMOROLE, sessionStorage.csCulture);
			const gpeModuleLayout 	= await buildModuleWidget(gpeDEMMOMODULES);

			return await Promise.all([gpeNav, gpeAboutCard, gpeApprovals, gpe_accessURLs, gpeOnboarding, gpeModuleLayout]);
		})
		.then(async function([gpeNav, gpeAbt, gpeQLS, gpeAppr, accessURLs]) {
            console.log("NAV/ABT/QLS/APPROVALS DONE");
			const gpeWidgets = await buildWidgets_v2(gpeDEMMOMODULES);
            return await Promise.resolve(gpeWidgets);			
        })
        .then(async function(data) {
            console.log("WIDGETS DONE");
			console.log(data);
            // console.log("READY WITH BASIC WIDGETS!");

			// Fix NiceScroll on feed widget
			// $("#live_feed").niceScroll({
			// 	cursorborder: "",
			// 	cursorcolor: "var(--gpewp-banner-bg-color--light)",
			// 	autohidemode: false,
			// 	boxzoom: false
			// });

			// Set event on logout to delete sessionStorage.
			var logoutLink = document.querySelector("a[id*='header_headerResponsive_responsiveNav_lnkLogout']");
				logoutLink.addEventListener("click", function(event) {
					sessionStorage.clear();
				});

            // Clean up niceScroll
            // const btns = document.querySelectorAll('a.trq-tab-link--flat');
            // btns.forEach(btn => {
            //    btn.addEventListener('click', event => {
            //        setTimeout(function(){
            //             $("#live_feed").niceScroll().resize();
       		// 	    }, 200);
            //    });
            // });

            // Checkins click events
			$(".clickable-row").click(function() {
				window.location = $(this).data("href");
			});

            // Get started click events
			$(".getstarted_button").click(function() {
				window.location = $(this).data("href");
			});			
            
			// Get approval buttons click events
			$(".approval_button").click(function() {
				window.location = $(this).data("href");
			});			

			// Get quick link buttons click events
			$(".quicklinks_button").click(function() {
				window.location = $(this).data("href");
			});			
		
			// Build report dashboards.
			console.log("PROCESSING DASHBOARDS");
			const gpeDashboards = await buildDashboards(gpeDEMOROLE);
			return await Promise.resolve(gpeDashboards);
		})
		.then(async function(DashboardData) {
			// Fix bootstrap table on chart click
			var reportEvnt = document.querySelectorAll("[id*='cs_report_'] .card-body");
			reportEvnt.forEach(function(element){
				element.addEventListener("click", function(event) {
					var $parentEl = $(this).closest("[class*='col-md-']");
					setTimeout(function(){ $parentEl.find("[id*='ReportTable']").bootstrapTable('refreshOptions', {}); }, 200);
				});
			});

			// console.log(data);
			console.log(lastinline(DashboardData), "color:#00cc00;");
		})
 		.catch(error => {
 			console.error(error);
 		});
 })();
