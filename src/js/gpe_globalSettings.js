"use strict";
if (!sessionStorage.gpeGlobalSettings) {

	const gpeGlobalSettings = [{
		"NAVIGATION": {
			"USR": {
				"en-US": "My Development",
				"en-UK": "My Development",
				"de-DE": "Meine Entwicklung"
			},
			"MGR": {
				"en-US": "My team",
				"en-UK": "My team",
				"de-DE": "Meine Mannschaft"
			},
			"HRD": {
				"en-US": "HR Dashboard",
				"en-UK": "HR Dashboard",
				"de-DE": "HR-Dashboard"
			},
			"ADM": {
				"en-US": "Admin Dashboard",
				"en-UK": "Administrator",
				"de-DE": "Admin-Dashboard"
			},
			"REC": {
				"en-US": "Recruiter Dashboard",
				"en-UK": "Recruiter Dashboard",
				"de-DE": "Recruiter-Dashboard"
			},
			"INS": {
				"en-US": "Instructor Dashboard",
				"en-UK": "Instructor Dashboard",
				"de-DE": "Lehrer-Dashboard"
			},
			"APPROVALS": {
				"en-US": "Pending Approvals",
				"en-UK": "Pending Approvals",
				"de-DE": "Zulassungen"
			}
		},
		"MODULES": {
			"ATS": {
				"settings": {
					"moduletitle": {
						"en-US": "Recruiting & Onboarding",
						"en-UK": "Recruiting & Onboarding"
					}
				}
			},
			"EPM": {
				"settings": {
					"moduletitle": {
						"en-US": "Performance & Career",
						"en-UK": "Performance & Career"
					}
				},
			},
			"LMS": {
				"settings": {
					"moduletitle": {
						"en-US": "Learning & Development",
						"en-UK": "Learning & Development"
					}
				},
			},
			"CHR": {
				"settings": {
					"moduletitle": {
						"en-US": "Core HR",
						"en-UK": "Core HR"
					}
				}
			},
			"ROLESPECIFIC": {
				"MGR": {
					"settings": {
						"moduletitle": {
							"en-US": "My team details",
							"en-UK": "My team details"
						}
					}
				},
				"HRD": {
					"settings": {
						"moduletitle": {
							"en-US": "Talent Management",
							"en-UK": "Talent Management"
						}
					}
				},
				"ADM": {
					"settings": {
						"modiletitle": {
							"en-US": "Admin Dashboard",
							"en-UK": "Admin Dashboard"
						}
					}
				},
				"INS": {
					"settings": {
						"moduletitle": {
							"en-US": "Instructor Dashboard",
							"en-UK": "Instructor Dashboard"
						}
					}
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
				"ICON": "svg/Learning-37.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"COMMUNITIES": {
				"TITLE": {
					"en-US": "Communities",
					"en-UK": "Communities"
				},
				"URL": "/phnx/driver.aspx?routename=Social/Communities",
				"ICON": "svg/Comm-16.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"LEARNER_SEARCH": {
				"TITLE": {
					"en-US": "Learner Search",
					"en-UK": "Learner Search"
				},
				"URL": "/ui/lms-learner-search/search?pageNumber=1",
				"ICON": "svg/Perf-11.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"TRAINING_HISTORY": {
				"TITLE": {
					"en-US": "Training history",
					"en-UK": "Training history"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&preSelectedCategoryId=3",
				"ICON": "svg/Learnin-36.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"PLAYLISTS": {
				"TITLE": {
					"en-US": "Playlists",
					"en-UK": "Playlists"
				},
				"URL": "/ui/lms-learner-playlist/UsersPlaylists",
				"ICON": "svg/Learning-19.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"LEADERBOARD": {
				"TITLE": {
					"en-US": "Leaderboard",
					"en-UK": "Leaderboard"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Leaderboard&TargetUser=${csUser}",
				"ICON": "svg/Awards-45.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"SURVEYS": {
				"TITLE": {
					"en-US": "Surveys",
					"en-UK": "Surveys"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=16&sort=0",
				"ICON": "svg/Social-18.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM", "CAR"]
			},
			"ACTIONS": {
				"TITLE": {
					"en-US": "Actions",
					"en-UK": "Actions"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions",
				"ICON": "svg/Awards-23.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"FEEDBACK": {
				"TITLE": {
					"en-US": "Feedback",
					"en-UK": "Feedback"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Feedback",
				"ICON": "svg/Comm-29.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM", "CAR"]
			},
			"PERF_REVIEWS": {
				"TITLE": {
					"en-US": "Performance Reviews",
					"en-UK": "Performance Reviews"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=6&sort=0",
				"ICON": "svg/Team-4.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM"]
			},
			"CHECKINS": {
				"TITLE": {
					"en-US": "Check Ins",
					"en-UK": "Check Ins"
				},
				"URL": "/ui/perf-check-ins/Check-Ins/",
				"ICON": "svg/Comm-7.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CAR"]
			},
			"CHECKLISTS": {
				"TITLE": {
					"en-US": "Checklists",
					"en-UK": "Checklists"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=14",
				"ICON": "svg/Perf-35.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM"]
			},
			"SKILLSMATRIX": {
				"TITLE": {
					"en-US": "Skills Matrix",
					"en-UK": "Skills Matrix"
				},
				"URL": "/EPM/SkillsMatrix/User/SkillsMatrixPage.aspx",
				"ICON": "svg/Team-53.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM"]
			},
			"REQREQUESTS": {
				"TITLE": {
					"en-US": "Requisition Requests",
					"en-UK": "Requisition Requests"
				},
				"URL": "/ATS/JobRequisitionRequest/RequisitionRequests.aspx",
				"ICON": "svg/Team-80.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"MANAGEREQ": {
				"TITLE": {
					"en-US": "Manage Requisitions",
					"en-UK": "Manage Requisitions"
				},
				"URL": "/phnx/driver.aspx?routename=ATS/RecruitingManagement/ManageRequisitions",
				"ICON": "svg/Team-82.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"MANAGECANDIDATES": {
				"TITLE": {
					"en-US": "Manage Candidates",
					"en-UK": "Manage Candidates"
				},
				"URL": "/ui/ats-manage-candidates/managecandidates",
				"ICON": "svg/Team-77.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"INTERVIEWS": {
				"TITLE": {
					"en-US": "Interviews",
					"en-UK": "Interviews"
				},
				"URL": "/ATS/Interview/ScheduledInterviews.aspx",
				"ICON": "svg/Team-27.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"HIRINGDASHBOARD": {
				"TITLE": {
					"en-US": "Hiring Dashboard",
					"en-UK": "Hiring Dashboard"
				},
				"URL": "/phnx/driver.aspx?routename=ATS/Dashboard/HiringDashboard",
				"ICON": "svg/Perf-25.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"GOALS": {
				"TITLE": {
					"en-US": "Goals",
					"en-UK": "Goals"
				},
				"URL": "/phnx/driver.aspx?routename=Goals/GoalList",
				"ICON": "svg/Perf-24.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"VIEWPEOPLE": {
				"TITLE": {
					"en-US": "View People",
					"en-UK": "View People"
				},
				"URL": "/phnx/driver.aspx?routename=Analytics/ViewOrg",
				"ICON": "svg/Team-48.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CHR"]
			},
			"VIEWDATA": {
				"TITLE": {
					"en-US": "View Data",
					"en-UK": "View Data"
				},
				"URL": "/phnx/driver.aspx?routename=Analytics/ViewDiscover",
				"ICON": "svg/Team-32.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CHR"]
			},
			"DASHBOARD": {
				"TITLE": {
					"en-US": "Dashboards",
					"en-UK": "Dashboards"
				},
				"URL": "/Dashboard/Main.aspx",
				"ICON": "svg/Charts-3.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"TALENTPOOLS": {
				"TITLE": {
					"en-US": "Talent Pools",
					"en-UK": "Talent Pools"
				},
				"URL": "/phnx/driver.aspx?routename=TalentPools/ManageTalentPools",
				"ICON": "svg/Team-55.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM"]
			},
			"9BOXGRIDS": {
				"TITLE": {
					"en-US": "9 Box Grid",
					"en-UK": "9 Box Grid"
				},
				"URL": "/EPM/Smp/User/CurrentGridPlacement.aspx",
				"ICON": "svg/Team-72.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM"]
			},
			"ENGAGE": {
				"TITLE": {
					"en-US": "Engage",
					"en-UK": "Engage"
				},
				"URL": "/Engage/Reporting.aspx",
				"ICON": "svg/Tech-1.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CHR"]
			},
			"ORGPLANNING": {
				"TITLE": {
					"en-US": "Org. Planning",
					"en-UK": "Org. Planning"
				},
				"URL": "/pbom/index.aspx",
				"ICON": "svg/Team-31.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"INSIGHTS": {
				"TITLE": {
					"en-US": "Insights",
					"en-UK": "Insights"
				},
				"URL": "/insights/#/index?tab_page_id=-200159302",
				"ICON": "svg/Charts-14.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"BENCHMARK": {
				"TITLE": {
					"en-US": "Benchmark",
					"en-UK": "Benchmark"
				},
				"URL": "/benchmark/#/benchmark-dashboard?tab_page_id=-200200000",
				"ICON": "svg/Tech-2.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"CANDIDATESEARCH": {
				"TITLE": {
					"en-US": "Candidate Search",
					"en-UK": "Candidate Search"
				},
				"URL": "/benchmark/#/benchmark-dashboard?tab_page_id=-200200000",
				"ICON": "svg/Team-43.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"CATALOGMANAGEMENT": {
				"TITLE": {
					"en-US": "Catalog Management",
					"en-UK": "Catalog Management"
				},
				"URL": "/phnx/driver.aspx?routename=Admin/Links&linkId=25",
				"ICON": "svg/Tech-44.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"COMPETENCYTASK": {
				"TITLE": {
					"en-US": "Competency Tasks",
					"en-UK": "Competency Tasks"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=2",
				"ICON": "svg/Perf-43.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["EPM"]
			},
			"EVENTS_SESSIONS": {
				"TITLE": {
					"en-US": "Events & Sessions",
					"en-UK": "Events & Sessions"
				},
				"URL": "/LMS/ILT/main_sessions.aspx",
				"ICON": "svg/Team-44.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"REPORTBUILDER": {
				"TITLE": {
					"en-US": "Report Builder",
					"en-UK": "Report Builder"
				},
				"URL": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000",
				"ICON": "svg/Team-14.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"LAT": {
				"TITLE": {
					"en-US": "Learning Assignments",
					"en-UK": "Learning Assignments"
				},
				"URL": "/phnx/driver.aspx?routename=Learning/EnrollTraining/EnrollTrainingManagement",
				"ICON": "svg/Tech-58.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"SNAPSHOT": {
				"TITLE": {
					"en-US": "Snapshot",
					"en-UK": "Snapshot"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot",
				"ICON": "svg/Perf-33.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"MYSESSIONS": {
				"TITLE": {
					"en-US": "My Sessions",
					"en-UK": "My Sessions"
				},
				"URL": "/LMS/catalog/EventsCalendar.aspx?instructor=me",
				"ICON": "svg/Tech-79.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"SKILLSPROFILE": {
				"TITLE": {
					"en-US": "Skills Profile",
					"en-UK": "Skills Profile"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/SkillsProfile",
				"ICON": "svg/Perf-46.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"FORMS": {
				"TITLE": {
					"en-US": "Forms",
					"en-UK": "Forms"
				},
				"URL": "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
				"ICON": "svg/Awards-9.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"ORGCHART": {
				"TITLE": {
					"en-US": "Org Chart",
					"en-UK": "Org Chart"
				},
				"URL": "/phnx/driver.aspx?routename=Organization/OrgChart",
				"ICON": "svg/Team-58.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"LIVEFEED": {
				"TITLE": {
					"en-US": "Live Feed",
					"en-UK": "Live Feed"
				},
				"URL": "/phnx/driver.aspx?routename=Social/Connect/LiveFeed",
				"ICON": "svg/Comm-24.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"REPORTS": {
				"TITLE": {
					"en-US": "Reports",
					"en-UK": "Reports"
				},
				"URL": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/SharedWithMe",
				"ICON": "svg/Charts-9.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			},
			"LEARNER_ADMIN": {
				"TITLE": {
					"en-US": "Learner Console",
					"en-UK": "Learner Console"
				},
				"URL": "/phnx/driver.aspx?routename=Learning/AdminConsole",
				"ICON": "svg/Tech-42.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["LMS"]
			},
			"CAREER_SITE": {
				"TITLE": {
					"en-US": "Career Site",
					"en-UK": "Career Site"
				},
				"URL": "/ui/internal-career-site/app/search-jobs",
				"ICON": "svg/Perf-17.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["ATS"]
			},
			"USERADMIN": {
				"TITLE": {
					"en-US": "User Admin",
					"en-UK": "User Admin"
				},
				"URL": "/admin/Users.aspx",
				"ICON": "svg/Perf-32.svg",
				"COLUMNSIZE": 2,
				"MODULE": ["CORE"]
			}
		},
		"WIDGETS": {
			"EPM-DEVPLAN_PROGRESS": {
				"width": 12,
				"targetdiv": "EPM-DEVPLAN_PROGRESS",
				"skeletoncss": "skeleton-circle",
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
				"module": ["EPM", "CAR"]
			},
			"EPM-GOAL_PROGRESS": {
				"width": 12,
				"targetdiv": "EPM-GOAL_PROGRESS",
				"skeletoncss": "skeleton-circle",
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
				"module": ["EPM", "CAR"]
			},
			"EPM-CHECKINS": {
				"width": 12,
				"targetdiv": "EPM-CHECKINS",
				"skeletoncss": "skeleton-list",
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
				"module": ["EPM", "CAR"]
			},
			"LMS-INSPIRED_BY_SUBJECTS": {
				"width": 12,
				"targetdiv": "LMS-INSPIRED_BY_SUBJECTS",
				"skeletoncss": "skeleton-rect",
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
				"module": ["LMS"]
			},
			"LMS-TRAINING_METRICS": {
				"width": 12,
				"targetdiv": "LMS-TRAINING_METRICS",
				"skeletoncss": "skeleton-rect",
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
				"module": ["LMS"]
			},
			"LMS-TRENDING_FOR_JOB": {
				"width": 12,
				"targetdiv": "LMS-TRENDING_FOR_JOB",
				"skeletoncss": "skeleton-rect",
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
				"module": ["LMS"]
			},
			"LMS-TOP_PICKS": {
				"width": 12,
				"targetdiv": "LMS-TOP_PICKS",
				"skeletoncss": "skeleton-rect",
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
				"module": ["LMS"]
			},
			"LMS-ASSIGNED_TRAINING": {
				"width": 12,
				"targetdiv": "LMS-ASSIGNED_TRAINING",
				"skeletoncss": "skeleton-rect",
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
				"module": ["LMS"]
			},
			"ATS-TOTALCANDIDATES": {
				"width": 12,
				"targetdiv": "ATS-TOTALCANDIDATES",
				"skeletoncss": "skeleton-rect",
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
				"module": ["ATS"]
			},
			"ATS-NEWSUBMISSIONS": {
				"width": 12,
				"targetdiv": "ATS-NEWSUBMISSIONS",
				"skeletoncss": "skeleton-rect",
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
				"module": ["ATS"]
			},
			"ATS-NEWHIRES": {
				"width": 12,
				"targetdiv": "ATS-NEWHIRES",
				"skeletoncss": "skeleton-list",
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
				"module": ["ATS"]
			},
			"DIRECT_REPORTS": {
				"width": 12,
				"targetdiv": "DIRECT_REPORTS",
				"skeletoncss": "skeleton-list",
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
				"module": ["CORE"]
			},
			"RPT_HEADCOUNT": {
				"width": 12,
				"targetdiv": "RPT_HEADCOUNT",
				"skeletoncss": "skeleton-chart-columns",
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
				"module": ["CORE"],
				"reportid": 29
			},
			"RPT_ORGGOALPROGRESS": {
				"width": 12,
				"targetdiv": "RPT_ORGGOALPROGRESS",
				"skeletoncss": "skeleton-circle",
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
				"module": ["EPM"],
				"reportid": 3
			},
			"RPT_TRAININGPROGRESSSUMMARY": {
				"width": 12,
				"targetdiv": "RPT_TRAININGPROGRESSSUMMARY",
				"skeletoncss": "skeleton-circle",
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
				"module": ["LMS"],
				"reportid": 46
			},
			"RPT_USERRECORDBYMGR": {
				"width": 12,
				"targetdiv": "RPT_USERRECORDBYMGR",
				"skeletoncss": "skeleton-circle",
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
				"module": ["CORE"],
				"reportid": 50
			},
			"RPT_BADGELEADERBOARD": {
				"width": 12,
				"targetdiv": "RPT_BADGELEADERBOARD",
				"skeletoncss": "skeleton-chart-columns",
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
				"module": ["LMS"],
				"reportid": 12
			},
			"RPT_EMPLOYEESTATUS": {
				"width": 12,
				"targetdiv": "RPT_EMPLOYEESTATUS",
				"skeletoncss": "skeleton-circle",
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
				"module": ["CORE"],
				"reportid": 59
			},
			"RPT_PASTDUE": {
				"width": 12,
				"targetdiv": "RPT_PASTDUE",
				"skeletoncss": "skeleton-circle",
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
				"module": ["LMS"],
				"reportid": 47
			},
			"RPT_ASSIGNEDTRAININGSTATUS": {
				"width": 12,
				"targetdiv": "RPT_ASSIGNEDTRAININGSTATUS",
				"skeletoncss": "skeleton-circle",
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
				"module": ["LMS"],
				"reportid": 14
			},
			"RPT_SESSIONSEATAVAILABILITY": {
				"width": 12,
				"targetdiv": "RPT_SESSIONSEATAVAILABILITY",
				"skeletoncss": "skeleton-circle",
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
				"module": ["LMS"],
				"reportid": 60
			},
			"RPT_TRAININGWITHDRAWALS": {
				"width": 12,
				"targetdiv": "RPT_TRAININGWITHDRAWALS",
				"skeletoncss": "skeleton-circle",
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
				"module": ["LMS"],
				"reportid": 30
			}
		},
		"MANAGERWIDGET": {
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
		"ONB": {
			"en-US": {
				"headertitle": "${csFirstName}, your onboarding journey starts here!",
				"headertext": "Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1.<br><br>Fasten your seatbelt and let the journey begin!",
				"videourl": "https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				"onbprocess": {
					"title": "What's next on the onboarding",
					"resourceTitle": "Further resources and/or activities:",
					"imgurl": "url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem": {
						"nextstepstext1": {
							"headline": "First day",
							"text": "As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
							"resources": {
								"res1": {
									"text": "Read more about is on our Company website",
									"url": "https://www.cornerstoneondemand.com/company/",
									"type": "url"
								},
								"res2": {
									"text": "Follow us on LinkedIn",
									"url": "https://www.linkedin.com/company/cornerstone-ondemand",
									"type": "url"
								},
								"res3": {
									"text": "Fill out form - Personal Contact Details",
									"url": "/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
									"type": "url"
								},
								"res4": {
									"text": "Update your Bio page in Universal Profile",
									"url": "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
									"type": "url"
								}
							}
						},
						"nextstepstext2": {
							"headline": "First week",
							"text": "Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
							"resources": {
								"res1": {
									"text": "Go through your Onboarding Curriculum",
									"url": "/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
									"type": "url"
								},
								"res2": {
									"text": "Be recommended training for your role",
									"url": "/ui/lms-learner-home/home",
									"type": "url"
								},
								"res3": {
									"text": "Create your own playlist together with your manager",
									"url": "/ui/lms-learner-playlist/UsersPlaylists",
									"type": "url"
								}
							}
						},
						"nextstepstext3": {
							"headline": "First month",
							"text": "By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
							"resources": {
								"res1": {
									"text": "Schedule regular check-in meetings with your manager",
									"type": "text"
								},
								"res2": {
									"text": "Create goals",
									"type": "text"
								},
								"res3": {
									"text": "Have fun!",
									"type": "text"
								}
							}
						},
						"nextstepstext4": {
							"headline": "First 6 months",
							"text": "When you succeed - we succeed! We're a group. We're a team. From the CEO  and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",
							"resources": {
								"res1": {
									"text": "Create your Personal Development Plan",
									"type": "text"
								},
								"res2": {
									"text": "Get Certified",
									"type": "text"
								},
								"res3": {
									"text": "Receive and give badges",
									"type": "text"
								}
							}
						}
					}
				}
			},
			"en-UK": {
				"headertitle": "${csFirstName}, your onboarding journey starts here!",
				"headertext": "Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1. Fasten your seatbelt and let the journey begin!",
				"videourl": "https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				"onbprocess": {
					"title": "What's next on the onboarding",
					"resourceTitle": "Further resources and/or activities:",
					"imgurl": "url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"text": {
						"nextstepstext1": {
							"headline": "First day",
							"text": "As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
							"resources": {
								"res1": {
									"text": "Read more about is on our Company website",
									"url": "https://www.cornerstoneondemand.com/company/",
									"type": "url"
								},
								"res2": {
									"text": "Follow us on LinkedIn",
									"url": "https://www.linkedin.com/company/cornerstone-ondemand",
									"type": "url"
								},
								"res3": {
									"text": "Fill out form - Personal Contact Details",
									"url": "/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
									"type": "url"
								},
								"res4": {
									"text": "Update your Bio page in Universal Profile",
									"url": "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
									"type": "url"
								}
							}
						},
						"nextstepstext2": {
							"headline": "First week",
							"text": "Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
							"resources": {
								"res1": {
									"text": "Go through your Onboarding Curriculum",
									"url": "/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
									"type": "url"
								},
								"res2": {
									"text": "Be recommended training for your role",
									"url": "/ui/lms-learner-home/home",
									"type": "url"
								},
								"res3": {
									"text": "Create your own playlist together with your manager",
									"url": "/ui/lms-learner-playlist/UsersPlaylists",
									"type": "url"
								}
							}
						},
						"nextstepstext3": {
							"headline": "First month",
							"text": "By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
							"resources": {
								"res1": {
									"text": "Schedule regular check-in meetings with your manager",
									"type": "text"
								},
								"res2": {
									"text": "Create goals",
									"type": "text"
								},
								"res3": {
									"text": "Have fun!",
									"type": "text"
								}
							}
						},
						"nextstepstext4": {
							"headline": "First 6 months",
							"text": "When you succeed - we succeed! We're a group. We're a team. From the CEO  and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",
							"resources": {
								"res1": {
									"text": "Create your Personal Development Plan",
									"type": "text"
								},
								"res2": {
									"text": "Get Certified",
									"type": "text"
								},
								"res3": {
									"text": "Receive and give badges",
									"type": "text"
								}
							}
						}
					}
				}
			},
			"de-DE": {
				"headertitle": "${csFirstName}, your onboarding journey starts here!",
				"headertext": "Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1. Fasten your seatbelt and let the journey begin!",
				"videourl": "https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				"onbprocess": {
					"title": "What's next on the onboarding",
					"resourceTitle": "Further resources and/or activities:",
					"imgurl": "url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"text": {
						"nextstepstext1": {
							"headline": "First day",
							"text": "As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
							"resources": {
								"res1": {
									"text": "Read more about is on our Company website",
									"url": "https://www.cornerstoneondemand.com/company/",
									"type": "url"
								},
								"res2": {
									"text": "Follow us on LinkedIn",
									"url": "https://www.linkedin.com/company/cornerstone-ondemand",
									"type": "url"
								},
								"res3": {
									"text": "Fill out form - Personal Contact Details",
									"url": "/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
									"type": "url"
								},
								"res4": {
									"text": "Update your Bio page in Universal Profile",
									"url": "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio",
									"type": "url"
								}
							}
						},
						"nextstepstext2": {
							"headline": "First week",
							"text": "Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
							"resources": {
								"res1": {
									"text": "Go through your Onboarding Curriculum",
									"url": "/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
									"type": "url"
								},
								"res2": {
									"text": "Be recommended training for your role",
									"url": "/ui/lms-learner-home/home",
									"type": "url"
								},
								"res3": {
									"text": "Create your own playlist together with your manager",
									"url": "/ui/lms-learner-playlist/UsersPlaylists",
									"type": "url"
								}
							}
						},
						"nextstepstext3": {
							"headline": "First month",
							"text": "By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
							"resources": {
								"res1": {
									"text": "Schedule regular check-in meetings with your manager",
									"type": "text"
								},
								"res2": {
									"text": "Create goals",
									"type": "text"
								},
								"res3": {
									"text": "Have fun!",
									"type": "text"
								}
							}
						},
						"nextstepstext4": {
							"headline": "First 6 months",
							"text": "When you succeed - we succeed! We're a group. We're a team. From the CEO  and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",
							"resources": {
								"res1": {
									"text": "Create your Personal Development Plan",
									"type": "text"
								},
								"res2": {
									"text": "Get Certified",
									"type": "text"
								},
								"res3": {
									"text": "Receive and give badges",
									"type": "text"
								}
							}
						}
					}
				}
			}
		}
	}];

	sessionStorage.setItem("gpeGlobalSettings", JSON.stringify(gpeGlobalSettings));
}