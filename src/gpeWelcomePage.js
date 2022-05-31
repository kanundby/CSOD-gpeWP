/**
 * Dynamic Welcome Page for Cornerstone OnDemand
 * @desc Dynamic welcome page engine for Cornerstone OnDemand.
 * @author 		kanundby@csod.com	-	Klas Anundby
 * @version 	see package.json
 */

"use strict";

import packageInfo from '../package.json';

import gpe_globalSettings from ".//js/gpe_globalSettings.min.js";
import gpe_widgetConfig from ".//js/gpe_widgetConfig.min.js";
import gpe_approvalURLS from ".//js/gpe_approvalURLs.min.js";
import gpe_newCCAConfig from ".//js/gpe_NewCCAConfig.min.js";

const gpeWPversion = packageInfo.version;
  
const gpeDEMOPERSONAIMAGE = getDemoRolePhoto();

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
	}
};

/**
 * Returns demorole abbreviation from custom field
 * @param {String} elementArg - div/element holding the required value
 * @returns {String} The first three characters from argument (USR/HRD/ADM/INS/REC/MGR)
 */
function getDemoRole(elementArg) {
	if (elementArg.substr(0, 3) == "HRM") return "HRD";
	if (elementArg.substr(0, 3) == "") return "USR";
	else return elementArg.substr(0, 3);
}

/**
 * Returns all modules included in the demo.
 * @param {String} elementArg - div/element holding the required value
 * @returns {array} The first three characters from argument (USR/HRD/ADM/INS/REC/MGR)
 */
function getDemoModules(elementArg) {
	let allModules = ["CHR", "LMS", "ATS", "EPM", "CAR"];
	let usrModules = [];
	if (elementArg) {
		elementArg.match(/.{1,3}/g).forEach(function (value) {
			if (allModules.includes(value)) usrModules.push(value);
		});
	}
	return usrModules;
}

function getDemoVertical(elementArg){
	return elementArg.substring(
		elementArg.indexOf("_") + 1, 
		elementArg.lastIndexOf("_")
	);
}


/**
 * Returns the users photo
 * @returns {string} The url to the user's photo
 */
function getDemoRolePhoto() {
	let userImageArr = $("img[id*='header_headerResponsive_responsiveNav_imgPhoto']").attr("src").split('/');
	let userImage = userImageArr[userImageArr.length - 1];
	var hostName = window.location.host.split('.');
	if(userImage == "nophoto.png") return "https://" + hostName[0] + ".csod.com/phnx/images/" + userImage;
	else return "https://" + hostName[0] + ".csod.com/clientimg/" + userImageArr[userImageArr.length-5] + "/users/photos/100/" + userImage;
}

/**
 * Replaces details from JSON variable
 * @param {Array} replacements - array used to check what to replace.
 * @param {String} input - string 
 * @returns {String} Updated string with variables instead of template variables.
 */
function injectVariables(replacements, input) {
	const entries = Object.entries(replacements);
	const result = entries.reduce((output, entry) => {
		const [key, value] = entry;
		const regex = new RegExp(`\\$\{${key}\}`, 'g');
		return output.replace(regex, value);
	}, input);
	return result;
}

/**
 * rgbToHsl - make RBG to HSL which is being used for banner gradients. It can also be used to lighten/darken the return.
 * @param {string} rgbARg - rgb string rgb(1,2,3).
 * @param {string} lightnessArg - array to add/remove saturation of the given color.
 * @returns {string} HSL(1,2,3) which is then being used in gradient css.
 */
function rgbToHsl(rgbARg, lightnessArg) {
	let rgb = rgbARg.substring(4, rgbARg.length - 1)
		.replace(/ /g, '')
		.split(',');
	let r = rgb[0];
	let g = rgb[1];
	let b = rgb[2];

	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0;
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}
	return "hsl(" + Math.floor(h * 360) + "," + Math.floor(s * 100) + "%," + Math.floor(l * 100 + lightnessArg) + "%)";
}

/**
 * checkRandomCustomBG - Load 50 random images from unsplash and store in sessionStorage if sessionStorage is empty.
 * @param {array} tmpArrayArg - Array of URL
 * @param {string} elementArg -
 * @returns {boolean} true (lazy, yeah... I know)
 */
function checkRandomCustomBG() {
	if (!sessionStorage.csBackgroundJSON) {
		return fetch('https://unsplash.com/ngetty/v3/search/images/creative?' + new URLSearchParams({
				fields: "display_set,referral_destinations,title",
				page_size: "50",
				phrase: "customer care office organisation",
				sort_order: "best_match",
				graphical_styles: "photography",
				exclude_nudity: "true",
				exclude_editorial_use_only: "true"
			}), {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',

			})
			.then(response => response.json())
			.then(partResp => {
				const tmpArr = [];
				for (let imageIndex in partResp.images) {
					tmpArr[imageIndex] = partResp.images[imageIndex].display_sizes[3].uri;
				}
				return tmpArr;
			})
			.then(tmpArray => {
				sessionStorage.setItem("csBackgroundJSON", JSON.stringify(tmpArray));
				return tmpArray;
				// setRandomCustomBG(tmpArray, "html");
			})
			.catch(error => {
				console.error(error);
			});
	} else {
		return JSON.parse(sessionStorage.csBackgroundJSON);
	}
}

/**
 * IsJsonString - Returns branding details from user record custom field specified in the arguments.
 * @param {string} brandingDivArg
 * @returns {array} Array to be used to set banner background and primary colors.
 */
function IsJsonString(strArg) {
	try {
		JSON.parse(strArg);
	} catch (e) {
		return false;
	}
	return true;
}

/**
 * getBrandingDetails - Returns branding details from user record custom field specified in the arguments.
 * @param {string} brandingDivArg
 * @returns {array} Array to be used to set banner background and primary colors.
 */
function getBrandingDetails() {
	const brandingStr = sessionStorage.getItem("csDemoVisuals");
	const brandingArr = (IsJsonString(brandingStr)) ? JSON.parse(brandingStr) : {
		TopBannerImage: "",
		UserHeaderColor: "",
		FontColor: ""
	};
	return brandingArr;
}

/**
 * fileExists - Returns true/false depending on if image exists or not.
 * @param {string} fileUrl
 * @returns {boolean} true if image exists.
 */
function checkIfImageExists(url, callback) {
	const img = new Image();
	img.src = url;

	if (img.complete) {
		callback(true);
	} else {
		img.onload = () => {
			callback(true);
		};

		img.onerror = () => {
			callback(false);
		};
	}
}

/**
 * updateWelcomePage - Final update on welcome page banner and primary color css
 * @param {string} cssPrimaryArg - primary colour to be used on banner.
 * @param {array} topBannerImgURLArg - Array of either an image url OR several image URLs
 * @param {string} randomArg - 0 = do not randomise, 1 = do randomise
 * @returns {boolean} true if image exists.
 */
function setBgImage(topBannerImgURLArg) {
	var cssUpdateStr = "linear-gradient(180deg, #f1f1f100 360px, #f1f1f1 360px), url(" + topBannerImgURLArg + ") no-repeat top / contain";
	document.querySelector("html").style.setProperty('--gpewp-banner-background', cssUpdateStr, "important");
	return true;
}

/**
 * Builds the navigation menu for the new welcome page.
 * @param {string} demoRoleArg - demorole data derived from custom field.
 * @param {string} cultureArg - culture to be used (EN-us, EN-uk, DE-de, ...). This is coming from sessionStorage.
 * @param {array} accessURLsArg -
 * @returns a promise
 */
// function buildNav( demoRoleArg, cultureArg, accessURLsArg ) {
function buildNav(demoRoleArg, cultureArg, moduleArg) {
	/* Set top menu space  START */
	if (!document.getElementById("framework-oldnav-home")) {

		const gpeTARGETNAVDIV = "gpewp_topcontainer_nav"; // where do we want to put the navigation menu?
		const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
		const gpeApprovalURLs = JSON.parse(sessionStorage.gpeApprovalURLs);

		let tmpNav = document.createElement("nav");
		tmpNav.className = "header__nav header__nav--custom";

		let tmpNavLink = document.createElement("a");
		tmpNavLink.className = "nav-link--custom text-uppercase text-no-underline active";
		tmpNavLink.setAttribute('title', 'Home');
		tmpNavLink.setAttribute('id', 'framework-oldnav-home');
		// tmpNavLink.setAttribute('href','#');
		tmpNavLink.innerHTML = "";

		tmpNav.appendChild(tmpNavLink);

		let mainContent = document.getElementById("ctl00_masterPageBody");
		mainContent.before(tmpNav);
		/* Set top menu space  END */

		/* Replace hamburger menu with user image */
		$("a[id*='header_headerResponsive_lnkNavBar'] i").replaceWith("<img id='header_headerResponsive_responsiveNav_imgPhoto' src='" + gpeDEMOPERSONAIMAGE + "'>");

		let topNavUL = document.createElement("ul");
		topNavUL.className = "nav nav-tabs trq-tab-group ng-star-inserted";
		topNavUL.setAttribute("id", "gpewp_nav");
		topNavUL.setAttribute("role", "tablist");
		topNavUL.setAttribute("_ngcontent-nml-c325", "");

		let topNavItmUSR = document.createElement("li");
		topNavItmUSR.className = "trq-tab-group-item ng-star-inserted";
		topNavItmUSR.setAttribute("role", "presentation");
		topNavItmUSR.setAttribute("_ngcontent-nml-c325", "");
		topNavItmUSR.setAttribute("trqid", "group-item");
		topNavItmUSR.setAttribute("trqiduseparent", "true");

		let topNavBtnUSR = document.createElement("a");
		// 	topNavBtnUSR.className = "trq-tab-link--flat ng-star-inserted active";
		topNavBtnUSR.className = "trq-tab-link--flat ng-star-inserted";
		topNavBtnUSR.setAttribute("id", "nav-USR-tab");
		topNavBtnUSR.setAttribute("data-bs-toggle", "tab");
		topNavBtnUSR.setAttribute("data-bs-target", "#nav-USR");
		topNavBtnUSR.setAttribute("type", "button");
		topNavBtnUSR.setAttribute("role", "tab");
		topNavBtnUSR.setAttribute("aria-controls", "nav-USR");
		topNavBtnUSR.setAttribute("aria-selected", "true");
		topNavBtnUSR.setAttribute("_ngcontent-nml-c376", "");
		topNavBtnUSR.innerHTML = gpeGlobalSettings[0].NAVIGATION.USR[cultureArg]; //sessionStorage["csCulture"]

		topNavItmUSR.appendChild(topNavBtnUSR);
		let topNavItmRole = 0;
		if (demoRoleArg == "HRM") demoRoleArg = "HRD"; // Fix until we have update all the different areas from HRM to HRD
		switch (demoRoleArg) {
			case "ONB":
			case "USR":

				let mainNavUserPage = document.getElementById("nav-USR");
				mainNavUserPage.classList.add("show");
				mainNavUserPage.classList.add("active");
				topNavBtnUSR.classList.add("active");
				break;
			case "REC":
			case "MGR":
			case "HRD":
			case "INS":
			case "ADM":
			case "GPE":
				buildExtendedModuleWidget(moduleArg, demoRoleArg);
				topNavItmRole = buildExtraNavItem(demoRoleArg, cultureArg, "tab");
				//topNavBtnUSR.classList.remove("active");
				let mainNavPage = document.getElementById("nav-" + demoRoleArg);
				mainNavPage.classList.add("show");
				mainNavPage.classList.add("active");
				break;
		}

		topNavUL.appendChild(topNavItmUSR);
		if (topNavItmRole != 0) {
			topNavUL.appendChild(topNavItmRole);
		}

		let approvalCheck = getApprovalDetails_v2(gpeApprovalURLs, sessionStorage.csCulture);
		if (approvalCheck == "ok") {
			let topNavApprovalItem = buildExtraNavItem("APPROVALS", cultureArg, "modal");
			topNavUL.appendChild(topNavApprovalItem);
		}

		let w1 = document.createElement("nav");
		w1.className = "profile-nav trq-mb-3 trq-bg-white trq-shadow-bottom-lg ng-star-inserted";
		w1.setAttribute("_ngcontent-nml-c376", "");
		w1.setAttribute("id", "profile-tabs");

		let w2 = document.createElement("trq-tab-group");
		w2.className = "trq-tab-group";
		w2.setAttribute("_ngcontent-nml-c376", "");
		w2.setAttribute("_nghost-nml-c325", "");

		let w3 = document.createElement("trq-scroller");
		w3.className = "trq-scroller--flat trq-scroller__container ng-star-inserted";
		w3.setAttribute("_ngcontent-nml-c325", "");
		w3.setAttribute("trqid", "");
		w3.setAttribute("trqiduseparent", "true");
		w3.setAttribute("_nghost-nml-c320", "");
		w3.setAttribute("id", "profile-tabs-trq-scroller");

		let w4 = document.createElement("div");
		w4.className = "trq-scroller";
		w4.setAttribute("_ngcontent-nml-c320", "");

		let w5 = document.createElement("div");
		w5.className = "trq-scroller__list";
		w5.setAttribute("style", "height: 50px;");

		let w6 = document.createElement("div");
		w6.className = "trq-scroller__list__track";
		w6.setAttribute("style", "position: relative;");

		w6.appendChild(topNavUL);
		w5.appendChild(w6);
		w4.appendChild(w5);
		w3.appendChild(w4);
		w2.appendChild(w3);
		w1.appendChild(w2);

		document.getElementById(gpeTARGETNAVDIV).innerHTML = w1.outerHTML;
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
function buildExtraNavItem(demoRoleArg, cultureArg, toogleTypeArg) {
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	var topNavItmRole = document.createElement("li");
	topNavItmRole.className = "trq-tab-group-item ng-star-inserted";
	topNavItmRole.setAttribute("role", "presentation");
	topNavItmRole.setAttribute("_ngcontent-nml-c325", "");
	topNavItmRole.setAttribute("trqid", "group-item");
	topNavItmRole.setAttribute("trqiduseparent", "true");

	var topNavBtnRole = document.createElement("a");
	topNavBtnRole.className = "trq-tab-link--flat ng-star-inserted";
	if (toogleTypeArg == "tab") {
		topNavBtnRole.classList.add("active");
	}
	topNavBtnRole.setAttribute("id", "nav-" + demoRoleArg + "-tab");
	topNavBtnRole.setAttribute("data-bs-toggle", toogleTypeArg);
	topNavBtnRole.setAttribute("data-bs-target", "#nav-" + demoRoleArg);
	topNavBtnRole.setAttribute("type", "button");
	topNavBtnRole.setAttribute("role", "tab");
	topNavBtnRole.setAttribute("aria-controls", "nav-" + demoRoleArg);
	topNavBtnRole.setAttribute("aria-selected", "false");
	topNavBtnRole.setAttribute("_ngcontent-nml-c376", "");
	topNavBtnRole.innerHTML = gpeGlobalSettings[0].NAVIGATION[demoRoleArg][cultureArg]; //sessionStorage["csCulture"]
	topNavItmRole.appendChild(topNavBtnRole);

	return topNavItmRole;
}

async function parseGlobalSettings() {
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	
	const languages = [
		{"en-US": "EN-US"},
		{"de-DE": "DE"},
		{"en-UK": "EN-GB"},
		{"es-ES": "ES"},
		{"es-MX": "ES"},
		{"fr-FR": "FR"},
		{"it-IT": "IT"},
		{"ja-JP": "JA"},
		{"ko-KR": "EN-US"},
		{"nl-NL": "NL"},
		{"pt-BR": "PT-BR"},
		{"sv-SE": "SV"},
		{"zh-CN": "ZH"},
		{"zh-Hant": "EN-US"}	
	];

	// Object.keys(gpeGlobalSettings[0].NAVIGATION).map(async function(item){
	// 	languages.map(async function(lang){
	// 		//gpeGlobalSettings[0].NAVIGATION[item][Object.keys(lang)] = gpeGlobalSettings[0].NAVIGATION[item]["en-US"];
	// 		console.log(gpeGlobalSettings[0].NAVIGATION[item]["en-US"]);
	// 		gpeGlobalSettings[0].NAVIGATION[item][Object.keys(lang)] = await translateText(gpeGlobalSettings[0].NAVIGATION[item]["en-US"], Object.values(lang));
	// 	})
	// })

	// Object.keys(gpeGlobalSettings[0].LINKS).map(async function(link, index, array){
	// 	languages.map(async function(lang){
	// 		//gpeGlobalSettings[0]["LINKS"][link].TITLE[Object.keys(lang)] = gpeGlobalSettings[0].LINKS[link].TITLE["en-US"];
	// 		gpeGlobalSettings[0]["LINKS"][link].TITLE[Object.keys(lang)] = await translateText(gpeGlobalSettings[0].LINKS[link].TITLE["en-US"], Object.values(lang));
	// 	})
	// })	

	// Object.keys(gpeGlobalSettings[0].MODULES).map(async function(item){
	// 	if(item === "ROLESPECIFIC") {
	// 		Object.keys(gpeGlobalSettings[0].MODULES["ROLESPECIFIC"]).map(async function(roleitem){
	// 			languages.map(async function(lang){
	// 				// gpeGlobalSettings[0].MODULES["ROLESPECIFIC"][roleitem].settings.moduletitle[Object.keys(lang)] = gpeGlobalSettings[0].MODULES["ROLESPECIFIC"][roleitem].settings.moduletitle["en-US"];
	// 				gpeGlobalSettings[0].MODULES["ROLESPECIFIC"][roleitem].settings.moduletitle[Object.keys(lang)] = await translateText(gpeGlobalSettings[0].MODULES["ROLESPECIFIC"][roleitem].settings.moduletitle["en-US"], Object.values(lang));
	// 			})	
	// 		})
	// 	}else{
	// 		languages.map(async function(lang){
	// 			// gpeGlobalSettings[0].MODULES[item].settings.moduletitle[Object.keys(lang)] = gpeGlobalSettings[0].MODULES[item].settings.moduletitle["en-US"];
	// 			gpeGlobalSettings[0].MODULES[item].settings.moduletitle[Object.keys(lang)] = await translateText(gpeGlobalSettings[0].MODULES[item].settings.moduletitle["en-US"], Object.values(lang));
	// 		})	
	// 	}
	// })	

	// Object.keys(gpeGlobalSettings[0].W).map(async function(widget, index, array){
	// 	languages.map(async function(lang){
	// 		gpeGlobalSettings[0]["W"][widget].nocontenttitle[Object.keys(lang)] = gpeGlobalSettings[0].W[widget].nocontenttitle["en-US"];
	// 		// gpeGlobalSettings[0]["W"][widget].title[Object.keys(lang)] = gpeGlobalSettings[0].W[widget].title["en-US"];
	// 		gpeGlobalSettings[0]["W"][widget].title[Object.keys(lang)] = await translateText(gpeGlobalSettings[0].W[widget].title["en-US"], Object.values(lang));
	// 	})
	// })

	// const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	Object.keys(gpeGlobalSettings[0].MANAGERWIDGET).map(async function(managerwidget, index, array){
		switch(managerwidget){
			case "title": 

				languages.map(async function(lang){
					// gpeGlobalSettings[0].MANAGERWIDGET.title[Object.keys(lang)] = gpeGlobalSettings[0].MANAGERWIDGET.title["en-US"];
					gpeGlobalSettings[0].MANAGERWIDGET.title[Object.keys(lang)] = await translateText(gpeGlobalSettings[0].MANAGERWIDGET.title["en-US"], Object.values(lang));
				})
			break;
			case "tableheader":
				Object.keys(gpeGlobalSettings[0].MANAGERWIDGET.tableheader).map(async function(tableitem){
					languages.map(async function(lang){
						// gpeGlobalSettings[0].MANAGERWIDGET.tableheader[tableitem][Object.keys(lang)] = gpeGlobalSettings[0].MANAGERWIDGET.tableheader[tableitem]["en-US"];
						gpeGlobalSettings[0].MANAGERWIDGET.tableheader[tableitem][Object.keys(lang)] = await translateText(gpeGlobalSettings[0].MANAGERWIDGET.tableheader[tableitem]["en-US"], Object.values(lang));
					})
				})
			break;
			case "detailtable":
				Object.keys(gpeGlobalSettings[0].MANAGERWIDGET.detailtable).map(async function(detailitem){
					languages.map(async function(lang){
						// gpeGlobalSettings[0].MANAGERWIDGET.detailtable[detailitem][Object.keys(lang)] = gpeGlobalSettings[0].MANAGERWIDGET.detailtable[detailitem]["en-US"];
						gpeGlobalSettings[0].MANAGERWIDGET.detailtable[detailitem][Object.keys(lang)] = await translateText(gpeGlobalSettings[0].MANAGERWIDGET.detailtable[detailitem]["en-US"], Object.values(lang));
					})
				})				
			break;
			case "actionsitems":
				Object.keys(gpeGlobalSettings[0].MANAGERWIDGET.actionsitems).map(async function(actionitem){
					languages.map(async function(lang){
						// gpeGlobalSettings[0].MANAGERWIDGET.actionsitems[actionitem][Object.keys(lang)] = gpeGlobalSettings[0].MANAGERWIDGET.actionsitems[actionitem]["en-US"];
						gpeGlobalSettings[0].MANAGERWIDGET.actionsitems[actionitem][Object.keys(lang)] = await translateText(gpeGlobalSettings[0].MANAGERWIDGET.actionsitems[actionitem]["en-US"], Object.values(lang));
					})
				})	
			break;
		}
	})	
	
	//sessionStorage.gpeGlobalSettings = await JSON.stringify(gpeGlobalSettings)
	return await gpeGlobalSettings;
}

async function translateText(textArg, targetLangArg){
	// return textArg;
	let url = "https://api-free.deepl.com/v2/translate?auth_key=39f02301-a407-e7b6-b590-f985a9122edf:fx&text="+textArg+"&target_lang="+targetLangArg;

	return await fetch(url)
	.then(response => response.json())
	.then(async function (localStr) {
		return await localStr.translations[0].text;
	})	
}

/**
 * Creates content for the ONB user
 * @param
 * @param
 * @returns
 */
async function buildOnbWidget(demoRoleArg, cultureArg) {
	if (demoRoleArg == "ONB") {

		const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
		const gpeDemoName = JSON.parse(sessionStorage.csDemoName);

		const inputs = {
			csFirstName: gpeDemoName[0]
		};

		// Remove left column
		$(".gpewp_USR").css("grid-template-columns", "1fr");
		$(".gpewp_USR").css("grid-template-areas", "gpewp_USR-right");

		// Wrapper
		let onbWrapperContent = document.createElement("div");
		onbWrapperContent.className = "onbwrapper";

		// Header
		let onbHeader = document.createElement("div");
		onbHeader.className = "onbheader";
		// Get header
		let onbHeaderTitle = document.createElement("h5");
		onbHeaderTitle.innerHTML = injectVariables(inputs, gpeGlobalSettings[0].ONB[cultureArg].headertitle);

		// Get text
		let onbHeaderText = document.createElement("p");
		onbHeaderText.innerHTML = gpeGlobalSettings[0].ONB[cultureArg].headertext;

		// Get video
		let onbHeaderVideoDiv = document.createElement("div");
		onbHeaderVideoDiv.className = "video";

		let onbHeaderVideoObj = document.createElement("video");
		onbHeaderVideoObj.setAttribute("width", "640px");
		onbHeaderVideoObj.setAttribute("height", "360px");
		onbHeaderVideoObj.setAttribute("controls", "");
		let onbHeaderVideoSrc = document.createElement("source");
		onbHeaderVideoSrc.setAttribute("src", gpeGlobalSettings[0].ONB[cultureArg].videourl);
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
		onbProcessTitle.innerHTML = gpeGlobalSettings[0].ONB[cultureArg].onbprocess.title;

		let onbProcessDesc = document.createElement('div');
		onbProcessDesc.className = "processdesc";

		let tmpOnbProcessTextOl = document.createElement('ol');
		tmpOnbProcessTextOl.className = "list";

		for (let textItem in gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem) {
			let tmpOnbProcessTextLi = document.createElement('li');
			tmpOnbProcessTextLi.className = "item";

			let tmpOnbProcessTextLiHeadline = document.createElement('h2');
			tmpOnbProcessTextLiHeadline.className = "headline";
			tmpOnbProcessTextLiHeadline.innerHTML = gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem[textItem].headline;

			let tmpOnbProcessTextLiText = document.createElement('span');
			tmpOnbProcessTextLiText.innerHTML = gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem[textItem].text;

			let tmpOnbResourceDiv = document.createElement('div');
			tmpOnbResourceDiv.className = "resourceTitle";
			tmpOnbResourceDiv.innerHTML = "<br>" + gpeGlobalSettings[0].ONB[cultureArg].onbprocess.resourceTitle;

			let tmpOnbResourceUl = document.createElement('ul');
			tmpOnbResourceUl.className = "resList";
			for (let resItem in gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem[textItem].resources) {
				let tmpOnbResourceLi = document.createElement("li");
				tmpOnbResourceLi.className = "resItem";
				if (gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem[textItem].resources[resItem].type == "url") {
					tmpOnbResourceLi.innerHTML = "<a href='" + gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem[textItem].resources[resItem].url + "'>" + gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem[textItem].resources[resItem].text + "</a>";
				} else {
					tmpOnbResourceLi.innerHTML = gpeGlobalSettings[0].ONB[cultureArg].onbprocess.textItem[textItem].resources[resItem].text;

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
		onbProcessImg.style.backgroundImage = gpeGlobalSettings[0].ONB[cultureArg].onbprocess.imgurl;
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

function buildModuleWidget(moduleArg, demoRoleArg) {

	const cs_widgetConfig = JSON.parse(sessionStorage.gpeWidgetConfig);
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	const inputs = {
		csUser: sessionStorage.csUser
	};

	for (let module in moduleArg) {
		let modulesDiv = document.createElement("div");
		modulesDiv.className = "gpeWelcomePageModules";
		modulesDiv.setAttribute("style", "display:flex;flex-direction:column;");
		switch (moduleArg[module]) {
			case "ATS":
			case "LMS":
			case "EPM":
				// check if module should be displayed... USR, MGR, HRD, ADM, REC, INS
				if (cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].CFG.AVB == 0) break;

				let modContainer = document.createElement("div");
				modContainer.className = "moduleContainer";
				modContainer.setAttribute("id", "module_" + moduleArg[module]);
				
				modulesDiv.setAttribute("style", "order:" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].CFG.O + ";");

				let modContainerTitleDiv = document.createElement("div");
				modContainerTitleDiv.className = "moduleTitleDiv";

				let modContainerTitle = document.createElement("h3");
				modContainerTitle.className = "moduleTitle";
				modContainerTitle.innerHTML = gpeGlobalSettings[0].MODULES[moduleArg[module]].settings.moduletitle[sessionStorage.csCulture];

				let modWidgetContainer = document.createElement("div");
				modWidgetContainer.className = "moduleWidgetContainer row";

				for (let widget in cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].W) {
					let tempWidgetID = cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].W[widget].ID;

					let modWidget = document.createElement("div");
					modWidget.className = "moduleWidget col-md-" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].W[widget].CS;
					modWidget.setAttribute("id", moduleArg[module] + "-" + tempWidgetID); /* IMPORTANT ID - This is used to target the widget card */
									
					modWidget.setAttribute("style", "order:" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].W[widget].O + ";");

					let preLoaderWrapper = document.createElement("div");
					preLoaderWrapper.className = "wrapper widgetData col-md-12";
					let preLoaderCard = document.createElement("div");
					preLoaderCard.className = "skeleton-card";
					let preLoaderType = document.createElement("div");
					let widgetJSONtmp = moduleArg[module] + "-" + tempWidgetID;
					preLoaderType.className = "skeleton " + gpeGlobalSettings[0].W[widgetJSONtmp].skeletoncss;

					preLoaderWrapper.appendChild(preLoaderCard);
					preLoaderWrapper.appendChild(preLoaderType);
					modWidget.appendChild(preLoaderWrapper);

					modWidgetContainer.appendChild(modWidget);
				}

				let moduleLinkWrapper = document.createElement("div");
				moduleLinkWrapper.className = "moduleLinkWrapper row";

				let moduleLinkWrapperCol = document.createElement("div");
				moduleLinkWrapperCol.className = "moduleLinkWrapperCol col-md-12";

				let modLinkContainer = document.createElement("ul");
				modLinkContainer.className = "moduleLinkContainer";

				// BUILD QUICKLINKS
				for (let link in cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].LINKS) {

					let tempLinkID = cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].LINKS[link].ID;

					let modLink = document.createElement("li");
					modLink.className = "moduleLink";
					modLink.setAttribute("id", moduleArg[module] + "-" + tempLinkID +"_link");
					modLink.setAttribute("style", "order:" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].LINKS[link].O + ";");

					let modLinkItemLink = document.createElement("a");
					modLinkItemLink.className = "modLinkItemLink";
					modLinkItemLink.href = injectVariables(inputs, gpeGlobalSettings[0].LINKS[tempLinkID].URL);

					let modLinkItem = document.createElement("div");
					modLinkItem.className = "modLinkItem";

					let modLinkIcon = document.createElement("div");
					modLinkIcon.className = "moduleLinkIcon";
					modLinkIcon.style.backgroundImage = "url('https://scfiles.csod.com/Baseline/Config/Images/gpeWelcomePage/" + gpeGlobalSettings[0].LINKS[tempLinkID].ICON + "')";
					
					let modLinkTitle = document.createElement("div");
					modLinkTitle.className = "moduleLinkTitle";
					modLinkTitle.innerHTML = gpeGlobalSettings[0].LINKS[tempLinkID].TITLE[sessionStorage.csCulture];

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

				let gpewpMain = document.getElementById(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg[module]].CFG.TD + "-right");
				gpewpMain.appendChild(modulesDiv);

				break;
		}
	}
}

async function buildExtendedModuleWidget(moduleArg, demoRoleArg) {

	const cs_widgetConfig = JSON.parse(sessionStorage.gpeWidgetConfig);
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	const inputs = {
		csUser: sessionStorage.csUser
	};

	switch (demoRoleArg) {
		case "INS":
		case "ADM":
		case "GPE":
		case "HRD":
		case "MGR":

			let modContainer = document.createElement("div");
			modContainer.className = "moduleContainer";
			modContainer.setAttribute("id", "module_" + demoRoleArg);
			//modContainer.setAttribute("style", "order:" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.SETTINGS.ORDER + ";");

			let modContainerTitleDiv = document.createElement("div");
			modContainerTitleDiv.className = "moduleTitleDiv";

			let modContainerTitle = document.createElement("h3");
			modContainerTitle.className = "moduleTitle";
			modContainerTitle.innerHTML = gpeGlobalSettings[0].MODULES.ROLESPECIFIC[demoRoleArg].settings.moduletitle[sessionStorage.csCulture];

			let modWidgetContainer = document.createElement("div");
			modWidgetContainer.className = "moduleWidgetContainer row";

			for (let widget in cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W) {
				// Array outlining which modules the user has in configuration
				let widgetModule = gpeGlobalSettings[0].W[cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID].module;

				if ((moduleArg.some(r => widgetModule.includes(r))) || (widgetModule == "CORE")) {

					let tempWidgetID = cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID;

					let modWidget = document.createElement("div");
					modWidget.className = "moduleWidget col-md-" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].CS;
					// modWidget.setAttribute("id", demoRoleArg+"-"+tempWidgetID); /* IMPORTANT ID - This is used to target the widget card */
					modWidget.setAttribute("id", tempWidgetID); /* IMPORTANT ID - This is used to target the widget card */
					modWidget.setAttribute("style", "order:" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].O + ";");

					let preLoaderWrapper = document.createElement("div");
					preLoaderWrapper.className = "wrapper widgetData col-md-12";
					let preLoaderCard = document.createElement("div");
					preLoaderCard.className = "skeleton-card";
					let preLoaderType = document.createElement("div");
					preLoaderType.className = "skeleton " + gpeGlobalSettings[0].W[tempWidgetID].skeletoncss;

					preLoaderWrapper.appendChild(preLoaderCard);
					preLoaderWrapper.appendChild(preLoaderType);
					modWidget.appendChild(preLoaderWrapper);

					modWidgetContainer.appendChild(modWidget);
				}
			}

			let moduleLinkWrapper = document.createElement("div");
			moduleLinkWrapper.className = "moduleLinkWrapper row";

			let moduleLinkWrapperCol = document.createElement("div");
			moduleLinkWrapperCol.className = "moduleLinkWrapperCol col-md-12";

			let modLinkContainer = document.createElement("ul");
			modLinkContainer.className = "moduleLinkContainer";

			// BUILD QUICKLINKS
			for (let link in cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.LINKS) {
				let userTopLinkID_tmp = cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.LINKS[link].ID;
				if ((moduleArg.some(r => gpeGlobalSettings[0].LINKS[userTopLinkID_tmp].MODULE.includes(r))) || (gpeGlobalSettings[0].LINKS[userTopLinkID_tmp].MODULE == "CORE")) {

					let tempLinkID = cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.LINKS[link].ID;

					let modLink = document.createElement("li");
					modLink.className = "moduleLink";
					modLink.setAttribute("id", demoRoleArg + "-" + tempLinkID);
					modLink.setAttribute("style", "order:" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.LINKS[link].O + ";");

					let modLinkItemLink = document.createElement("a");
					modLinkItemLink.className = "modLinkItemLink";
					modLinkItemLink.href = injectVariables(inputs, gpeGlobalSettings[0].LINKS[tempLinkID].URL);

					let modLinkItem = document.createElement("div");
					modLinkItem.className = "modLinkItem";

					let modLinkIcon = document.createElement("div");
					modLinkIcon.className = "moduleLinkIcon";
					modLinkIcon.style.backgroundImage = "url('https://scfiles.csod.com/Baseline/Config/Images/gpeWelcomePage/" + gpeGlobalSettings[0].LINKS[tempLinkID].ICON + "')";

					let modLinkTitle = document.createElement("div");
					modLinkTitle.className = "moduleLinkTitle";
					modLinkTitle.innerHTML = gpeGlobalSettings[0].LINKS[tempLinkID].TITLE[sessionStorage.csCulture];

					modLinkItem.appendChild(modLinkIcon);
					modLinkItem.appendChild(modLinkTitle);
					modLinkItemLink.appendChild(modLinkItem);
					modLink.appendChild(modLinkItemLink);

					modLinkContainer.appendChild(modLink);
				}
			}

			modContainerTitleDiv.appendChild(modContainerTitle);
			modContainer.appendChild(modContainerTitleDiv);
			modContainer.appendChild(modWidgetContainer);
			moduleLinkWrapperCol.appendChild(modLinkContainer);
			moduleLinkWrapper.appendChild(moduleLinkWrapperCol);
			modContainer.appendChild(moduleLinkWrapper);


			let checkModule = document.getElementById(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.CFG.TD).getElementsByClassName("gpeWelcomePageModules")[0];
			if (checkModule) {
				let modulesDiv = checkModule.getElementsByClassName("gpeWelcomePageModules");
				modulesDiv[0].appendChild(modContainer);
			} else {
				let modulesDiv = document.createElement("div");
				modulesDiv.className = "gpeWelcomePageModules";
				modulesDiv.setAttribute("style", "display:flex;flex-direction:column;");
				modulesDiv.setAttribute("style", "order:" + cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.CFG.O + ";");

				modulesDiv.appendChild(modContainer);

				let gpewpMain = document.getElementById(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.CFG.TD);
				gpewpMain.appendChild(modulesDiv);
			}

			break;
	}
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function buildWidgets_v2(moduleArg, demoRoleArg) {
	let widgetPromisesArray = [];
	moduleArg.forEach(function (widget) {
		widgetPromisesArray.push(getWidgetData_v2(widget, demoRoleArg));
	});
	return await Promise.all(widgetPromisesArray)
		.then(async function (widgetPromisesArrayComplete) {
			return widgetPromisesArrayComplete.map(async function (widgetData, index) {
				if (widgetData != null) {
					widgetData.forEach(function (widget) {
						if (widget != false) {
							return generateHTMLWidget(
								widget.id,
								"12",
								"widgetCard_" + widget.id,
								"widgetWrapper_" + widget.id,
								widget.id,
								"cs_" + widget.id,
								widget);
						}
					});
				}
			});
		})
		.then(async function (renderedWidgetsResp) {
			$("canvas").each(function () {
				var chart = Chart.getChart($(this).attr("id"));
				chart.update();
			});
			return renderedWidgetsResp;
		})
		.catch(error => console.error("Error in getting widget data: " + error));
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function buildExtendedWidgets(demoRoleArg, moduleArg) {
	return getExtendedWidgetData(demoRoleArg, moduleArg)
		.then(async function (widgetPromisesArrayComplete) {
			return widgetPromisesArrayComplete.map(async function (widgetData, index) {
				if (widgetData != null) {
					return generateHTMLWidget(
						widgetData.id,
						"12",
						"widgetCard_" + widgetData.id,
						"widgetWrapper_" + widgetData.id,
						widgetData.id,
						"cs_" + widgetData.id,
						widgetData);
				} else {
					return false;
				}
			});
		})
		.then(async function (renderedWidgetsResp) {
			$("canvas").each(function () {
				var chart = Chart.getChart($(this).attr("id"));
				chart.update();
			});
			return renderedWidgetsResp;
		})
		.catch(error => console.error("Error in getting extended widget data: " + error));
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getExtendedWidgetData(demoRoleArg, moduleArg) {
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	const cs_widgetConfig = JSON.parse(sessionStorage.gpeWidgetConfig);

	let widgetPromisesArray = [];
	if (cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.hasOwnProperty("EXT")) {
		for (let widget in cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W) {

			if(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID == "DIRECT_REPORTS") {
				widgetPromisesArray.push(buildExtendedWidget_v3(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID, demoRoleArg));
			}

			if(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID.includes("RPT_")) {
				let widgetModule = gpeGlobalSettings[0].W[cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID].module;
				if ((moduleArg.some(r => widgetModule.includes(r))) || (widgetModule == "CORE")) {
					let reportID = gpeGlobalSettings[0].W[cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID].reportid;

					let tmpContentDiv = document.createElement("div");
					tmpContentDiv.className = cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID + " chart-container";
					tmpContentDiv.setAttribute("id", cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID);
					widgetPromisesArray.push(createDashboard(reportID, cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID, tmpContentDiv, demoRoleArg));
				}		
			}

			// switch (cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID) {

			// 	case "DIRECT_REPORTS":
			// 		widgetPromisesArray.push(buildExtendedWidget_v3(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID, demoRoleArg));
			// 		break;

			// 	case "RPT_TRAININGWITHDRAWALS":
			// 	case "RPT_ASSIGNEDTRAININGSTATUS":
			// 	case "RPT_SESSIONSEATAVAILABILITY":
			// 	case "RPT_PASTDUE":
			// 	case "RPT_EMPLOYEESTATUS":
			// 	case "RPT_USERRECORDBYMGR":
			// 	case "RPT_BADGELEADERBOARD":
			// 	case "RPT_TRAININGPROGRESSSUMMARY":
			// 	case "RPT_ORGGOALPROGRESS":
			// 	case "RPT_GPE1":
			// 	case "RPT_HEADCOUNT":
			// 		let widgetModule = gpeGlobalSettings[0].W[cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID].module;
			// 		if ((moduleArg.some(r => widgetModule.includes(r))) || (widgetModule == "CORE")) {
			// 			let reportID = gpeGlobalSettings[0].W[cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID].reportid;

			// 			let tmpContentDiv = document.createElement("div");
			// 			tmpContentDiv.className = cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID + " chart-container";
			// 			tmpContentDiv.setAttribute("id", cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID);
			// 			widgetPromisesArray.push(createDashboard(reportID, cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS.EXT.W[widget].ID, tmpContentDiv, demoRoleArg));
			// 		}
			// 		break;
			// }
		}
	}
	return Promise.all(widgetPromisesArray);
}

/**
 * getWidgetData - Executes different functions based on widget availability
 * @param {array} widgetIDArg - Array 
 * @returns Content from function
 */
async function getWidgetData_v2(moduleArg, demoRoleArg) {
	const cs_widgetConfig = JSON.parse(sessionStorage.gpeWidgetConfig);

	switch (moduleArg) {
		case "ATS":
		case "EPM":
		case "LMS":
			if (cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].CFG.AVB == 0) break;

			let widgetPromisesArray = [];

			for (let widget in cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W) {
				switch (cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID) {
					case "DIRECT_REPORTS":
						widgetPromisesArray.push(buildExtendedWidget_v3(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "TOP_PICKS":
						widgetPromisesArray.push(getTopPicks(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "INSPIRED_BY_SUBJECTS":
						widgetPromisesArray.push(getInspiredBySubjects(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "TRENDING_FOR_JOB":
						widgetPromisesArray.push(getTrendingForJob(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "NEW_TRAININGS":
						widgetPromisesArray.push(getNewTrainings(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "TRAINING_METRICS":
						widgetPromisesArray.push(getTranscriptMetrics(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "CHECKINS":
						widgetPromisesArray.push(getCheckinsDetails(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "GOAL_PROGRESS":
						widgetPromisesArray.push(getGoalDetails(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, "/phnx/driver.aspx?routename=Goals/GoalList", moduleArg));
						break;
					case "DEVPLAN_PROGRESS":
						widgetPromisesArray.push(getDevPlanDetails(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot", moduleArg));
						break;
					case "TOTALCANDIDATES":
						widgetPromisesArray.push(getAllCandidates(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "NEWSUBMISSIONS":
						widgetPromisesArray.push(getNewSubmissions(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
					case "NEWHIRES":
						widgetPromisesArray.push(getNewHires(cs_widgetConfig[0].GPEWPCONFIG[demoRoleArg].MODS[moduleArg].W[widget].ID, moduleArg));
						break;
				}
			}
			return Promise.all(widgetPromisesArray);
	}
}

/**
 * generateHTMLWidget - Builds a bootstrap card dynamically based on arguments given.
 * @param {string} widgetIDArg - Title of the card.
 * @param {string} columnWidthArg - URL on the card title.
 * @param {integer} columnIDArg - Bootstrap column width. Max 12.
 * @param {string} rowIDArg - ID of the card row. Check is made to either create new or reuse existing row.
 * @param {string} targetColDivIDArg - where to put the card. This ID need to exist in the HTML of the skeleton structure of the welcome page.
 * @param {string} contentDivClassArg - css class name of the content. This in order to be able to further style the card.
 * @param {object} widgetContentArg - main content of the card.
 * @returns
 */
async function generateHTMLWidget(widgetIDArg, columnWidthArg, columnIDArg, rowIDArg, targetColDivIDArg, contentDivClassArg, widgetContentArg) {

	$("#" + widgetIDArg + " .wrapper").hide(); // Hide skeleton div

	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	const inputs = {
		csUser: sessionStorage.csUser
	};

	var tmpRowDiv = "";
	if (document.getElementById(rowIDArg)) {
		tmpRowDiv = document.getElementById(rowIDArg);
	} else {
		tmpRowDiv = document.createElement("div");
		tmpRowDiv.setAttribute("id", rowIDArg);

		tmpRowDiv.className = "widgetData col-md-" + columnWidthArg;
	}

	var tmpColDiv = document.createElement("div");
	tmpColDiv.setAttribute("id", columnIDArg + "widget");

	var tmpCardParent = document.createElement("div");
	tmpCardParent.className = "card";

	var tmpCardHeader = document.createElement("a");
	tmpCardHeader.className = "card-header";
	tmpCardHeader.innerHTML = gpeGlobalSettings[0].W[widgetIDArg].title[sessionStorage.csCulture];
	tmpCardHeader.setAttribute('href', injectVariables(inputs, gpeGlobalSettings[0].W[widgetIDArg].url));

	var tmpCardBody = document.createElement("div");
	tmpCardBody.className = "card-body";

	var tmpCardContent = document.createElement("div");
	tmpCardContent.className = contentDivClassArg;

	tmpCardContent = widgetContentArg;

	tmpCardBody.appendChild(tmpCardContent);

	tmpCardParent.append(tmpCardHeader, tmpCardBody);
	tmpColDiv.appendChild(tmpCardParent);
	tmpRowDiv.appendChild(tmpColDiv);

	var mainContent = document.getElementById(targetColDivIDArg);
	mainContent.appendChild(tmpRowDiv);

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
async function generateHTMLCard(cardTitleArg, cardTitleHrefArg, colArg, colIDArg, rowIDArg, targetColDivIDArg, contentDivClassArg, contentArg) {
	var tmpRowDiv = "";
	if (document.getElementById(rowIDArg)) {
		tmpRowDiv = document.getElementById(rowIDArg);
	} else {
		tmpRowDiv = document.createElement("div");
		tmpRowDiv.setAttribute("id", rowIDArg);
		tmpRowDiv.className = "row";
	}

	var tmpColDiv = document.createElement("div");
	tmpColDiv.className = "col-md-" + colArg;
	tmpColDiv.setAttribute("id", colIDArg);

	var tmpCardParent = document.createElement("div");
	tmpCardParent.className = "card";

	var tmpCardHeader = document.createElement("a");
	tmpCardHeader.className = "card-header";
	tmpCardHeader.innerHTML = cardTitleArg;
	tmpCardHeader.setAttribute('href', cardTitleHrefArg);

	var tmpCardBody = document.createElement("div");
	tmpCardBody.className = "card-body";

	var tmpCardContent = document.createElement("div");
	tmpCardContent.className = contentDivClassArg;

	tmpCardContent = contentArg;

	tmpCardBody.appendChild(tmpCardContent);

	tmpCardParent.append(tmpCardHeader, tmpCardBody);
	tmpColDiv.appendChild(tmpCardParent);
	tmpRowDiv.appendChild(tmpColDiv);

	var mainContent = document.getElementById(targetColDivIDArg);
	mainContent.appendChild(tmpRowDiv);

	return rowIDArg;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function buildAboutCard(demoModulesArg) {
	if (!document.getElementById("gpeAboutCard")) {

		const gpeABOUTCARDDIV = "gpewp_topcontainer_upper"; // where do we want to put the user photo name/job?
		const cs_widgetConfig = JSON.parse(sessionStorage.gpeWidgetConfig);
		const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
		const csDemoRole = JSON.parse(sessionStorage.csDemoRole);

		const inputs = {
			csUser: sessionStorage.csUser
		};

		var tmpContainerDiv = document.createElement("div");
		tmpContainerDiv.className = "container-fluid topcontent";
		tmpContainerDiv.setAttribute("id", "gpeAboutCard");


		var tmpRowDiv = document.createElement("div");
		tmpRowDiv.className = "row";

		var tmpColImageDiv = document.createElement("div");
		tmpColImageDiv.className = "col-md-2";

		var tmpCardAboutImageLink = document.createElement("a");
		tmpCardAboutImageLink.setAttribute("href", "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio");

		var tmpCardAboutImage = document.createElement("img");
		tmpCardAboutImage.className = "abt-image";

		tmpCardAboutImage.setAttribute("src", gpeDEMOPERSONAIMAGE);

		tmpCardAboutImageLink.appendChild(tmpCardAboutImage);
		tmpColImageDiv.appendChild(tmpCardAboutImageLink);

		var tmpColNameDiv = document.createElement("div");
		tmpColNameDiv.className = "col-md-4";

		var tmpAboutDiv = document.createElement("div");
		tmpAboutDiv.className = "abt";

		// Get Name
		var tmpUserNameDiv = document.createElement("div");
		tmpUserNameDiv.className = "abt-name";

		var tmpUserNameSpan = document.createElement("span");
		tmpUserNameSpan.className = "abt-name-text";
		tmpUserNameSpan.innerHTML = document.querySelector("[id*='header_headerResponsive_responsiveNav_lblName']").innerHTML;

		// Get Job
		var tmpUserJobDiv = document.createElement("div");
		tmpUserJobDiv.className = "abt-job";

		var tmpUserJobSpan = document.createElement("span");
		tmpUserJobSpan.className = "abt-job-text";
		tmpUserJobSpan.innerHTML = document.querySelector("[id*='header_headerResponsive_responsiveNav_lblPosition']").innerHTML;
		tmpUserJobDiv.appendChild(tmpUserJobSpan);

		/* ------------------- */
		var tmpCoreLinksWrapper = document.createElement("div");
		tmpCoreLinksWrapper.className = "tmpCoreLinksWrapper col-md-6";

		var topLinkContainer = document.createElement("ul");
		topLinkContainer.className = "topLinkContainer d-flex justify-content-center";
		
		for (let link in cs_widgetConfig[0].GPEWPCONFIG[csDemoRole].TOPLINKS) {
			let userTopLinkID_tmp = cs_widgetConfig[0].GPEWPCONFIG[csDemoRole].TOPLINKS[link].ID;

			// Check if toplink is part of user's availability (demomodules)
			if ((demoModulesArg.some(r=> gpeGlobalSettings[0].LINKS[userTopLinkID_tmp].MODULE.indexOf(r) >= 0) === true) || (gpeGlobalSettings[0].LINKS[userTopLinkID_tmp].MODULE == "CORE")) {

				let topLink = document.createElement("li");
				topLink.className = "moduleLink";
				// topLink.setAttribute("style", "order:"+cs_widgetConfig[0].MODULECONFIG[moduleArg[module]][demoRoleArg].LINKS[link].ORDER+";");

				let topLinkItemLink = document.createElement("a");
				topLinkItemLink.className = "modLinkItemLink";
				topLinkItemLink.href = injectVariables(inputs, gpeGlobalSettings[0].LINKS[userTopLinkID_tmp].URL);

				let topLinkItem = document.createElement("div");
				topLinkItem.className = "modLinkItem";

				let topLinkIcon = document.createElement("div");
				topLinkIcon.className = "moduleLinkIcon";
				topLinkIcon.style.backgroundImage = "url('https://scfiles.csod.com/Baseline/Config/Images/gpeWelcomePage/" + gpeGlobalSettings[0].LINKS[userTopLinkID_tmp].ICON + "')";

				let topLinkTitle = document.createElement("div");
				topLinkTitle.className = "moduleLinkTitle";
				topLinkTitle.innerHTML = gpeGlobalSettings[0].LINKS[userTopLinkID_tmp].TITLE[sessionStorage.csCulture];

				topLinkItem.appendChild(topLinkIcon);
				topLinkItem.appendChild(topLinkTitle);
				topLinkItemLink.appendChild(topLinkItem);
				topLink.appendChild(topLinkItemLink);

				topLinkContainer.appendChild(topLink);
			}
		}

		tmpCoreLinksWrapper.appendChild(topLinkContainer);

		tmpUserNameDiv.appendChild(tmpUserNameSpan);

		tmpAboutDiv.appendChild(tmpUserNameDiv);
		tmpAboutDiv.appendChild(tmpUserJobDiv);

		tmpColNameDiv.appendChild(tmpAboutDiv);

		tmpRowDiv.appendChild(tmpColImageDiv);
		tmpRowDiv.appendChild(tmpColNameDiv);
		tmpRowDiv.appendChild(tmpCoreLinksWrapper);
		tmpContainerDiv.appendChild(tmpRowDiv);

		var mainContent = document.getElementById(gpeABOUTCARDDIV);
		mainContent.appendChild(tmpContainerDiv);

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


function getApprovalDetails_v2(approvalURLsArg, cultureArg) {

	let count = 0;
	let check;
	let aprvlContentDiv = document.createElement("div");
	aprvlContentDiv.className = "gpeApprovals";

	for (let item in approvalURLsArg) {
		count += 1;
		$("table[id*='plnInbox_content'] a[href*='" + approvalURLsArg[item].url + "']").text(function () {

			let tmpAprvlDiv = document.createElement("div");
			tmpAprvlDiv.className = "approval-item approval-" + item + " app" + count;

			let tmpAprvlDivHref = document.createElement("a");
			tmpAprvlDivHref.className = "position-relative " + item;
			tmpAprvlDivHref.setAttribute("href", approvalURLsArg[item].link);
//			tmpAprvlDivHref.setAttribute("href", $(this).attr('href'));

			let tmpAprvlButton = document.createElement("div");
			tmpAprvlButton.setAttribute("content", approvalURLsArg[item].title[cultureArg]);
			//            tmpAprvlButton.setAttribute("href", $( this ).attr( 'href' ));
			//tmpAprvlButton.setAttribute("type", "button");
			tmpAprvlButton.className = "approval_button " + approvalURLsArg[item].icon;
			tmpAprvlButton.textContent = approvalURLsArg[item].title[cultureArg];

			let tmpAprvlDivBadge = document.createElement("span");
			tmpAprvlDivBadge.className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger";
			tmpAprvlDivBadge.innerHTML = $("table[id*='plnInbox_content'] a[href*='" + approvalURLsArg[item].url + "'] ~ span:first").text().match(/\d+/)[0];

			// tmpAprvlDivHref.appendChild( tmpAprvlDivImg );
			tmpAprvlDivHref.appendChild(tmpAprvlButton);
			tmpAprvlDivHref.appendChild(tmpAprvlDivBadge);
			tmpAprvlDiv.appendChild(tmpAprvlDivHref);

			aprvlContentDiv.appendChild(tmpAprvlDiv);
			check = "ok";
		});
	}
	if (check == "ok") {
		const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

		let aprvlDiv = document.createElement("div");
		aprvlDiv.className = "gpewp_approvals modal fade";
		aprvlDiv.setAttribute("id", "nav-APPROVALS");
		aprvlDiv.setAttribute("tabindex", "-1");
		aprvlDiv.setAttribute("aria-labelledby", "ApprovalModal");
		aprvlDiv.setAttribute("aria-hidden", "true");

		let aprvlDivModalDialog = document.createElement("div");
		aprvlDivModalDialog.className = "modal-dialog modal-dialog-centered";
		aprvlDivModalDialog.setAttribute("role", "document");

		let aprvlDivModalContent = document.createElement("div");
		aprvlDivModalContent.className = "modal-content";

		let aprvlDivModalHeader = document.createElement("div");
		aprvlDivModalHeader.className = "modal-header";

		let aprvlDivModalHeaderTitle = document.createElement("h5");
		aprvlDivModalHeaderTitle.className = "modal-title";
		aprvlDivModalHeaderTitle.setAttribute("id", "modalTitle");
		aprvlDivModalHeaderTitle.innerHTML = gpeGlobalSettings[0].NAVIGATION.APPROVALS[sessionStorage.csCulture];

		let aprvlDivModalHeaderTitleCloseBtn = document.createElement("button");
		aprvlDivModalHeaderTitleCloseBtn.className = "btn-close";
		aprvlDivModalHeaderTitleCloseBtn.setAttribute("type", "button");
		aprvlDivModalHeaderTitleCloseBtn.setAttribute("data-bs-dismiss", "modal");
		aprvlDivModalHeaderTitleCloseBtn.setAttribute("aria-label", "Close");

		aprvlDivModalHeader.appendChild(aprvlDivModalHeaderTitle); // wrap header title to header modal
		aprvlDivModalHeader.appendChild(aprvlDivModalHeaderTitleCloseBtn); // wrap close button to header modal
		aprvlDivModalContent.appendChild(aprvlDivModalHeader);

		let aprvlDivModalBody = document.createElement("div");
		aprvlDivModalBody.className = "modal-body";
		aprvlDivModalBody.appendChild(aprvlContentDiv);

		aprvlDivModalContent.appendChild(aprvlDivModalBody);
		aprvlDivModalDialog.appendChild(aprvlDivModalContent);
		aprvlDiv.appendChild(aprvlDivModalDialog);

		// let gpeMainContent = document.getElementById(gpeABOUTCARDDIV);
		// gpeMainContent.appendChild(aprvlDiv);
		document.body.appendChild(aprvlDiv);
	}
	return check;
}

/**
 *
 * @param
 * @param
 * @returns
 */
 async function getGoalDetails(widgetIDArg, urlArg, moduleArg) {
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	let csConfigModuleWidget = moduleArg + "-" + widgetIDArg;

	return await getUserGoalProgress()
		.then(async function (achievedData) {
			let tmpContentDiv = document.createElement("div");
			tmpContentDiv.className = widgetIDArg;
			tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetIDArg);
			if (achievedData != 0) {
				return await Promise.resolve(await drawDonut(achievedData, widgetIDArg, tmpContentDiv));
			} else {
				let tempTitle = gpeGlobalSettings[0].W[csConfigModuleWidget].nocontenttitle[sessionStorage.csCulture];
				let noContentStr = "<div class='nocontent donut'>";
				noContentStr += "<button type='button' id='" + widgetIDArg + "_nodata' class='getstarted_button' data-href='" + gpeGlobalSettings[0].W[csConfigModuleWidget].getstartedurl + "'>" + tempTitle + "</button>";
				noContentStr += "</div>";
				tmpContentDiv.innerHTML = noContentStr;
				return await tmpContentDiv;
			}
		})
		.catch(error => console.error("Error in getDonutDetails: " + error));
}

/**
 *
 * @param
 * @param
 * @returns
 */
 async function getDevPlanDetails(widgetIDArg, urlArg, moduleArg) {
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	
	let csConfigModuleWidget = moduleArg + "-" + widgetIDArg;

	return await getUserDevPlanProgress()
		.then(async function (achievedData) {
			let tmpContentDiv = document.createElement("div");
			tmpContentDiv.className = widgetIDArg;
			tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetIDArg);
			if (achievedData != 0) {
				return await Promise.resolve(await drawDonut(achievedData, widgetIDArg, tmpContentDiv));
			} else {
				let tempTitle = gpeGlobalSettings[0].W[csConfigModuleWidget].nocontenttitle[sessionStorage.csCulture];
				let noContentStr = "<div class='nocontent donut'>";
				noContentStr += "<button type='button' id='" + widgetIDArg + "_nodata' class='getstarted_button' data-href='" + gpeGlobalSettings[0].W[csConfigModuleWidget].getstartedurl + "'>" + tempTitle + "</button>";
				noContentStr += "</div>";
				tmpContentDiv.innerHTML = noContentStr;
				return await tmpContentDiv;
			}
		})
		.catch(error => console.error("Error in getDonutDetails: " + error));
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function drawDonut(completeArg, contentDivClassArg, tmpContentDivArg) {
	let dataDonutArr = [completeArg, (100 - completeArg)];
	const gpePRIMARYBGCSS = $('.c-nav-user').css('background-color');

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
			aspectRatio: 1,
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

	const tmpCanvas = document.createElement("canvas");
	tmpCanvas.id = contentDivClassArg + "_chart";
	tmpCanvas.setAttribute("style", "height: 120px, width: 100%");

	let ctx = tmpCanvas.getContext("2d");
	let myChart = new Chart(ctx, config);

	tmpContentDivArg.appendChild(tmpCanvas);
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
	return fetch("/ui/perf-check-ins/Check-Ins", {
			method: 'GET',
			headers: {
				'Content-Type': 'text/html'
			}
		})
		.then(response => response.text())
		.then(tokenStr => {
			sessionStorage.csToken = tokenStr.substring(tokenStr.indexOf('"token"') + 9, tokenStr.indexOf('",', tokenStr.indexOf('"token"')));
			sessionStorage.csCloud = tokenStr.substring(tokenStr.indexOf('"cloud"') + 9, tokenStr.indexOf('",', tokenStr.indexOf('"cloud"')));
			sessionStorage.csUser = tokenStr.substring(tokenStr.indexOf('"user":') + 7, tokenStr.indexOf(",", tokenStr.indexOf('"user"')));
			sessionStorage.csCorp = tokenStr.substring(tokenStr.indexOf('"corp"') + 8, tokenStr.indexOf('",', tokenStr.indexOf('"corp"')));
			sessionStorage.csCulture = tokenStr.substring(tokenStr.indexOf('"cultureName"') + 15, tokenStr.indexOf('",', tokenStr.indexOf('"cultureName"')));
			return sessionStorage.csToken;
		})
		.catch(error => {
			console.error("Function updateJWT failed: ", error);
		});
}

/* Check JWT */
/**
 *
 * @param
 * @param
 * @returns
 */
function checkJWT() {
	return new Promise((resolve, reject) => {
		if (sessionStorage.csToken) {

			var jwt = JSON.parse(atob(sessionStorage.csToken.split('.')[1]));
			var year = jwt.exp.substring(0, 4);
			var month = jwt.exp.substring(4, 6);
			var day = jwt.exp.substring(6, 8);
			var hour = jwt.exp.substring(8, 10);
			var minute = jwt.exp.substring(10, 12);
			var second = jwt.exp.substring(12, 14);
			var tokenDate = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
			var validity = tokenDate.getTime() > Date.now();

			if (validity == false) {
				resolve(updateJWT());
				return sessionStorage.csToken;
			} else {
				resolve(sessionStorage.csToken);
			}
		} else {
			resolve(updateJWT());
		}
	});
}

async function test() {
	// /services/api/TranscriptAndTask/Approval
	// /services/x/corpsettings/v1/corpsettings
	// /services/x/corpsettings/v1/systemevents/types
	return await checkJWT()
	.then(async function () {
		// /services/api/Login/Rules?corpName={CORPNAME}&userName={USERNAME}
// 		let url = "/services/api/Login/UpdatePassword";
		//let url = "/services/api/Login/UpdatePassword?corpName=demogpe-development&userName=jstone@RPT";
		// let url = "/services/api/TranscriptAndTask/Task?UserId=csanders@CS_en-US&Language=en-US"
		let url = "/services/x/corpsettings/v1/corpsettings?keys=EnableManageCandidates";

		return await fetch(url, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		});
	})
	.then(response => response.json())
	.then(async function (localStr) {
		console.log(localStr);
	})	
}



async function getMachineLearningClusterInformation() {
	// /services/api/TranscriptAndTask/Approval

	return await checkJWT()
	.then(async function () {
		// /services/api/Login/Rules?corpName={CORPNAME}&userName={USERNAME}
// 		let url = "/services/api/Login/UpdatePassword";
		//let url = "/services/api/Login/UpdatePassword?corpName=demogpe-development&userName=jstone@RPT";
		// let url = "/services/api/TranscriptAndTask/Task?UserId=csanders@CS_en-US&Language=en-US"
		let url = "/services/x/machine-learning-prefs/v1/cluster-information?timeZoneId=28";

		return await fetch(url, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		});
	})
	.then(response => response.json())
	.then(async function (localStr) {
		console.log(localStr);
	})	
}





async function createReq() {
	let payload = {
			"data":{
				"record":[{
					"JobRequisitionId":"11",
					"UserId":"jedwards@CS_en-US",
					"Status":"Offer Letter",
					"MarkComplete":"false"
				}]
			}
		};

	return await checkJWT()
	.then(async function () {
		// /services/api/Login/Rules?corpName={CORPNAME}&userName={USERNAME}
// 		let url = "/services/api/Login/UpdatePassword";
		//let url = "/services/api/Login/UpdatePassword?corpName=demogpe-development&userName=jstone@RPT";
		let url = "/services/api/Recruiting/JobApplicantUpdateStatus"
		return await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
			body: JSON.stringify(payload)
		});
	})
	.then(response => response.json())
	.then(async function (localStr) {
		console.log(localStr);
	})	
}


async function getLOIDs(loidArrArg) {
	let promiseArray = [];
	loidArrArg.map(async function (loID) {
		// var urlStr = "/services/api/x/odata/api/views/vw_rpt_training?$select=lo_object_id&$filter=contains(lo_ref,'"+loID+"')";
		var urlStr = "/services/api/x/odata/api/views/vw_rpt_training?&$filter=contains(lo_ref,'"+loID+"') and contains(lo_title, 'Mitarbeiter führen')";
		promiseArray.push(fetch(urlStr, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			})
			.then(response => response.json())
			.then(async function (response) {
				return await response.value[0];
			}));
	});
	return await Promise.all(promiseArray);
}

async function getTrainingDetails(loidArrArg) {
	let promiseArray = [];
	loidArrArg.map(async function (loID) {
		var urlStr = "/services/api/lms/trainingdetails?ids="+loID.lo_object_id+"&includeTranscriptDetails=true";
		promiseArray.push(fetch(urlStr, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			})
			.then(response => response.json())
			.then(async function (response) {
				return await response.data[0];
			}));
	});
	return await Promise.all(promiseArray);
}

async function getNewTrainings(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return await checkJWT()
	.then(async function () {
		const gpe_newCCAConfig = JSON.parse(sessionStorage.gpeNewCCAConfig);
		let csDemoVertical = JSON.parse(sessionStorage.csDemoVertical);

		let ccaConfig = gpe_newCCAConfig[0][csDemoVertical][sessionStorage.csCulture];
		let loRefArr = [];
		Object.keys(ccaConfig).map(async function (item, value) {			
			loRefArr.push(gpe_newCCAConfig[0][csDemoVertical][sessionStorage.csCulture][item]);
		})
		return await Promise.resolve(getLOIDs(loRefArr))
	})
	.then(async function (loIDReturnArr) {
		return await Promise.resolve(getTrainingDetails(loIDReturnArr))
	})
	.then(async function(trainingDetailsReturn){
		console.log(trainingDetailsReturn);
		const localStr = trainingDetailsReturn;

		let carouselMain = document.createElement("div");
		carouselMain.className = "carousel slide";
		carouselMain.setAttribute("id", widgetArg + "Carousel");
		carouselMain.setAttribute("data-bs-ride", "carousel");
		carouselMain.setAttribute("data-bs-interval", "false");
		carouselMain.setAttribute("data-pause", "hover");

		let carouselItems = document.createElement("div");
		carouselItems.className = "carousel-inner";

		let activeItem = "";
		localStr.forEach(function (subjectItem, index) {
			let carouselItem = document.createElement("div");
			carouselItem.className = "carousel-item";
			if (activeItem == "") {
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
			carouselItemPanelTileLinkThmb.style.backgroundImage = "url('" + subjectItem.thumbnailImage + "'), url('/phnx/images/LMS/DefaultTrainingImages/onlinecontent.jpg')";
			carouselItemPanelTileLinkThmb.style.height = "100%";
			carouselItemPanelTileLinkThmb.style.overflow = "hidden";

			carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
			carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
			carouselItemPanelD.appendChild(carouselItemPanelTileBody);
			carouselItemPanelBody.appendChild(carouselItemPanelD);
			carouselItemPanelItem.appendChild(carouselItemPanelBody);

			let carouselItemPanelCourseDesc = document.createElement("div");
			carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

			let carouselItemPanelCourseDescDiv = document.createElement("div");
			carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

			let carouselItemPanelCourseDescDivType = document.createElement("span");
			carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
			carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
			carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

			let carouselItemPanelCourseDescDivTitle = document.createElement("a");
			carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
			carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
			carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

			let carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
			carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
			carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

			let carouselItemPanelCourseDescD = document.createElement("div");
			carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

			let carouselItemPanelCourseDescTitleText = document.createElement("div");
			carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
			carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

			let carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
			carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

			let carouselItemPanelCourseDescDuration = document.createElement("div");
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
		controlPrev.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
		controlPrev.setAttribute("data-bs-slide", "prev");

		let controlPrevIcon = document.createElement("span");
		controlPrevIcon.className = "carousel-control-prev-icon";

		let controlNext = document.createElement("button");
		controlNext.className = "carousel-control-next";
		controlNext.setAttribute("type", "button");
		controlNext.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
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
	.catch(error => {
		console.error("Error building getNewTrainings - ", error);
	});
	
}

async function testPasswd() {
	let payload = {
		"password": "testpassword"
	};

	return await checkJWT()
	.then(async function () {
		// /services/api/Login/Rules?corpName={CORPNAME}&userName={USERNAME}
// 		let url = "/services/api/Login/UpdatePassword";
		//let url = "/services/api/Login/UpdatePassword?corpName=demogpe-development&userName=jstone@RPT";
		let url = "https://us-demo.api.csod.com/v1/users/csanders@CS_en-US/password"
		return await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-csod-corp-id': '',
				'x-csod-cloud-corp-id': 'demogpe-development',
				'x-csod-user-id': '39',
				'x-csod-default-culture-id': '1',
				'x-csod-authentication': sessionStorage.csToken,
			},
			body: JSON.stringify(payload)
		});
	})
	.then(response => response.json())
	.then(async function (localStr) {
		console.log(localStr);
	})	
}


// method: 'POST',
// headers: {
// 	'Content-Type': 'application/json',
// 	'Authorization': 'Bearer ' + sessionStorage.csToken,
// },
// body: JSON.stringify(payload)
// })

async function get_training_approvals() {
	// let url = "/services/api/TranscriptAndTask/Approval?UserId=csanders@CS_en-US";
	// let url = "/services/api/TranscriptAndTask/Inbox?UserId=csanders@CS_en-US";
	// let url = "/services/api/TranscriptAndTask/Inbox?UserId=csanders@CS_en-US&Language=en-US";
	let url = "/employee/csanders@CS_en-US/approvals";
	return checkJWT()
		.then(async function () {
			return await fetch(url, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
				//body: JSON.stringify( payload )
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {
			console.log(localStr);
		})
		.catch(error => {
			console.error(error);
		});
}


async function getUserGoalProgress() {
	let url = "/services/api/goalSummary/summary/" + sessionStorage.csUser + "?StartDate=" + new Date().getFullYear() + "-01-01&EndDate=" + new Date().getFullYear() + "-12-31";
	return checkJWT()
	.then(async function () {
		return await fetch(url, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		});
	})
	.then(response => response.json())
	.then(async function (goalArrJson) {
		let goalDataArr = goalArrJson.data;
		let goalProgress = 0;
		let goalWeight = 0;
		let goalSummaryArr = [];
		if(Array.isArray(goalDataArr) && goalDataArr.length){
			for(let goalArr in goalDataArr){
				goalProgress += goalDataArr[goalArr].Weight * goalDataArr[goalArr].Progress;
				goalWeight += goalDataArr[goalArr].Weight;
			}
			return Math.round(goalProgress/goalWeight);
		}else return 0;
	});
}

async function getUserDevPlanProgress() {
	let url = sessionStorage.csCloud +"perf-devplan-api/v1/devplans/user/" + sessionStorage.csUser ;
	return checkJWT()
	.then(async function () {
		return await fetch(url, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		});
	})
	.then(response => response.json())
	.then(async function (devPlanJson) {
		if(devPlanJson.data){
			let devplanArr = devPlanJson.data.devplans;
			if(Array.isArray(devplanArr) && devplanArr.length){
				for(let devplan in devplanArr) {
					if(devplanArr[devplan].isPrimary == true) {
						return await devplanArr[devplan].progress;
					}
				}
			}else return 0;
		} else return 0;
	})
	.catch(error => {
		console.error(error);
		return 0;
	});	
}

async function setUserModulesDetails() {
	let url = "/services/api/x/users/v2/employees/" + sessionStorage.csUser;
	return checkJWT()
		.then(async function () {
			return await fetch(url, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
				//body: JSON.stringify( payload )
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {
			let ouId = localStr.data.ous[3].id;
			let typeId = localStr.data.ous[3].typeId;
			let url = "/services/api/x/odata/api/views/vw_rpt_ou?$filter=ou_id eq " + ouId + " and type_id eq " + typeId;
			return await fetch(url, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {
			var demoModules = localStr.value[0].title.substring(3); // Remove ROLE info
			sessionStorage.setItem("csDemoModules", demoModules);
			return demoModules;
		})
		.catch(error => {
			console.error(error);
		});
}

/**
 * getGoalProgress - Get Goal Progress on several users
 * @usedby buildExtendedWidgetV2
 * @param {array} userIDArrayArg -
 * @returns JSON Array
 */
async function getGoalProgress(userIDArrayArg) {
	let promiseArray = [];
	userIDArrayArg.map(async function (userID) {
		var urlStr = "/services/api/goalSummary/summary/" + userID.Id + "?StartDate=" + new Date().getFullYear() + "-01-01&EndDate=" + new Date().getFullYear() + "-12-31";
		promiseArray.push(fetch(urlStr, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			})
			.then(response => response.json())
			.then(async function (response) {
				return await response;
			}));
	});
	return await Promise.all(promiseArray);
}

/**
 * getUserDetails - Get User Details on several users
 * @usedby buildExtendedWidget_v3
 * @param {array} userIDArrayArg -
 * @returns JSON Array
 */
async function getUserDetails(userIDArrayArg) {
	let promiseArray = [];
	userIDArrayArg.map(async function (userID) {
		var urlStr = "/Services/api/Profile/" + userID;
		promiseArray.push(fetch(urlStr, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			})
			.then(response => response.json())
			.then(async function (response) {
				return await response.data[0];
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
async function getTranscriptsStats(userIDArrayArg) {
	let promiseArray = [];
	await userIDArrayArg.data.map(async function (user) {
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
			.then(async function (response) {
				let returnArr = {};
				returnArr.data = response.data;
				returnArr.id = user.id;
				return returnArr;
			})
			.catch(error => {
				console.error("Error fetching transcript data - ", error);
			})
		);
	});

	return await Promise.all(promiseArray);
}

/**
 * buildExtendedWidget_v3 - Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
 * @param {array} accessArrArg - Array of available navigation items which is based on user's security role (permissions).
 * @param {string} appendDivArg - Where to put the card...
 * @returns HTML table to be put on the welcome page
 */
async function buildExtendedWidget_v3(widgetArg, demoRoleArg) {

	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	
	let modEPMCAR = ["EPM", "CAR"];
	let modLMS = ["LMS"];
	let modATS = ["ATS"];
	let modCHR = ["CHR"];

	return await checkJWT()
		.then(async function () {
			let rptUrl = "/services/api/x/odata/api/views/vw_rpt_user?$filter=user_mgr_id eq " + sessionStorage.csUser + "&$select=user_id";
			if(!sessionStorage.gpeDirectReports) {
				await fetch(rptUrl, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.csToken,
					},
				}).then(response => response.json())
				.then(jsonData => sessionStorage.setItem("gpeDirectReports", JSON.stringify(jsonData)))
				.catch(error => console.error("Error setting sessionStorage in buildExtendedWidget_v3 : " + error));				
		   }
		   return sessionStorage.gpeDirectReports;
	   })
		.then(async function (gpeDirectReports) {
			const userData = JSON.parse(gpeDirectReports);
			return await userData.value.map(function (user) {
				return user.user_id;
			});
		})
		.then(async function (userIDs) {
			if(!sessionStorage.gpeDirectReportsDetails) {
				return Promise.resolve(getUserDetails(userIDs))
				.then(jsonData => sessionStorage.setItem("gpeDirectReportsDetails", JSON.stringify(jsonData)))
				.catch(error => console.error("Error setting sessionStorage in buildExtendedWidget_v3 : " + error));				
//				Promise.resolve(sessionStorage.setItem("gpeDirectReportsDetails", JSON.stringify(getUserDetails(userIDs))));
				// return Promise.resolve(getUserDetails(userIDs));
			}
			return sessionStorage.gpeDirectReportsDetails;
		})
		.then(async function () {
			const userData = JSON.parse(sessionStorage.gpeDirectReportsDetails);
			let emplData = userData.map(function (user) {
				return {
					id: user.Id,
					firstName: user.FirstName,
					lastName: user.LastName,
					fullName: user.FirstName + " " + user.LastName,
					username: user.userName,
					primaryEmail: user.Email,
					workPhone: user.WorkPhone,
					// goalProgress: (user.goalprogress && user.goalprogress),
					manager: user.Manager,
					hiredate: user.LastHireDateLocal,
					summary: user.Summary,
					interests: user.Interests,
					photo: user.ThumbImgUrl,
					title: user.Title
				};
			});

			let emplCols = [{
					title: "User ID",
					field: "id",
					visible: false
				},
				{
					title: "",
					field: "userphoto",
					align: "center",
					formatter: imageFormatter
				},
				{
					title: gpeGlobalSettings[0].MANAGERWIDGET.tableheader.name[sessionStorage.csCulture],
					field: "fullName",
					formatter: nameFormatter
				},
				// {
				// 	title: cs_widgetConfig[0].managerwidget.tableheader.hiredate[sessionStorage.csCulture],
				// 	field: "hiredate"
				// },
				{
					title: gpeGlobalSettings[0].MANAGERWIDGET.tableheader.actions[sessionStorage.csCulture],
					field: "action",
					align: "center",
					clickToSelect: false,
					formatter: operateFormatter
				}
			];

			//If user has access to Goal then add this as a column on manager widget.
			// let goalCheck = accessArrArg.some(function(accessItem){ return accessItem.id == "Goals";});
			// if(goalCheck) {

			// emplCols.splice(3, 0, {
			// 	title: "Goal Progress",
			// 	field: "goalProgress",
			// 	align: "center",
			// });
			// }

			const tmpContentDiv = document.createElement("div");
			tmpContentDiv.className = widgetArg;
			tmpContentDiv.setAttribute("id", widgetArg);

			var reportContentDiv = document.createElement("div");
			// reportContentDiv.setAttribute( "id", "userReport" + reportIDArg ); // userReport51
			reportContentDiv.setAttribute("id", "extendedUserWidget");
			reportContentDiv.className = "user_table";

			let $table;
			$table = $("<table id='extendedUserTable'>");
			$table.appendTo(reportContentDiv);
			$table.bootstrapTable({
				locale: sessionStorage.csCulture,
				showColumns: false,
				showColumnsSearch: false,
				checkboxHeader: false,
				showToggle: false,
				detailView: false,
				columns: emplCols,
				data: emplData
			});

			tmpContentDiv.appendChild(reportContentDiv);

			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Error building buildExtendedWidget_v3 - ", error);
		});
}

/**
 * operateFormatter - Supporting function for bootstrap-table
 * @param {string} value -
 * @param {array} row -
 * @param {integer} index -
 * @returns html array to put inside the right cell within the table
 */
function operateFormatter(value, row, index) {
	const cs_widgetConfig = JSON.parse(sessionStorage.gpeWidgetConfig);
	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	const csModules = JSON.parse(sessionStorage.getItem("csDemoModules"));
	
	let html = [];
	html.push('<div class="dropdown">');
	html.push('<a class="btn btn-secondary dropdown-toggle" data-boundary="viewport" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">');
	html.push(gpeGlobalSettings[0].MANAGERWIDGET.tableheader.actions[sessionStorage.csCulture]);
	html.push('</a>');
	html.push('<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">');
	html.push('<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser=' + row.id + '">' + gpeGlobalSettings[0].MANAGERWIDGET.actionsitems.openup[sessionStorage.csCulture] + '</a></li>');
	if (csModules.includes("CHR")) {
		html.push('<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser=' + row.id + '&gpeForms=1">' + gpeGlobalSettings[0].MANAGERWIDGET.actionsitems.openforms[sessionStorage.csCulture] + '</a></li>');
	}
	if (csModules.includes("LMS")) {
		html.push('<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&TargetUser=' + row.id + '">' + gpeGlobalSettings[0].MANAGERWIDGET.actionsitems.viewtranscript[sessionStorage.csCulture] + '</a></li>');
	}
	html.push('<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot&TargetUser=' + row.id + '">' + gpeGlobalSettings[0].MANAGERWIDGET.actionsitems.viewsnapshot[sessionStorage.csCulture] + '</a></li>');
	if (csModules.includes("EPM") || csModules.includes("CAR")) {
		html.push('<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Goals&TargetUser=' + row.id + '">' + gpeGlobalSettings[0].MANAGERWIDGET.actionsitems.viewgoals[sessionStorage.csCulture] + '</a></li>');
		html.push('<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew&targetUser=' + row.id + '">' + gpeGlobalSettings[0].MANAGERWIDGET.actionsitems.viewdevplan[sessionStorage.csCulture] + '</a></li>');
	}
	html.push('</ul>');
	html.push('</div>');
	return html.join('');
}

/**
 * imageFormatter - Supporting function for bootstrap-table
 * @param {string} value -
 * @param {array} row -
 * @param {integer} index -
 * @returns html array to put inside the right cell within the table
 */
function imageFormatter(index, row) {
	let html = [];
	html.push("<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser=" + row.id + "'><img src='" + row.photo + "' class='userphoto' style='width:40px;border-radius:50%'></a>");
	return html.join('');
}

/**
 * nameFormatter - Supporting function for bootstrap-table
 * @param {string} value -
 * @param {array} row -
 * @param {integer} index -
 * @returns html array to put inside the right cell within the table
 */
function nameFormatter(index, row) {
	let html = [];
	html.push("<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser=" + row.id + "'>" + row.fullName + "</a><br><div class='usertitle'>" + row.title + "</div>");
	return html.join('');
}

async function getNewHires(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return fetch("/phnx/driver.aspx?routename=ONB/Dashboard", {
			method: 'GET',
			headers: {
				'Content-Type': 'text/html'
			}
		})
		.then(response => response.text())
		.then(response => {

			var editor = jQuery("<div>").append(response);
			editor.find("div[rel='dropDownButton']").remove();
			var newHtml = editor.html();

			let htmlStr = $(newHtml).find(".content > div[ct='HBoxLayout'] ");
			let summaryStr = "";
			htmlStr.each(function (index, newhireItem) {
				summaryStr += "<div class='ATS totalCandidates gpe-cap row'>";
				summaryStr += "<div class='summaryItem col-md-12'>";
				summaryStr += "<div class='gpe-left'>";

				summaryStr += "<div class='newHires '>" + newhireItem.outerHTML + "</div>";
				summaryStr += "</div>";
				summaryStr += "</div>";
				summaryStr += "</div>";
			});
			tmpContentDiv.innerHTML = summaryStr;

			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Function getNewHires failed: ", error);
		});

}

async function getNewSubmissions(widgetArg, moduleArg) {

	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	
	let csConfigModuleWidget = moduleArg + "-" + widgetArg;

	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return await checkJWT()
		.then(async function () {
			let rptURL = sessionStorage.csCloud + "rec-manage-candidates/v1/candidates";

			var payload = {
				"filters": {
					"statusIds": [],
					"flagIds": [],
					"sourceIds": [],
					"requisitionIds": [],
					"candidateIds": [],
					"onlyOpenRequisitions": true,
					"onlyActiveCandidates": true,
					"keywords": "",
					"onlyMyRequisitions": true,
					"requisitionNameSearchTerm": ""
				},
				"paging": {
					"pageSize": 20,
					"pageNumber": 1,
					"sortOrder": "SubmissionDateDescending"
				},
				"include": ["Candidates", "AvailableFilters", "StatusCategories"]
			};
			return await fetch(rptURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
				body: JSON.stringify(payload)
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {

			var newSubmissionCount = $.map(localStr.data.statusCategories, function (val) {
				return val.id == -1 ? val.count : null;
			});

			let summaryStr = "<div class='ATS totalCandidates gpe-cap row'>";
			summaryStr += "<div class='summaryItem col-md-12'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='" + gpeGlobalSettings[0].W[csConfigModuleWidget].url + "'>";

			summaryStr += "<div class='d-flex align-items-center justify-content-center' style='height:210px'>";
			summaryStr += "<div class='totalCandidates gpe-bold gpe-text40'>" + newSubmissionCount + "</div>";
			summaryStr += "</div>";

			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			tmpContentDiv.innerHTML = summaryStr;

			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Error building getNewSubmissions - ", error);
		});
}

async function getAllCandidates(widgetArg, moduleArg) {

	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	let csConfigModuleWidget = moduleArg + "-" + widgetArg;

	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", csConfigModuleWidget);

	return await checkJWT()
		.then(async function () {
			let rptURL = sessionStorage.csCloud + "rec-manage-candidates/v1/candidates";

			var payload = {
				"filters": {
					"statusIds": [],
					"flagIds": [],
					"sourceIds": [],
					"requisitionIds": [],
					"candidateIds": [],
					"onlyOpenRequisitions": true,
					"onlyActiveCandidates": true,
					"keywords": "",
					"onlyMyRequisitions": true,
					"requisitionNameSearchTerm": ""
				},
				"paging": {
					"pageSize": 20,
					"pageNumber": 1,
					"sortOrder": "SubmissionDateDescending"
				},
				"include": ["Candidates", "AvailableFilters", "StatusCategories"]
			};
			return await fetch(rptURL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.csToken,
					},
					body: JSON.stringify(payload)
				})
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error("Something went wrong");
					}
				});
		})
		.then(async function (localStr) {
			let summaryStr = "<div class='ATS totalCandidates gpe-cap row'>";
			summaryStr += "<div class='summaryItem col-md-12'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='" + gpeGlobalSettings[0].W[csConfigModuleWidget].url + "'>";
			summaryStr += "<div class='d-flex align-items-center justify-content-center' style='height:210px'>";
			summaryStr += "<div class='totalCandidates gpe-bold gpe-text40'>" + localStr.data.totalItems + "</div>";
			summaryStr += "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			tmpContentDiv.innerHTML = summaryStr;

			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Error building getAllCandidates - ", error);
		});
}

async function getCandidateMetrics(widgetArg, moduleArg) {

	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	let csConfigModuleWidget = moduleArg + "-" + widgetArg;

	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", csConfigModuleWidget);

	return await checkJWT()
		.then(async function () {
			let rptURL = sessionStorage.csCloud + "rec-manage-candidates/v1/candidates";

			var payload = {
				"filters": {
					"statusIds": [],
					"flagIds": [],
					"sourceIds": [],
					"requisitionIds": [],
					"candidateIds": [],
					"onlyOpenRequisitions": true,
					"onlyActiveCandidates": true,
					"keywords": "",
					"onlyMyRequisitions": true,
					"requisitionNameSearchTerm": ""
				},
				"paging": {
					"pageSize": 20,
					"pageNumber": 1,
					"sortOrder": "SubmissionDateDescending"
				},
				"include": ["Candidates", "AvailableFilters", "StatusCategories"]
			};
			return await fetch(rptURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
				body: JSON.stringify(payload)
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {
			let summaryStr = "<div class='ATS totalCandidates gpe-cap row'>";
			summaryStr += "<div class='summaryItem col-md-12'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='" + gpeGlobalSettings[0].W[csConfigModuleWidget].url + "'>";
			summaryStr += "<div class='totalCandidates gpe-bold gpe-text40'>" + localStr.data.totalItems + "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			tmpContentDiv.innerHTML = summaryStr;

			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Error building getAllCandidates - ", error);
		});
}


async function getTranscriptMetrics(widgetArg, moduleArg) {

	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);
	
	let csConfigModuleWidget = moduleArg + "-" + widgetArg;

	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return await checkJWT()
		.then(async function () {
			if(!sessionStorage.gpeTranscriptMetrics) {
				await fetch("/services/api/bff/learnerhome/user/" + sessionStorage.csUser + "/stats", {
					method: 'GET',
					mode: 'cors',
					cache: 'no-cache',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.csToken,
					},
			 	}).then(jsonData => jsonData.json())
			 	.then(jsonData => sessionStorage.setItem("gpeTranscriptMetrics", JSON.stringify(jsonData)))
			 	.catch(error => console.error("Error setting sessionStorage in getTranscriptMetrics : " + error));				
			}
			return sessionStorage.gpeTranscriptMetrics;
		})
		.then(async function (gpeTranscriptMetrics) {
			const localStr = JSON.parse(gpeTranscriptMetrics);

			let summaryStr = "<div class='summaryPanel gpe-cap row'>";
			summaryStr += "<div class='summaryItem col-sm-4 col-4'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>";
			summaryStr += "<div class='pastDueCount gpe-bold gpe-text20'>" + localStr.data[0].metrics.pastDueCount + "</div>";
			summaryStr += "<div class='pastdueDesc gpe-desc'>" + gpeGlobalSettings[0].W[csConfigModuleWidget].pastdueDesc[sessionStorage.csCulture] + "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			summaryStr += "<div class='summaryItem col-sm-4 col-4'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>";
			summaryStr += "<div class='dueSoonCount gpe-bold gpe-text20'>" + localStr.data[0].metrics.dueSoonCount + "</div>";
			summaryStr += "<div class='dueSoonDesc gpe-desc'>" + gpeGlobalSettings[0].W[csConfigModuleWidget].dueSoonDesc[sessionStorage.csCulture] + "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			summaryStr += "<div class='summaryItem col-sm-4 col-4'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>";
			summaryStr += "<div class='noDueDateCount gpe-bold gpe-text20'>" + localStr.data[0].metrics.noDueDateCount + "</div>";
			summaryStr += "<div class='assignedNoDueDateDesc gpe-desc'>" + gpeGlobalSettings[0].W[csConfigModuleWidget].assignedNoDueDateDesc[sessionStorage.csCulture] + "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";
			summaryStr += "</div>";

			summaryStr += "<div class='summaryPanel gpe-cap row'>";

			summaryStr += "<div class='summaryItem col-sm-4 col-4'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='/ui/lms-learner-playlist/UsersPlaylists'>";
			summaryStr += "<div class='playlistCount gpe-bold gpe-text20'>" + localStr.data[0].playlists.numPlaylists + "</div>";
			summaryStr += "<div class='playlistDesc gpe-desc'>" + gpeGlobalSettings[0].W[csConfigModuleWidget].playlists.createdDesc[sessionStorage.csCulture] + "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";

			summaryStr += "<div class='summaryItem col-sm-4 col-4'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='/ui/lms-learner-playlist/UsersPlaylists'>";
			summaryStr += "<div class='playlistnumFollowers gpe-bold gpe-text20'>" + localStr.data[0].playlists.numFollowers + "</div>";
			summaryStr += "<div class='playlistFollowersDesc gpe-desc'>" + gpeGlobalSettings[0].W[csConfigModuleWidget].playlists.followersDesc[sessionStorage.csCulture] + "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";

			summaryStr += "<div class='summaryItem col-sm-4 col-4'>";
			summaryStr += "<div class='gpe-center'>";
			summaryStr += "<a href='/ui/lms-learner-playlist/UsersPlaylists?section=followed'>";
			summaryStr += "<div class='playlistnumFollowed gpe-bold gpe-text20'>" + localStr.data[0].playlists.numFollowed + "</div>";
			summaryStr += "<div class='playlistFollowedDesc gpe-desc'>" + gpeGlobalSettings[0].W[csConfigModuleWidget].playlists.followedDesc[sessionStorage.csCulture] + "</div>";
			summaryStr += "</a>";
			summaryStr += "</div>";
			summaryStr += "</div>";

			summaryStr += "</div>";

			tmpContentDiv.innerHTML = summaryStr;

			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Error building getTranscriptMetrics - ", error);
		});
}

async function getAssignedTraining(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return await checkJWT()
		.then(async function () {
			if(!sessionStorage.assignedTraining) {
				await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/transcript?isCompleted=false&isArchived=false&isRemoved=false&isStandAlone=true&sortCriteria=StatusChangeDate&pageSize=20&pageNum=1", {
					method: 'GET',
					mode: 'cors',
					cache: 'no-cache',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.csToken,
					},
				}).then(jsonData => jsonData.json())
				.then(jsonData => sessionStorage.setItem("assignedTraining", JSON.stringify(jsonData)))
				.catch(error => console.error("Error setting sessionStorage in getAssignedTraining : " + error));				
		   }
		   return sessionStorage.assignedTraining;
	   })
		.then(async function (assignedTrainingJson) {
			const localStr = JSON.parse(assignedTrainingJson);

			let carouselMain = document.createElement("div");
			carouselMain.className = "carousel slide";
			carouselMain.setAttribute("id", widgetArg + "Carousel");
			carouselMain.setAttribute("data-bs-ride", "carousel");
			carouselMain.setAttribute("data-bs-interval", "false");
			carouselMain.setAttribute("data-pause", "hover");

			let carouselIndicators = document.createElement("div");
			carouselIndicators.className = "carousel-indicators";

			let activeCarousel = "";
			localStr.data.forEach(function (subjectItem, index) {
				let carouselIndicator = document.createElement("button");
				carouselIndicator.setAttribute("type", "button");
				carouselIndicator.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
				carouselIndicator.setAttribute("data-bs-slide-to", index);
				if (activeCarousel == "") {
					carouselIndicator.className = "active";
					activeCarousel = "active";
				}
				carouselIndicators.appendChild(carouselIndicator);
			});

			carouselMain.appendChild(carouselIndicators);

			let carouselItems = document.createElement("div");
			carouselItems.className = "carousel-inner";

			let activeItem = "";
			localStr.data.forEach(function (subjectItem, index) {
				let carouselItem = document.createElement("div");
				carouselItem.className = "carousel-item";
				if (activeItem == "") {
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
				carouselItemPanelTileLinkThmb.style.backgroundImage = "url('" + subjectItem.thumbnailImage + "'), url('/phnx/images/LMS/DefaultTrainingImages/onlinecontent.jpg')";
				carouselItemPanelTileLinkThmb.style.height = "100%";
				carouselItemPanelTileLinkThmb.style.overflow = "hidden";

				carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
				carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
				carouselItemPanelD.appendChild(carouselItemPanelTileBody);
				carouselItemPanelBody.appendChild(carouselItemPanelD);
				carouselItemPanelItem.appendChild(carouselItemPanelBody);

				let carouselItemPanelCourseDesc = document.createElement("div");
				carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

				let carouselItemPanelCourseDescDiv = document.createElement("div");
				carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

				let carouselItemPanelCourseDescDivType = document.createElement("span");
				carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
				carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
				carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

				let carouselItemPanelCourseDescDivTitle = document.createElement("a");
				carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
				carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
				carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

				let carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
				carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
				carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

				let carouselItemPanelCourseDescD = document.createElement("div");
				carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

				let carouselItemPanelCourseDescTitleText = document.createElement("div");
				carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
				carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

				let carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
				carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

				// carouselItemPanelCourseDescDuration
				let carouselItemPanelCourseDescDueDate = document.createElement("div");
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
			controlPrev.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
			controlPrev.setAttribute("data-bs-slide", "prev");

			let controlPrevIcon = document.createElement("span");
			controlPrevIcon.className = "carousel-control-prev-icon";

			let controlNext = document.createElement("button");
			controlNext.className = "carousel-control-next";
			controlNext.setAttribute("type", "button");
			controlNext.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
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
		.catch(error => {
			console.error("Error building getAssignedTraining - ", error);
		});
}

async function getTrendingForJob(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return await checkJWT()
		.then(async function () {
			if(!sessionStorage.gpeTrendingForJob) {
				await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/recommendedtraining?type=Position&pageSize=20&pageNum=1", {
					method: 'GET',
					mode: 'cors',
					cache: 'no-cache',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.csToken,
					},
				}).then(jsonData => jsonData.json())
				.then(jsonData => sessionStorage.setItem("gpeTrendingForJob", JSON.stringify(jsonData)))
				.catch(error => console.error("Error setting sessionStorage in getAssignedTraining : " + error));				
		   }
		   return sessionStorage.gpeTrendingForJob;
		})
		.then(async function (gpeTrendingForJob) {
			const localStr = JSON.parse(gpeTrendingForJob);

			let carouselMain = document.createElement("div");
			carouselMain.className = "carousel slide";
			carouselMain.setAttribute("id", widgetArg + "Carousel");
			carouselMain.setAttribute("data-bs-ride", "carousel");
			carouselMain.setAttribute("data-bs-interval", "false");
			carouselMain.setAttribute("data-pause", "hover");

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
			localStr.data.forEach(function (subjectItem, index) {
				let carouselItem = document.createElement("div");
				carouselItem.className = "carousel-item";
				if (activeItem == "") {
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
				carouselItemPanelTileLinkThmb.style.backgroundImage = "url('" + subjectItem.thumbnailImage + "'), url('/phnx/images/LMS/DefaultTrainingImages/onlinecontent.jpg')";
				carouselItemPanelTileLinkThmb.style.height = "100%";
				carouselItemPanelTileLinkThmb.style.overflow = "hidden";

				carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
				carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
				carouselItemPanelD.appendChild(carouselItemPanelTileBody);
				carouselItemPanelBody.appendChild(carouselItemPanelD);
				carouselItemPanelItem.appendChild(carouselItemPanelBody);

				let carouselItemPanelCourseDesc = document.createElement("div");
				carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

				let carouselItemPanelCourseDescDiv = document.createElement("div");
				carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

				let carouselItemPanelCourseDescDivType = document.createElement("span");
				carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
				carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
				carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

				let carouselItemPanelCourseDescDivTitle = document.createElement("a");
				carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
				carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
				carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

				let carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
				carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
				carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

				let carouselItemPanelCourseDescD = document.createElement("div");
				carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

				let carouselItemPanelCourseDescTitleText = document.createElement("div");
				carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
				carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

				let carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
				carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

				let carouselItemPanelCourseDescDuration = document.createElement("div");
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
			controlPrev.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
			controlPrev.setAttribute("data-bs-slide", "prev");

			let controlPrevIcon = document.createElement("span");
			controlPrevIcon.className = "carousel-control-prev-icon";

			let controlNext = document.createElement("button");
			controlNext.className = "carousel-control-next";
			controlNext.setAttribute("type", "button");
			controlNext.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
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
		.catch(error => {
			console.error("Error building getTrendingForJob - ", error);
		});
}

async function getInspiredBySubjects(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return await checkJWT()
		.then(async function () {
			if(!sessionStorage.gpeInspiredBySubjects) {
				await await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/recommendedtraining?type=Subjects&pageSize=20&pageNum=1", {
					method: 'GET',
					mode: 'cors',
					cache: 'no-cache',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + sessionStorage.csToken,
					},
				}).then(jsonData => jsonData.json())
				.then(jsonData => sessionStorage.setItem("gpeInspiredBySubjects", JSON.stringify(jsonData)))
				.catch(error => console.error("Error setting sessionStorage in getInspiredBySubjects : " + error));				
		   }
		   return sessionStorage.gpeInspiredBySubjects;
		})
		.then(async function (gpeInspiredBySubjects) {
			const localStr = JSON.parse(gpeInspiredBySubjects);

			let carouselMain = document.createElement("div");
			carouselMain.className = "carousel slide";
			carouselMain.setAttribute("id", widgetArg + "Carousel");
			carouselMain.setAttribute("data-bs-ride", "carousel");
			carouselMain.setAttribute("data-bs-interval", "false");
			carouselMain.setAttribute("data-pause", "hover");

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
			localStr.data.forEach(function (subjectItem, index) {
				let carouselItem = document.createElement("div");
				carouselItem.className = "carousel-item";
				if (activeItem == "") {
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
				carouselItemPanelTileLinkThmb.style.backgroundImage = "url('" + subjectItem.thumbnailImage + "'), url('/phnx/images/LMS/DefaultTrainingImages/onlinecontent.jpg')";
				carouselItemPanelTileLinkThmb.style.height = "100%";
				carouselItemPanelTileLinkThmb.style.overflow = "hidden";

				carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
				carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
				carouselItemPanelD.appendChild(carouselItemPanelTileBody);
				carouselItemPanelBody.appendChild(carouselItemPanelD);
				carouselItemPanelItem.appendChild(carouselItemPanelBody);

				let carouselItemPanelCourseDesc = document.createElement("div");
				carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

				let carouselItemPanelCourseDescDiv = document.createElement("div");
				carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

				let carouselItemPanelCourseDescDivType = document.createElement("span");
				carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
				carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
				carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

				let carouselItemPanelCourseDescDivTitle = document.createElement("a");
				carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
				carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
				carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

				let carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
				carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
				carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

				let carouselItemPanelCourseDescD = document.createElement("div");
				carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

				let carouselItemPanelCourseDescTitleText = document.createElement("div");
				carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
				carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

				let carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
				carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

				let carouselItemPanelCourseDescDuration = document.createElement("div");
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
			controlPrev.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
			controlPrev.setAttribute("data-bs-slide", "prev");

			let controlPrevIcon = document.createElement("span");
			controlPrevIcon.className = "carousel-control-prev-icon";

			let controlNext = document.createElement("button");
			controlNext.className = "carousel-control-next";
			controlNext.setAttribute("type", "button");
			controlNext.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
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
		.catch(error => {
			console.error("Error building getInspiredBySubjects - ", error);
		});
}

async function getTopPicks(widgetArg, moduleArg) {
	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	return await checkJWT()
		.then(async function () {
			return await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/recommendedtraining?type=TopPicks&pageSize=20&pageNum=1", {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {

			let carouselMain = document.createElement("div");
			carouselMain.className = "carousel slide";
			carouselMain.setAttribute("id", widgetArg + "Carousel");
			carouselMain.setAttribute("data-bs-ride", "carousel");
			carouselMain.setAttribute("data-bs-interval", "false");
			carouselMain.setAttribute("data-pause", "hover");

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
			localStr.data.forEach(function (subjectItem, index) {
				let carouselItem = document.createElement("div");
				carouselItem.className = "carousel-item";
				if (activeItem == "") {
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
				carouselItemPanelTileLinkThmb.style.backgroundImage = "url('" + subjectItem.thumbnailImage + "'), url('/phnx/images/LMS/DefaultTrainingImages/onlinecontent.jpg')";
				carouselItemPanelTileLinkThmb.style.height = "100%";
				carouselItemPanelTileLinkThmb.style.overflow = "hidden";

				carouselItemPanelTileLink.appendChild(carouselItemPanelTileLinkThmb);
				carouselItemPanelTileBody.appendChild(carouselItemPanelTileLink);
				carouselItemPanelD.appendChild(carouselItemPanelTileBody);
				carouselItemPanelBody.appendChild(carouselItemPanelD);
				carouselItemPanelItem.appendChild(carouselItemPanelBody);

				let carouselItemPanelCourseDesc = document.createElement("div");
				carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc";

				let carouselItemPanelCourseDescDiv = document.createElement("div");
				carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv";

				let carouselItemPanelCourseDescDivType = document.createElement("span");
				carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType";
				carouselItemPanelCourseDescDivType.setAttribute("title", subjectItem.trainingType);
				carouselItemPanelCourseDescDivType.innerHTML = subjectItem.trainingType;

				let carouselItemPanelCourseDescDivTitle = document.createElement("a");
				carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle";
				carouselItemPanelCourseDescDivTitle.setAttribute("title", subjectItem.title);
				carouselItemPanelCourseDescDivTitle.href = subjectItem.trainingDetailsUrl;

				let carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div");
				carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper";
				carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;");

				let carouselItemPanelCourseDescD = document.createElement("div");
				carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD";

				let carouselItemPanelCourseDescTitleText = document.createElement("div");
				carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText";
				carouselItemPanelCourseDescTitleText.innerHTML = subjectItem.title;

				let carouselItemPanelCourseDescTitleTextFader = document.createElement("div");
				carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader";

				let carouselItemPanelCourseDescDuration = document.createElement("div");
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
			controlPrev.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
			controlPrev.setAttribute("data-bs-slide", "prev");

			let controlPrevIcon = document.createElement("span");
			controlPrevIcon.className = "carousel-control-prev-icon";

			let controlNext = document.createElement("button");
			controlNext.className = "carousel-control-next";
			controlNext.setAttribute("type", "button");
			controlNext.setAttribute("data-bs-target", "#" + widgetArg + "Carousel");
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
		.catch(error => {
			console.error("Error building getInspiredBySubjects - ", error);
		});
}



/**
 *
 * @param
 * @param
 * @returns
 */
async function getCheckinsDetails(widgetArg, moduleArg) {

	const gpeGlobalSettings = JSON.parse(sessionStorage.gpeGlobalSettings);

	let csConfigModuleWidget = moduleArg + "-" + widgetArg;

	const tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = widgetArg;
	tmpContentDiv.setAttribute("id", moduleArg + "-" + widgetArg);

	let localResponse = {};
	return await checkJWT()
		.then(async function () {
			return await fetch("/services/x/localization/v1/localizations/ui?groups=GoalPanel,DevPlanPanel,CheckIns&culture=" + sessionStorage.csCulture, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {
			let endpointURL = sessionStorage.csCloud + "perf-conversations-api/v1/conversations";
			localResponse = localStr.data;
			return await fetch(endpointURL, {
				method: 'GET',
				mode: 'cors',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken
				}
			});
		})
		.then(response => response.json())
		.then(async function (checkinObjects) {
			let checkinStr = "";
			if (checkinObjects.length != 0) {
				var hostName = window.location.host.split('.');

				checkinStr = "<table border='0' cellspacing='0' cellpadding='0' width='100%' class='table table-hover'>";
				checkinStr += "<thead>";
				checkinStr += "<tr>";
				checkinStr += "<th class='checkHeaderCol'>" + localResponse["Perf.Check-Ins.LandingPage.upcomingConversationsOverview.checkInLabel"] + "</th>";
				checkinStr += "<th class='checkHeaderCol'>" + localResponse["Perf.Check-Ins.LandingPage.recentConversationsHeader"].toLowerCase() + "</th>";
				checkinStr += "<th class='checkHeaderCol'>" + localResponse["Perf.Check-Ins.LandingPage.upcomingConversationsOverview.nextMeetingLabel"] + "</th>";
				checkinStr += "</tr>";
				checkinStr += "</thead>";
				for (let checkinItem in checkinObjects) {

					var avatarUrl = "/clientimg/" + sessionStorage.csCorp + "/users/photos/" + checkinObjects[checkinItem].participants[1].pictureUrl;
					checkinStr += "<tr id='checkinItem-" + checkinItem + "' class='checkinItem clickable-row' data-href='/ui/perf-check-ins/Check-Ins/view/" + checkinObjects[checkinItem].id + "/meeting/" + checkinObjects[checkinItem].meetingsSummary.nextMeetingId + "'>";
					//				checkinStr += "<a href='/ui/perf-check-ins/Check-Ins/view/"+ checkinObjects[checkinItem]["id"] +"/meeting/"+ checkinObjects[checkinItem]["meetingsSummary"]["nextMeetingId"] +"'>";

					checkinStr += "<td class='checkItemCol'>";
					checkinStr += "<div class='cellContent'>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell' role='button' tabindex='0'>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-avatar' aria-hidden='true'>";
					checkinStr += "<div class='chkAvatarImage' style='background-image:url(" + avatarUrl + ")'></div>";
					checkinStr += "</div>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail'>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__user-name'><a href='/ui/perf-check-ins/Check-Ins/view/" + checkinObjects[checkinItem].id + "/meeting/" + checkinObjects[checkinItem].meetingsSummary.nextMeetingId + "'>" + checkinObjects[checkinItem].participants[1].firstName + " " + checkinObjects[checkinItem].participants[1].lastName + "</a></div>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'>" + checkinObjects[checkinItem].title + "</div>";
					checkinStr += "</div>";
					checkinStr += "</div>";
					checkinStr += "</div>";
					checkinStr += "</td>";

					var lastModMonth = new Date(checkinObjects[checkinItem].meetingsSummary.pastMeetingDate).toLocaleDateString('en-GB', {
						month: 'short'
					}).split(' ');
					var lastModDay = new Date(checkinObjects[checkinItem].meetingsSummary.pastMeetingDate).toLocaleDateString('en-GB', {
						day: 'numeric'
					}).split(' ');
					//				var lastMod = new Date(checkinObjects[checkinItem]["lastModifiedDate"]).toLocaleDateString('en-GB', { day : 'numeric',  month : 'short'}).split(' ').join('-');
					checkinStr += "<td class='lastMod checkItemColDate'><div class='month'>" + lastModMonth + "</div><div class='day'>" + lastModDay + "</div></td>";

					if (checkinObjects[checkinItem].meetingsSummary.isNextMeetingCreated) {
						var nextMeetingMonth = new Date(checkinObjects[checkinItem].meetingsSummary.nextMeetingDate).toLocaleDateString('en-GB', {
							month: 'short'
						}).split(' ');
						var nextMeetingDay = new Date(checkinObjects[checkinItem].meetingsSummary.nextMeetingDate).toLocaleDateString('en-GB', {
							day: 'numeric'
						}).split(' ');
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
				checkinStr += "<button type='button' id='createNewCheckInsBTN' class='getstarted_button' data-href='" + gpeGlobalSettings[0].W[csConfigModuleWidget].getstartedurl + "'>" + gpeGlobalSettings[0].W[csConfigModuleWidget].nocontenttitle[sessionStorage.csCulture] + "</button>";
				checkinStr += "</div>";
			}

			tmpContentDiv.innerHTML = checkinStr;
			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Error building Checkins - ", error);
		});
}

/**
 * Checks if Report Token needs to be refreshed
 * @returns true
 */
async function checkReportToken() {
	if (sessionStorage.getItem('reportToken')) {
		var tokenDate = sessionStorage.reportTokenDate;
		var dateDiff = Math.floor((Date.now() - tokenDate) / 1000 / 60);
		if (dateDiff < 15) {
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
async function updateReportToken() {
	return await fetch("/Analytics/ReportBuilder/index.aspx", {
			method: 'GET',
			headers: {
				'Content-Type': 'text/html'
			}
		})
		.then(response => response.text())
		.then(tokenStr => {
			sessionStorage.reportTokenDate = Date.now();
			sessionStorage.reportToken = tokenStr.substring(tokenStr.indexOf("accessToken:") + 14, tokenStr.indexOf("',", tokenStr.indexOf("accessToken")));
			return sessionStorage.csToken;
		})
		.catch(error => {
			console.error("Function updateJWT failed: ", error);
		});
}

function fetchReport_v2(reportIDArg) {
	var rptDataSet = {};
	return fetch("/reportarchitect/rctmetacore/metaapi/v1/report/" + reportIDArg, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': sessionStorage.reportToken,
			},
		})
		.then((response) => {
			if (!response.ok) {
				throw new Error("HTTP status " + response.status);
			}
			return response.json();
		})
		.then((reportDetailsResponse) => {

			var payload = {
				"filters": [],
				"sorting": []
			};
			payload.filters = [...reportDetailsResponse.filters];
			payload.sorting = [...reportDetailsResponse.sorting];

			rptDataSet = reportDetailsResponse;

			return fetch("/reportarchitect/rctdatacore/metaapi/v1/report/" + reportIDArg + "/rendered", {
				method: 'POST',
				mode: 'cors',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': sessionStorage.reportToken
				},
				body: JSON.stringify(payload)
			});
		})
		.then(getBodyAndStatus)
		.then((metaresponse) => {
            return metaresponse.body.location;
        })
        .then((reportLocation) => {
			return fetch("/reportarchitect/rctdatacore/metaapi/v1" + reportLocation, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': sessionStorage.reportToken,
				},
			})
            .then((result) => {
                if(result.status !== 204){
                    return result;
                }else {
                    return getAsyncResult("/reportarchitect/rctdatacore/metaapi/v1" + reportLocation, 200, 100).then(queryResult => {
                        return queryResult;
                      });
                }
            });
        })
		.then(reportdata => reportdata.json())
		.then(finalData => {
            return [finalData, rptDataSet];
		})
		.catch(error => {
			console.error("Error with fetchReport function - ", error);
		});
}

function getBodyAndStatus(response) {
	return response.json().then(responseBody => {
        return {
		status: response.status,
		body: responseBody
	  };
	});
  }

  function getAsyncResult(url, timeout, maxAttempt) {
    return new Promise((resolve, reject) => {
      // start monitoring after timeout
      setTimeout(() => {
        repeatUntilSuccess(resolve, reject, 0);
      }, timeout);
    });
  
    function repeatUntilSuccess(resolve, reject, attempt) {
      fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.reportToken,
            },
        })
        .then(result => {
          if (result.status === 200) {
            resolve(result);
          } else if (attempt >= maxAttempt) {
            reject("Max amount of attempt achived");
          } else if (result.status === 204) {
              // Check again after timeout
            setTimeout(() => {
              repeatUntilSuccess(resolve, reject, attempt + 1);
            }, timeout);
          } else {
            // Something went wrong
            reject(result);
          }
        })
        .catch(err => reject(err));
    }
  }

/**
 *
 * @param
 * @param
 * @returns
 */
async function createDashboard(reportIDArg, widgetIDArg, targetDivArg, demoRoleArg) {
	return await checkReportToken()
		.then(async function () {
			if(sessionStorage.getItem(widgetIDArg) === null || sessionStorage.getItem(widgetIDArg) === 'undefined') {
				let reportJson = await fetchReport_v2(reportIDArg);
				sessionStorage.setItem(widgetIDArg, JSON.stringify(reportJson));
				return reportJson;
			}else {
				return JSON.parse(sessionStorage.getItem(widgetIDArg));
			}
		})
		.then(async function (reportJson) {
			let reportData = reportJson[0];
			let rptDataSet = reportJson[1];

			let [, ...labels] = [...new Set(reportData.chartData.map(x => x[0]))];

			let [, ...reportCols] = [...new Set(reportData.chartData.map(status => status[1]))];

			const chartData = {
				labels: [...labels],
				datasets: [],
			};

			let legendFlag = "";

			let dataSet = [];

			// If simple graph (one dimension)
			if (rptDataSet.charts[0].chartDimensions.length == 1) {
				let chBgColor = [];
				chBgColor = reportData.chartPalette.map(function (e) {
					return e.color;
				});
				$.each(rptDataSet.charts[0].chartDimensions, function (e, i) { // for each dimension we need to get the data...
					$.each(reportData.chartData, function (labelIndex, labelValue) {
						dataSet = reportData.chartData.map(function (value, index) {
							return value.slice(-1)[0];
						});
					});

				});
				dataSet.shift();
				// chartData.shift();
				chartData.datasets.push({
					backgroundColor: chBgColor,
					hoverBackgroundColor: chBgColor,
					data: dataSet,
					fill: true,
				});
				legendFlag = false;

				// If advanced graph (two dimensions)
			} else {
				for (let i in reportCols) {
					dataSet[reportCols[i]] = [];
					for (let labelIndex in labels) {
						dataSet[reportCols[i]][labelIndex] = [];
						for (let k in reportData.chartData) {
							if ((labels[labelIndex] == reportData.chartData[k][0]) && (reportData.chartData[k][rptDataSet.charts[0].chartDimensions.length - 1] == reportCols[i])) {
								dataSet[reportCols[i]][labelIndex] = reportData.chartData[k][rptDataSet.charts[0].chartDimensions.length];
							}
						}
					}
					let bgColor = reportData.chartPalette.filter(function (item) {
						return item.displayName === reportCols[i];
					});

					let bgColor1 = bgColor.map(function (item) {
						return item.color;
					});

					chartData.datasets.push({
						label: reportCols[i],
						backgroundColor: bgColor,
						data: dataSet[reportCols[i]],
						fill: true,
						datalabels: {
							anchor: 'end',
							align: 'start',
						},
					});
				}
				legendFlag = true;
			}

			const config = {
				type: cs_DashboardDetailsArray[rptDataSet.charts[0].chartTypeId].type,
				data: chartData,
				options: {
					// maintainAspectRatio: "true",
					// aspectRatio: 1,
					responsive: "true",
					plugins: {
						legend: {
							display: legendFlag,
							position: "top",
						},
						title: {
							display: false,
							text: rptDataSet.charts[0].title
						},
					},
					scales: {
						y: {
							display: cs_DashboardDetailsArray[rptDataSet.charts[0].chartTypeId].scale.ydisplay,
						},
						x: {
							display: cs_DashboardDetailsArray[rptDataSet.charts[0].chartTypeId].scale.xdisplay,
						},
					},
				},

			};

			var canv = document.createElement('canvas'); // creates new canvas element
			canv.setAttribute("style", "height: 140px, width: 100%");
			canv.id = widgetIDArg + "_chart"; // gives canvas id
			document.body.appendChild(canv); // adds the canvas to the body element

			var canvas1 = document.getElementById(canv.id); //find new canvas we created
			canvas1.setAttribute("style", "height: 140px, width: 100%");
			var context = canvas1.getContext('2d');
			let myChart = new Chart(context, config);

			document.body.removeChild(canv); // removes new canvas

			canvas1.width = "200px";
			canvas1.height = "200px";
			canvas1.className = "chart_" + cs_DashboardDetailsArray[rptDataSet.charts[0].chartTypeId].type;
			targetDivArg.appendChild(canvas1);

			return await targetDivArg;
		})
		.catch(error => console.error("Error in createDashboard function: " + error));
}

function toggleGPEwp() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	
	var demopersonaDivElement = document.getElementById("demopersona");

	if (typeof(demopersonaDivElement) == 'undefined' || demopersonaDivElement == null) {

		let switchMainDiv = document.createElement("div");
		switchMainDiv.className = "form-check form-switch";
		switchMainDiv.setAttribute("style", "margin-top: 40px");

		let switchMainInput = document.createElement("input");
		switchMainInput.className = "form-check-input";
		switchMainInput.setAttribute("type", "checkbox");	
		switchMainInput.setAttribute("id", "flexSwitchCheckDefault");	
		if(urlParams.has('gpewp') && (urlParams.get('gpewp') == "true")) {
			switchMainInput.setAttribute('checked', 'checked');
		}

		let switchMainLabel = document.createElement("label");
		switchMainLabel.className = "form-check-label";
		switchMainLabel.setAttribute("for", "flexSwitchCheckDefault");
		switchMainLabel.innerText = "GPE Welcome Page switch";

		switchMainDiv.appendChild(switchMainInput);
		switchMainDiv.appendChild(switchMainLabel);

		document.body.appendChild(switchMainDiv);

		$('#flexSwitchCheckDefault').click(function() {

			let url = new URL(window.location.href);
			let params = new URLSearchParams(url.search.slice(1));
		
			var action = $('#flexSwitchCheckDefault').prop('checked');
		
			const queryString = window.location.search; 						// get url query string
			const urlParams = new URLSearchParams(queryString); 				// parse query string
		
			if(action){
				params.set('gpewp', true);
			}else {
				params.delete('gpewp')
			}
		
			params.toString();
			window.history.replaceState({},'',`${window.location.pathname}?${params}${window.location.hash}`,);
			location.reload();	
		});
	}
}

async function renderGPEWireframe() {
	let roleArray = ["USR", "MGR", "HRD", "INS", "ADM", "REC", "GPE"];

	let gpewp = document.createElement("div");
	gpewp.className = "gpewp_container";
	gpewp.setAttribute("id", "gpewp");

	let gpewp_top = document.createElement("div");
	gpewp_top.className = "gpewp_topcontainer";
	gpewp_top.setAttribute("id", "gpewp_top");

	let gpewp_topcontainer_upper = document.createElement("div");
	gpewp_topcontainer_upper.className = "gpewp_topcontainer_upper";
	gpewp_topcontainer_upper.setAttribute("id", "gpewp_topcontainer_upper");

	let gpewp_topcontainer_lower = document.createElement("div");
	gpewp_topcontainer_lower.className = "gpewp_topcontainer_lower";
	gpewp_topcontainer_lower.setAttribute("id", "gpewp_topcontainer_nav");

	gpewp_top.appendChild(gpewp_topcontainer_upper);
	gpewp_top.appendChild(gpewp_topcontainer_lower);
	gpewp.appendChild(gpewp_top);

	let gpewp_main = document.createElement("div");
	gpewp_main.className = "gpewp_maincontent";
	gpewp_main.setAttribute("id", "gpewp-main");

	let nav_tabContent = document.createElement("div");
	nav_tabContent.className = "tab-content gpewp_content";
	nav_tabContent.setAttribute("id", "nav-tabContent");

	/* USER START */
	for (let role in roleArray) {
		let nav_USR = document.createElement("div");
		nav_USR.className = "tab-pane fade";
		nav_USR.setAttribute("id", "nav-"+roleArray[role]);
		nav_USR.setAttribute("role", "tabpanel");
		nav_USR.setAttribute("aria-labelledby", "nav-"+ roleArray[role] +"-tab");
	
		let USR_content = document.createElement("div");
		USR_content.className = "gpewp_"+roleArray[role];
		USR_content.setAttribute("id", roleArray[role]+"-content");
	
		let USR_right = document.createElement("div");
		USR_right.className = "gpewp_"+ roleArray[role] +"-right";
		USR_right.setAttribute("id", roleArray[role]+"-right");
		/* USER END */
	
		USR_content.appendChild(USR_right);
		nav_USR.appendChild(USR_content);
		nav_tabContent.appendChild(nav_USR);
		gpewp_main.appendChild(nav_tabContent);
	}

	gpewp.appendChild(gpewp_main);

	let csMain = document.querySelector("#mainContainer");
	csMain.appendChild(gpewp);
}

async function initUserData() {
	const queryString = window.location.search; 						// get url query string
	const urlParams = new URLSearchParams(queryString); 				// parse query string

	let $body = $("body");
	$body[0].style.setProperty('padding-top', '0px', 'important');

	if(urlParams.has('gpewp') && (urlParams.get('gpewp') == "true")) {	// check if parameter exists
		$(".widgetDropped").css({"display":"none"});					// hide the standard widgets
		$("div[id*='ctl00_ContentPlaceHolder1_widgetLayout_mainDivRenderedWidgets']").css({"width":"100%"});

		return await checkJWT()
		.then(async function () {

			let url = "/services/api/x/users/v2/employees/" + sessionStorage.csUser;
			return await fetch(url, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + sessionStorage.csToken,
				},
			});
		})
		.then(response => response.json())
		.then(async function (localStr) {
			let customFieldsArr = localStr.data.customFields;

			let gpeDemoName = [localStr.data.firstName, localStr.data.lastName];

			let gpeDemoBranding = (customFieldsArr.find(item => item.id === 157)) ? customFieldsArr.find(item => item.id === 157) : false;

			let gpeDemoModules = customFieldsArr.find(item => item.id === 156);
			let gpeDemoRole = customFieldsArr.find(item => item.id === 155);

			sessionStorage.setItem("csDemoRole", JSON.stringify(getDemoRole(gpeDemoRole.value)));
			sessionStorage.setItem("csDemoVertical", JSON.stringify(getDemoVertical(gpeDemoRole.value)));
			sessionStorage.setItem("csDemoModules", JSON.stringify(getDemoModules(gpeDemoModules.value)));
			sessionStorage.setItem("csDemoVisuals", gpeDemoBranding.value);
			sessionStorage.setItem("csDemoName", JSON.stringify(gpeDemoName));

			return true;
		})
		.then(function() {
			renderGPEWireframe();
			return true;
		})
		.catch(error => {
				console.error(error);
		});
	}else {

		let demoPersona = document.getElementById("demopersona");

		if (typeof(demoPersona) === 'undefined' || demoPersona === null) {
			return false;
		}else {
			return await checkJWT()
			.then(async function () {
				sessionStorage.setItem("csDemoRole", JSON.stringify(getDemoRole(document.getElementById("demopersona").getAttribute("demopersona"))));
				sessionStorage.setItem("csDemoVertical", JSON.stringify(getDemoVertical(document.getElementById("demopersona").getAttribute("demopersona"))));
				sessionStorage.setItem("csDemoModules", JSON.stringify(getDemoModules(document.getElementById("demomodules").getAttribute("demomodules"))));
				sessionStorage.setItem("csDemoName", JSON.stringify(document.getElementById("demousername").getAttribute("demousername").split(';')));
				sessionStorage.setItem("csDemoVisuals", document.getElementById("demovisuals").getAttribute("demovisuals"));
			
				return true;
			})
			.catch(error => {
				console.error(error);
			});			
		}
	}
}

/**
 * Welcome Page Build Function
 * @description Function is processed upon page load and will display the widgets and build the layout.
 */
(async function () {
	//$(".widgetDropped").css({"display":"none"});				// hide the widgets
	var startTimer = performance.now();
	await initUserData()
	.then(function(gpeWP){
		toggleGPEwp();

		var meta = document.createElement('meta');
		meta.name = "viewport";
		meta.content = "width=device-width, initial-scale=1.0";
		document.getElementsByTagName('head')[0].appendChild(meta);

		if(gpeWP === false){
			let cssArr = ['https://scfiles.csod.com/Baseline/Config/CSS/gpeWelcomePage/gpewp-switch.min.css'];
			for (let cssFile in cssArr) {
				var link = document.createElement('link');
				link.setAttribute('rel', 'stylesheet');
				link.setAttribute('href', cssArr[cssFile]);
				document.head.appendChild(link);
			}			
			return false;		
		}else {	
			$("#mainContainer").css({"text-align":"left"});

			document.title = "loading...";

			let cssArr = ['https://unpkg.com/css-skeletons@1.0.5/css/css-skeletons.min.css',
						'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css',
						'https://unpkg.com/bootstrap-table@1.18.3/dist/bootstrap-table.min.css',
						'https://scfiles.csod.com/Baseline/Config/CSS/gpeWelcomePage/gpefonts.min.css',
						'https://scfiles.csod.com/Baseline/Config/CSS/gpeWelcomePage/gpewp.min.css'];

			for (let cssFile in cssArr) {
				var link = document.createElement('link');
				link.setAttribute('rel', 'stylesheet');
				link.setAttribute('href', cssArr[cssFile]);
				document.head.appendChild(link);
			}
			return true;
		}
	})
	.then(async function(gpeWP) {
		if(gpeWP === true) {	
			// Set banner background color based on primary
			const cssPrimaryBG = $('.c-nav-user').css('background-color');
			document.querySelector('html').style.setProperty('--gpewp-brand-color--primary', cssPrimaryBG, "important");
			const cssPrimaryBG_light = rgbToHsl(cssPrimaryBG, 10);
			document.querySelector('html').style.setProperty('--gpewp-banner-bg-color--light', cssPrimaryBG_light, "important");	
			return true;
		} else {
			return false;
		}
	})
	.then(async function (gpeWP) {
		if(gpeWP === true) {
			let gpeDEMOROLE = JSON.parse(sessionStorage.getItem("csDemoRole"));
			let gpeDEMOMODULES = JSON.parse(sessionStorage.getItem("csDemoModules"));
			
			if(typeof sessionStorage.getItem("csDemoVisuals") === 'string' && sessionStorage.getItem("csDemoVisuals") !== 'undefined' && sessionStorage.getItem("csDemoVisuals").length !== 0) {

				let brandingResponse = JSON.parse(sessionStorage.getItem("csDemoVisuals"));

				if (brandingResponse.TopBannerImage != "") {
					const topBannerImgURL = "https://scfiles.csod.com" + brandingResponse.TopBannerImage;
					const ProspectBG = checkIfImageExists(topBannerImgURL, (exists) => {
						if (exists) {
							return setBgImage(topBannerImgURL);
						}
					});
				}

				if (brandingResponse.UserHeaderColor != "") {
					document.getElementById('gpewp_topcontainer_upper').style.setProperty("background-color", brandingResponse.UserHeaderColor, "important");
				}
			}

			if($(".gpewp_container").length > 1) {
				$(".widgetDropped").css({"display":"block"});					// display the standard widgets
			}
			// add row to role maindiv if not exist (only ifnot onb role)
			if(gpeDEMOROLE !== "ONB") {
				let roleMain = "div[class*='gpewp_"+ gpeDEMOROLE +"-right']";
				const rowDivCheck = document.querySelector(roleMain);
				if(rowDivCheck.classList.contains('row') === false)  rowDivCheck.classList.add("row");// true
			}

			const gpeNav = buildNav(gpeDEMOROLE, sessionStorage.csCulture, gpeDEMOMODULES);
			const gpeAboutCard = buildAboutCard(gpeDEMOMODULES);

			const gpeOnboarding = (gpeDEMOROLE === "ONB") ? buildOnbWidget(gpeDEMOROLE, sessionStorage.csCulture) : "false";
			const gpeModuleLayout = (gpeDEMOROLE !== "ONB") ? buildModuleWidget(gpeDEMOMODULES, gpeDEMOROLE) : "false";
			const gpeWidgets = (gpeDEMOROLE !== "ONB") ? buildWidgets_v2(gpeDEMOMODULES, gpeDEMOROLE) : "false";
			const gpeExtendedWidgets = (gpeDEMOROLE !== "ONB") ? buildExtendedWidgets(gpeDEMOROLE, gpeDEMOMODULES) : "false";
			return Promise.all([gpeNav, gpeAboutCard, gpeOnboarding, gpeModuleLayout, gpeWidgets, gpeExtendedWidgets]);
		} else {
			return false;
		}
	})
	.then(function (gpeWP) {
		if(gpeWP !== false) {

			var link = document.querySelector("link[rel~='icon']");
			if (!link) {
				link = document.createElement('link');
				link.rel = 'icon';
				document.getElementsByTagName('head')[0].appendChild(link);
			}

			link.href = gpeDEMOPERSONAIMAGE;
			document.title = "CSOD Demo : " + JSON.parse(sessionStorage.getItem("csDemoRole"));

			// Checkins click events
			$(".clickable-row").click(function () {
				window.location = $(this).data("href");
			});
			// Get started click events
			$(".getstarted_button").click(function () {
				window.location = $(this).data("href");
			});
			// Get approval buttons click events
			$(".approval_button").click(function () {
				window.location = $(this).data("href");
			});
		}

			// Set event on logout to delete sessionStorage.
			var logoutLink = document.querySelector("a[id*='header_headerResponsive_responsiveNav_lnkLogout']");
			logoutLink.addEventListener("click", function (event) {
				sessionStorage.clear();
			});

			var endTimer = performance.now();
			console.log("gpeWP build: "+ gpeWPversion +" - ("+ Math.round((endTimer - startTimer))+" ms)");
		
	})
	.catch(error => {
		console.error(error);
	});
})();