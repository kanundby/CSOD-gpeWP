"use strict";

let gpeWidgetConfig = [{
    "MODULECONFIG": {
        "ATS": {
            "settings": {
                "moduletitle": {
                    "en-US": "Recruiting & Onboarding",
                    "en-UK": "Recruiting & Onboarding"
                }
            },
            "USR": {
                "AVAILABILITY": 0,
                "ORDER": 99
            },
            "MGR": {
                "AVAILABILITY": 1,
                "ORDER": 2,
                "TARGETDIV" : "MGR",
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
            "HRD": {
                "AVAILABILITY": 1,
                "ORDER": 1,
                "TARGETDIV" : "HRD",
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
            "ADM": {
                "AVAILABILITY": 0,
                "ORDER": 99
            },
            "REC": {
                "AVAILABILITY": 1,
                "ORDER": 1,
                "TARGETDIV" : "REC",
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
            "INS": {
                "AVAILABILITY": 0,
                "ORDER": 99
            }
        },
        "EPM": {
            "settings": {
                "moduletitle": {
                    "en-US": "Performance & Career",
                    "en-UK": "Performance & Career"
                }
            },
            "USR": {
                "AVAILABILITY": 1,
                "ORDER": 2,
                "TARGETDIV" : "USR",
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
            "MGR": {
                "AVAILABILITY": 1,
                "ORDER": 2,
                "TARGETDIV" : "USR",
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
            "HRD": {
                "AVAILABILITY": 1,
                "ORDER": 3,
                "TARGETDIV" : "USR",
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
            "ADM": {
                "AVAILABILITY": 1,
                "ORDER": 2,
                "TARGETDIV" : "USR",
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
            "REC": {
                "AVAILABILITY": 1,
                "ORDER": 2,
                "TARGETDIV" : "USR",                
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
            "INS": {
                "AVAILABILITY": 1,
                "ORDER": 2,
                "TARGETDIV" : "USR",
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
            }
        },
        "LMS": {
            "settings": {
                "moduletitle": {
                    "en-US": "Learning & Development",
                    "en-UK": "Learning & Development"
                }
            },
            "USR": {
                "AVAILABILITY": 1,
                "ORDER": 1,
                "TARGETDIV" : "USR",
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
            "MGR": {
                "AVAILABILITY": 1,
                "ORDER": 1,
                "TARGETDIV" : "USR",
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
            "HRD": {
                "AVAILABILITY": 1,
                "ORDER": 2,
                "TARGETDIV" : "USR",
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
            "ADM": {
                "AVAILABILITY": 1,
                "ORDER": 1,
                "TARGETDIV" : "USR",
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
            "REC": {
                "AVAILABILITY": 1,
                "ORDER": 3,
                "TARGETDIV" : "USR",
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
            "INS": {
                "AVAILABILITY": 1,
                "ORDER": 1,
                "TARGETDIV" : "USR",
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
            }
        },
        "EXT": {
            "settings": {
                "moduletitle": {
                    "en-US": "Core HR",
                    "en-UK": "Core HR"
                }
            },
            "USR": {
                "AVAILABILITY": 0,
                "ORDER": 1,
                "TARGETDIV" : "USR",
                "WIDGETS": {
                    "WIDGET_1": {
                        "ID": "",
                        "ORDER": 1,
                        "COLUMNSIZE": 3
                    },
                    "WIDGET_2": {
                        "ID": "",
                        "ORDER": 2,
                        "COLUMNSIZE": 3
                    },
                    "WIDGET_3": {
                        "ID": "",
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
            "MGR": {
                "AVAILABILITY": 0,
                "ORDER": 1,
                "TARGETDIV" : "USR",
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
            "HRD": {
                "AVAILABILITY": 0,
                "ORDER": 3,
                "TARGETDIV" : "USR",
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
            "ADM": {
                "AVAILABILITY": 0,
                "ORDER": 1,
                "TARGETDIV" : "USR",
                "WIDGETS": {
                    "WIDGET_1": {
                        "ID": "LMS_ADMINWIDGET",
                        "ORDER": 1,
                        "COLUMNSIZE": 3
                    },
                    "WIDGET_2": {
                        "ID": "LMS_ADMINWIDGET_DETAILS",
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
            "REC": {
                "AVAILABILITY": 0,
                "ORDER": 3,
                "TARGETDIV" : "USR",
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
            "INS": {
                "AVAILABILITY": 0,
                "ORDER": 1,
                "TARGETDIV" : "USR",
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
        }
    },
    "TOPNAVLINKS": {
        "USR": {
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
        },
        "MGR": {
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
        },
        "HRD": {
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
        },
        "ADM": {
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
        },
        "REC": {
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
        },
        "INS": {
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
    "LINKS": {
        "LEARNER_HOME": {
            "TITLE": {
                "en-US": "Learner Home",
                "en-UK": "Learner Home"
            },
            "URL": "/ui/lms-learner-home/home",
            "ICON": "lms_ql_learner_home.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "COMMUNITIES": {
            "TITLE": {
                "en-US": "Communities",
                "en-UK": "Communities"
            },
            "URL": "/phnx/driver.aspx?routename=Social/Communities",
            "ICON": "lms_ql_communities.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "LEARNER_SEARCH": {
            "TITLE": {
                "en-US": "Learner Search",
                "en-UK": "Learner Search"
            },
            "URL": "/ui/lms-learner-search/search?pageNumber=1",
            "ICON": "lms_ql_learner_search.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "TRAINING_HISTORY": {
            "TITLE": {
                "en-US": "Training history",
                "en-UK": "Training history"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&preSelectedCategoryId=3",
            "ICON": "lms_ql_transcript.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "PLAYLISTS": {
            "TITLE": {
                "en-US": "Playlists",
                "en-UK": "Playlists"
            },
            "URL": "/ui/lms-learner-playlist/UsersPlaylists",
            "ICON": "lms_ql_playlists.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "LEADERBOARD": {
            "TITLE": {
                "en-US": "Leaderboard",
                "en-UK": "Leaderboard"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Leaderboard&TargetUser=${csUser}",
            "ICON": "lms_ql_leaderboard.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "SURVEYS": {
            "TITLE": {
                "en-US": "Surveys",
                "en-UK": "Surveys"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=16&sort=0",
            "ICON": "epm_ql_surveys.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM", "CAR"]
        },
        "ACTIONS": {
            "TITLE": {
                "en-US": "Actions",
                "en-UK": "Actions"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions",
            "ICON": "epm_ql_checklists.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "FEEDBACK": {
            "TITLE": {
                "en-US": "Feedback",
                "en-UK": "Feedback"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Feedback",
            "ICON": "epm_ql_feedback.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM", "CAR"]
        },
        "PERF_REVIEWS": {
            "TITLE": {
                "en-US": "Performance Reviews",
                "en-UK": "Performance Reviews"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=6&sort=0",
            "ICON": "epm_ql_perfreviews.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM"]
        },
        "CHECKINS": {
            "TITLE": {
                "en-US": "Check Ins",
                "en-UK": "Check Ins"
            },
            "URL": "/ui/perf-check-ins/Check-Ins/",
            "ICON": "epm_ql_checkins.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CAR"]
        },
        "CHECKLISTS": {
            "TITLE": {
                "en-US": "Checklists",
                "en-UK": "Checklists"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=14",
            "ICON": "epm_ql_checklists.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM"]
        },
        "SKILLSMATRIX": {
            "TITLE": {
                "en-US": "Skills Matrix",
                "en-UK": "Skills Matrix"
            },
            "URL": "/EPM/SkillsMatrix/User/SkillsMatrixPage.aspx",
            "ICON": "epm_ql_skillsmatrix.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM"]
        },
        "REQREQUESTS": {
            "TITLE": {
                "en-US": "Requisition Requests",
                "en-UK": "Requisition Requests"
            },
            "URL": "/ATS/JobRequisitionRequest/RequisitionRequests.aspx",
            "ICON": "ats_ql_requisition_requests.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },
        "MANAGEREQ": {
            "TITLE": {
                "en-US": "Manage Requisitions",
                "en-UK": "Manage Requisitions"
            },
            "URL": "/phnx/driver.aspx?routename=ATS/RecruitingManagement/ManageRequisitions",
            "ICON": "ats_ql_manage_requisitions.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },
        "MANAGECANDIDATES": {
            "TITLE": {
                "en-US": "Manage Candidates",
                "en-UK": "Manage Candidates"
            },
            "URL": "/ui/ats-manage-candidates/managecandidates",
            "ICON": "ats_ql_manage_candidates.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },
        "INTERVIEWS": {
            "TITLE": {
                "en-US": "Interviews",
                "en-UK": "Interviews"
            },
            "URL": "/ATS/Interview/ScheduledInterviews.aspx",
            "ICON": "ats_ql_interviews.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },
        "HIRINGDASHBOARD": {
            "TITLE": {
                "en-US": "Hiring Dashboard",
                "en-UK": "Hiring Dashboard"
            },
            "URL": "/phnx/driver.aspx?routename=ATS/Dashboard/HiringDashboard",
            "ICON": "ats_ql_hiring_dashboard.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },
        "GOALS": {
            "TITLE": {
                "en-US": "Goals",
                "en-UK": "Goals"
            },
            "URL": "/phnx/driver.aspx?routename=Goals/GoalList",
            "ICON": "ats_ql_hiring_dashboard.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },        
        "VIEWPEOPLE": {
            "TITLE": {
                "en-US": "View People",
                "en-UK": "View People"
            },
            "URL": "/phnx/driver.aspx?routename=Analytics/ViewOrg",
            "ICON": "chr_ql_viewpeople.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CHR"]
        },
        "VIEWDATA": {
            "TITLE": {
                "en-US": "View Data",
                "en-UK": "View Data"
            },
            "URL": "/phnx/driver.aspx?routename=Analytics/ViewDiscover",
            "ICON": "chr_ql_viewdata.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CHR"]
        },
        "DASHBOARD": {
            "TITLE": {
                "en-US": "Dashboards",
                "en-UK": "Dashboards"
            },
            "URL": "/Dashboard/Main.aspx",
            "ICON": "core_ql_dashboard.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "TALENTPOOLS": {
            "TITLE": {
                "en-US": "Talent Pools",
                "en-UK": "Talent Pools"
            },
            "URL": "/phnx/driver.aspx?routename=TalentPools/ManageTalentPools",
            "ICON": "epm_ql_talentpools.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM"]
        },
        "9BOXGRIDS": {
            "TITLE": {
                "en-US": "9 Box Grid",
                "en-UK": "9 Box Grid"
            },
            "URL": "/EPM/Smp/User/CurrentGridPlacement.aspx",
            "ICON": "epm_ql_9boxgrids.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM"]
        },
        "ENGAGE": {
            "TITLE": {
                "en-US": "Engage",
                "en-UK": "Engage"
            },
            "URL": "/Engage/Reporting.aspx",
            "ICON": "epm_ql_engage.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CHR"]
        },
        "ORGPLANNING": {
            "TITLE": {
                "en-US": "Org. Planning",
                "en-UK": "Org. Planning"
            },
            "URL": "/pbom/index.aspx",
            "ICON": "epm_ql_orgplanning.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "INSIGHTS": {
            "TITLE": {
                "en-US": "Insights",
                "en-UK": "Insights"
            },
            "URL": "/insights/#/index?tab_page_id=-200159302",
            "ICON": "epm_ql_insights.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "BENCHMARK": {
            "TITLE": {
                "en-US": "Benchmark",
                "en-UK": "Benchmark"
            },
            "URL": "/benchmark/#/benchmark-dashboard?tab_page_id=-200200000",
            "ICON": "core_ql_benchmark.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "CANDIDATESEARCH": {
            "TITLE": {
                "en-US": "Candidate Search",
                "en-UK": "Candidate Search"
            },
            "URL": "/benchmark/#/benchmark-dashboard?tab_page_id=-200200000",
            "ICON": "epm_ql_candidatesearch.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },
        "CATALOGMANAGEMENT": {
            "TITLE": {
                "en-US": "Catalog Management",
                "en-UK": "Catalog Management"
            },
            "URL": "/phnx/driver.aspx?routename=Admin/Links&linkId=25",
            "ICON": "lms_ql_catalogmanagement.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "COMPETENCYTASK": {
            "TITLE": {
                "en-US": "Competency Tasks",
                "en-UK": "Competency Tasks"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=2",
            "ICON": "core_ql_reportbuilder.png",
            "COLUMNSIZE": 2,
            "MODULE": ["EPM"]
        },        
        "EVENTS_SESSIONS": {
            "TITLE": {
                "en-US": "Events & Sessions",
                "en-UK": "Events & Sessions"
            },
            "URL": "/LMS/ILT/main_sessions.aspx",
            "ICON": "lms_ql_eventsandsessions.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "REPORTBUILDER": {
            "TITLE": {
                "en-US": "Report Builder",
                "en-UK": "Report Builder"
            },
            "URL": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000",
            "ICON": "core_ql_reportbuilder.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "LAT": {
            "TITLE": {
                "en-US": "Learning Assignments",
                "en-UK": "Learning Assignments"
            },
            "URL": "/phnx/driver.aspx?routename=Learning/EnrollTraining/EnrollTrainingManagement",
            "ICON": "lms_ql_lat.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        }, 
        "SNAPSHOT": {
            "TITLE": {
                "en-US": "Snapshot",
                "en-UK": "Snapshot"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot",
            "ICON": "core_ql_snapshot.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "MYSESSIONS": {
            "TITLE": {
                "en-US": "My Sessions",
                "en-UK": "My Sessions"
            },
            "URL": "/LMS/catalog/EventsCalendar.aspx?instructor=me",
            "ICON": "lms_ql_mysessions.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },        
        "SKILLSPROFILE": {
            "TITLE": {
                "en-US": "Skills Profile",
                "en-UK": "Skills Profile"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/SkillsProfile",
            "ICON": "core_ql_skills_profile.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "FORMS": {
            "TITLE": {
                "en-US": "Forms",
                "en-UK": "Forms"
            },
            "URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
            "ICON": "chr_ql_forms.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "ORGCHART": {
            "TITLE": {
                "en-US": "Org Chart",
                "en-UK": "Org Chart"
            },
            "URL": "/phnx/driver.aspx?routename=Organization/OrgChart",
            "ICON": "chr_ql_orgchart.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "LIVEFEED": {
            "TITLE": {
                "en-US": "Live Feed",
                "en-UK": "Live Feed"
            },
            "URL": "/phnx/driver.aspx?routename=Social/Connect/LiveFeed",
            "ICON": "lms_ql_live_feed.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "REPORTS": {
            "TITLE": {
                "en-US": "Reports",
                "en-UK": "Reports"
            },
            "URL": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/SharedWithMe",
            "ICON": "core_ql_reports.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        },
        "LEARNER_ADMIN": {
            "TITLE": {
                "en-US": "Learner Console",
                "en-UK": "Learner Console"
            },
            "URL": "/phnx/driver.aspx?routename=Learning/AdminConsole",
            "ICON": "lms_ql_learner_admin_console.png",
            "COLUMNSIZE": 2,
            "MODULE": ["LMS"]
        },
        "CAREER_SITE": {
            "TITLE": {
                "en-US": "Career Site",
                "en-UK": "Career Site"
            },
            "URL": "/ui/internal-career-site/app/search-jobs",
            "ICON": "lms_ql_learner_admin_console.png",
            "COLUMNSIZE": 2,
            "MODULE": ["ATS"]
        },
        "USERADMIN": {
            "TITLE": {
                "en-US": "User Admin",
                "en-UK": "User Admin"
            },
            "URL": "/admin/Users.aspx",
            "ICON": "core_ql_useradmin.png",
            "COLUMNSIZE": 2,
            "MODULE": ["CORE"]
        }
    },
    "WIDGETS": {
        "EPM-DEVPLAN_PROGRESS": {
            "width": 12,
            "targetdiv": "EPM-DEVPLAN_PROGRESS",
            "skeletoncss" : "skeleton-circle",
            "url": "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew",
            "title": {
                "en-US": "Devplan Progress",
                "en-UK": "My development Plan progress",
                "de-DE": "Fortschritt meines Entwicklungsplans"
            },
            "nocontenttitle": {
                "en-US": "Create a new plan!",
                "en-UK": "Create a new plan!",
                "de-DE": "Erstellen Sie einen neuen Plan!"
            },
            "getstartedurl": "/ui/devplans/blueprints/add",
            "module" : ["EPM", "CAR"]
        },
        "EPM-GOAL_PROGRESS": {
            "width": 12,
            "targetdiv": "EPM-GOAL_PROGRESS",
            "skeletoncss" : "skeleton-circle",
            "url": "/phnx/driver.aspx?routename=Goals/GoalList",
            "title": {
                "en-US": "Goal Progress",
                "en-UK": "Goal Progress",
                "de-DE": "Zielfortschritt"
            },
            "nocontenttitle": {
                "en-US": "Create goals!",
                "en-UK": "Create goals!",
                "de-DE": "Ziele schaffen!"
            },
            "getstartedurl": "/phnx/driver.aspx?routename=Goals/GoalEdit",
            "module" : ["EPM", "CAR"]
        },
        "EPM-CHECKINS": {
            "width": 12,
            "targetdiv": "EPM-CHECKINS",
            "skeletoncss" : "skeleton-list",
            "url": "/ui/perf-check-ins/Check-Ins",
            "title": {
                "en-US": "Check ins",
                "en-UK": "Check ins",
                "de-DE": "Einchecken"
            },
            "nocontenttitle": {
                "en-US": "Get Started!",
                "en-UK": "Get Started!",
                "de-DE": "Loslegen!"
            },
            "getstartedurl": "/ui/perf-check-ins/Check-Ins/create/select-participant",
            "module" : ["EPM", "CAR"]
        },
        "LMS-INSPIRED_BY_SUBJECTS": {
            "width": 12,
            "targetdiv": "LMS-INSPIRED_BY_SUBJECTS",
            "skeletoncss" : "skeleton-rect",
            "url": "/ui/lms-learner-home/home",
            "title": {
                "en-US": "Inspired by your Subjects",
                "en-UK": "Inspired by your Subjects",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"]
        },
        "LMS-TRAINING_METRICS": {
            "width": 12,
            "targetdiv": "LMS-TRAINING_METRICS",
            "skeletoncss" : "skeleton-rect",
            "url": "/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&TargetUser=${csUser}",
            "title": {
                "en-US": "Transcript Overview",
                "en-UK": "Training Record Overview",
                "de-DE": ""
            },
            "pastdueDesc": {
                "en-US": "Past Due Trainings",
                "en-UK": "Past Due Trainings",
                "de-DE": ""
            },
            "dueSoonDesc": {
                "en-US": "Trainings Due Soon",
                "en-UK": "Trainings Due Soon",
                "de-DE": ""
            },
            "assignedNoDueDateDesc": {
                "en-US": "Training Assigned / No Due Date",
                "en-UK": "Training Assigned / No Due Date",
                "de-DE": ""
            },
            "playlists": {
                "createdDesc": {
                    "en-US": "Playlists created",
                    "en-UK": "Playlists created",
                    "de-DE": ""
                },
                "followersDesc": {
                    "en-US": "Playlist followers",
                    "en-UK": "Playlist followers",
                    "de-DE": ""
                },
                "followedDesc": {
                    "en-US": "Playlists followed",
                    "en-UK": "Playlists followed",
                    "de-DE": ""
                }
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"]
        },
        "LMS-TRENDING_FOR_JOB": {
            "width": 12,
            "targetdiv": "LMS-TRENDING_FOR_JOB",
            "skeletoncss" : "skeleton-rect",
            "url": "/ui/lms-learner-home/home",
            "title": {
                "en-US": "Trending for your job",
                "en-UK": "Trending for your job",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"]
        },
        "LMS-TOP_PICKS": {
            "width": 12,
            "targetdiv": "LMS-TOP_PICKS",
            "skeletoncss" : "skeleton-rect",
            "url": "/ui/lms-learner-home/home",
            "title": {
                "en-US": "Your top picks",
                "en-UK": "Your top picks",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"]
        },
        "LMS-ASSIGNED_TRAINING": {
            "width": 12,
            "targetdiv": "LMS-ASSIGNED_TRAINING",
            "skeletoncss" : "skeleton-rect",
            "url": "/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript",
            "title": {
                "en-US": "Assigned Training",
                "en-UK": "Assigned Training",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"]
        },
        "ATS-TOTALCANDIDATES": {
            "width": 12,
            "targetdiv": "ATS-TOTALCANDIDATES",
            "skeletoncss" : "skeleton-rect",
            "url": "/ui/ats-manage-candidates/managecandidates",
            "title": {
                "en-US": "Total Candidates",
                "en-UK": "Total Candidates",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["ATS"]
        },
        "ATS-NEWSUBMISSIONS": {
            "width": 12,
            "targetdiv": "ATS-NEWSUBMISSIONS",
            "skeletoncss" : "skeleton-rect",
            "url": "/ui/ats-manage-candidates/managecandidates?pageSize=20&statusCategories=-1",
            "title": {
                "en-US": "New Submissions",
                "en-UK": "New Submissions",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["ATS"]
        },
        "ATS-NEWHIRES": {
            "width": 12,
            "targetdiv": "ATS-NEWHIRES",
            "skeletoncss" : "skeleton-list",
            "url": "/phnx/driver.aspx?routename=ONB/Dashboard",
            "title": {
                "en-US": "New Hires",
                "en-UK": "New Hires",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["ATS"]
        },
        "DIRECT_REPORTS": {
            "width": 12,
            "targetdiv": "DIRECT_REPORTS",
            "skeletoncss" : "skeleton-list",
            "url": "#",
            "title": {
                "en-US": "My Team",
                "en-UK": "My Team",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["CORE"]
        },
        "RPT_HEADCOUNT": {
            "width": 12,
            "targetdiv": "RPT_HEADCOUNT",
            "skeletoncss" : "skeleton-chart-columns",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/29",
            "title": {
                "en-US": "Headcount Report",
                "en-UK": "Headcount Report",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["CORE"],
            "reportid" : 29
        },
        "RPT_ORGGOALPROGRESS": {
            "width": 12,
            "targetdiv": "RPT_ORGGOALPROGRESS",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/3",
            "title": {
                "en-US": "Goal Progress Report",
                "en-UK": "Goal Progress Report",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["EPM"],
            "reportid" : 3
        },
        "RPT_TRAININGPROGRESSSUMMARY": {
            "width": 12,
            "targetdiv": "RPT_TRAININGPROGRESSSUMMARY",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/46",
            "title": {
                "en-US": "Training Progress Summary",
                "en-UK": "Training Progress Summary",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"],
            "reportid" : 46
        },
        "RPT_USERRECORDBYMGR": {
            "width": 12,
            "targetdiv": "RPT_USERRECORDBYMGR",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/50",
            "title": {
                "en-US": "User Record Report",
                "en-UK": "User Record Report",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["CORE"],
            "reportid" : 50
        },
        "RPT_BADGELEADERBOARD": {
            "width": 12,
            "targetdiv": "RPT_BADGELEADERBOARD",
            "skeletoncss" : "skeleton-chart-columns",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/12",
            "title": {
                "en-US": "Badge Leaderboard",
                "en-UK": "Badge Leaderboard",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"],
            "reportid" : 12
        },
        "RPT_EMPLOYEESTATUS": {
            "width": 12,
            "targetdiv": "RPT_EMPLOYEESTATUS",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/59",
            "title": {
                "en-US": "Employee Status Report",
                "en-UK": "Employee Status Report",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["CORE"],
            "reportid" : 59
        },
        "RPT_PASTDUE": {
            "width": 12,
            "targetdiv": "RPT_PASTDUE",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/47",
            "title": {
                "en-US": "Past Due Report",
                "en-UK": "Past Due Report",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"],
            "reportid" : 47
        },
        "RPT_ASSIGNEDTRAININGSTATUS": {
            "width": 12,
            "targetdiv": "RPT_ASSIGNEDTRAININGSTATUS",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/14",
            "title": {
                "en-US": "Assigned Training status",
                "en-UK": "Assigned Training status",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"],
            "reportid" : 14
        },
        "RPT_SESSIONSEATAVAILABILITY": {
            "width": 12,
            "targetdiv": "RPT_SESSIONSEATAVAILABILITY",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/60",
            "title": {
                "en-US": "Session Seat Availability Report",
                "en-UK": "Session Seat Availability Report",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"],
            "reportid" : 60
        },
        "RPT_TRAININGWITHDRAWALS": {
            "width": 12,
            "targetdiv": "RPT_TRAININGWITHDRAWALS",
            "skeletoncss" : "skeleton-circle",
            "url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/30",
            "title": {
                "en-US": "Training Withdrawals",
                "en-UK": "Training Withdrawals",
                "de-DE": ""
            },
            "nocontenttitle": {
                "en-US": "",
                "en-UK": "",
                "de-DE": ""
            },
            "getstartedurl": "#",
            "module" : ["LMS"],
            "reportid" : 30
        }
    },
    "managerwidget": {
        "title": {
            "en-US": "My team",
            "en-UK": "My team",
            "de-DE": "Meine team"
        },
        "tableheader": {
            "name": {
                "en-US": "Name",
                "en-UK": "Name",
                "de-DE": "Name"
            },
            "hiredate": {
                "en-US": "Hire Date",
                "en-UK": "Hire Date",
                "de-DE": "Anstellungsdatum"
            },
            "actions": {
                "en-US": "Actions",
                "en-UK": "Actions",
                "de-DE": "Aktionen"
            }
        },
        "actionsitems": {
            "openup": {
                "en-US": "Open Universal Profile",
                "en-UK": "Open Universal Profile",
                "de-DE": "Universelles Profil öffnen"
            },
            "viewtranscript": {
                "en-US": "View Transcript",
                "en-UK": "View Training Record",
                "de-DE": "Trainingsaufzeichnung anzeigen"
            },
            "viewsnapshot": {
                "en-US": "View Snapshot",
                "en-UK": "View Snapshot",
                "de-DE": "Schnappschuss ansehen"
            },
            "viewgoals": {
                "en-US": "View Goals",
                "en-UK": "View Objectives",
                "de-DE": "Ziele anzeigen"
            },
            "viewdevplan": {
                "en-US": "View Development Plan",
                "en-UK": "View Development Plan",
                "de-DE": "Entwicklungsplan anzeigen"
            }
        },
        "detailtable": {
            "firstname": {
                "en-US": "First name",
                "en-UK": "First name",
                "de-DE": "Vorname"
            },
            "lastname": {
                "en-US": "Last name",
                "en-UK": "Last name",
                "de-DE": "Nachname"
            },
            "email": {
                "en-US": "Email",
                "en-UK": "Email",
                "de-DE": "Email"
            },
            "phone": {
                "en-US": "Phone",
                "en-UK": "Phone",
                "de-DE": "Telefon"
            },
            "hiredate": {
                "en-US": "Hire Date",
                "en-UK": "Hire Date",
                "de-DE": "Anstellungsdatum"
            },
            "addressdetails": {
                "en-US": "Address Details",
                "en-UK": "Address Details",
                "de-DE": "Adressen Details"
            },
            "address": {
                "en-US": "Address",
                "en-UK": "Address",
                "de-DE": "Die Anschrift"
            },
            "city": {
                "en-US": "City",
                "en-UK": "City",
                "de-DE": "Stadt"
            },
            "state": {
                "en-US": "State",
                "en-UK": "State",
                "de-DE": "Bundesland"
            },
            "country": {
                "en-US": "Country",
                "en-UK": "Country",
                "de-DE": "Land"
            }
        }
    },
    "ROLESPECIFIC": {
        "MGR" : {
            "SETTINGS" : {
                "MODULETITLE" : {
                    "en-US" : "My team details",
                    "en-UK" : "My team details"
                },
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
        },
        "HRD" : {
            "SETTINGS" : {
                "MODULETITLE" : {
                    "en-US" : "Talent Management",
                    "en-UK" : "Talent Management"
                },
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
            },
            "LINKS" : {
                "LINK_1" : {
                    "ID" : "TALENTPOOLS",
                    "ORDER" : 1
                },
                "LINK_2" : {
                    "ID" : "9BOXGRIDS",
                    "ORDER" : 2
                },
                "LINK_3" : {
                    "ID" : "VIEWPEOPLE",
                    "ORDER" : 3
                },
                "LINK_4" : {
                    "ID" : "VIEWDATA",
                    "ORDER" : 4
                },
                "LINK_5" : {
                    "ID" : "ENGAGE",
                    "ORDER" : 5
                },
                "LINK_6" : {
                    "ID" : "BENCHMARK",
                    "ORDER" : 6
                },
                "LINK_7" : {
                    "ID" : "ORGPLANNING",
                    "ORDER" : 7
                },
                "LINK_8" : {
                    "ID" : "INSIGHTS",
                    "ORDER" : 8
                }
            }
        },
        "ADM" : {
            "SETTINGS" : {
                "MODULETITLE" : {
                    "en-US" : "Admin Dashboard",
                    "en-UK" : "Admin Dashboard"
                },
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
            },
            "LINKS" : {
                "LINK_1" : {
                    "ID" : "LEARNER_ADMIN",
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
                    "ID" : "LAT",
                    "ORDER" : 4
                },
                "LINK_5" : {
                    "ID" : "USERADMIN",
                    "ORDER" : 5
                },
                "LINK_6" : {
                    "ID" : "REPORTBUILDER",
                    "ORDER" : 6
                }
            }
        },
        "INS" : {
            "SETTINGS" : {
                "MODULETITLE" : {
                    "en-US" : "Instructor Dashboard",
                    "en-UK" : "Instructor Dashboard"
                },
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
    }
}];

sessionStorage.setItem("")