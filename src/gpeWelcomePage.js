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
 const gpeDEMONAMEDIV	 	= "demousername";								// User name
 const gpeTARGETNAVDIV 		= "gpewp_topcontainer_nav"; 					// where do we want to put the navigation menu?
 const gpeDEMOROLE 			= getDemoRole( document.getElementById( gpeDEMOPERSONADIV ).getAttribute( gpeDEMOPERSONADIV ) );
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
 * @const cs_customLocale
 * @desc Array of translated welcome page data points.
 */
const cs_customLocale = {
	ManagerWidgetTitle: {
		"en-US": "Team widget",
	},
	topNavigationTitle: {
		USR: {
			"en-US": "My Development",
			"en-UK": "My Development",
			"de-DE": "Meine Entwicklung",
		},
		MGR: {
			"en-US": "My team",
			"en-UK": "My team",
			"de-DE": "Meine Mannschaft",
		},
		HRD: {
			"en-US": "HR Dashboard",
			"en-UK": "HR Dashboard",
			"de-DE": "HR-Dashboard",
		},
		ADM: {
			"en-US": "Admin Dashboard",
			"en-UK": "Administrator",
			"de-DE": "Admin-Dashboard",
		},
		REC: {
			"en-US": "Recruiter Dashboard",
			"en-UK": "Recruiter Dashboard",
			"de-DE": "Recruiter-Dashboard",			
		},
		INS: {
			"en-US": "Instructor Dashboard",
			"en-UK": "Instructor Dashboard",
			"de-DE": "Lehrer-Dashboard",			
		},
		QLS: {
			"en-US": "Quick links",
			"en-UK": "Quick links",
			"de-DE": "Schnelllinks",
		},
	},
	moduleTitle: {
		"ats": {
			"en-US": "Recruiting",
			"en-UK": "Recruiting",
			"de-DE": "Rekrutierung",
		},
		"chr": {
			"en-US": "Core HR",
			"en-UK": "Core HR",
			"de-DE": "Core HR-Plattform",
		},
		"core": {
			"en-US": "Core",
			"en-UK": "Core",
			"de-DE": "Core",
		},
		"lms": {
			"en-US": "Learning",
			"en-UK": "Learning",
			"de-DE": "Lernen",
		},
		"epm": {
			"en-US": "Performance",
			"en-UK": "Performance",
			"de-DE": "Performance",
		},
		"epm-careers": {
			"en-US": "Careers",
			"en-UK": "Careers",
			"de-DE": "Careers",
		},
		"careers": {
			"en-US": "Careers",
			"en-UK": "Careers",
			"de-DE": "Careers",
		},
		"reporting": {
			"en-US": "Reports",
			"en-UK": "Reports",
			"de-DE": "Berichte",
		},
	},
	onboarding : {
		"en-US" : {
			headertitle : gpeDEMOUNAME[0] +", your onboarding journey starts here!",
			headertext : "Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1. Fasten your seatbelt and let the journey begin!" ,
			videourl : "https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
			onbprocess : {
				title : "What's next on the onboarding",
				resourceTitle : "Further resources and/or activities:",
				imgurl : "url(/clientimg/demogpe/welcome/onb_wp_process.png)",	
				text : {
					nextstepstext1 : {
						headline : "First day",
						text : "As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
						resources : {
							res1 : {
								text : "Read more about is on our Company website",
								url : "https://www.cornerstoneondemand.com/company/",
								type: "url",
							},
							res2 : {
								text : "Follow us on LinkedIn",
								url : "https://www.linkedin.com/company/cornerstone-ondemand",
								type: "url",
							},
							res3 : {
								text : "Fill out form - Personal Contact Details",
								url : "/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_001_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAi9Z7DN3BuO93jek0KZ1CQWw%3d%3d",
								type: "url",
							},
							res4 : {
								text : "Update your Bio page in Universal Profile",
								url : "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
								type: "url",
							}
						}
					},
					nextstepstext2 : { 
						headline : "First week",
						text : "Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
						resources : {
							res1 : {
								text : "Go through your Onboarding Curriculum",
								url : "/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								type: "url",
							},
							res2 : {
								text : "Be recommended training for your role",
								url : "/ui/lms-learner-home/home",
								type: "url",
							},
							res3 : {
								text : "Create your own playlist together with your manager",
								url : "/ui/lms-learner-playlist/UsersPlaylists",
								type: "url",
							}
						}
					},
					nextstepstext3 : { 
						headline : "First month",
						text : "By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
						resources : {
							res1 : {
								text : "Schedule regular check-in meetings with your manager",
								type: "text",
							},
							res2 : {
								text : "Create goals",
								type: "text",
							},
							res3 : {
								text : "Have fun!",
								type: "text",
							}
						}
					},
					nextstepstext4 : {
						headline : "First 6 months",
						text : "When you succeed - we succeed! We're a group. We're a team. From the CEO  and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",	
						resources : {
							res1 : {
								text : "Create your Personal Development Plan",
								type: "text",
							},
							res2 : {
								text : "Get Certified",
								type: "text",
							},
							res3 : {
								text : "Receive and give badges",
								type: "text",
							},
						}
					},
				},
			},
		},
		"en-UK" : {
			headertitle : gpeDEMOUNAME[0] +", your onboarding journey starts here!",
			headertext : "Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1. Fasten your seatbelt and let the journey begin!" ,
			videourl : "https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
			onbprocess : {
				title : "What's next on the onboarding",
				resourceTitle : "Further resources and/or activities:",
				imgurl : "url(/clientimg/demogpe/welcome/onb_wp_process.png)",	
				text : {
					nextstepstext1 : {
						headline : "First day",
						text : "As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
						resources : {
							res1 : {
								text : "Read more about is on our Company website",
								url : "https://www.cornerstoneondemand.com/company/",
								type: "url",
							},
							res2 : {
								text : "Follow us on LinkedIn",
								url : "https://www.linkedin.com/company/cornerstone-ondemand",
								type: "url",
							},
							res3 : {
								text : "Fill out form - Personal Contact Details",
								url : "/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_001_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAi9Z7DN3BuO93jek0KZ1CQWw%3d%3d",
								type: "url",
							},
							res4 : {
								text : "Update your Bio page in Universal Profile",
								url : "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
								type: "url",
							}
						}
					},
					nextstepstext2 : { 
						headline : "First week",
						text : "Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
						resources : {
							res1 : {
								text : "Go through your Onboarding Curriculum",
								url : "/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								type: "url",
							},
							res2 : {
								text : "Be recommended training for your role",
								url : "/ui/lms-learner-home/home",
								type: "url",
							},
							res3 : {
								text : "Create your own playlist together with your manager",
								url : "/ui/lms-learner-playlist/UsersPlaylists",
								type: "url",
							}
						}
					},
					nextstepstext3 : { 
						headline : "First month",
						text : "By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
						resources : {
							res1 : {
								text : "Schedule regular check-in meetings with your manager",
								type: "text",
							},
							res2 : {
								text : "Create goals",
								type: "text",
							},
							res3 : {
								text : "Have fun!",
								type: "text",
							}
						}
					},
					nextstepstext4 : {
						headline : "First 6 months",
						text : "When you succeed - we succeed! We're a group. We're a team. From the CEO  and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",	
						resources : {
							res1 : {
								text : "Create your Personal Development Plan",
								type: "text",
							},
							res2 : {
								text : "Get Certified",
								type: "text",
							},
							res3 : {
								text : "Receive and give badges",
								type: "text",
							},
						}
					},
				},
			},
		},
		"de-DE" : {
			headertitle : gpeDEMOUNAME[0] +", your onboarding journey starts here!",
			headertext : "Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1. Fasten your seatbelt and let the journey begin!" ,
			videourl : "https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
			onbprocess : {
				title : "What's next on the onboarding",
				resourceTitle : "Further resources and/or activities:",
				imgurl : "url(/clientimg/demogpe/welcome/onb_wp_process.png)",	
				text : {
					nextstepstext1 : {
						headline : "First day",
						text : "As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
						resources : {
							res1 : {
								text : "Read more about is on our Company website",
								url : "https://www.cornerstoneondemand.com/company/",
								type: "url",
							},
							res2 : {
								text : "Follow us on LinkedIn",
								url : "https://www.linkedin.com/company/cornerstone-ondemand",
								type: "url",
							},
							res3 : {
								text : "Fill out form - Personal Contact Details",
								url : "/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_001_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAi9Z7DN3BuO93jek0KZ1CQWw%3d%3d",
								type: "url",
							},
							res4 : {
								text : "Update your Bio page in Universal Profile",
								url : "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
								type: "url",
							}
						}
					},
					nextstepstext2 : { 
						headline : "First week",
						text : "Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
						resources : {
							res1 : {
								text : "Go through your Onboarding Curriculum",
								url : "/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								type: "url",
							},
							res2 : {
								text : "Be recommended training for your role",
								url : "/ui/lms-learner-home/home",
								type: "url",
							},
							res3 : {
								text : "Create your own playlist together with your manager",
								url : "/ui/lms-learner-playlist/UsersPlaylists",
								type: "url",
							}
						}
					},
					nextstepstext3 : { 
						headline : "First month",
						text : "By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
						resources : {
							res1 : {
								text : "Schedule regular check-in meetings with your manager",
								type: "text",
							},
							res2 : {
								text : "Create goals",
								type: "text",
							},
							res3 : {
								text : "Have fun!",
								type: "text",
							}
						}
					},
					nextstepstext4 : {
						headline : "First 6 months",
						text : "When you succeed - we succeed! We're a group. We're a team. From the CEO  and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",	
						resources : {
							res1 : {
								text : "Create your Personal Development Plan",
								type: "text",
							},
							res2 : {
								text : "Get Certified",
								type: "text",
							},
							res3 : {
								text : "Receive and give badges",
								type: "text",
							},
						}
					},
				},
			},
		},
	}
};

/**
 * @const cs_widgetConfig
 * @desc Array of settings for each widget.
 */
const cs_widgetConfig = {
	development_plans : {
		width : 3,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Devplan Progress",
			"en-UK" : "My development Plan progress",
			"de-DE" : "Fortschritt meines Entwicklungsplans",
		},
		nocontenttitle: {
			"en-US" : "Create a new plan!",
			"en-UK" : "Create a new plan!",
			"de-DE" : "Erstellen Sie einen neuen Plan!",
		},
		getstartedurl : "/ui/devplans/blueprints/add"
	},
	goals : {
		width : 3,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Goal Progress",
			"en-UK" : "Goal Progress",
			"de-DE" : "Zielfortschritt",
		},
		nocontenttitle: {
			"en-US" : "Create goals!",
			"en-UK" : "Create goals!",
			"de-DE" : "Ziele schaffen!",
		},
		getstartedurl : "/phnx/driver.aspx?routename=Goals/GoalEdit"
	},
	check_ins : {
		width : 6,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Check ins",
			"en-UK" : "Check ins",
			"de-DE" : "Einchecken",
		},
		nocontenttitle: {
			"en-US" : "Get Started!",
			"en-UK" : "Get Started!",
			"de-DE" : "Loslegen!",
		},
		getstartedurl : "/ui/perf-check-ins/Check-Ins/create/select-participant"
	},
	view_your_transcript : {
		width : 6,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Transcript",
			"en-UK" : "Training Record",
			"de-DE" : "Schulungsübersicht",
		},
		nocontenttitle: {
			"en-US" : "empty",
			"en-UK" : "empty",
			"de-DE" : "leer",
		},
        tablecolumns : {
            title : {
                "en-US" : "Title",
                "en-UK" : "Title",
				"de-DE" : "Titel",
                "fr-FR" : "Le Title",
            },
            duedate : {
                "en-US" : "Due Date",
                "en-UK" : "Due Date",
				"de-DE" : "Geburtstermin",
                "fr-FR" : "Le Due Date",
            },
            status : {
                "en-US" : "Status",
                "en-UK" : "Status",
				"de-DE" : "Status",
                "fr-FR" : "Le Status",
            },
            action : {
                "en-US" : "Action",
                "en-UK" : "Action",
				"de-DE" : "Handlung",
                "fr-FR" : "Le Action",
            }        
		}
	},
	live_feed : {
		width : 6,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Live Feed",
			"en-UK" : "Live Feed",
			"de-DE" : "Live-Feed",
		},
		nocontenttitle: {
			"en-US" : "empty",
			"en-UK" : "empty",
			"de-DE" : "leer",
		},
	},
	performance_reviews : {
		width : 6,
		targetdiv : gpeUSRMAINDIV,
		title : {
			"en-US" : "Actions",
			"en-UK" : "Actions",
			"de-DE" : "Aktionen",
		},
		nocontenttitle: {
			"en-US" : "empty",
			"en-UK" : "empty",
			"de-DE" : "leer",
		},
        tablecolumns : {
            url : {
                "en-US" : "Action",
                "en-UK" : "Action",
				"de-DE" : "Aktionen",
                "fr-FR" : "Le Action",
            },
            duedate : {
                "en-US" : "Due Date",
                "en-UK" : "Due Date",
				"de-DE" : "Geburtstermin",
                "fr-FR" : "Le Due Date",
            }
        }
	},
	managerwidget : {
		title : {
			"en-US" : "My team",
			"en-UK" : "My team",
			"de-DE" : "Meine team"
		},
		tableheader : {
			name : {
				"en-US" : "Name",
				"en-UK" : "Name",
				"de-DE" : "Name"
			},
			hiredate : {
				"en-US" : "Hire Date",
				"en-UK" : "Hire Date",
				"de-DE" : "Anstellungsdatum"
			},
			actions : {
				"en-US" : "Actions",
				"en-UK" : "Actions",
				"de-DE" : "Aktionen"
			},
		},
		actionsitems : {
			openup : {
				"en-US" : "Open Universal Profile",
				"en-UK" : "Open Universal Profile",
				"de-DE" : "Universelles Profil öffnen"
			},
			viewtranscript : {
				"en-US" : "View Transcript",
				"en-UK" : "View Training Record",
				"de-DE" : "Trainingsaufzeichnung anzeigen"
			},
			viewsnapshot : {
				"en-US" : "View Snapshot",
				"en-UK" : "View Snapshot",
				"de-DE" : "Schnappschuss ansehen"
			},
			viewgoals : {
				"en-US" : "View Goals",
				"en-UK" : "View Objectives",
				"de-DE" : "Ziele anzeigen"
			},
			viewdevplan : {
				"en-US" : "View Development Plan",
				"en-UK" : "View Development Plan",
				"de-DE" : "Entwicklungsplan anzeigen"
			},
		},
		detailtable : {
			firstname : {
				"en-US" : "First name",
				"en-UK" : "First name",
				"de-DE" : "Vorname"
			},
			lastname : {
				"en-US" : "Last name",
				"en-UK" : "Last name",
				"de-DE" : "Nachname"
			},
			email : {
				"en-US" : "Email",
				"en-UK" : "Email",
				"de-DE" : "Email"
			},
			phone : {
				"en-US" : "Phone",
				"en-UK" : "Phone",
				"de-DE" : "Telefon"
			},
			hiredate : {
				"en-US" : "Hire Date",
				"en-UK" : "Hire Date",
				"de-DE" : "Anstellungsdatum"
			},
			addressdetails : {
				"en-US" : "Address Details",
				"en-UK" : "Address Details",
				"de-DE" : "Adressen Details"
			},
			address : {
				"en-US" : "Address",
				"en-UK" : "Address",
				"de-DE" : "Die Anschrift"
			},
			city : {
				"en-US" : "City",
				"en-UK" : "City",
				"de-DE" : "Stadt"
			},
			state : {
				"en-US" : "State",
				"en-UK" : "State",
				"de-DE" : "Bundesland"
			},
			country : {
				"en-US" : "Country",
				"en-UK" : "Country",
				"de-DE" : "Land"
			},
		}
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
				if ( gpeUSERREPORTID[ demoRoleArg ] ) buildExtendedWidgetV2( getAccessDetails( accessURLsArg ), demoRoleArg + "-right");
				topNavItmRole = buildExtraNavItem( demoRoleArg, cultureArg );
				break;
		}

		let topNavItmQLS = document.createElement( "li" );
		topNavItmQLS.className = "trq-tab-group-item ng-star-inserted";
		topNavItmQLS.setAttribute( "role", "presentation" );
		topNavItmQLS.setAttribute( "_ngcontent-nml-c325", "" );
		topNavItmQLS.setAttribute( "trqid", "group-item" );
		topNavItmQLS.setAttribute( "trqiduseparent", "true" );

		if ( demoRoleArg != "ONB") {

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
		}
		
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
 * Creates content for the ONB user
 * @param
 * @param
 * @returns
 */
async function buildOnbWidget(demoRoleArg, cultureArg){
	if(demoRoleArg == "ONB") {

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
		onbHeaderTitle.innerHTML = cs_customLocale.onboarding[cultureArg].headertitle;
		// Get text
		let onbHeaderText = document.createElement( "p" );
		onbHeaderText.innerHTML = cs_customLocale.onboarding[cultureArg].headertext;

		// Get video
		let onbHeaderVideoDiv = document.createElement( "div" );
		onbHeaderVideoDiv.className = "video";

		let onbHeaderVideoObj = document.createElement( "video" );
		onbHeaderVideoObj.setAttribute("width", "70%");
		onbHeaderVideoObj.setAttribute("height", "420");
		onbHeaderVideoObj.setAttribute("controls", "");
		let onbHeaderVideoSrc = document.createElement( "source" );
		onbHeaderVideoSrc.setAttribute("src", cs_customLocale.onboarding[cultureArg].videourl);
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
		onbProcessTitle.innerHTML = cs_customLocale.onboarding[cultureArg].onbprocess.title;

		let onbProcessDesc = document.createElement('div');
		onbProcessDesc.className = "processdesc";
	
		let tmpOnbProcessTextOl = document.createElement('ol');
		tmpOnbProcessTextOl.className = "list";

		for(let textItem in cs_customLocale.onboarding[cultureArg].onbprocess.text) {
			let tmpOnbProcessTextLi = document.createElement('li');
			tmpOnbProcessTextLi.className = "item";

			let tmpOnbProcessTextLiHeadline = document.createElement('h2');
			tmpOnbProcessTextLiHeadline.className = "headline";
			tmpOnbProcessTextLiHeadline.innerHTML = cs_customLocale.onboarding[cultureArg].onbprocess.text[textItem].headline;

			let tmpOnbProcessTextLiText = document.createElement('span');
			tmpOnbProcessTextLiText.innerHTML = cs_customLocale.onboarding[cultureArg].onbprocess.text[textItem].text;

			let tmpOnbResourceDiv = document.createElement('div');
			tmpOnbResourceDiv.className = "resourceTitle";
			tmpOnbResourceDiv.innerHTML = "<br>"+cs_customLocale.onboarding[cultureArg].onbprocess.resourceTitle;

			let tmpOnbResourceUl = document.createElement('ul');
			tmpOnbResourceUl.className = "resList";
			for(let resItem in cs_customLocale.onboarding[cultureArg].onbprocess.text[textItem].resources) {
				let tmpOnbResourceLi = document.createElement("li");
				tmpOnbResourceLi.className = "resItem";
				if(cs_customLocale.onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].type == "url"){
					tmpOnbResourceLi.innerHTML = "<a href='"+cs_customLocale.onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].url+"' target='_blank'>"+cs_customLocale.onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].text+"</a>";
				}else {
					tmpOnbResourceLi.innerHTML = cs_customLocale.onboarding[cultureArg].onbprocess.text[textItem].resources[resItem].text;
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
		onbProcessImg.style.backgroundImage = cs_customLocale.onboarding[cultureArg].onbprocess.imgurl;
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


/*

		// Wrapper
		let onbHeader = document.createElement( "div" );
		onbHeader.className = "onbheader";
		// Get header
		let onbHeaderTitle = document.createElement( "h5" );
		onbHeaderTitle.innerHTML = cs_customLocale.onboarding[cultureArg].headertitle;
		// Get text
		let onbHeaderText = document.createElement( "p" );
		onbHeaderText.innerHTML = cs_customLocale.onboarding[cultureArg].headertext;
		// Get video
		let onbHeaderVideoObj = document.createElement( "object" );
		onbHeaderVideoObj.setAttribute("width", "100%");
		onbHeaderVideoObj.setAttribute("height", "330");
		let onbHeaderVideoPar = document.createElement( "param" );
		onbHeaderVideoPar.setAttribute("name", "onboarding_video");
		onbHeaderVideoPar.setAttribute("value", cs_customLocale.onboarding[cultureArg].videourl);
		let onbHeaderVideoSrc = document.createElement( "embed" );
		onbHeaderVideoSrc.setAttribute("src", cs_customLocale.onboarding[cultureArg].videourl);
		onbHeaderVideoSrc.setAttribute("width", "100%");
		onbHeaderVideoSrc.setAttribute("height", "330");

		onbHeaderVideoObj.appendChild(onbHeaderVideoPar);
		onbHeaderVideoObj.appendChild(onbHeaderVideoSrc);

		onbHeader.appendChild(onbHeaderTitle).appendChild(onbHeaderText);
		onbHeader.appendChild(onbHeaderVideoObj);

*/

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

	setPreloader(gpeUSRCONTENTDIV, "on");
	let widgetPromisesArray = [];
	widgetIDArr.forEach(function(widget) {
		widgetPromisesArray.push(getWidgetData( widget ) );
	});

	return await Promise.all( widgetPromisesArray )
	.then(async function(widgetPromisesArrayComplete) {
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
 * getWidgetData - Executes different functions based on widget availability
 * @param {array} widgetIDArg - Array 
 * @returns Content from function
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
	tmpCardHeader.setAttribute( 'href', widgetData.widgeturl );

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
					const tmpQLS_Div = document.createElement( "div" );
					tmpQLS_Div.className = "qls_btn_"+i1.module+"-"+i1.id;
					tmpQLS_Div.setAttribute( "priority", i1.quicklinkPrio );

					const tmpQLS_Href = document.createElement( "div" );
					tmpQLS_Href.className = "position-relative ";
					// tmpQLS_Href.setAttribute( "href", i1.url );

					const tmpQLS_Button = document.createElement( "button" );
					tmpQLS_Button.setAttribute("data-href", i1.url);
					tmpQLS_Button.setAttribute("type", "button");
					tmpQLS_Button.setAttribute( "content", i1.title);
					tmpQLS_Button.className = "quicklinks_button";
					tmpQLS_Button.textContent = i1.title;

					tmpQLS_Href.appendChild( tmpQLS_Button );
					tmpQLS_Div.appendChild( tmpQLS_Href );
					tmpContentDiv.appendChild( tmpQLS_Div );
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
 * getTranscriptDetails - Takes data from Transcript widget and displays on page in a different way (in a table). There's a limit on only display the top 10...
 * @param {string} contentDivClassArg - HTML Div where to put the widget.
  * @returns {array} tmpContentDiv - finalized HTML div with all content.
 */
async function getTranscriptDetails( contentDivClassArg ) {
		var tmpContentDiv = document.createElement( "div" );
		tmpContentDiv.className = contentDivClassArg;
		tmpContentDiv.setAttribute( "id", contentDivClassArg );

		var tmpContent = document.querySelector( "div[data-tag='pnlMyTraining'] div[id$='_widgetContainer_ctl00_upnlList'] table" );
		let data = [];
		if(tmpContent.rows.length >= 1){
			data = [ ...tmpContent.rows ].map( row => [ ...row.cells ].map( td => {
				return td.innerHTML.replace( /\s+/g, ' ' ).trim();
			} ) );
			data.shift();
		}

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
 * getTranscriptDetailsV2 - Takes data via API and displays on page in a different way (in a table)
 * @param {string} contentDivClassArg - HTML Div where to put the widget.
  * @returns {array} tmpContentDiv - finalized HTML div with all content.
 */
 async function getTranscriptDetailsV2( contentDivClassArg ) {
    return await checkJWT()
    	.then( async function() {
			let params = {
				"UserId": "csanders@CS_en-US"
			};
			  
			  let query = Object.keys(params)
						   .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
						   .join('&');
			  
			  let url = '/services/api/TranscriptAndTask/Transcript?' + query;

    		// let rptURL = "/services/api/lms/user/"+ sessionStorage.csUser +"/transcript?isCompleted=false&isArchived=false&isRemoved=false&isStandAlone=true&sortCriteria=StatusChangeDate&pageSize=20&pageNum=1";
    		let rptURL = "/services/api/TranscriptAndTask/Transcript?UserId=48";
    		return await fetch( url, {
    			method: 'GET',
    			headers: {
    				'Content-Type': 'application/json',
    				'Authorization': 'Bearer ' + sessionStorage.csToken,
    			},
    		} );
    	} )
    	.then( response => response.json() )
    	.then( async function( userTranscript ) {
			console.log( userTranscript.data );
		} );

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

	var tmpContent = document.querySelector( "div[data-tag='pnlActionItems'] table[id*='_pnlActionItems_content'] table tbody" );
	var columns = [];
	var data = [];
	let actionData = [];
	if(tmpContent != null ){
		data = [ ...tmpContent.rows ].map( row => [ ...row.cells ].map( td => {
			return td.innerHTML.replace( /\s+/g, ' ' ).trim();
		} ) );

		data.shift();
		actionData = data.map(function(actionItem){
			return {
				url: actionItem[0],
				duedate: actionItem[1]
			};
		});
		
		columns = [ {
			title: cs_widgetConfig[contentDivClassArg].tablecolumns.url[sessionStorage.csCulture],
			field: "url",
			sortable: false,
			visible: true

		},
		{
			title: cs_widgetConfig[contentDivClassArg].tablecolumns.duedate[sessionStorage.csCulture],
			field: "duedate",
			sortable: true,
			visible: true
		}];
	}	

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
		data: actionData
	} );

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
			if(achievedData != 0) {
				return await Promise.resolve(await drawDonut( achievedData, widgetIDArg, tmpContentDiv));
			}else {
				let tempTitle = cs_widgetConfig[widgetIDArg].nocontenttitle[ sessionStorage.csCulture ];
				let noContentStr = "<div class='nocontent donut'>";
				noContentStr += "<button type='button' id='"+widgetIDArg+"_nodata' class='getstarted_button' data-href='"+cs_widgetConfig[widgetIDArg].getstartedurl+"'>" + tempTitle + "</button>";
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
 * !!! NOT IN USE !!!! buildExtendedWidget - Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
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

		// Use this for approval widget, instead of page scraping (as-is)
		//let rptURL = "/services/api/TranscriptAndTask/Inbox?UserId=csanders@CS_en-US&Language=de-DE";

		// Possibly use this instead of action widget
		//let rptURL = "/services/api/TranscriptAndTask/Task?UserId=csanders@CS_en-US&Language={LANGUAGE}";

		// Get transcript
		//let rptURL = "/services/api/TranscriptAndTask/Transcript?UserId=csanders@CS_en-US&InprogressOnly=true&Language=de-DE"

		// Get certifications
		// let rptURL = "/services/api/CertificationTranscript/CertificationTranscriptDetails?UserId=rjones@CS_en-US"
		
		// Get Goal details
		// let rptURL = "/services/api/Goals/GetDetails?UserId=rjones@CS_en-US&StartDate=2021-01-01&EndDate=2021-12-31";

		// Get team... does include user's manager.
		// let rptURL = "/services/api/Search/Team/47?page=1&amp;pageSize=10";

		// Get overall details (URLS + image)	
		// let rptURL = "/services/api/LMS/user/47";

		// LMS Metrics (own user only)
		// let rptURL = "/services/api/LMS/user/47/transcript/metrics";

		// Get recommended training (own user only)
		// let rptURL = "/services/api/LMS/user/47/recommendedtraining";

		// Learner Home details (own users)
		// let rptURL = "/services/api/bff/learnerhome/user/47/stats";

function play() {
	checkJWT()
	.then( async function() {
		///transcript?isCompleted=false&isArchived=false&isRemoved=false&isStandAlone=true&sortCriteria=StatusChangeDate&pageSize=20&pageNum=1
		let rptURL = "/services/api/lms/user/47/transcript?hasDueDate=true&isCompleted=false&isArchived=false&isRemoved=false&page=1&pageSize=20&sortCriteria=DueDate&sortDirection=Ascending";
		// let rptURL = "/services/api/lms/user/49/recommendedtraining?type=Position&pageSize=20&pageNum=1";
		// let rptURL = "/services/api/CertificationTranscript/CertificationTranscriptDetails?UserId=rjones@CS_en-US";
		// let rptURL = "/v1/users/47/default-password";

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
		console.dir(userData);
	} );
}

/**
 * buildExtendedWidgetV2 - Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
 * @param {array} accessArrArg - Array of available navigation items which is based on user's security role (permissions).
 * @param {string} appendDivArg - Where to put the card...
 * @returns HTML table to be put on the welcome page
 */
async function buildExtendedWidgetV2( accessArrArg, appendDivArg ) {
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
                    title: cs_widgetConfig.managerwidget.tableheader.name[sessionStorage.csCulture],
                    field: "fullName"
                }, {
                    title: cs_widgetConfig.managerwidget.tableheader.hiredate[sessionStorage.csCulture],
                    field: "hiredate"
                },
                {
                    title: cs_widgetConfig.managerwidget.tableheader.actions[sessionStorage.csCulture],
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

			var cardTitle = cs_customLocale.ManagerWidgetTitle[ sessionStorage.csCulture ]; // cardTitleArg - Title of the card.
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
  return [
      '<div class="dropdown">',
        '<a class="btn btn-secondary dropdown-toggle" data-boundary="viewport" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
        cs_widgetConfig.managerwidget.tableheader.actions[sessionStorage.csCulture],
        '</a>',
        '<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser='+ row.id +'">'+ cs_widgetConfig.managerwidget.actionsitems.openup[sessionStorage.csCulture] +'</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&TargetUser='+ row.id +'">'+ cs_widgetConfig.managerwidget.actionsitems.viewtranscript[sessionStorage.csCulture] +'</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot&TargetUser='+ row.id +'">'+ cs_widgetConfig.managerwidget.actionsitems.viewsnapshot[sessionStorage.csCulture] +'</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Goals&TargetUser='+ row.id +'">'+ cs_widgetConfig.managerwidget.actionsitems.viewgoals[sessionStorage.csCulture] +'</a></li>',
          '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew&targetUser='+ row.id +'">'+ cs_widgetConfig.managerwidget.actionsitems.viewdevplan[sessionStorage.csCulture] +'</a></li>',
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
	let html = [];

	html.push('<div class="col-xs-12 col-sm-12 col-md-12">');
	html.push('<div class="well well-sm">');
	html.push('<div class="row">');

	html.push('<div class="col-sm-6 col-md-6">');
	// html.push('<h5>');
	// html.push('<b>'+ row.fullName  +'</b></h5>');
	html.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.firstname[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.firstName +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.lastname[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.lastName +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.email[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.primaryEmail +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.phone[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.workPhone +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.hiredate[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.hiredate +'</td>');
	html.push('</tr>');
	html.push('</table>');
	html.push('</div>');
   
	html.push('<div class="col-sm-6 col-md-6">');
	// html.push('<h5><b>'+ cs_widgetConfig.managerwidget.detailtable.addressdetails[sessionStorage.csCulture] +'</b></h5>');
	html.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.address[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.address.line1 +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.city[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.address.city +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.state[sessionStorage.csCulture] +'</td>');
	html.push('<td>'+ row.address.state +'</td>');
	html.push('</tr>');
	html.push('<tr>');
	html.push('<td>'+ cs_widgetConfig.managerwidget.detailtable.country[sessionStorage.csCulture] +'</td>');
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
			checkinStr += "<button type='button' id='createNewCheckInsBTN' class='getstarted_button' data-href='"+cs_widgetConfig[contentDivClassArg].getstartedurl+"'>" + cs_widgetConfig[contentDivClassArg].nocontenttitle[ sessionStorage.csCulture ] + "</button>";
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
function updateReportToken_old() {
	return fetch( "/Analytics/ReportBuilder/index.aspx/GetNewToken", {
			method: 'GET',
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
 		.then(tokenResponse => {
			return fetch("https://scfiles.csod.com/Baseline/Config/json/accessURLs.json");
		})
		.then(accessURLs => accessURLs.json())
		.then(async function(accessURLs) {
			sessionStorage.setItem("csAccessURLs", JSON.stringify(accessURLs));
			const gpeNav = await buildNav(gpeDEMOROLE, sessionStorage.csCulture, getAccessDetails(accessURLs));
			const gpeAboutCard = await buildAboutCard();
			const gpeQuickLinks = await buildQuickLinksCard(accessURLs, sessionStorage.csCulture);
			const gpeApprovals = await getApprovalDetails(approvalURLs, sessionStorage.csCulture, gpeDEMOROLE);
			const gpeOnboarding = await buildOnbWidget(gpeDEMOROLE, sessionStorage.csCulture);

			return await Promise.all([gpeNav, gpeAboutCard, gpeQuickLinks, gpeApprovals, accessURLs, gpeOnboarding]);
		})
		.then(async function([gpeNav, gpeAbt, gpeQLS, gpeAppr, accessURLs]) {
            console.log("NAV/ABT/QLS/APPROVALS DONE");
            const gpeWidgets = await buildWidgets(getAccessDetails(accessURLs), sessionStorage.csCulture);
            return await Promise.resolve(gpeWidgets);
        })
        .then(async function(data) {
            console.log("WIDGETS DONE");
			console.log(data);
            // console.log("READY WITH BASIC WIDGETS!");

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
