"use strict";
if(!sessionStorage.gpeWidgetConfig) {
const gpeWidgetConfig = [{
	"GPEWPCONFIG": {
		"USR" : {
			"MODS" : {
				"ATS" : {
					"CFG": {
						"AVB": 0,
						"O": 99
					}
				},
				"EPM" : {
					"CFG": {
						"AVB": 1,
						"O": 1,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "CHECKINS",
							"O": 1,
							"CS": 6
						},
						"W_2": {
							"ID": "GOAL_PROGRESS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "DEVPLAN_PROGRESS",
							"O": 3,
							"CS": 3
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "SURVEYS",
							"O": 1
						},
						"L_2": {
							"ID": "FEEDBACK",
							"O": 2
						},
						"L_3": {
							"ID": "PERF_REVIEWS",
							"O": 3
						},
						"L_4": {
							"ID": "CHECKINS",
							"O": 4
						},
						"L_5": {
							"ID": "COMPETENCYTASK",
							"O": 5
						},
						"L_6": {
							"ID": "GOALS",
							"O": 6
						}
					}				
				},
				"LMS" : {
					"CFG": {
						"AVB": 1,
						"O": 1,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"O": 2,
							"CS": 3
						},
						"W_2": {
							// "ID": "TRENDING_FOR_JOB",
							"ID": "NEW_TRAININGS",
							"O": 3,
							"CS": 3
						},
						"W_3": {
							"ID": "TRAINING_METRICS",
							"O": 1,
							"CS": 6
						}
					},					
					"LINKS": {
						"L_1": {
							"ID": "LEARNER_HOME",
							"O": 1
						},
						"L_2": {
							"ID": "COMMUNITIES",
							"O": 2
						},
						"L_3": {
							"ID": "LEARNER_SEARCH",
							"O": 3
						},
						"L_4": {
							"ID": "TRAINING_HISTORY",
							"O": 4
						},
						"L_5": {
							"ID": "PLAYLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "LEADERBOARD",
							"O": 6
						}
					}	
				}
			},
			"TOPLINKS" : {
				"L_1": {
					"ID": "SNAPSHOT",
					"O": 1
				},
				"L_2": {
					"ID": "SKILLSPROFILE",
					"O": 2
				},
				"L_3": {
					"ID": "FORMS",
					"O": 3
				},
				"L_4": {
					"ID": "LIVEFEED",
					"O": 4
				},
				"L_5": {
					"ID": "CAREER_SITE",
					"O": 5
				}
			}
		},
		"MGR" : {
			"MODS" : {
				"ATS" : {
					"CFG": {
						"AVB": 1,
						"O": 2,
						"TD" : "MGR"
					},
					"W": {
						"W_1": {
							"ID": "TOTALCANDIDATES",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "NEWSUBMISSIONS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "NEWHIRES",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "REQREQUESTS",
							"O": 1
						},
						"L_2": {
							"ID": "MANAGEREQ",
							"O": 2
						},
						"L_3": {
							"ID": "MANAGECANDIDATES",
							"O": 3
						},
						"L_4": {
							"ID": "INTERVIEWS",
							"O": 4
						},
						"L_5": {
							"ID": "HIRINGDASHBOARD",
							"O": 5
						},
						"L_6": {
							"ID": "CANDIDATESEARCH",
							"O": 6
						}
					}
				},
				"EPM" : {
					"CFG": {
						"AVB": 1,
						"O": 2,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "CHECKINS",
							"O": 1,
							"CS": 6
						},
						"W_2": {
							"ID": "GOAL_PROGRESS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "DEVPLAN_PROGRESS",
							"O": 3,
							"CS": 3
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "SURVEYS",
							"O": 1
						},
						"L_2": {
							"ID": "FEEDBACK",
							"O": 2
						},
						"L_3": {
							"ID": "PERF_REVIEWS",
							"O": 3
						},
						"L_4": {
							"ID": "CHECKINS",
							"O": 4
						},
						"L_5": {
							"ID": "CHECKLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "SKILLSMATRIX",
							"O": 6
						}
					}
				},
				"LMS" : {
					"CFG": {
						"AVB": 1,
						"O": 2,
						"TD" : "USR",	
					},
					"W": {
						"W_1": {
							"ID": "NEW_TRAININGS",
//							"ID": "INSPIRED_BY_SUBJECTS",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "TRENDING_FOR_JOB",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "TRAINING_METRICS",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "LEARNER_HOME",
							"O": 1
						},
						"L_2": {
							"ID": "COMMUNITIES",
							"O": 2
						},
						"L_3": {
							"ID": "LEARNER_SEARCH",
							"O": 3
						},
						"L_4": {
							"ID": "TRAINING_HISTORY",
							"O": 4
						},
						"L_5": {
							"ID": "PLAYLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "LEADERBOARD",
							"O": 6
						}
					}
				},
				"EXT" : {
					"CFG" : {
						"O" : 1,
						"TD" : "MGR-right"
					},
					"W" : {
						"W_1" : {
							"ID" : "DIRECT_REPORTS",
							"O" : 1,
							"CS" : 6
						},
						"W_2" : {
							"ID" : "RPT_ORGGOALPROGRESS",
							"O" : 2,
							"CS" : 3
						},
						"W_3" : {
							"ID" : "RPT_PASTDUE",
							"O" : 3,
							"CS" : 3
						}                                   
					},
					"LINKS" : {
						"L_1" : {
							"ID" : "EXPRESSCLASS",
							"O" : 1
						},
						"L_2" : {
							"ID" : "CHECKLISTS",
							"O" : 2
						},
						"L_3" : {
							"ID" : "CHECKINS",
							"O" : 3
						},
						"L_4" : {
							"ID" : "OJTOBS",
							"O" : 4
						},
						"L_5" : {
							"ID" : "VIEWPEOPLE",
							"O" : 5
						},
						"L_6" : {
							"ID" : "DASHBOARD",
							"O" : 6
						}
					}
				}
			},
			"TOPLINKS" : {
				"L_1": {
					"ID": "SNAPSHOT",
					"O": 1
				},
				"L_2": {
					"ID": "SKILLSPROFILE",
					"O": 2
				},
				"L_3": {
					"ID": "ACTIONS",
					"O": 3
				},
				"L_4": {
					"ID": "ORGCHART",
					"O": 4
				},
				"L_5": {
					"ID": "REPORTS",
					"O": 5
				}				
			}
		},
		"HRD" : {
			"MODS" : {
				"ATS" : {
					"CFG" : {
						"AVB": 1,
						"O": 1,
						"TD" : "HRD"
					},
					"W": {
						"W_1": {
							"ID": "TOTALCANDIDATES",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "NEWSUBMISSIONS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "NEWHIRES",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "REQREQUESTS",
							"O": 1
						},
						"L_2": {
							"ID": "MANAGEREQ",
							"O": 2
						},
						"L_3": {
							"ID": "MANAGECANDIDATES",
							"O": 3
						},
						"L_4": {
							"ID": "INTERVIEWS",
							"O": 4
						},
						"L_5": {
							"ID": "HIRINGDASHBOARD",
							"O": 5
						},
						"L_6": {
							"ID": "CANDIDATESEARCH",
							"O": 6
						}
					}
				},
				"EPM" : {
					"CFG" : {
						"AVB": 1,
						"O": 3,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "CHECKINS",
							"O": 1,
							"CS": 6
						},
						"W_2": {
							"ID": "GOAL_PROGRESS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "DEVPLAN_PROGRESS",
							"O": 3,
							"CS": 3
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "SURVEYS",
							"O": 1
						},
						"L_2": {
							"ID": "FEEDBACK",
							"O": 2
						},
						"L_3": {
							"ID": "PERF_REVIEWS",
							"O": 3
						},
						"L_4": {
							"ID": "CHECKINS",
							"O": 4
						},
						"L_5": {
							"ID": "CHECKLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "SKILLSMATRIX",
							"O": 6
						}
					}
				},
				"LMS" : {
					"CFG" : {
						"AVB": 1,
						"O": 2,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "TOP_PICKS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "TRAINING_METRICS",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "LEARNER_HOME",
							"O": 1
						},
						"L_2": {
							"ID": "COMMUNITIES",
							"O": 2
						},
						"L_3": {
							"ID": "LEARNER_SEARCH",
							"O": 3
						},
						"L_4": {
							"ID": "TRAINING_HISTORY",
							"O": 4
						},
						"L_5": {
							"ID": "PLAYLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "LEADERBOARD",
							"O": 6
						}
					}
				},
				"EXT" : {
					"CFG" : {
						"O" : 1,
						"TD" : "HRD-right"
					},
					"W" : {
						"W_1" : {
							"ID" : "RPT_HEADCOUNT",
							"O" : 1,
							"CS" : 6
						},
						"W_2" : {
							"ID" : "RPT_ORGGOALPROGRESS",
							"O" : 2,
							"CS" : 3
						},
						"W_3" : {
							"ID" : "RPT_TRAININGPROGRESSSUMMARY",
							"O" : 3,
							"CS" : 3
						}
					}
				}
			},
			"TOPLINKS" : {
				"L_1": {
					"ID": "SNAPSHOT",
					"O": 1
				},
				"L_2": {
					"ID": "SKILLSPROFILE",
					"O": 2
				},
				"L_3": {
					"ID": "FORMS",
					"O": 3
				},
				"L_4": {
					"ID": "ORGCHART",
					"O": 4
				},
				"L_5": {
					"ID": "REPORTS",
					"O": 5
				}				
			}
		},
		"ADM" : {
			"MODS" : {
				"ATS" : {
					"CFG" : {
						"AVB": 0,
						"O": 2,
						"TD" : "ADM"
					},
					"W": {
						"W_1": {
							"ID": "TOTALCANDIDATES",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "NEWSUBMISSIONS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "NEWHIRES",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "REQREQUESTS",
							"O": 1
						},
						"L_2": {
							"ID": "MANAGEREQ",
							"O": 2
						},
						"L_3": {
							"ID": "MANAGECANDIDATES",
							"O": 3
						},
						"L_4": {
							"ID": "INTERVIEWS",
							"O": 4
						},
						"L_5": {
							"ID": "HIRINGDASHBOARD",
							"O": 5
						},
						"L_6": {
							"ID": "CANDIDATESEARCH",
							"O": 6
						}
					}
				},
				"EPM" : {
					"CFG": {
						"AVB": 1,
						"O": 2,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "CHECKINS",
							"O": 1,
							"CS": 6
						},
						"W_2": {
							"ID": "GOAL_PROGRESS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "DEVPLAN_PROGRESS",
							"O": 3,
							"CS": 3
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "SURVEYS",
							"O": 1
						},
						"L_2": {
							"ID": "FEEDBACK",
							"O": 2
						},
						"L_3": {
							"ID": "PERF_REVIEWS",
							"O": 3
						},
						"L_4": {
							"ID": "CHECKINS",
							"O": 4
						},
						"L_5": {
							"ID": "CHECKLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "SKILLSMATRIX",
							"O": 6
						}
					}
				},
				"LMS" : {
					"CFG" : {
						"AVB": 1,
						"O": 1,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "TOP_PICKS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "TRAINING_METRICS",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "LEARNER_HOME",
							"O": 1
						},
						"L_2": {
							"ID": "COMMUNITIES",
							"O": 2
						},
						"L_3": {
							"ID": "LEARNER_SEARCH",
							"O": 3
						},
						"L_4": {
							"ID": "TRAINING_HISTORY",
							"O": 4
						},
						"L_5": {
							"ID": "PLAYLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "LEADERBOARD",
							"O": 6
						}
					}
				},
				"EXT" : {
					"CFG" : {
						"O" : 1,
						"TD" : "ADM-right"
					},
					"W" : {                               
						"W_1" : {
							"ID" : "RPT_HEADCOUNT",
							"O" : 1,
							"CS" : 6
						},
						"W_2" : {
							"ID" : "RPT_USERRECORDBYMGR",
							"O" : 2,
							"CS" : 3
						},
						"W_3" : {
							"ID" : "RPT_EMPLOYEESTATUS",
							"O" : 3,
							"CS" : 3
						}
					},
					"LINKS": {
						L_1: {
							ID: "LEARNER_ADMIN",
							ORDER: 1
						},
						L_2: {
							ID: "CATALOGMANAGEMENT",
							ORDER: 2
						},
						L_3: {
							ID: "EVENTS_SESSIONS",
							ORDER: 3
						},
						L_4: {
							ID: "LAT",
							ORDER: 4
						},
						L_5: {
							ID: "USERADMIN",
							ORDER: 5
						},
						L_6: {
							ID: "REPORTBUILDER",
							ORDER: 6
						}
					}					
				}
			},
			"TOPLINKS" : {
				"L_1": {
					"ID": "SNAPSHOT",
					"O": 1
				},
				"L_2": {
					"ID": "SKILLSPROFILE",
					"O": 2
				},
				"L_3": {
					"ID": "FORMS",
					"O": 3
				},
				"L_4": {
					"ID": "LEARNER_ADMIN",
					"O": 4
				},
				"L_5": {
					"ID": "REPORTS",
					"O": 5
				}
			}
		},
		"REC" : {
			"MODS" : {
				"ATS" : {
					"CFG" : {
						"AVB": 1,
						"O": 1,
						"TD" : "REC",
					},
					"W": {
						"W_1": {
							"ID": "TOTALCANDIDATES",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "NEWSUBMISSIONS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "NEWHIRES",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "REQREQUESTS",
							"O": 1
						},
						"L_2": {
							"ID": "MANAGEREQ",
							"O": 2
						},
						"L_3": {
							"ID": "MANAGECANDIDATES",
							"O": 3
						},
						"L_4": {
							"ID": "INTERVIEWS",
							"O": 4
						},
						"L_5": {
							"ID": "HIRINGDASHBOARD",
							"O": 5
						},
						"L_6": {
							"ID": "CANDIDATESEARCH",
							"O": 6
						}
					}
				},
				"EPM" : {
					"CFG" : {
						"AVB": 1,
						"O": 2,
						"TD" : "USR",                
					},
					"W": {
						"W_1": {
							"ID": "CHECKINS",
							"O": 1,
							"CS": 6
						},
						"W_2": {
							"ID": "GOAL_PROGRESS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "DEVPLAN_PROGRESS",
							"O": 3,
							"CS": 3
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "SURVEYS",
							"O": 1
						},
						"L_2": {
							"ID": "FEEDBACK",
							"O": 2
						},
						"L_3": {
							"ID": "PERF_REVIEWS",
							"O": 3
						},
						"L_4": {
							"ID": "CHECKINS",
							"O": 4
						},
						"L_5": {
							"ID": "CHECKLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "SKILLSMATRIX",
							"O": 6
						}
					}
				},
				"LMS" : {
					"CFG" : {
						"AVB": 1,
						"O": 3,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "TRENDING_FOR_JOB",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "TRAINING_METRICS",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "LEARNER_HOME",
							"O": 1
						},
						"L_2": {
							"ID": "COMMUNITIES",
							"O": 2
						},
						"L_3": {
							"ID": "LEARNER_SEARCH",
							"O": 3
						},
						"L_4": {
							"ID": "TRAINING_HISTORY",
							"O": 4
						},
						"L_5": {
							"ID": "PLAYLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "LEADERBOARD",
							"O": 6
						}
					}
				}
			},
			"TOPLINKS" : {
				"L_1": {
					"ID": "SNAPSHOT",
					"O": 1
				},
				"L_2": {
					"ID": "SKILLSPROFILE",
					"O": 2
				},
				"L_3": {
					"ID": "FORMS",
					"O": 3
				},
				"L_4": {
					"ID": "ORGCHART",
					"O": 4
				},
				"L_5": {
					"ID": "REPORTS",
					"O": 5
				}				
			}
		},
		"INS" : {
			"MODS" : {
				"ATS" : {
					"CFG" : {
						"AVB": 0,
						"O": 99
					}
				},
				"EPM" : {
					"CFG" : {
						"AVB": 1,
						"O": 2,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "CHECKINS",
							"O": 1,
							"CS": 6
						},
						"W_2": {
							"ID": "GOAL_PROGRESS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "DEVPLAN_PROGRESS",
							"O": 3,
							"CS": 3
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "SURVEYS",
							"O": 1
						},
						"L_2": {
							"ID": "FEEDBACK",
							"O": 2
						},
						"L_3": {
							"ID": "PERF_REVIEWS",
							"O": 3
						},
						"L_4": {
							"ID": "CHECKINS",
							"O": 4
						},
						"L_5": {
							"ID": "CHECKLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "SKILLSMATRIX",
							"O": 6
						}
					}
				},
				"LMS" : {
					"CFG" : {
						"AVB": 1,
						"O": 1,
						"TD" : "USR",
					},
					"W": {
						"W_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"O": 1,
							"CS": 3
						},
						"W_2": {
							"ID": "TOP_PICKS",
							"O": 2,
							"CS": 3
						},
						"W_3": {
							"ID": "TRAINING_METRICS",
							"O": 3,
							"CS": 6
						}
					},
					"LINKS": {
						"L_1": {
							"ID": "LEARNER_HOME",
							"O": 1
						},
						"L_2": {
							"ID": "COMMUNITIES",
							"O": 2
						},
						"L_3": {
							"ID": "LEARNER_SEARCH",
							"O": 3
						},
						"L_4": {
							"ID": "TRAINING_HISTORY",
							"O": 4
						},
						"L_5": {
							"ID": "PLAYLISTS",
							"O": 5
						},
						"L_6": {
							"ID": "LEADERBOARD",
							"O": 6
						}
					}
				},
				"EXT" : {
					"CFG" : {
						"O" : 1,
						"TD" : "INS-right"
					},
					"W" : {
						"W_1" : {
							"ID" : "RPT_TRAININGWITHDRAWALS",
							"O" : 1,
							"CS" : 3
						},
						"W_2" : {
							"ID" : "RPT_ASSIGNEDTRAININGSTATUS",
							"O" : 2,
							"CS" : 3
						},
						"W_3" : {
							"ID" : "RPT_SESSIONSEATAVAILABILITY",
							"O" : 3,
							"CS" : 6
						}                                            
					},
					"LINKS" : {
						"L_1" : {
							"ID" : "MYSESSIONS",
							"O" : 1
						},
						"L_2" : {
							"ID" : "CATALOGMANAGEMENT",
							"O" : 2
						},
						"L_3" : {
							"ID" : "EVENTS_SESSIONS",
							"O" : 3
						},
						"L_4" : {
							"ID" : "LEARNER_ADMIN",
							"O" : 4
						},
						"L_5" : {
							"ID" : "DASHBOARD",
							"O" : 5
						},
						"L_6" : {
							"ID" : "REPORTBUILDER",
							"O" : 6
						}
					}
				}
			},
			"TOPLINKS" : {
				"L_1": {
					"ID": "SNAPSHOT",
					"O": 1
				},
				"L_2": {
					"ID": "SKILLSPROFILE",
					"O": 2
				},
				"L_3": {
					"ID": "FORMS",
					"O": 3
				},
				"L_4": {
					"ID": "ORGCHART",
					"O": 4
				},
				"L_5": {
					"ID": "REPORTS",
					"O": 5
				}				
			}
		},
		"ONB" : {
			"TOPLINKS" : {
				"L_1": {
					"ID": "SNAPSHOT",
					"O": 1
				},
				"L_2": {
					"ID": "SKILLSPROFILE",
					"O": 2
				},
				"L_3": {
					"ID": "FORMS",
					"O": 3
				}
			}			
		}
	}
}];

sessionStorage.setItem("gpeWidgetConfig", JSON.stringify(gpeWidgetConfig));
}