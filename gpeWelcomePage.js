/**
 * Dynamic Welcome Page for Cornerstone OnDemand
 * @desc Dynamic welcome page engine for Cornerstone OnDemand. The script is using the navigation menu as base to generate the page.
 * @author   Klas Anundby kanundby@csod.com
 * @version 0.7
 */

 const gpeABOUTCARDDIV = "gpewp_topcontainer_upper"; // where do we want to put the user photo name/job?
 const gpeUSRMAINDIV = "USR-right";
 const gpeUSRCONTENTDIV = "USR-content";
 const gpeUSRLEFTDIV = "USR-left";
 const gpeDEMOPERSONADIV = "demopersona";
 const gpeDEMOUSERDIV = "demousername";
 const gpeTARGETNAVDIV = "gpewp_topcontainer_nav"; // where do we want to put the navigation menu?
 const gpeUSERNAME = document.getElementById( gpeDEMOUSERDIV ).getAttribute( gpeDEMOUSERDIV ).toLowerCase().split( ";" );
 const gpeDEMOROLE = getDemoRole( document.getElementById( gpeDEMOPERSONADIV ).getAttribute( gpeDEMOPERSONADIV ) );
 const gpePRIMARYBGCSS = $( '.c-nav-user' ).css( 'background-color' );
 const gpeQUICKLINKSMAINDIV = "QLS-content";


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
		url: "COMPAPPROVALURL",
		icon: "gpe-appr-form",
		imgname: "appr_comp_002.png",
		title: {
			"en-US": "Compensation Plan Approval",
			"en-UK": "Compensation Plan Approval",
			"de-DE": "Genehmigung des Vergütungsplans",
		},
	}
};

/*
 * Custom translation array
 * = cs_customLocale
 */
const cs_customLocale = {
	ManagerWidgetTitle: {
		"en-US": "Team widget",
	},
	ManagerToggleSwitch: {
		"en-US": "Team View",
	},
	ManagerTableHeader1: {
		"en-US": "Employee",
	},
	ManagerTableHeader2: {
		"en-US": "Goal Achievement",
	},
	ManagerTableHeader3: {
		"en-US": "Dummy Title",
	},
	ManagerTableHeader4: {
		"en-US": "Dummy title #3",
	},
	ManagerTableHeader5: {
		"en-US": "Dummy title #5",
	},
	topNavigationTitle: {
		USR: {
			"en-US": "My Development",
			"en-UK": "My Development",
		},
		MGR: {
			"en-US": "My team",
			"en-UK": "People Manager",
		},
		HRD: {
			"en-US": "HR Dashboard",
			"en-UK": "HR Dashboard",
		},
		ADM: {
			"en-US": "Admin Dashboard",
			"en-UK": "Administrator",
		},
		REC: {
			"en-US": "Recruiter Dashboard",
			"en-UK": "Recruiter Dashboard",
		},
		INS: {
			"en-US": "Instructor Dashboard",
			"en-UK": "Instructor",
		},
		QLS: {
			"en-US": "Quick links",
			"en-UK": "Quick links",
		},
	},
	moduleTitle: {
		"ats": {
			"en-US": "Recruiting",
			"en-UK": "Recruiting",
		},
		"chr": {
			"en-US": "Core HR",
			"en-UK": "Core HR",
		},
		"core": {
			"en-US": "Core",
			"en-UK": "Core",
		},
		"lms": {
			"en-US": "Learning",
			"en-UK": "Learning",
		},
		"epm": {
			"en-US": "Performance",
			"en-UK": "Performance",
		},
		"epm-careers": {
			"en-US": "Careers",
			"en-UK": "Careers",
		},
		"careers": {
			"en-US": "Careers",
			"en-UK": "Careers",
		},
		"reporting": {
			"en-US": "Reports",
			"en-UK": "Reports",
		},
	},
};

const cs_widgetConfig = {
	development_plans : {
		width : 12,
		targetdiv : gpeUSRLEFTDIV,
		title : {
			"en-US" : "Development Plan Progress",
			"en-UK" : "My development Plan progress",
		},
		nocontenttitle: {
			"en-US": "Create a new plan!",
			"en-UK": "Create a new plan!",
		},
	},
	goals : {
		width : 12,
		targetdiv : gpeUSRLEFTDIV,
		title : {
			"en-US" : "Goal Progress",
			"en-UK" : "Goal Progress",
		},
		nocontenttitle: {
			"en-US": "Create goals!",
			"en-UK": "Create goals!",
		},
	},
	check_ins : {
		width : 12,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Check ins",
			"en-UK" : "Check ins",
		},
		nocontenttitle: {
			"en-US": "Get Started!",
			"en-UK": "Get Started!",
		},
	},
	view_your_transcript : {
		width : 12,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Your Transcript",
			"en-UK" : "Your Transcript",
		},
		nocontenttitle: {
			"en-US": "empty",
			"en-UK": "empty",
		},
        tablecolumns : {
            title : {
                "en-US": "Title",
                "en-UK": "Title",
                "fr-FR": "Le Title",
            },
            duedate : {
                "en-US": "Due Date",
                "en-UK": "Due Date",
                "fr-FR": "Le Due Date",
            },
            status : {
                "en-US": "Status",
                "en-UK": "Status",
                "fr-FR": "Le Status",
            },
            action : {
                "en-US": "Action",
                "en-UK": "Action",
                "fr-FR": "Le Action",
            }        }
	},
	live_feed : {
		width : 12,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Live Feed",
			"en-UK" : "Live Feed",
		},
		nocontenttitle: {
			"en-US": "empty",
			"en-UK": "empty",
		},
	},
	performance_reviews : {
		width : 12,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "My performance actions",
			"en-UK" : "My performance actions",
		},
		nocontenttitle: {
			"en-US": "empty",
			"en-UK": "empty",
		},
        tablecolumns : {
            title : {
                "en-US": "Title",
                "en-UK": "Title",
                "fr-FR": "Le Title",
            },
            duedate : {
                "en-US": "Due Date",
                "en-UK": "Due Date",
                "fr-FR": "Le Due Date",
            }
        }
	},
};

/**
 * @var cs_DashboardArray
 * @desc This array outlines which the Report IDs to be used by the demouser (Role).
 *
 */
var cs_DashboardArray = {
	"MGR": {
		//          "reports": [],
		"reports": [ 2, 3, 14, 19, 46, 47, 48 ],
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
			"width": 6
		},
		"4": {
			"width": 6
		},
		"7": {
			"width": 6
		},
		"8": {
			"width": 6
		},
		"10": {
			"width": 6
		},
		"11": {
			"width": 6
		},
		"12": {
			"width": 6
		},
		"13": {
			"width": 6
		},
		"14": {
			"width": 6
		},
		"15": {
			"width": 6
		},
		"16": {
			"width": 6
		},
		"17": {
			"width": 6
		},
		"18": {
			"width": 6
		},
		"19": {
			"width": 6
		},
		"22": {
			"width": 6
		},
		"23": {
			"width": 6
		},
		"24": {
			"width": 6
		},
		"25": {
			"width": 6
		},
		"26": {
			"width": 6
		},
		"27": {
			"width": 6
		},
		"28": {
			"width": 6
		},
		"29": {
			"width": 6
		},
		"30": {
			"width": 6
		},
		"31": {
			"width": 6
		},
		"32": {
			"width": 6
		},
		"36": {
			"width": 6
		},
		"38": {
			"width": 6
		},
		"41": {
			"width": 6
		},
		"42": {
			"width": 6
		},
		"43": {
			"width": 6
		},
		"44": {
			"width": 6
		},
		"46": {
			"width": 6
		},
		"47": {
			"width": 12
		},
		"48": {
			"width": 6
		},
		"49": {
			"width": 6
		},
		"50": {
			"width": 6
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
		topNavBtnUSR.innerHTML = cs_customLocale.topNavigationTitle.USR[ cultureArg ]; //sessionStorage["csCulture"]

		topNavItmUSR.appendChild( topNavBtnUSR );
		let topNavItmRole = 0;
		if ( demoRoleArg == "HRM" ) demoRoleArg = "HRD"; // Fix until we have update all the different areas from HRM to HRD
		switch ( demoRoleArg ) {
			case "REC":
			case "MGR":
			case "HRD":
			case "INS":
			case "ADM":
				// IF there is a report in gpeUSERREPORTID - go on.
				if ( gpeUSERREPORTID[ demoRoleArg ] ) buildExtendedWidgetV2( getAccessDetails( accessURLsArg ), demoRoleArg + "-right", gpeUSERREPORTID[ demoRoleArg ].reportid, gpeUSERNAME, demoRoleArg );
				topNavItmRole = buildExtraNavItem( demoRoleArg, cultureArg );
				break;
		}

		let topNavItmQLS = document.createElement( "li" );
		topNavItmQLS.className = "trq-tab-group-item ng-star-inserted";
		topNavItmQLS.setAttribute( "role", "presentation" );
		topNavItmQLS.setAttribute( "_ngcontent-nml-c325", "" );
		topNavItmQLS.setAttribute( "trqid", "group-item" );
		topNavItmQLS.setAttribute( "trqiduseparent", "true" );

		let topNavBtnQLS = document.createElement( "a" );
		topNavBtnQLS.className = "trq-tab-link--flat ng-star-inserted";
		topNavBtnQLS.setAttribute( "id", "nav-QLS-tab" );
		topNavBtnQLS.setAttribute( "data-bs-toggle", "tab" );
		topNavBtnQLS.setAttribute( "data-bs-target", "#nav-QLS" );
		topNavBtnQLS.setAttribute( "type", "button" );
		topNavBtnQLS.setAttribute( "role", "tab" );
		topNavBtnQLS.setAttribute( "aria-controls", "nav-QLS" );
		topNavBtnQLS.setAttribute( "aria-selected", "true" );
		topNavBtnQLS.setAttribute( "_ngcontent-nml-c376", "" );
		topNavBtnQLS.innerHTML = cs_customLocale.topNavigationTitle.QLS[ cultureArg ]; // sessionStorage["csCulture"]

		topNavItmQLS.appendChild( topNavBtnQLS );

		topNavUL.appendChild( topNavItmUSR );
		if ( topNavItmRole != 0 ) {
			topNavUL.appendChild( topNavItmRole );
		}
		topNavUL.appendChild( topNavItmQLS );

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
	topNavBtnRole.innerHTML = cs_customLocale.topNavigationTitle[ demoRoleArg ][ cultureArg ]; //sessionStorage["csCulture"]
	test = 2;
	topNavItmRole.appendChild( topNavBtnRole );

	return topNavItmRole;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function buildWidgets( accessArrArg, cultureArg ) {
	// Sort array on widgetPrio column
	let widgetOrderedArr = accessArrArg.sort( ( a, b ) => a.widgetPrio - b.widgetPrio );
	// Get all widgets (widgetPrio = 99 means it is not a widget and should not be used)
	let widgetIDArr = widgetOrderedArr.filter( v => +v.widgetPrio < 99 );

	// console.log("%cbuildWidgets START LOADING WIDGETS", "color:#00ffff;");
	setPreloader(gpeUSRCONTENTDIV, "on");
	let widgetPromisesArray = [];
	widgetIDArr.forEach(function(widget) {
		widgetPromisesArray.push(getWidgetData( widget ) );
	});

	return await Promise.all( widgetPromisesArray )
	.then(async function(widgetPromisesArrayComplete) {
		// console.log(widgetPromisesArrayComplete);
		// console.log("%c!!!!!!!!!!!!!!!!!-- widgetPromisesArrayComplete --!!!!!!!!!!!!!!!!!", "color:#00ffff;")
		return widgetPromisesArrayComplete.map( async function(widgetData, index)  {
			// console.log(widgetData);
			if(widgetData) {
				return await generateHTMLWidget(
				 	widgetData.id,
				 	cs_widgetConfig[widgetData.id].width,
				 	"cs_main_"+ widgetData.id,
				 	"widgetData_"+ index,
				 	cs_widgetConfig[widgetData.id].targetdiv,
				 	"cs_"+ widgetData.id,
				 	widgetData);
				//return await Promise.resolve(widgetData);
			}
		});
		//return Promise.resolve(renderedWidgets);
	})
	.then(async function(renderedWidgetsResp) {
		// console.log("%cbuildWidgets WIDGETS DISPLAYED", "color:#00ffff;");
		// console.log(renderedWidgetsResp);
		setPreloader(gpeUSRCONTENTDIV, "off");
		$("canvas").each(function() {
			var chart = Chart.getChart($(this).attr("id"));
			chart.update();
		});

		return renderedWidgetsResp;
	})
	.catch( error => console.error( "Error in getting widget data: " + error ) );
}

/**
 * Prepare
 * @param
 * @param
 * @returns
 */
async function getWidgetData( widgetIDArg ) {
	switch ( widgetIDArg.id ) {
		case "view_your_transcript":
			return await getTranscriptDetails( widgetIDArg.id );
		case "performance_reviews":
			return await getActionsDetails( widgetIDArg.id );
		case "check_ins":
			return await getCheckinsDetails( widgetIDArg.id );
		case "goals":
			return await Promise.resolve(getDonutDetails( widgetIDArg.id,  "/phnx/driver.aspx?routename=Goals/GoalList"));
		case "development_plans":
			return await Promise.resolve(getDonutDetails( widgetIDArg.id,  "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot"));
		case "live_feed":
			return await getFeedDetails( widgetIDArg.id );
	}
}


/**
 * generateHTMLWidget - Builds a bootstrap card dynamically based on arguments given.
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
function generateHTMLWidget( widgetIDArg, columnWidthArg, columnIDArg, rowIDArg, targetColDivIDArg, contentDivClassArg, widgetContentArg ) {
	const accessURLs = JSON.parse(sessionStorage.csAccessURLs);
	let widgetData = accessURLs.find(widgetDetails => {
		return widgetDetails.title === widgetIDArg;
	});

	var tmpRowDiv = "";
	if ( document.getElementById( rowIDArg ) ) {
		tmpRowDiv = document.getElementById( rowIDArg );
	} else {
		tmpRowDiv = document.createElement( "div" );
		tmpRowDiv.setAttribute( "id", rowIDArg ); //"cs_main_transcript"
		tmpRowDiv.setAttribute( "data-position", widgetData.widgetPrio ); //"cs_main_transcript"
		//		tmpRowDiv.className = "widgetData";
		tmpRowDiv.className = "widgetData col-md-" + columnWidthArg; //"col-md-12";
	}

	var tmpColDiv = document.createElement( "div" );
	//	tmpColDiv.className = "col-md-"+ colArg; //"col-md-12";
	tmpColDiv.setAttribute( "id", columnIDArg ); //"cs_main_transcript"

	var tmpCardParent = document.createElement( "div" );
	tmpCardParent.className = "card";

	var tmpCardHeader = document.createElement( "a" );
	tmpCardHeader.className = "card-header";
	tmpCardHeader.innerHTML = cs_widgetConfig[widgetIDArg].title[sessionStorage.csCulture]; //accessArr[accessItem]["title"];
	tmpCardHeader.setAttribute( 'href', widgetData.url );

	var tmpCardBody = document.createElement( "div" );
	tmpCardBody.className = "card-body";

	var tmpCardContent = document.createElement( "div" );
	tmpCardContent.className = contentDivClassArg;

	tmpCardContent = widgetContentArg;

	tmpCardBody.appendChild( tmpCardContent );

	tmpCardParent.append( tmpCardHeader, tmpCardBody );
	tmpColDiv.appendChild( tmpCardParent );
	tmpRowDiv.appendChild( tmpColDiv );

	var mainContent = document.getElementById( targetColDivIDArg ); // "cs_main_center"
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
		tmpRowDiv.setAttribute( "id", rowIDArg ); //"cs_main_transcript"
		tmpRowDiv.className = "row";
	}

	var tmpColDiv = document.createElement( "div" );
	tmpColDiv.className = "col-md-" + colArg; //"col-md-12";
	tmpColDiv.setAttribute( "id", colIDArg ); //"cs_main_transcript"

	var tmpCardParent = document.createElement( "div" );
	tmpCardParent.className = "card";

	var tmpCardHeader = document.createElement( "a" );
	tmpCardHeader.className = "card-header";
	tmpCardHeader.innerHTML = cardTitleArg; //accessArr[accessItem]["title"];
	tmpCardHeader.setAttribute( 'href', cardTitleHrefArg );

	var tmpCardBody = document.createElement( "div" );
	tmpCardBody.className = "card-body";

	var tmpCardContent = document.createElement( "div" );
	tmpCardContent.className = contentDivClassArg;

	// var preLoader = document.createElement( "div" );
	// preLoader.className = "loader";
	// tmpCardBody.appendChild( preLoader );

	tmpCardContent = contentArg;

	tmpCardBody.appendChild( tmpCardContent );

	tmpCardParent.append( tmpCardHeader, tmpCardBody );
	tmpColDiv.appendChild( tmpCardParent );
	tmpRowDiv.appendChild( tmpColDiv );

	var mainContent = document.getElementById( targetColDivIDArg ); // "cs_main_center"
	mainContent.appendChild( tmpRowDiv );

	//	$("div[class='"+contentDivClassArg+"'] .loader").css("display","none");
	//	console.log("------------------ - - - - - -"+ rowIDArg);
	return rowIDArg;
}

/*
 * Build Quick Links page
 */
/**
 *
 * @param
 * @param
 * @returns
 */
async function buildQuickLinksCard( accessArrArg, cultureArg ) {
	if ( !document.getElementById( "gpeQLSMain" ) ) {
		let tmpRowDivQLS = document.createElement( "div" );
		tmpRowDivQLS.setAttribute( "id", "gpeQLSMain" ); //"cs_main_transcript"
		tmpRowDivQLS.className = "row";

		/* BTN START */
		let qlArrTmp = multiSort( getAccessDetails( accessArrArg ), {
			module: 'asc',
			quicklinkPrio: 'asc'
		} );
		let qlArr = {};

		let counter = 0;
		qlArrTmp.forEach( function( o ) {
			var k = o.module;
			if ( !qlArr[ k ] ) {
				qlArr[ k ] = [];
				counter = 0;
			}
			if ( counter < 10 ) qlArr[ k ].push( o );
			counter++;
		} );

		$.each( qlArr, function( e, i, a ) {
			let tmpColDiv = document.createElement( "div" );
			tmpColDiv.className = "col-md-6";
			tmpColDiv.setAttribute( "id", "cs_main_quicklinks" ); //"cs_main_transcript"

			let tmpCardParent = document.createElement( "div" );
			tmpCardParent.className = "card";

			let tmpCardHeader = document.createElement( "a" );
			tmpCardHeader.className = "card-header";
			tmpCardHeader.innerHTML = cs_customLocale.moduleTitle[ e ][ cultureArg ]; //accessArr[accessItem]["title"];

			let tmpCardBody = document.createElement( "div" );
			tmpCardBody.className = "card-body";

			let tmpContentDiv = document.createElement( "div" );
			tmpContentDiv.className = "quicklinks";

			$.each( i.slice( 0, 5 ), function( e1, i1, a1 ) {
				if ( i1.quicklinkPrio != 99 ) {
					const tmpBtnDiv = document.createElement( "a" );
					tmpBtnDiv.className = "btn btn-primary";
					tmpBtnDiv.setAttribute( "href", i1.url );

					const tmpBtnDivIcon = document.createElement( "i" );
					tmpBtnDivIcon.className = "fa " + i1.icon;

					const tmpBtnDivText = document.createElement( "span" );
					tmpBtnDivText.className = "text";
					tmpBtnDivText.innerHTML = i1.title;

					tmpBtnDiv.appendChild( tmpBtnDivIcon );
					tmpBtnDiv.appendChild( tmpBtnDivText );
					tmpContentDiv.appendChild( tmpBtnDiv );
				}
			} );

			tmpCardBody.appendChild( tmpContentDiv );

			tmpCardParent.append( tmpCardHeader, tmpCardBody );
			tmpColDiv.appendChild( tmpCardParent );
			tmpRowDivQLS.appendChild( tmpColDiv );
		} );

		/* BTN END */

		let mainContent = document.getElementById( gpeQUICKLINKSMAINDIV );
		mainContent.appendChild( tmpRowDivQLS );
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
async function buildAboutCard() {
	if ( !document.getElementById( "gpeAboutCard" ) ) {
		var tmpContainerDiv = document.createElement( "div" );
		tmpContainerDiv.className = "container-fluid topcontent";
		tmpContainerDiv.setAttribute( "id", "gpeAboutCard" );


		var tmpRowDiv = document.createElement( "div" );
		tmpRowDiv.className = "row";

		var tmpColImageDiv = document.createElement( "div" );
		tmpColImageDiv.className = "col-md-2";

		var tmpCardAboutImage = document.createElement( "img" );
		tmpCardAboutImage.className = "abt-image";
		tmpCardAboutImage.setAttribute( "src", document.querySelector( "img[id*='header_headerResponsive_responsiveNav_imgPhoto']" ).getAttribute( "src" ) );

		tmpColImageDiv.appendChild( tmpCardAboutImage );

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

			let tmpAprvlDivHref = document.createElement( "a" );
			tmpAprvlDivHref.className = "position-relative " + item;
			tmpAprvlDivHref.setAttribute( "href", $( this ).attr( 'href' ) );

			let tmpAprvlButton = document.createElement( "button" );
            tmpAprvlButton.setAttribute( "content", approvalURLsArg[ item ].title[ cultureArg ]);
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
async function getTranscriptDetails( contentDivClassArg ) {
		var tmpContentDiv = document.createElement( "div" );
		tmpContentDiv.className = contentDivClassArg;
		tmpContentDiv.setAttribute( "id", contentDivClassArg );

		var tmpContent = document.querySelector( "div[data-tag='pnlMyTraining'] div[id$='_widgetContainer_ctl00_upnlList'] table" );
		var data = [ ...tmpContent.rows ].map( row => [ ...row.cells ].map( td => {
			return td.innerHTML.replace( /\s+/g, ' ' ).trim();
		} ) );

		data.shift();
		var columns = [ {
				title: cs_widgetConfig[contentDivClassArg].tablecolumns.title[sessionStorage.csCulture],
				sortable: true
		},
			{
				title: cs_widgetConfig[contentDivClassArg].tablecolumns.duedate[sessionStorage.csCulture],
				sortable: true
		},
			{
				title: cs_widgetConfig[contentDivClassArg].tablecolumns.status[sessionStorage.csCulture],
				sortable: true
		},
			{
				title: cs_widgetConfig[contentDivClassArg].tablecolumns.action[sessionStorage.csCulture],
				sortable: false
		}
	];

		var $table;
		$table = $( '<table>' );
		$table.appendTo( tmpContentDiv );
		$table.bootstrapTable( {
			locale: sessionStorage.csCulture,
			pageSize: 10,
			pagination: false, // Allow pagination
			search: true, // Allow search
			checkboxHeader: false,
			showToggle: false,
			detailView: false,
			columns: columns,
			data: data
		} );
		return await tmpContentDiv;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getActionsDetails( contentDivClassArg ) {
	var tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = contentDivClassArg;
	tmpContentDiv.setAttribute( "id", contentDivClassArg );

	//var tmpContent = document.querySelector("table[id*='ctl00_pnlActionItems_content']");
	var tmpContent = document.querySelector( "div[data-tag='pnlMyTraining'] div[id$='_widgetContainer_ctl00_upnlList'] table" );
	var data = [ ...tmpContent.rows ].map( row => [ ...row.cells ].map( td => {
		return td.innerHTML.replace( /\s+/g, ' ' ).trim();
	} ) );

	data.shift();
	var columns = [ {
			title: cs_widgetConfig[contentDivClassArg].tablecolumns.title[sessionStorage.csCulture],
			sortable: true
		},
		{
			title: cs_widgetConfig[contentDivClassArg].tablecolumns.duedate[sessionStorage.csCulture],
			sortable: true
		}
	];

	var $table;
	$table = $( '<table>' );
	$table.appendTo( tmpContentDiv );
	$table.bootstrapTable( {
		locale: sessionStorage.csCulture,
		pageSize: 10,
		pagination: false, // Allow pagination
		search: true, // Allow search
		checkboxHeader: false,
		showToggle: false,
		detailView: false,
		columns: columns,
		data: data
	} );
	//tmpContentDiv.appendChild(tmpContent);

	return await tmpContentDiv;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getDonutDetails( widgetIDArg, urlArg) {
	return await Promise.resolve( await fetch( urlArg ) )
		.then( async function( data) {
		    // console.log("%cDONUT DATA LOAD: "+ data, "color:#ccaa00;");
			return await data.text();
		})
		.then( async function( dataResponse ) {
			// console.log("%cDONUT CHECK: "+ contentDivClassArg, "color:#ccaa00;");
			switch(widgetIDArg) {
				case "goals":
					return await $( dataResponse ).find( '.percentage' ).attr( "data-percent" );
				case "development_plans":
					return await $( dataResponse ).find( "a[href*='/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew']" ).closest( "div[class*='dashboard-widget-content']" ).find(".percentage span").text();
			}
		})
		.then(async function(achievedData) {
			// console.log("%cDONUT DATA: "+ achievedData, "color:#ccaa00;");
			// IF ACHIEVED == 0 DO SOMETHING ELSE
			let tmpContentDiv = document.createElement( "div" );
			tmpContentDiv.className = widgetIDArg;
			tmpContentDiv.setAttribute( "id", widgetIDArg);
			if(achievedData != null) {
				return await Promise.resolve(await drawDonut( achievedData, widgetIDArg, tmpContentDiv));
			}else {
				tmpContentDiv.innerHTML = "<button type='button' id='"+widgetIDArg+"_nodata' class='getstarted_button'>" + cs_widgetConfig[widgetIDArg].nocontenttitle[ sessionStorage.csCulture ] + "</button>";
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
	tmpCanvas.setAttribute( "style", "height: 250px, width: 100%" );
	tmpContentDivArg.appendChild(tmpCanvas);

	// console.log("%cDONUT DETAILS - CREATE CTX: ", "color:#ccaa00;");
	let ctx = tmpCanvas.getContext("2d");
	// console.log(contentDivClassArg);
	// console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
	// console.log(ctx);
	let myChart = new Chart(ctx, config);


	return await tmpContentDivArg;
	//
	// let ctx = tmpContentDivArg.getContext("2d");
	// let myChart = new Chart(ctx, config);
	// console.log("%cdrawDonut: RETURN DONUT - "+ contentDivClassArg, "color:#0000cc;");
	// console.log(myChart);
	// return Promise.resolve(myChart);
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
 * buildExtendedWidget - Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
 * @param {array} accessArrArg -
 * @param {string} appendDivArg -
 * @param {array} usernameArg -
 * @param {string} demoRoleArg -
 * @returns HTML table to be put on the welcome page
 */
async function buildExtendedWidget( accessArrArg, appendDivArg, reportIDArg, usernameArg, demoRoleArg ) {
	const userName = usernameArg[ 0 ][ 0 ].concat( usernameArg[ 1 ] );
	var rowID = "";
	let reportToken = checkReportToken();
	$.when( reportToken )
		.then( ( data ) => {

			var reportContentDiv = document.createElement( "div" );
			reportContentDiv.setAttribute( "id", "userReport" + reportIDArg );
			reportContentDiv.className = "user_table";

			var cardTitle = cs_customLocale.ManagerWidgetTitle[ sessionStorage.csCulture ]; // cardTitleArg - Title of the card.
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
            console.log(reportContentDiv);
			return reportContentDiv;
		} )
		.catch( error => console.error( "error with building manager page: " + error ) );
}

/**
 * getGoalProgress - Get Goal Progress on several users
 * @param {array} userIDArrayArg -
 * @returns JSON Array
 */
async function getGoalProgress(userIDArrayArg){
    let promiseArray = [];
    userIDArrayArg.data.map(async function(userID){
        var goalUrlStr = "/services/api/goalSummary/summary/" + userID.id +"?StartDate="+new Date().getFullYear()+"-01-01&EndDate="+new Date().getFullYear()+"-12-24";
        promiseArray.push(fetch(goalUrlStr, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.csToken,
            },
        } )
        .then(goalResponse => goalResponse.json())
        .then(async function(goalResponse){
            return await goalResponse;
        }));
    });
    return await Promise.all(promiseArray);
}

/**
 * buildExtendedWidgetV2 - Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
 * @param {array} accessArrArg -
 * @param {string} appendDivArg -
 * @param {array} usernameArg -
 * @param {string} demoRoleArg -
 * @returns HTML table to be put on the welcome page
 */
async function buildExtendedWidgetV2( accessArrArg, appendDivArg, reportIDArg, usernameArg, demoRoleArg ) {
	// console.log(accessArrArg);
    return await checkJWT()
    	.then( async function() {
    		let rptURL = "/services/api/x/odata/api/views/vw_rpt_user?$filter=user_mgr_id eq " + sessionStorage.csUser + "&$select=user_id";
    		return await fetch( rptURL, {
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
    		return await fetch( empURL, {
    			method: 'GET',
    			headers: {
    				'Content-Type': 'application/json',
    				'Authorization': 'Bearer ' + sessionStorage.csToken,
    			},
    		} );
    	} )
    	.then( response => response.json() )
    	.then( async function( userData ) {
			// Get goal
            let goalData = await getGoalProgress(userData);
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
                if(goalDataArr[goalArr].length !== 0) {
                    goalSummaryArr[goalArr] = {
                        id: goalDataArr[goalArr][0].User.Id,
                        goalprogress: Math.round(goalProgress / goalWeight)+"%"
                    };
                }
            }
            let userArr = userData.data;
            const finalArr =  userArr.map(e => goalSummaryArr.some(({ id }) => id == e.id) ? ({ ...e, ...goalSummaryArr.find(({ id }) => id == e.id)}) : e);
            return await finalArr;
        })
        .then(async function(userData) {
            // console.log("Build da shit");
			// console.log(accessArrArg);
    		let emplData = userData.map( function( user ) {
    			return {
    				id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    fullName: user.firstName + " "+ user.lastName,
    				username: user.userName,
    				primaryEmail: user.primaryEmail,
    				mobilPhone: user.mobilePhone,
    				workPhone: user.workPhone,
                    goalProgress: user.goalprogress,
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
            // console.log(emplData);

            let emplCols = [{
                title: "User ID",
                field: "id",
                visible: false
                }, {
                    title: "Name",
                    field: "fullName"
                }, {
                    title: "Hire Date",
                    field: "hiredate"
                }, {
                    title: "Goal Progress",
                    field: "goalProgress",
                    align: "center",
                },
                {
                    title: "Actions",
                    field: "action",
                    align: "center",
                    clickToSelect: false,
                    formatter: operateFormatter
                }
            ];

            var reportContentDiv = document.createElement( "div" );
			reportContentDiv.setAttribute( "id", "userReport" + reportIDArg );
			reportContentDiv.className = "user_table";

			let $table;
			$table = $( "<table id='extReport" + reportIDArg + "'>" );
			$table.appendTo( reportContentDiv );
			$table.bootstrapTable( {
				locale: sessionStorage.csCulture,
				showColumns: true,
				showColumnsSearch: false,
				checkboxHeader: false,
				showToggle: false,
				detailView: true,
				detailFormatter: detailFormatter,
				columns: emplCols,
				data: emplData
			} );
            // console.log(reportContentDiv);

			var cardTitle = cs_customLocale.ManagerWidgetTitle[ sessionStorage.csCulture ]; // cardTitleArg - Title of the card.
			var cardLink = "#"; // cardTitleHrefArg - URL on the card title.
			var cardWidth = 12; // colArg - Bootstrap column width. Max 12.
			var cardColID = "userReport_Col_" + reportIDArg; // colIDArg - ID of the card column.
			var cardRowID = "userReport_Row_" + reportIDArg; // rowIDArg - ID of the card row. Check is made to either create new or reuse existing row.
			var targetColDivID = appendDivArg; // targetColDivIDArg - where to put the card. This ID need to exist in the HTML of the skeleton structure of the welcome page.
			var contentDivClass = "userReport"; // contentDivClassArg - css class name of the content. This in order to be able to further style the card.
			var content = reportContentDiv; // contentArg - main content of the card.

			return await generateHTMLCard( cardTitle, cardLink, cardWidth, cardColID, cardRowID, targetColDivID, contentDivClass, content );
			// return await reportContentDiv;
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
    // console.log(row);
  return [
      '<div class="dropdown">',
        '<a class="btn btn-secondary dropdown-toggle" data-boundary="viewport" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
        'Actions',
        '</a>',
        '<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser='+ row.id +'">Open Universal Profile</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&TargetUser='+ row.id +'">View Transcript</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot&TargetUser='+ row.id +'">View Snapshot</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Goals&TargetUser='+ row.id +'">View Goals</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew&targetUser='+ row.id +'">View Development Plan</a></li>',
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
// function detailFormatter(index, row) {
//     var html = []
//     $.each(row, function (key, value) {
//       html.push('<p><b>' + key + ':</b> ' + value + '</p>')
//     })
//     return html.join('')
// }

function detailFormatter(index, row) {
	let html = [];

	html.push('<div class="col-xs-12 col-sm-12 col-md-12">');
	html.push('<div class="well well-sm">');
	html.push('<div class="row">');

	html.push('<div class="col-sm-6 col-md-6">');
	html.push('<h5>');
	html.push('<b>'+ row.fullName  +'</b></h5>');
	html.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">');
	html.push('<tr>');
	html.push('<td>First name</td>');
	html.push('<td>'+ row.firstName +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>Last name</td>');
	html.push('<td>'+ row.lastName +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>Email</td>');
	html.push('<td>'+ row.primaryEmail +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>Phone</td>');
	html.push('<td>'+ row.workPhone +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>Orig. Hire Date</td>');
	html.push('<td>'+ row.hiredate +'</td>');
	html.push('</tr>');
	html.push('</table>');
	html.push('</div>');
   
	html.push('<div class="col-sm-6 col-md-6">');
	html.push('<h5><b>Address Details</b></h5>');
	html.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">');
	html.push('<tr>');
	html.push('<td>Address</td>');
	html.push('<td>'+ row.address.line1 +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>City</td>');
	html.push('<td>'+ row.address.city +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>State</td>');
	html.push('<td>'+ row.address.state +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>Country</td>');
	html.push('<td>'+ row.address.country +'</td>');
	html.push('</tr>');
	html.push('</table>');
	html.push('</div>');
   
	html.push('</div>');
	html.push('</div>');
	html.push('</div>');
   
	return html.join('');
   }

/**
 *
 * @param
 * @param
 * @returns
 */
async function getCheckinsDetails( contentDivClassArg ) {
	const tmpContentDiv = document.createElement( "div" );
	tmpContentDiv.className = contentDivClassArg;
	tmpContentDiv.setAttribute( "id", contentDivClassArg );

	let localResponse = {};

	return await fetch( "/services/x/localization/v1/localizations/ui?groups=GoalPanel,DevPlanPanel,CheckIns&culture=" + sessionStorage.csCulture, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		} )
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
				checkinStr = "<button type='button' id='createNewCheckInsBTN' class='getstarted_button'>" + cs_widgetConfig[contentDivClassArg].nocontenttitle[ sessionStorage.csCulture ] + "</button>";
			}
			//		console.log("checkinStr : "+ checkinStr);
			tmpContentDiv.innerHTML = checkinStr;
			return tmpContentDiv;
		} )
		.catch( error => {
			console.error( "Error building Checkins - ", error );
		} );
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getFeedDetails( contentDivClassArg ) {
	tmpFeedContentDiv = document.createElement( "div" );
	tmpFeedContentDiv.className = contentDivClassArg;
	tmpFeedContentDiv.setAttribute( "id", contentDivClassArg );

	let feedStr = "<table border='0' cellspacing='0' cellpadding='0' width='100%' class='table table-hover'>";
	var feedArr = {};
	$( "tr[id^='ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_'][id*='widgetContainer_ctl00_rChatter_']" ).each( function( index, value ) {

		feedArr[ index ] = {
			avatarimg: $( this ).find( "img[id$='_imgActorImage']" ).attr( 'src' ),
			avatarurl: $( this ).find( "a[id$='_aActorImage']" ).attr( 'href' ),
			name: $( this ).find( ".csod-sf-wplist-message p[id$='pLine1'] a:first" ).text(),
			action: $.trim( $( this ).find( ".csod-sf-wplist-message p[id$='pLine1'] span" ).text() ),
			recipient: $( this ).find( ".csod-sf-wplist-message p[id$='pLine1'] a:nth-of-type(2)" ).text(),
			actiontitle: $.trim( $( this ).find( ".csod-sf-wplist-message p[id$='pLine2']" ).text() ),
			actionurl: $( this ).find( ".csod-sf-wplist-message p[id$='pLine2'] a" ).attr( 'href' ),
			actiondate: $( this ).find( ".csod-sf-wplist-message p[id$='pLine3'] span.csod-sf-wplist-ts:first" ).text(),
			commenturl: $( this ).find( ".csod-sf-wplist-message p[id$='pLine3'] a:first" ).attr( 'href' ),
			commenttext: $( this ).find( ".csod-sf-wplist-message p[id$='pLine3'] a:first" ).text(),
		};

		feedStr += "<tr id='feedItem-" + index + "' class='feedItem clickable-row' data-href='" + feedArr[ index ].avatarurl + "'>";

		feedStr += "<td class='checkItemCol'>";
		feedStr += "<div class='cellContent'>";
		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell' role='button' tabindex='0'>";
		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-avatar' aria-hidden='true'>";
		feedStr += "<div class='chkAvatarImage' style='background-image:url(" + feedArr[ index ].avatarimg + ")'></div>";
		feedStr += "</div>";
		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail'>";

		var actionDate = "";
		var theDate = new Date( feedArr[ index ].actiondate ); //.toLocaleDateString('en-GB', { month : 'short', day : 'long'}).split(' ');
		if ( isNaN( theDate.getTime() ) ) {
			actionDate = $( this ).find( ".csod-sf-wplist-message p[id$='pLine3'] span.csod-sf-wplist-ts:first" ).text();

		} else {
			var actionDay = theDate.toLocaleDateString( 'en-GB', {
				day: 'numeric'
			} ).split( ' ' );
			var actionMonth = theDate.toLocaleDateString( 'en-GB', {
				month: 'short'
			} ).split( ' ' );
			actionDate = actionMonth + " " + actionDay;

		}
		actionDate = "<div class='feedDate'>" + actionDate + "</div>";

		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__user-name'>" + actionDate + " " + feedArr[ index ].name + " " + feedArr[ index ].action + " " + feedArr[ index ].recipient + "</div>";


		if ( feedArr[ index ].actionurl == null ) {
			feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'><i>" + feedArr[ index ].actiontitle + "</i></div>";
		} else {
			feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'><a href='" + feedArr[ index ].actionurl + "'>" + feedArr[ index ].actiontitle + "</a></div>";
		}
		feedStr += "</div>";
		feedStr += "</div>";
		feedStr += "</div>";
		feedStr += "</td>";

		feedStr += "</tr>";
	} );
	feedStr += "</table>";

	tmpFeedContentDiv.innerHTML = feedStr;

	return await tmpFeedContentDiv;
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
			return new Promise( r => setTimeout( () => r( response ), 1000 ) );
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
			return true;
		} else {
			await updateReportToken();
			return true;
		}
	} else {
		await updateReportToken();
		return true;
	}
}

/**
 * Updates sessionStorage with refreshed token details
 * @returns
 */
function updateReportToken() {
	return fetch( "/Analytics/ReportBuilder/index.aspx/GetNewToken", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		} )
		.then( response => response.json() )
		.then( token => {
			sessionStorage.reportToken = token.d;
			sessionStorage.reportTokenDate = Date.now();
			return token.d;
		} );
}

/**
 * Fetches report metadata used for Manager/HRD extended widget
 * @param {string} reportIDArg - Report ID to be gathered. Derives from
 * @param {string} filterArg - derives from gpeUSERREPORTID.filterid
 * @param {string} demoRoleArg - derives from custom field
 * @returns
 */
function fetchManagerReport( reportIDArg, filterArg, demoRoleArg ) {
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
		.then( function( response ) {
			if ( !response.ok ) {
				throw new Error( "HTTP status " + response.status );
			}
			return response.json();
		} )
		.then( reportDetailsResponse => {

			// Get the filterindex based on user.
			var filterVal = reportDetailsResponse.filters.map( function( element ) {
				return element.column.id;
			} ).indexOf( gpeUSERREPORTID[ demoRoleArg ].filterid );

			// Update filter on report to fetch
			reportDetailsResponse.filters[ filterVal ].values[ 0 ] = {
				"isDefault": "true",
				"isList": "true",
				"order": 1,
				"value": filterArg
			};

			// Prepare payload array
			var payload = {
				"filters": [],
				"sorting": []
			};

			// Update payload array
			payload.filters = [ ...reportDetailsResponse.filters ];
			payload.sorting = [ ...reportDetailsResponse.sorting ];

			// Populate another array which is to be used in global return
			rptDataSet = reportDetailsResponse;

			// Post report request
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

/* Get reporta meta */
/**
 *
 * @param
 * @param
 * @returns
 */
function fetchReport( reportIDArg ) {
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
			//		console.log(response.status);
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

			if ( rptDataSet.charts[ 0 ].chartDimensions.length == 1 ) {

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
				chartData.datasets.push( {
					backgroundColor: chBgColor,
					hoverBackgroundColor: chBgColor,
					data: dataSet,
					fill: true,
				} );
				legendFlag = false;
				//console.log(chartData);
			} else {
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

					bgColor.map( function( item ) {
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
					responsive: false,
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

			// Set the title of the chart (card-header)
			$( "div[id='cs_report_" + reportIDArg + "'] .card-header" ).text( reportData.title );
            // console.log("reportData.data[0]");
            // console.log(reportData.data[0]);
			let reportTBLColumns = [ ...reportData.data[ 0 ] ];
			let [ , ...reportTBLData ] = reportData.data;

			let canvas = document.getElementById( chartTitleArg );

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
 *
 * @param
 * @param
 * @returns
 */
async function buildDashboards( demoRoleArg ) {
	if ( cs_DashboardArray[ demoRoleArg ].reports.length != 0 ) {
		return await new Promise( ( resolve, reject ) => {
			let reportToken = checkReportToken();
			$.when( reportToken )
				.then( ( data ) => {
					resolve( getReportData( cs_DashboardArray[ demoRoleArg ].reports, demoRoleArg ) );
				} )
				.catch( error => console.error( "Error bulding navigation menu: " + error ) );
		} );
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
	const requests = reports.map( ( reportID ) => {
		//console.log("Building dashboard in element: " + demoRoleArg + "-right");

		var tmpCanvas = document.createElement( "canvas" );
		tmpCanvas.setAttribute( "id", "report" + reportID );
		tmpCanvas.setAttribute( "style", "height: 250px, width: 100%" );

		generateHTMLCard( "", "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/" + reportID, cs_DashboardDetailsArray.reports[ reportID ].width, "cs_report_" + reportID, "cs_report", demoRoleArg + "-dashboards", "reportContents", tmpCanvas );

		return createDashboard( reportID, "report" + reportID, 'reportData' + reportID, demoRoleArg + "-right" )
			.catch( error => {
				console.error( "Error in getting report data for Report ID: " + reports );
				console.error( error );
			} );
	} );
	return Promise.all( requests )
		.then( reportResponseData => {

			reportResponseData.forEach( function( reportResponse ) {

				var reportColumns = reportResponse[ 0 ];
				var reportData = reportResponse[ 1 ];
				var reportID = reportResponse[ 2 ];
				//console.log(response);

                // console.log("COLUMNS");
                // console.log(reportColumns);

				var modalTbl = document.createElement( "div" );
				modalTbl.setAttribute( "id", "modalTable_" + reportResponse[ 2 ] );
				modalTbl.setAttribute( "tabindex", "-1" );
				modalTbl.setAttribute( "role", "dialog" );
				modalTbl.className = "modal fade reportModal";

				var modalDia = document.createElement( "div" );
				modalDia.className = "modal-dialog modal-dialog-centered modal-lg modal-fullscreen-md-down";

				var modalCont = document.createElement( "div" );
				modalCont.className = "modal-content";

				var modalHdr = document.createElement( "div" );
				modalHdr.className = "modal-header";

				var modalHdrTitle = document.createElement( "h5" );
				modalHdrTitle.className = "modal-title";
				modalHdrTitle.innerHTML = reportResponse[ 3 ] + " (data)";

				var modalHdrCloseBtn = document.createElement( "button" );
				modalHdrCloseBtn.setAttribute( "type", "button" );
				modalHdrCloseBtn.className = "btn-close";
				modalHdrCloseBtn.setAttribute( "data-bs-dismiss", "modal" );
				//modalHdrCloseBtn.innerHTML = "Close";

				var modalContent = document.createElement( "div" );
				modalContent.setAttribute( "id", "cs_reportModal_table" + reportResponse[ 2 ] );
				modalContent.className = "modal-body";

				modalHdr.appendChild( modalHdrTitle );
				modalHdr.appendChild( modalHdrCloseBtn );
				modalCont.appendChild( modalHdr );
				modalCont.appendChild( modalContent );
				modalDia.appendChild( modalCont );
				modalTbl.appendChild( modalDia );

				// var divTemp = document.getElementById("cs_report_"+reportID);
				var $table;
				$table = $( "<table id='ReportTable" + reportResponse[ 2 ] + "'>" );
				//$table = $("ReportTable"+reportResponse[2]);
				$table.appendTo( modalContent );
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
					height: "500",
					checkboxHeader: true,
					showToggle: false,
					detailView: false,
					showColumnsToggleAll: true,
					columns: reportColumns,
					data: reportData
				} );

				var divTemp = document.getElementById( "cs_report_" + reportID );
				divTemp.appendChild( modalTbl );

				$( "#cs_report_" + reportID + " .card-body" ).click( function() {
					$( "#modalTable_" + reportID ).modal( "toggle" );
					//          $("#ReportTable" + reportID).bootstrapTable('refreshOptions', {});
				} );
			} );
			//						$("div[id='cs_report_"+reportIDresp+"'] .loader").css("display","none");
		} )
		.catch( error => console.error( "Error in getting report data: " + error ) );
};

/**
 * lastinline - message printed when all is done
 * @returns {string} - Message to be printed via console.log
 */
function lastinline() {
	const mad = String.fromCodePoint( 0x1F631 );
	const flame = String.fromCodePoint( 0x1F525 );
	var lastinline = mad + " " + flame + " " + flame + "\n";
	lastinline += "%cWe'll know for the first time.\n";
	lastinline += "If we're evil or divine\n";
	lastinline += "We're the last in line!\n";
	lastinline += mad + " " + flame + " " + flame;
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
 		.then(tokenResponse => {
			return fetch("https://gpewp-c2dcf-default-rtdb.firebaseio.com/accessURLs.json");
		})
		.then(accessURLs => accessURLs.json())
		.then(async function(accessURLs) {
			sessionStorage.setItem("csAccessURLs", JSON.stringify(accessURLs));
			const gpeNav = await buildNav(gpeDEMOROLE, sessionStorage.csCulture);
			const gpeAboutCard = await buildAboutCard();
			const gpeQuickLinks = await buildQuickLinksCard(accessURLs, sessionStorage.csCulture);
			const gpeApprovals = await getApprovalDetails(approvalURLs, sessionStorage.csCulture, gpeDEMOROLE);

			return await Promise.all([gpeNav, gpeAboutCard, gpeQuickLinks, gpeApprovals, accessURLs]);
		})
		.then(async function([gpeNav, gpeAbt, gpeQLS, gpeAppr, accessURLs]) {
            console.log("BUILDING WIDGETS!");
            const gpeWidgets = await buildWidgets(getAccessDetails(accessURLs), sessionStorage.csCulture);
            return await Promise.resolve(gpeWidgets);
        })
        .then(async function(data) {
            console.log("READY WITH BASIC WIDGETS!");

			// Fix NiceScroll on feed widget
			$("#live_feed").niceScroll({
				cursorborder: "",
				cursorcolor: "var(--gpewp-banner-bg-color--light)",
				autohidemode: false,
				boxzoom: false
			});

			// Set event on logout to delete sessionStorage.
			var logoutLink = document.querySelector("a[id*='header_headerResponsive_responsiveNav_lnkLogout']");
				logoutLink.addEventListener("click", function(event) {
					sessionStorage.clear();
				});

            // Clean up niceScroll
            const btns = document.querySelectorAll('a.trq-tab-link--flat');
            btns.forEach(btn => {
               btn.addEventListener('click', event => {
                   setTimeout(function(){
                        $("#live_feed").niceScroll().resize();
       			    }, 200);
               });
            });

			// Build report dashboards.
			console.log("PROCESSING DASHBOARDS");
			const gpeDashboards = await buildDashboards(gpeDEMOROLE);
			return await Promise.resolve(gpeDashboards);
		})
		.then(async function(data) {
			console.log(data);
			console.log(lastinline(), "color:#00cc00;");
		})
 		.catch(error => {
 			console.error(error);
 		});
 })();
