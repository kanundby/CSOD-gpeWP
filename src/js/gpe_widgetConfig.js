"use strict";
if(!sessionStorage.gpeWidgetConfig) {
const gpeWidgetConfig = [{
	"GPEWPCONFIG": {
		"USR" : {
			"MODS" : {
				"ATS" : {
					"SETTINGS": {
						"AVAILABILITY": 0,
						"ORDER": 99
					}
				},
				"EPM" : {
					"SETTINGS": {
						"AVAILABILITY": 1,
						"ORDER": 1,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "CHECKINS",
							"ORDER": 1,
							"COLUMNSIZE": 6
						},
						"WIDGET_2": {
							"ID": "GOAL_PROGRESS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "DEVPLAN_PROGRESS",
							"ORDER": 3,
							"COLUMNSIZE": 3
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "SURVEYS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "FEEDBACK",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "PERF_REVIEWS",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "CHECKINS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "COMPETENCYTASK",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "GOALS",
							"ORDER": 6
						}
					}				
				},
				"LMS" : {
					"SETTINGS": {
						"AVAILABILITY": 1,
						"ORDER": 1,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "TRENDING_FOR_JOB",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "TRAINING_METRICS",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},					
					"LINKS": {
						"LINK_1": {
							"ID": "LEARNER_HOME",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "COMMUNITIES",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "LEARNER_SEARCH",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "TRAINING_HISTORY",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "PLAYLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "LEADERBOARD",
							"ORDER": 6
						}
					}	
				}
			},
			"TOPLINKS" : {
				"LINK_1": {
					"ID": "SNAPSHOT",
					"ORDER": 1
				},
				"LINK_2": {
					"ID": "SKILLSPROFILE",
					"ORDER": 2
				},
				"LINK_3": {
					"ID": "FORMS",
					"ORDER": 3
				},
				"LINK_4": {
					"ID": "LIVEFEED",
					"ORDER": 4
				},
				"LINK_5": {
					"ID": "CAREER_SITE",
					"ORDER": 5
				}
			}
		},
		"MGR" : {
			"MODS" : {
				"ATS" : {
					"SETTINGS": {
						"AVAILABILITY": 1,
						"ORDER": 2,
						"TARGETDIV" : "MGR"
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "TOTALCANDIDATES",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "NEWSUBMISSIONS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "NEWHIRES",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "REQREQUESTS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "MANAGEREQ",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "MANAGECANDIDATES",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "INTERVIEWS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "HIRINGDASHBOARD",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "CANDIDATESEARCH",
							"ORDER": 6
						}
					}
				},
				"EPM" : {
					"SETTINGS": {
						"AVAILABILITY": 1,
						"ORDER": 2,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "CHECKINS",
							"ORDER": 1,
							"COLUMNSIZE": 6
						},
						"WIDGET_2": {
							"ID": "GOAL_PROGRESS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "DEVPLAN_PROGRESS",
							"ORDER": 3,
							"COLUMNSIZE": 3
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "SURVEYS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "FEEDBACK",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "PERF_REVIEWS",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "CHECKINS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "CHECKLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "SKILLSMATRIX",
							"ORDER": 6
						}
					}
				},
				"LMS" : {
					"SETTINGS": {
						"AVAILABILITY": 1,
						"ORDER": 1,
						"TARGETDIV" : "USR",	
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "TRENDING_FOR_JOB",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "TRAINING_METRICS",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "LEARNER_HOME",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "COMMUNITIES",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "LEARNER_SEARCH",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "TRAINING_HISTORY",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "PLAYLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "LEADERBOARD",
							"ORDER": 6
						}
					}
				},
				"EXT" : {
					"SETTINGS" : {
						"ORDER" : 1,
						"TARGETDIV" : "MGR-right"
					},
					"WIDGETS" : {
						"WIDGET_1" : {
							"ID" : "DIRECT_REPORTS",
							"ORDER" : 1,
							"COLUMNSIZE" : 6
						},
						"WIDGET_2" : {
							"ID" : "RPT_ORGGOALPROGRESS",
							"ORDER" : 2,
							"COLUMNSIZE" : 3
						},
						"WIDGET_3" : {
							"ID" : "RPT_PASTDUE",
							"ORDER" : 3,
							"COLUMNSIZE" : 3
						}                                   
					},
					"LINKS" : {
						"LINK_1" : {
							"ID" : "SKILLSMATRIX",
							"ORDER" : 1
						},
						"LINK_2" : {
							"ID" : "CHECKLISTS",
							"ORDER" : 2
						},
						"LINK_3" : {
							"ID" : "CHECKINS",
							"ORDER" : 3
						},
						"LINK_4" : {
							"ID" : "VIEWDATA",
							"ORDER" : 4
						},
						"LINK_5" : {
							"ID" : "VIEWPEOPLE",
							"ORDER" : 5
						},
						"LINK_6" : {
							"ID" : "DASHBOARD",
							"ORDER" : 6
						}
					}
				}
			},
			"TOPLINKS" : {
				"LINK_1": {
					"ID": "SNAPSHOT",
					"ORDER": 1
				},
				"LINK_2": {
					"ID": "SKILLSPROFILE",
					"ORDER": 2
				},
				"LINK_3": {
					"ID": "ACTIONS",
					"ORDER": 3
				},
				"LINK_4": {
					"ID": "ORGCHART",
					"ORDER": 4
				},
				"LINK_5": {
					"ID": "REPORTS",
					"ORDER": 5
				}				
			}
		},
		"HRD" : {
			"MODS" : {
				"ATS" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 1,
						"TARGETDIV" : "HRD",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "TOTALCANDIDATES",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "NEWSUBMISSIONS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "NEWHIRES",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "REQREQUESTS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "MANAGEREQ",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "MANAGECANDIDATES",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "INTERVIEWS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "HIRINGDASHBOARD",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "CANDIDATESEARCH",
							"ORDER": 6
						}
					}
				},
				"EPM" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 3,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "CHECKINS",
							"ORDER": 1,
							"COLUMNSIZE": 6
						},
						"WIDGET_2": {
							"ID": "GOAL_PROGRESS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "DEVPLAN_PROGRESS",
							"ORDER": 3,
							"COLUMNSIZE": 3
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "SURVEYS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "FEEDBACK",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "PERF_REVIEWS",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "CHECKINS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "CHECKLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "SKILLSMATRIX",
							"ORDER": 6
						}
					}
				},
				"LMS" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 2,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "TOP_PICKS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "TRAINING_METRICS",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "LEARNER_HOME",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "COMMUNITIES",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "LEARNER_SEARCH",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "TRAINING_HISTORY",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "PLAYLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "LEADERBOARD",
							"ORDER": 6
						}
					}
				},
				"EXT" : {
					"SETTINGS" : {
						"ORDER" : 1,
						"TARGETDIV" : "HRD-right"
					},
					"WIDGETS" : {
						"WIDGET_1" : {
							"ID" : "RPT_HEADCOUNT",
							"ORDER" : 1,
							"COLUMNSIZE" : 6
						},
						"WIDGET_2" : {
							"ID" : "RPT_ORGGOALPROGRESS",
							"ORDER" : 2,
							"COLUMNSIZE" : 3
						},
						"WIDGET_3" : {
							"ID" : "RPT_TRAININGPROGRESSSUMMARY",
							"ORDER" : 3,
							"COLUMNSIZE" : 3
						}
					}
				}
			},
			"TOPLINKS" : {
				"LINK_1": {
					"ID": "SNAPSHOT",
					"ORDER": 1
				},
				"LINK_2": {
					"ID": "SKILLSPROFILE",
					"ORDER": 2
				},
				"LINK_3": {
					"ID": "FORMS",
					"ORDER": 3
				},
				"LINK_4": {
					"ID": "ORGCHART",
					"ORDER": 4
				},
				"LINK_5": {
					"ID": "REPORTS",
					"ORDER": 5
				}				
			}
		},
		"ADM" : {
			"MODS" : {
				"ATS" : {
					"SETTINGS" : {
						"AVAILABILITY": 0,
						"ORDER": 99
					},
				},
				"EPM" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 2,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "CHECKINS",
							"ORDER": 1,
							"COLUMNSIZE": 6
						},
						"WIDGET_2": {
							"ID": "GOAL_PROGRESS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "DEVPLAN_PROGRESS",
							"ORDER": 3,
							"COLUMNSIZE": 3
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "SURVEYS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "FEEDBACK",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "PERF_REVIEWS",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "CHECKINS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "CHECKLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "SKILLSMATRIX",
							"ORDER": 6
						}
					}
				},
				"LMS" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 1,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "TOP_PICKS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "TRAINING_METRICS",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "LEARNER_HOME",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "COMMUNITIES",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "LEARNER_SEARCH",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "TRAINING_HISTORY",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "PLAYLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "LEADERBOARD",
							"ORDER": 6
						}
					}
				},
				"EXT" : {
					"SETTINGS" : {
						"ORDER" : 1,
						"TARGETDIV" : "ADM-right"
					},
					"WIDGETS" : {                               
						"WIDGET_1" : {
							"ID" : "RPT_HEADCOUNT",
							"ORDER" : 1,
							"COLUMNSIZE" : 6
						},
						"WIDGET_2" : {
							"ID" : "RPT_USERRECORDBYMGR",
							"ORDER" : 2,
							"COLUMNSIZE" : 3
						},
						"WIDGET_3" : {
							"ID" : "RPT_EMPLOYEESTATUS",
							"ORDER" : 3,
							"COLUMNSIZE" : 3
						}
					}
				}
			},
			"TOPLINKS" : {
				"LINK_1": {
					"ID": "SNAPSHOT",
					"ORDER": 1
				},
				"LINK_2": {
					"ID": "SKILLSPROFILE",
					"ORDER": 2
				},
				"LINK_3": {
					"ID": "FORMS",
					"ORDER": 3
				},
				"LINK_4": {
					"ID": "LEARNER_ADMIN",
					"ORDER": 4
				},
				"LINK_5": {
					"ID": "REPORTS",
					"ORDER": 5
				}				
			}
		},
		"REC" : {
			"MODS" : {
				"ATS" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 1,
						"TARGETDIV" : "REC",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "TOTALCANDIDATES",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "NEWSUBMISSIONS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "NEWHIRES",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "REQREQUESTS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "MANAGEREQ",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "MANAGECANDIDATES",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "INTERVIEWS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "HIRINGDASHBOARD",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "CANDIDATESEARCH",
							"ORDER": 6
						}
					}
				},
				"EPM" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 2,
						"TARGETDIV" : "USR",                
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "CHECKINS",
							"ORDER": 1,
							"COLUMNSIZE": 6
						},
						"WIDGET_2": {
							"ID": "GOAL_PROGRESS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "DEVPLAN_PROGRESS",
							"ORDER": 3,
							"COLUMNSIZE": 3
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "SURVEYS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "FEEDBACK",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "PERF_REVIEWS",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "CHECKINS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "CHECKLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "SKILLSMATRIX",
							"ORDER": 6
						}
					}
				},
				"LMS" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 3,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "TRENDING_FOR_JOB",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "TRAINING_METRICS",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "LEARNER_HOME",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "COMMUNITIES",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "LEARNER_SEARCH",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "TRAINING_HISTORY",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "PLAYLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "LEADERBOARD",
							"ORDER": 6
						}
					}
				}
			},
			"TOPLINKS" : {
				"LINK_1": {
					"ID": "SNAPSHOT",
					"ORDER": 1
				},
				"LINK_2": {
					"ID": "SKILLSPROFILE",
					"ORDER": 2
				},
				"LINK_3": {
					"ID": "FORMS",
					"ORDER": 3
				},
				"LINK_4": {
					"ID": "ORGCHART",
					"ORDER": 4
				},
				"LINK_5": {
					"ID": "REPORTS",
					"ORDER": 5
				}				
			}
		},
		"INS" : {
			"MODS" : {
				"ATS" : {
					"SETTINGS" : {
						"AVAILABILITY": 0,
						"ORDER": 99
					}
				},
				"EPM" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 2,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "CHECKINS",
							"ORDER": 1,
							"COLUMNSIZE": 6
						},
						"WIDGET_2": {
							"ID": "GOAL_PROGRESS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "DEVPLAN_PROGRESS",
							"ORDER": 3,
							"COLUMNSIZE": 3
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "SURVEYS",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "FEEDBACK",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "PERF_REVIEWS",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "CHECKINS",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "CHECKLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "SKILLSMATRIX",
							"ORDER": 6
						}
					}
				},
				"LMS" : {
					"SETTINGS" : {
						"AVAILABILITY": 1,
						"ORDER": 1,
						"TARGETDIV" : "USR",
					},
					"WIDGETS": {
						"WIDGET_1": {
							"ID": "INSPIRED_BY_SUBJECTS",
							"ORDER": 1,
							"COLUMNSIZE": 3
						},
						"WIDGET_2": {
							"ID": "TOP_PICKS",
							"ORDER": 2,
							"COLUMNSIZE": 3
						},
						"WIDGET_3": {
							"ID": "TRAINING_METRICS",
							"ORDER": 3,
							"COLUMNSIZE": 6
						}
					},
					"LINKS": {
						"LINK_1": {
							"ID": "LEARNER_HOME",
							"ORDER": 1
						},
						"LINK_2": {
							"ID": "COMMUNITIES",
							"ORDER": 2
						},
						"LINK_3": {
							"ID": "LEARNER_SEARCH",
							"ORDER": 3
						},
						"LINK_4": {
							"ID": "TRAINING_HISTORY",
							"ORDER": 4
						},
						"LINK_5": {
							"ID": "PLAYLISTS",
							"ORDER": 5
						},
						"LINK_6": {
							"ID": "LEADERBOARD",
							"ORDER": 6
						}
					}
				},
				"EXT" : {
					"SETTINGS" : {
						"ORDER" : 1,
						"TARGETDIV" : "INS-right"
					},
					"WIDGETS" : {
						"WIDGET_1" : {
							"ID" : "RPT_TRAININGWITHDRAWALS",
							"ORDER" : 1,
							"COLUMNSIZE" : 3
						},
						"WIDGET_2" : {
							"ID" : "RPT_ASSIGNEDTRAININGSTATUS",
							"ORDER" : 2,
							"COLUMNSIZE" : 3
						},
						"WIDGET_3" : {
							"ID" : "RPT_SESSIONSEATAVAILABILITY",
							"ORDER" : 3,
							"COLUMNSIZE" : 6
						}                                            
					},
					"LINKS" : {
						"LINK_1" : {
							"ID" : "MYSESSIONS",
							"ORDER" : 1
						},
						"LINK_2" : {
							"ID" : "CATALOGMANAGEMENT",
							"ORDER" : 2
						},
						"LINK_3" : {
							"ID" : "EVENTS_SESSIONS",
							"ORDER" : 3
						},
						"LINK_4" : {
							"ID" : "LEARNER_ADMIN",
							"ORDER" : 4
						},
						"LINK_5" : {
							"ID" : "DASHBOARD",
							"ORDER" : 5
						},
						"LINK_6" : {
							"ID" : "REPORTBUILDER",
							"ORDER" : 6
						}
					}
				}
			},
			"TOPLINKS" : {
				"LINK_1": {
					"ID": "SNAPSHOT",
					"ORDER": 1
				},
				"LINK_2": {
					"ID": "SKILLSPROFILE",
					"ORDER": 2
				},
				"LINK_3": {
					"ID": "FORMS",
					"ORDER": 3
				},
				"LINK_4": {
					"ID": "ORGCHART",
					"ORDER": 4
				},
				"LINK_5": {
					"ID": "REPORTS",
					"ORDER": 5
				}				
			}
		}
	}
}];

sessionStorage.setItem("gpeWidgetConfig", JSON.stringify(gpeWidgetConfig));
}