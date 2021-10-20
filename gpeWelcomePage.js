/**
 * Dynamic Welcome Page for Cornerstone OnDemand
 * @desc Dynamic welcome page engine for Cornerstone OnDemand. The script is using the navigation menu as base to generate the page.
 * @author   Klas Anundby kanundby@csod.com
 * @version 0.5
 */

const accessURLs = [{
		"title": "view_your_transcript",
		"url": "/LMS/UserTranscript/MainView.aspx?Reset=TRUE&tab_page_id=-8",
		"icon": "fas fa-graduation-cap",
		"module": "lms",
		"quicklinkPrio": 4,
		"widgetPrio": 3
	},
	{
		"title": "development_plans",
		"url": "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew&tab_page_id=-200159413",
		"icon": "fa-tasks",
		"module": "epm, careers",
		"quicklinkPrio": 2,
		"widgetPrio": 2
	},
	{
		"title": "goals",
		"url": "/phnx/driver.aspx?routename=Goals/GoalList&tab_page_id=-200159402",
		"icon": "fa-bullseye",
		"module": "epm, careers",
		"quicklinkPrio": 3,
		"widgetPrio": 1
	},
	{
		"title": "performance_reviews",
		"url": "/EPM/Reviews/UserReview.aspx?tab_page_id=-18",
		"icon": "",
		"module": "epm",
		"quicklinkPrio": 99,
		"widgetPrio": 4
	},
	{
		"title": "check_ins",
		"url": "/ui/perf-check-ins/Check-Ins?utm_source=mainnav&tab_page_id=-222000016",
		"icon": "fa-calendar-check",
		"module": "epm, careers",
		"quicklinkPrio": 1,
		"widgetPrio": 2
	},
	{
		"title": "live_feed",
		"url": "/phnx/driver.aspx?routename=Social/Connect/LiveFeed&tab_page_id=-200157002",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 5
	},
	{
		"title": "create_manage_requisitions",
		"url": "/phnx/driver.aspx?routename=ATS/RecruitingManagement/ManageRequisitions&tab_page_id=-200159034",
		"icon": "fa-user-astronaut",
		"module": "ats",
		"quicklinkPrio": 1,
		"widgetPrio": 99
	},
	{
		"title": "benchmark",
		"url": "/benchmark/#/benchmark-dashboard?tab_page_id=-200200000",
		"icon": "fa-poll-h",
		"module": "chr",
		"quicklinkPrio": 1,
		"widgetPrio": 99
	},
	{
		"title": "campaign_dashboard",
		"url": "/Engage/Reporting.aspx?tab_page_id=-7402",
		"icon": "fa-poll",
		"module": "careers",
		"quicklinkPrio": 1,
		"widgetPrio": 99
	},
	{
		"title": "learner_home",
		"url": "/ui/lms-learner-home/home?tab_page_id=-200300006",
		"icon": "fas fa-graduation-cap",
		"module": "lms",
		"quicklinkPrio": 1,
		"widgetPrio": 99
	},
	{
		"title": "observation_checklists",
		"url": "/EPM/POC/ManageChecklist.aspx?tab_page_id=-500200",
		"icon": "fa-eye",
		"module": "epm",
		"quicklinkPrio": 1,
		"widgetPrio": 99
	},
	{
		"title": "report_builder",
		"url": "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000",
		"icon": "fa-chart-area",
		"module": "reporting",
		"quicklinkPrio": 1,
		"widgetPrio": 99
	},
	{
		"title": "skills_profile",
		"url": "/phnx/driver.aspx?routename=Social/UniversalProfile/SkillsProfile&tab_page_id=221000366",
		"icon": "fa-star",
		"module": "core",
		"quicklinkPrio": 1,
		"widgetPrio": 99
	},
	{
		"title": "all_communities",
		"url": "/phnx/driver.aspx?routename=Social/Communities&tab_page_id=-200157026",
		"icon": "fa-comments",
		"module": "lms",
		"quicklinkPrio": 2,
		"widgetPrio": 99
	},
	{
		"title": "employee_transitions",
		"url": "/phnx/driver.aspx?routename=ONB/EmployeeTransitions&tab_page_id=-200157041",
		"icon": "fa-user-cog",
		"module": "ats",
		"quicklinkPrio": 2,
		"widgetPrio": 99
	},
	{
		"title": "dashboards",
		"url": "/Dashboard/DashboardView.aspx?tab_page_id=-303",
		"icon": "fa-tachometer-alt",
		"module": "reporting",
		"quicklinkPrio": 2,
		"widgetPrio": 99
	},
	{
		"title": "manage_campaigns",
		"url": "/Engage/Authoring.aspx?tab_page_id=-7405",
		"icon": "fa-search-location",
		"module": "careers",
		"quicklinkPrio": 2,
		"widgetPrio": 99
	},
	{
		"title": "planning",
		"url": "/pbom/index.aspx?tab_page_id=-200159500",
		"icon": "fa-map-marked-alt",
		"module": "chr",
		"quicklinkPrio": 2,
		"widgetPrio": 99
	},
	{
		"title": "scheduled_tasks",
		"url": "/EPM/scheduler/TaskReview.aspx?tab_page_id=-220",
		"icon": "fa-tasks",
		"module": "core",
		"quicklinkPrio": 2,
		"widgetPrio": 99
	},
	{
		"title": "skills_matrix",
		"url": "/EPM/SkillsMatrix/User/SkillsMatrixPage.aspx?tab_page_id=-200157022",
		"icon": "fa-award",
		"module": "epm",
		"quicklinkPrio": 2,
		"widgetPrio": 99
	},
	{
		"title": "hiring_dashboard",
		"url": "/phnx/driver.aspx?routename=ATS/Dashboard/HiringDashboard&tab_page_id=-200159526",
		"icon": "fa-address-card",
		"module": "ats",
		"quicklinkPrio": 3,
		"widgetPrio": 99
	},
	{
		"title": "data",
		"url": "/launchers/mobile.aspx?pu=Analytics/ViewDiscover&tab_page_id=-7556",
		"icon": "fa-eye",
		"module": "reporting",
		"quicklinkPrio": 3,
		"widgetPrio": 99
	},
	{
		"title": "org_chart",
		"url": "/launchers/mobile.aspx?pu=Organization/OrgChart&tab_page_id=-200159593",
		"icon": "fa-sitemap",
		"module": "core",
		"quicklinkPrio": 3,
		"widgetPrio": 99
	},
	{
		"title": "playlists",
		"url": "/ui/lms-learner-playlist/UsersPlaylists?tab_page_id=-200300052",
		"icon": "fa-list-alt",
		"module": "lms",
		"quicklinkPrio": 3,
		"widgetPrio": 99
	},
	{
		"title": "internal_career_site",
		"url": "/ui/internal-career-site/app?tab_page_id=-212000108",
		"icon": "fa-globe-americas",
		"module": "ats",
		"quicklinkPrio": 4,
		"widgetPrio": 99
	},
	{
		"title": "insights_dashboard",
		"url": "/insights/#/index?tab_page_id=-200159302",
		"icon": "fa-pie-chart",
		"module": "reporting",
		"quicklinkPrio": 4,
		"widgetPrio": 99
	},
	{
		"title": "talent_search",
		"url": "/EPM/TalentSearch/TalentList.aspx?tab_page_id=-501",
		"icon": "fa-searchengin",
		"module": "epm",
		"quicklinkPrio": 4,
		"widgetPrio": 99
	},
	{
		"title": "events_calendar",
		"url": "/LMS/catalog/EventsCalendar.aspx?tab_page_id=-10",
		"icon": "fa-calendar",
		"module": "lms",
		"quicklinkPrio": 5,
		"widgetPrio": 99
	},
	{
		"title": "helicopter_view",
		"url": "/EPM/Smp/User/CurrentGridPlacement.aspx?tab_page_id=-580203",
		"icon": "fa-helicopter",
		"module": "epm",
		"quicklinkPrio": 5,
		"widgetPrio": 99
	},
	{
		"title": "interview_manager",
		"url": "/ATS/Interview/ScheduledInterviews.aspx?tab_page_id=-20017010",
		"icon": "fa-comments-dollar",
		"module": "ats",
		"quicklinkPrio": 5,
		"widgetPrio": 99
	},
	{
		"title": "standard_reports",
		"url": "/reports/index.aspx?tab_page_id=-302",
		"icon": "fa-file-excel",
		"module": "reporting",
		"quicklinkPrio": 5,
		"widgetPrio": 99
	},
	{
		"title": "compensation_statement",
		"url": "/COMP/Compensation/User/CompensationStatement.aspx?tab_page_id=-507",
		"icon": "fa-money-check-alt",
		"module": "epm",
		"quicklinkPrio": 6,
		"widgetPrio": 99
	},
	{
		"title": "express_class",
		"url": "/ui/lms-express-class/app/create/general-info?tab_page_id=-211000001",
		"icon": "fas fa-graduation-cap",
		"module": "lms",
		"quicklinkPrio": 6,
		"widgetPrio": 99
	},
	{
		"title": "requisition_offer_approvals",
		"url": "/ATS/Approval/RequisitionRequestsPending.aspx?aar=1&tab_page_id=-20012003",
		"icon": "fa-balance-scale-right",
		"module": "ats",
		"quicklinkPrio": 6,
		"widgetPrio": 99
	},
	{
		"title": "compensation_plan_approvals",
		"url": "/EPM/Compensation/User/ApprovalsList.aspx?tab_page_id=-506",
		"icon": "fa-search-dollar",
		"module": "epm",
		"quicklinkPrio": 7,
		"widgetPrio": 99
	},
	{
		"title": "interests_and_waitlists",
		"url": "/LMS/ILT/MyWaitlistsAndInterests.aspx?tab_page_id=-131060",
		"icon": "fa-clock-o",
		"module": "lms",
		"quicklinkPrio": 7,
		"widgetPrio": 99
	},
	{
		"title": "review_applicants",
		"url": "/ATS/JobRequisition/ReviewCandidates.aspx?tab_page_id=-20010012",
		"icon": "fa-search-location",
		"module": "ats",
		"quicklinkPrio": 7,
		"widgetPrio": 99
	},
	{
		"title": "career_center",
		"url": "/EPM/CareerCenter/CareerCenter.aspx?tab_page_id=-13",
		"icon": "fa-file-contract",
		"module": "epm",
		"quicklinkPrio": 8,
		"widgetPrio": 99
	},
	{
		"title": "submit_requisition_requests",
		"url": "/ATS/JobRequisitionRequest/RequisitionRequests.aspx?tab_page_id=-20010017",
		"icon": "fa-paper-plane",
		"module": "ats",
		"quicklinkPrio": 8,
		"widgetPrio": 99
	},
	{
		"title": "recruiting_manager_dashboard",
		"url": "/phnx/driver.aspx?routename=ATS/Dashboard/Manager&tab_page_id=-200159037",
		"icon": "fa-paper-plane",
		"module": "ats",
		"quicklinkPrio": 9,
		"widgetPrio": 99
	},
	{
		"title": "recruiting_dashboard",
		"url": "/phnx/driver.aspx?routename=ATS/Dashboard/Recruiting&tab_page_id=-200159035",
		"icon": "fa-paper-plane",
		"module": "ats",
		"quicklinkPrio": 10,
		"widgetPrio": 99
	},
	{
		"title": "onboarding_dashboard",
		"url": "/phnx/driver.aspx?routename=ONB/Dashboard&tab_page_id=-200157070",
		"icon": "fa-paper-plane",
		"module": "ats",
		"quicklinkPrio": 11,
		"widgetPrio": 99
	},
	{
		"title": "manage_talent_pool",
		"url": "/phnx/driver.aspx?routename=TalentPools/ManageTalentPools&tab_page_id=-20000753",
		"icon": "fa-search-dollar",
		"module": "epm",
		"quicklinkPrio": 12,
		"widgetPrio": 99
	},
	{
		"title": "manage_candidates",
		"url": "/ui/ats-manage-candidates/managecandidates?tab_page_id=-200300336",
		"icon": "fa-balance-scale-right",
		"module": "ats",
		"quicklinkPrio": 13,
		"widgetPrio": 99
	},
	{
		"title": "candidate_search_query",
		"url": "/phnx/driver.aspx?routename=ATS/Search/CandidateSearch&tab_page_id=-20010020",
		"icon": "fa-balance-scale-right",
		"module": "ats",
		"quicklinkPrio": 14,
		"widgetPrio": 99
	},
	{
		"title": "agency_portal",
		"url": "/ATS/AgencyPortal/MyJobs.aspx?tab_page_id=-20015911",
		"icon": "",
		"module": "ats",
		"quicklinkPrio": 15,
		"widgetPrio": 99
	},
	{
		"title": "recruiting",
		"url": "/ATS/admin/selectionmanagement.aspx?tab_page_id=-20008000",
		"icon": "",
		"module": "ats",
		"quicklinkPrio": 16,
		"widgetPrio": 99
	},
	{
		"title": "all_teams",
		"url": "/phnx/driver.aspx?routename=Social/Connect/AllTeams&tab_page_id=-200157003",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "catalog",
		"url": "/LMS/admin/catalog.aspx?tab_page_id=-30",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "certification_management",
		"url": "/LMS/Cert/Admin/CertManagement.aspx?tab_page_id=-180106",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "compensation",
		"url": "/EPM/Compensation/Admin/CmpTools.aspx?tab_page_id=-42",
		"icon": "",
		"module": "epm",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "competency_assessment_summary",
		"url": "/EPM/Compassessment/UserCompetencies.aspx?tab_page_id=-520013",
		"icon": "",
		"module": "epm",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "cost_model_manager",
		"url": "/Admin/PlanningCostModelManager.aspx?tab_page_id=-200159700",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "create_tool",
		"url": "/LMS/CreateTool/Redirect.aspx?tab_page_id=-221000101",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "custom_field_administration",
		"url": "/admin/ManageCustomFields.aspx?tab_page_id=-118010",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "custom_reports",
		"url": "/analytics/Main.aspx?tab_page_id=-301",
		"icon": "",
		"module": "reporting",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "data_import_wizard",
		"url": "/ISM/DLW/DataImportWizard.aspx?tab_page_id=-801",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "data_merge",
		"url": "/LMS/Admin/DataMerge.aspx?tab_page_id=-2002000",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "email",
		"url": "/Email/admin.aspx?tab_page_id=-105",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "exemption_tracking",
		"url": "/LMS/Admin/PendingExemptionRequests.aspx?tab_page_id=-20007002",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "facilities_resources",
		"url": "/LMS/ILT/FacilityList.aspx?tab_page_id=-52",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "form_management",
		"url": "/phnx/driver.aspx?routename=FormManagement/Admin&tab_page_id=-200157029",
		"icon": "",
		"module": "chr",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "ilt_request_forms",
		"url": "/LMS/ILT/ILTRequestForms.aspx?tab_page_id=-55",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "learning_assignment_tool",
		"url": "/phnx/driver.aspx?routename=Learning/EnrollTraining/EnrollTrainingManagement&tab_page_id=-200159608",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "manage_employee_learning",
		"url": "/LMS/Admin/SubordinateLearning.aspx?tab_page_id=-400",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "manage_employee_relationships",
		"url": "/EPM/peers/admin/EmployeeRelationship.aspx?a=1&tab_page_id=-505",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "manage_events_sessions",
		"url": "/LMS/ILT/main.aspx?tab_page_id=-49",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "manage_shared_and_dynamic_goals",
		"url": "/EPM/Goals/ManageShared.aspx?tab_page_id=-580200",
		"icon": "",
		"module": "epm, careers",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "marketing",
		"url": "/email/MarketingEmail.aspx?tab_page_id=-221",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "matr_cula_de_certificaci_n",
		"url": "/LMS/Designations/Owner/CertEnrollment.aspx?tab_page_id=-610",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "new_connect",
		"url": "/lms/connect/admin/NewConnectAdmin.aspx?tab_page_id=-200156011",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "on_the_job_training_observers",
		"url": "/phnx/driver.aspx?routename=Learning/OnTheJobTraining/OJTObservers&tab_page_id=-905251",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "org_units",
		"url": "/admin/OrgUnits.aspx?tab_page_id=-34",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "performance",
		"url": "/EPM/admin/CareerTools.aspx?tab_page_id=-37",
		"icon": "",
		"module": "epm",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "preferences",
		"url": "/admin/OUPrefList.aspx?tab_page_id=-29",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "question_bank",
		"url": "/Evaluations/Tests/AdminQuestionBank.aspx?tab_page_id=-150030",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "report_delivery_setup",
		"url": "/ISM/ReportDelivery/ReportDeliverySetup.aspx?tab_page_id=-810",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "review_sign_off",
		"url": "/EPM/ReviewsWeb/ReviewsBulkSignOff.aspx?tab_page_id=-590052",
		"icon": "",
		"module": "epm",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "security",
		"url": "/Security/SecurityRoleAdmin.aspx?tab_page_id=-71",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "succession",
		"url": "/EPM/Admin/SuccessionMgmt.aspx?tab_page_id=-40",
		"icon": "",
		"module": "epm",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "test_engine",
		"url": "/Evaluations/Tests/AdminTests.aspx?tab_page_id=-203",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "test_grading",
		"url": "/Evaluations/Tests/PendingGrade.aspx?tab_page_id=-210",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "toolkit",
		"url": "/ISM/IntegrationSuite.aspx?tab_page_id=-811",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "tools",
		"url": "/admin/Main.aspx?tab_page_id=-39",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "universal_profile",
		"url": "/Social/UniversalProfile/UPPageRedirectHandler.ashx?tab_page_id=-20016001",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "users",
		"url": "/admin/Users.aspx?tab_page_id=-38",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "welcome",
		"url": "/catalog/CustomPage.aspx?id=221000375&tab_page_id=221000375",
		"icon": "",
		"module": "core",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "vendors_instructors",
		"url": "/LMS/ILT/VendorsMain.aspx?tab_page_id=-51",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	},
	{
		"title": "view_your_sessions",
		"url": "/LMS/catalog/EventsCalendar.aspx?instructor=me&tab_page_id=-54",
		"icon": "",
		"module": "lms",
		"quicklinkPrio": 99,
		"widgetPrio": 99
	}
];

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
		"epm": {
			"en-US": "Performance",
			"en-UK": "Performance",
		},
		"epm, careers": {
			"en-US": "Careers",
			"en-UK": "Careers",
		},
		"careers": {
			"en-US": "Careers",
			"en-UK": "Careers",
		},
		"lms": {
			"en-US": "Learning",
			"en-UK": "Learning",
		},
		"reporting": {
			"en-US": "Reports",
			"en-UK": "Reports",
		},
	},
	wp: {
		widgets: {
			goals: {
				notitle: {
					"en-US": "Create goals!",
					"en-UK": "Create goals!",
				},
			},
			devplan: {
				notitle: {
					"en-US": "Create a new plan!",
					"en-UK": "Create a new plan!",
				},
			},
			checkins: {
				notitle: {
					"en-US": "Get Started!",
					"en-UK": "Get Started!",
				},
			},
		},
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
		"reports": [2, 3, 14, 19, 46, 47, 48],
		//		"reports": [3],
	},
	"HRD": {
		//    "reports": [],
		"reports": [2, 12, 13, 15, 16, 25, 32, 46],
	},
	"INS": {
		"reports": [14, 28, 30, 42, 47],
	},
	"REC": {
		"reports": [17, 23, 24, 27],
	},
	"ADM": {
		"reports": [16, 28, 29, 43, 50],
	},
	"USR": {
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
		showcolumns: ["User Full Name_70", "user_hire_dt_orig_70", "user_pos_70"]
	},
	HRD: {
		reportid: 51,
		filterid: 774,
		showcolumns: ["User Full Name_70", "user_hire_dt_orig_70", "user_pos_70"]
	}
};

const gpeABOUTCARDDIV = "gpewp_topcontainer_upper";
const gpeUSRMAINDIV = "USR-right";
const gpeUSRLEFTDIV = "USR-left";
const gpeDEMOPERSONADIV = "demopersona";
const gpeDEMOUSERDIV = "demousername";
const gpeDEMOVISUALS = "demovisuals";
const gpeTARGETNAVDIV = "gpewp_topcontainer_nav";
const gpeUSERNAME = document.getElementById(gpeDEMOUSERDIV).getAttribute(gpeDEMOUSERDIV).toLowerCase().split(";");
const gpeDEMOROLE = getDemoRole(document.getElementById(gpeDEMOPERSONADIV).getAttribute(gpeDEMOPERSONADIV));
const gpePRIMARYBGCSS = $('.c-nav-user').css('background-color');

/**
 * Returns demorole abbreviation from custom field
 * @param {String} elementArg - div/element holding the required value
 * @returns {String} The first three characters from argument (USR/HRD/ADM/INS/REC/MGR)
 */
function getDemoRole(elementArg) {
	if (elementArg.substr(0, 3) == "HRM") return "HRD";
	if (elementArg.substr(0, 3) == null) return "USR";
	else return elementArg.substr(0, 3);
}

/**
 * Gets details of user's navmenu (titles & urls)
 * @param {Array} accessURLsArg - The array of possible access items a user might/could have.
 * @returns {Array} An array filtered on access items user has.
 */
function getAccessDetails(accessURLsArg) {
	let accessArr = [];
	var urlData = [];
	for (var URL in accessURLsArg) {
		$("a[id$='lnkSubMenu'][href*='" + accessURLsArg[URL].url + "']").text(function() {
			urlData = {
				"id": accessURLsArg[URL].title,
				"title": $(this).text(),
				"url": $(this).attr('href'),
				"icon": accessURLsArg[URL].icon,
				"module": accessURLsArg[URL].module,
				"quicklinkPrio": accessURLsArg[URL].quicklinkPrio,
				"widgetPrio": accessURLsArg[URL].widgetPrio
			};
			accessArr[URL] = urlData;
		});
	}
	return accessArr;
}

/**
 * Sorts an array of objects by column/property.
 * @param {Array} array - The array of objects.
 * @param {object} sortObject - The object that contains the sort order keys with directions (asc/desc). e.g. { age: 'desc', name: 'asc' }
 * @returns {Array} The sorted array.
 */
function multiSort(array, sortObject = {}) {
	const sortKeys = Object.keys(sortObject);

	// Return array if no sort object is supplied.
	if (!sortKeys.length) {
		return array;
	}

	// Change the values of the sortObject keys to -1, 0, or 1.
	for (let key in sortObject) {
		sortObject[key] = sortObject[key] === 'desc' || sortObject[key] === -1 ? -1 :
			(sortObject[key] === 'skip' || sortObject[key] === 0 ? 0 : 1);
	}

	const keySort = (a, b, direction) => {
		direction = direction !== null ? direction : 1;

		if (a === b) { // If the values are the same, do not switch positions.
			return 0;
		}

		// If b > a, multiply by -1 to get the reverse direction.
		return a > b ? direction : -1 * direction;
	};

	return array.sort((a, b) => {
		let sorted = 0;
		let index = 0;

		// Loop until sorted (-1 or 1) or until the sort keys have been processed.
		while (sorted === 0 && index < sortKeys.length) {
			const key = sortKeys[index];

			if (key) {
				const direction = sortObject[key];

				sorted = keySort(a[key], b[key], direction);
				index++;
			}
		}

		return sorted;
	});
}

/**
 * Builds the navigation menu for the new welcome page.
 * @param {string} demoRoleArg - demorole data derived from custom field.
 * @param {string} targetNavDiv - html element which should hold the output.
 * @param {string} cultureArg - culture to be used (EN-us, EN-uk, DE-de, ...). This is coming from sessionStorage.
 * @returns a promise
 */
async function buildNav(demoRoleArg, targetNavDiv, cultureArg) {
	return new Promise((resolve, reject) => {
		/* Set top menu space  START */
		var tmpNav = document.createElement("nav");
		tmpNav.className = "header__nav header__nav--custom";

		var tmpNavLink = document.createElement("a");
		tmpNavLink.className = "nav-link--custom text-uppercase text-no-underline active";
		tmpNavLink.setAttribute('title', 'Home');
		tmpNavLink.setAttribute('id', 'framework-oldnav-home');
		// tmpNavLink.setAttribute('href','#');
		tmpNavLink.innerHTML = "";

		tmpNav.appendChild(tmpNavLink);

		var mainContent = document.getElementById("ctl00_masterPageBody");
		mainContent.before(tmpNav);
		/* Set top menu space  END */

		/* Replace hamburger menu with user image */
		$("a[id='ctl00_header_headerResponsive_lnkNavBar'] i").replaceWith($("img[id='ctl00_header_headerResponsive_responsiveNav_imgPhoto']").clone());

		var topNavUL = document.createElement("ul");
		topNavUL.className = "nav nav-tabs trq-tab-group ng-star-inserted";
		topNavUL.setAttribute("id", "gpewp_nav");
		topNavUL.setAttribute("role", "tablist");
		topNavUL.setAttribute("_ngcontent-nml-c325", "");

		var topNavItmUSR = document.createElement("li");
		topNavItmUSR.className = "trq-tab-group-item ng-star-inserted";
		topNavItmUSR.setAttribute("role", "presentation");
		topNavItmUSR.setAttribute("_ngcontent-nml-c325", "");
		topNavItmUSR.setAttribute("trqid", "group-item");
		topNavItmUSR.setAttribute("trqiduseparent", "true");

		var topNavBtnUSR = document.createElement("a");
		topNavBtnUSR.className = "trq-tab-link--flat ng-star-inserted active";
		topNavBtnUSR.setAttribute("id", "nav-USR-tab");
		topNavBtnUSR.setAttribute("data-bs-toggle", "tab");
		topNavBtnUSR.setAttribute("data-bs-target", "#nav-USR");
		topNavBtnUSR.setAttribute("type", "button");
		topNavBtnUSR.setAttribute("role", "tab");
		topNavBtnUSR.setAttribute("aria-controls", "nav-USR");
		topNavBtnUSR.setAttribute("aria-selected", "true");
		topNavBtnUSR.setAttribute("_ngcontent-nml-c376", "");
		topNavBtnUSR.innerHTML = cs_customLocale.topNavigationTitle.USR[cultureArg]; //sessionStorage["csCulture"]

		topNavItmUSR.appendChild(topNavBtnUSR);
		var topNavItmRole = 0;
		if (demoRoleArg == "HRM") demoRoleArg = "HRD"; // Fix until we have update all the different areas from HRM to HRD
		switch (demoRoleArg) {
			case "REC":
			case "MGR":
			case "HRD":
			case "INS":
			case "ADM":
				// IF there is a report in gpeUSERREPORTID - go on.
				if (gpeUSERREPORTID[demoRoleArg]) buildExtendedWidget(getAccessDetails(accessURLs), demoRoleArg + "-right", gpeUSERREPORTID[demoRoleArg].reportid, gpeUSERNAME, demoRoleArg);
				topNavItmRole = buildExtraNavItem(demoRoleArg, cultureArg);
				break;
		}

		var topNavItmQLS = document.createElement("li");
		topNavItmQLS.className = "trq-tab-group-item ng-star-inserted";
		topNavItmQLS.setAttribute("role", "presentation");
		topNavItmQLS.setAttribute("_ngcontent-nml-c325", "");
		topNavItmQLS.setAttribute("trqid", "group-item");
		topNavItmQLS.setAttribute("trqiduseparent", "true");

		var topNavBtnQLS = document.createElement("a");
		topNavBtnQLS.className = "trq-tab-link--flat ng-star-inserted";
		topNavBtnQLS.setAttribute("id", "nav-QLS-tab");
		topNavBtnQLS.setAttribute("data-bs-toggle", "tab");
		topNavBtnQLS.setAttribute("data-bs-target", "#nav-QLS");
		topNavBtnQLS.setAttribute("type", "button");
		topNavBtnQLS.setAttribute("role", "tab");
		topNavBtnQLS.setAttribute("aria-controls", "nav-QLS");
		topNavBtnQLS.setAttribute("aria-selected", "true");
		topNavBtnQLS.setAttribute("_ngcontent-nml-c376", "");
		topNavBtnQLS.innerHTML = cs_customLocale.topNavigationTitle.QLS[cultureArg]; // sessionStorage["csCulture"]

		topNavItmQLS.appendChild(topNavBtnQLS);

		topNavUL.appendChild(topNavItmUSR);
		if (topNavItmRole != 0) {
			topNavUL.appendChild(topNavItmRole);
		}
		topNavUL.appendChild(topNavItmQLS);

		var w1 = document.createElement("nav");
		w1.className = "profile-nav trq-mb-3 trq-bg-white trq-shadow-bottom-lg ng-star-inserted";
		w1.setAttribute("_ngcontent-nml-c376", "");
		w1.setAttribute("id", "profile-tabs");

		var w2 = document.createElement("trq-tab-group");
		w2.className = "trq-tab-group";
		w2.setAttribute("_ngcontent-nml-c376", "");
		w2.setAttribute("_nghost-nml-c325", "");

		var w3 = document.createElement("trq-scroller");
		w3.className = "trq-scroller--flat trq-scroller__container ng-star-inserted";
		w3.setAttribute("_ngcontent-nml-c325", "");
		w3.setAttribute("trqid", "");
		w3.setAttribute("trqiduseparent", "true");
		w3.setAttribute("_nghost-nml-c320", "");
		w3.setAttribute("id", "profile-tabs-trq-scroller");

		var w4 = document.createElement("div");
		w4.className = "trq-scroller";
		w4.setAttribute("_ngcontent-nml-c320", "");

		var w5 = document.createElement("div");
		w5.className = "trq-scroller__list";
		w5.setAttribute("style", "height: 50px;");

		var w6 = document.createElement("div");
		w6.className = "trq-scroller__list__track";
		w6.setAttribute("style", "position: relative;");

		w6.appendChild(topNavUL);
		w5.appendChild(w6);
		w4.appendChild(w5);
		w3.appendChild(w4);
		w2.appendChild(w3);
		w1.appendChild(w2);

		document.getElementById(targetNavDiv).innerHTML = w1.outerHTML;
		resolve(w1);
	});
}

/**
 * Builds extra navigation item
 * @param {string} demoRoleArg -
 * @param {string} cultureArg - Sessionstorage value (EN-us, EN-uk, DE-de, ... )
 * @returns
 */
function buildExtraNavItem(demoRoleArg, cultureArg) {
	var topNavItmRole = document.createElement("li");
	topNavItmRole.className = "trq-tab-group-item ng-star-inserted";
	topNavItmRole.setAttribute("role", "presentation");
	topNavItmRole.setAttribute("_ngcontent-nml-c325", "");
	topNavItmRole.setAttribute("trqid", "group-item");
	topNavItmRole.setAttribute("trqiduseparent", "true");

	var topNavBtnRole = document.createElement("a");
	topNavBtnRole.className = "trq-tab-link--flat ng-star-inserted";
	topNavBtnRole.setAttribute("id", "nav-" + demoRoleArg + "-tab");
	topNavBtnRole.setAttribute("data-bs-toggle", "tab");
	topNavBtnRole.setAttribute("data-bs-target", "#nav-" + demoRoleArg);
	topNavBtnRole.setAttribute("type", "button");
	topNavBtnRole.setAttribute("role", "tab");
	topNavBtnRole.setAttribute("aria-controls", "nav-" + demoRoleArg);
	topNavBtnRole.setAttribute("aria-selected", "true");
	topNavBtnRole.setAttribute("_ngcontent-nml-c376", "");
	topNavBtnRole.innerHTML = cs_customLocale.topNavigationTitle[demoRoleArg][cultureArg]; //sessionStorage["csCulture"]
	test = 2;
	topNavItmRole.appendChild(topNavBtnRole);

	return topNavItmRole;
}

/**
 * Prepare
 * @param
 * @param
 * @returns
 */
async function getWidgetData(widgetIDArg) {
	return new Promise((resolve, reject) => {

		var widgetContentDiv = document.createElement("div");
		var widgetColumnWidth = 12;
		var widgetColumnID = widgetIDArg.id;
		var targetDiv = gpeUSRMAINDIV;

		switch (widgetIDArg.id) {
			case "view_your_transcript":
				widgetContentDiv.className = "transcriptContents";
				widgetContentDiv = getTranscriptdetails("transcriptContents");
				break;
			case "performance_reviews":
				widgetContentDiv.className = "actionContents";
				widgetContentDiv = getActionsdetails("actionContents");
				break;
			case "check_ins":
				widgetContentDiv.className = "checkinContents";
				widgetContentDiv = getCheckinsDetails("checkinContents");
				break;
			case "goals":
				widgetContentDiv.className = "goalContents";
				widgetContentDiv = getGoalsDetails("goalsContents");
				targetDiv = gpeUSRLEFTDIV;
				break;
			case "development_plans":
				widgetContentDiv.className = "devPlanContents";
				widgetContentDiv = getDevPlanDetails("devplanContents");
				targetDiv = gpeUSRLEFTDIV;
				break;
			case "live_feed":
				widgetContentDiv.className = "feedContents";
				widgetContentDiv = getFeedDetails("feedContents");
				break;
		}

		$.when(widgetContentDiv)
			.then(widgetData => {
				//resolve(buildWidget(widgetIDArg, widgetColumnWidth, "cs_main "+widgetIDArg.id, "widgetData_"+widgetColumnID, targetDiv, "cs_"+widgetIDArg.id, widgetData));
				return generateHTMLWidget(widgetIDArg, widgetColumnWidth, "cs_main_" + widgetIDArg.id, "widgetData_" + widgetColumnID, targetDiv, "cs_" + widgetIDArg.id, widgetData);
				//return widgetIDArg;
			})
			.then(contentDiv => {
				// console.log("widgetContentDiv");
				// console.log(widgetContentDiv);
				var tmpRowDiv = document.getElementById(targetDiv);
				tmpRowDiv.appendChild(contentDiv);

				$("#USR-right .widgetData").sort(function(a, b) {
					return $(a).data("position") - $(b).data("position");
				}).appendTo("#USR-right");

				$("#USR-left div.widgetData").sort(function(a, b) {
					return $(a).data("position") - $(b).data("position");
				}).appendTo("#USR-left");

				$("#feedContents").niceScroll().resize();

				resolve(contentDiv);
			})
			.then(data => {
				//$("div[id='cs_main_" + widgetIDArg.id + "'] .loader").css("display", "none");
			})
			.catch(error => {
				console.error("Error bulding Welcome Page: " + error);
				reject(error);
			});
		return true;
	});
}


/**
 *
 * @param
 * @param
 * @returns
 */
 // buildWidgets
async function buildWidgets(accessArrArg, cultureArg) {
	return new Promise((resolve, reject) => {
		// Sort array on widgetPrio column
		var widgetOrderedArr = accessArrArg.sort((a, b) => a.widgetPrio - b.widgetPrio);
		// Get all widgets (widgetPrio = 99 means it is not a widget and should not be used)
		widgetIDArr = widgetOrderedArr.filter(v => +v.widgetPrio < 99);
		// Execute!
		//resolve(createWidget(widgetIDArr));
		resolve(createWidget(widgetIDArr));
	})
	.catch(error => {
		console.error("Error bulding Welcome Page: " + error);
		reject(error);
	});
}

/*
async function buildWidgets(accessArrArg, cultureArg) {
	return new Promise((resolve, reject) => {
		let aboutDetails = buildAboutCard(gpeABOUTCARDDIV);
		$.when(aboutDetails)
		.then((res) => {
			let quickLinks = buildQuickLinksCard(accessArrArg, cultureArg);
			getApprovalDetails(approvalURLs, cultureArg, gpeDEMOROLE);
			$.when(quickLinks)
			.then((res) => {
				return true;
			})
			.catch(error => console.error("Error bulding Quick links: " + error));
		})
		.then((res) => {
				// Sort array on widgetPrio column
			var widgetOrderedArr = accessArrArg.sort((a, b) => a.widgetPrio - b.widgetPrio);
				// Get all widgets (widgetPrio = 99 means it is not a widget and should not be used)
			widgetIDArr = widgetOrderedArr.filter(v => +v.widgetPrio < 99);
				// Execute!
			//resolve(createWidget(widgetIDArr));
			resolve(createWidget(widgetIDArr));
		})
		.catch(error => {
			console.error("Error bulding Welcome Page: " + error);
			reject(error);
		});
	});
}
*/

/* createWidget functions */
/**
 *
 * @param
 * @param
 * @returns
 */
var createWidget = (widgets) => {
	const widgetQueueArr = widgets.map((widgetID) => {
		return getWidgetData(widgetID)
			.catch(error => console.error("Error in getWidgetData: " + widgetID.id + ". Error message: " + error));
	});
	Promise.all(widgetQueueArr)
		.then((widgetResponse) => {
			//console.log("-[ Widgets have been processed and rendered ]-");
			//console.log(widgetResponse);
			return widgetResponse;
		})
		.catch(error => console.error("Error in getting widget data: " + error));
};

/*
 * Build Widget function
 */
/**
 *
 * @param
 * @param
 * @returns
 */
async function generateHTMLWidget(contentArr, colArg, colIDArg, rowIDArg, targetColDivIDArg, contentDivClassArg, contentArg) {
	return new Promise((resolve, reject) => {
			var tmpRowDiv = "";
			if (document.getElementById(rowIDArg)) {
				tmpRowDiv = document.getElementById(rowIDArg);
			} else {
				tmpRowDiv = document.createElement("div");
				tmpRowDiv.setAttribute("id", rowIDArg); //"cs_main_transcript"
				tmpRowDiv.setAttribute("data-position", contentArr.widgetPrio); //"cs_main_transcript"
				//		tmpRowDiv.className = "widgetData";
				tmpRowDiv.className = "widgetData col-md-" + colArg; //"col-md-12";
			}

			var tmpColDiv = document.createElement("div");
			//	tmpColDiv.className = "col-md-"+ colArg; //"col-md-12";
			tmpColDiv.setAttribute("id", colIDArg); //"cs_main_transcript"

			var tmpCardParent = document.createElement("div");
			tmpCardParent.className = "card";

			var tmpCardHeader = document.createElement("a");
			tmpCardHeader.className = "card-header";
			tmpCardHeader.innerHTML = contentArr.title; //accessArr[accessItem]["title"];
			tmpCardHeader.setAttribute('href', contentArr.url);

			var tmpCardBody = document.createElement("div");
			tmpCardBody.className = "card-body";

			var tmpCardContent = document.createElement("div");
			tmpCardContent.className = contentDivClassArg;

			var preLoader = document.createElement("div");
			preLoader.className = "loader";
			tmpCardBody.appendChild(preLoader);

			tmpCardContent = contentArg;
			//console.log("contentArg -------------------");
			//console.log(contentArg);

			tmpCardBody.appendChild(tmpCardContent);

			tmpCardParent.append(tmpCardHeader, tmpCardBody);
			tmpColDiv.appendChild(tmpCardParent);
			tmpRowDiv.appendChild(tmpColDiv);

			resolve(tmpRowDiv);
		})
		.catch(error => console.error("Error in getGoalsDetails: " + error));
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
		tmpRowDiv.setAttribute("id", rowIDArg); //"cs_main_transcript"
		tmpRowDiv.className = "row";
	}

	var tmpColDiv = document.createElement("div");
	tmpColDiv.className = "col-md-" + colArg; //"col-md-12";
	tmpColDiv.setAttribute("id", colIDArg); //"cs_main_transcript"

	var tmpCardParent = document.createElement("div");
	tmpCardParent.className = "card";

	var tmpCardHeader = document.createElement("a");
	tmpCardHeader.className = "card-header";
	tmpCardHeader.innerHTML = cardTitleArg; //accessArr[accessItem]["title"];
	tmpCardHeader.setAttribute('href', cardTitleHrefArg);

	var tmpCardBody = document.createElement("div");
	tmpCardBody.className = "card-body";

	var tmpCardContent = document.createElement("div");
	tmpCardContent.className = contentDivClassArg;

	var preLoader = document.createElement("div");
	preLoader.className = "loader";
	tmpCardBody.appendChild(preLoader);

	tmpCardContent = contentArg;

	tmpCardBody.appendChild(tmpCardContent);

	tmpCardParent.append(tmpCardHeader, tmpCardBody);
	tmpColDiv.appendChild(tmpCardParent);
	tmpRowDiv.appendChild(tmpColDiv);

	var mainContent = document.getElementById(targetColDivIDArg); // "cs_main_center"
	mainContent.appendChild(tmpRowDiv);

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
function buildQuickLinksCard(accessArrArg, cultureArg) {
	var tmpRowDiv = document.createElement("div");
	tmpRowDiv.className = "row";

	/* BTN START */
	var qlArrTmp = multiSort(getAccessDetails(accessURLs), {
		module: 'asc',
		quicklinkPrio: 'asc'
	});
	var qlArr = {};

	var counter = 0;
	qlArrTmp.forEach(function(o) {
		var k = o.module;
		if (!qlArr[k]) {
			qlArr[k] = [];
			counter = 0;
		}
		if (counter < 5) qlArr[k].push(o);
		counter++;
	});

	$.each(qlArr, function(e, i, a) {
		var test = i.slice(0, 5);
		//		console.log("Module: "+ e +" - ONLY GET: "+ test);
		var qlInfo = "<p>Module: " + e + "</p>";
		var tmpBtnDivider = document.createElement("span");
		tmpBtnDivider.innerHTML = qlInfo;
		//		tmpContentDiv.appendChild(tmpBtnDivider);

		var tmpColDiv = document.createElement("div");
		tmpColDiv.className = "col-md-6";
		tmpColDiv.setAttribute("id", "cs_main_quicklinks"); //"cs_main_transcript"

		var tmpCardParent = document.createElement("div");
		tmpCardParent.className = "card";

		var tmpCardHeader = document.createElement("a");
		tmpCardHeader.className = "card-header";
		//		console.log("module: "+ e);
		//		console.log("culture: "+ cultureArg);
		//		console.log("translated: "+ cs_customLocale["moduleTitle"][e][cultureArg]);
		tmpCardHeader.innerHTML = cs_customLocale.moduleTitle[e][cultureArg]; //accessArr[accessItem]["title"];
		//		tmpCardHeader.innerHTML = "QUICK LINKS: "+ e; //accessArr[accessItem]["title"];

		var tmpCardBody = document.createElement("div");
		tmpCardBody.className = "card-body";

		tmpContentDiv = document.createElement("div");

		$.each(i.slice(0, 5), function(e1, i1, a1) {
			if (i1.quicklinkPrio != 99) tmpContentDiv.appendChild(buildQuickLinkButton(i1, accessArrArg));
		});

		tmpCardBody.appendChild(tmpContentDiv);

		tmpCardParent.append(tmpCardHeader, tmpCardBody);
		tmpColDiv.appendChild(tmpCardParent);
		tmpRowDiv.appendChild(tmpColDiv);
	});

	/* BTN END */

	var mainContent = document.getElementById("QLS-content");
	mainContent.appendChild(tmpRowDiv);
	return true;
}

/**
 *
 * @param
 * @param
 * @returns
 */
function buildQuickLinkButton(accessItemArg, accessArrArg) {
	var tmpBtnDiv = document.createElement("a");
	tmpBtnDiv.className = "btn btn-primary";
	tmpBtnDiv.setAttribute("href", accessItemArg.url);
	var tmpBtnDivIcon = document.createElement("i");
	tmpBtnDivIcon.className = "fa " + accessItemArg.icon;
	tmpBtnDiv.appendChild(tmpBtnDivIcon);

	var tmpBtnDivText = document.createElement("span");
	tmpBtnDivText.className = "text";
	tmpBtnDivText.innerHTML = accessItemArg.title;
	tmpBtnDiv.appendChild(tmpBtnDivText);
	return tmpBtnDiv;
}

/**
 *
 * @param
 * @param
 * @returns
 */
function buildAboutCard(contentDivClassArg) {

	var tmpContainerDiv = document.createElement("div");
	tmpContainerDiv.className = "container-fluid topcontent";

	var tmpRowDiv = document.createElement("div");
	tmpRowDiv.className = "row";

	var tmpColImageDiv = document.createElement("div");
	tmpColImageDiv.className = "col-md-2";

	var tmpCardAboutImage = document.createElement("img");
	tmpCardAboutImage.className = "abt-image";
	tmpCardAboutImage.setAttribute("src", document.getElementById("ctl00_header_headerResponsive_responsiveNav_imgPhoto").getAttribute("src"));

	tmpColImageDiv.appendChild(tmpCardAboutImage);

	var tmpColNameDiv = document.createElement("div");
	tmpColNameDiv.className = "col-md-10";

	var tmpAboutDiv = document.createElement("div");
	tmpAboutDiv.className = "abt";

	// Get Name
	var tmpUserNameDiv = document.createElement("div");
	tmpUserNameDiv.className = "abt-name";

	var tmpUserNameSpan = document.createElement("span");
	tmpUserNameSpan.className = "abt-name-text";
	tmpUserNameSpan.innerHTML = document.getElementById("ctl00_header_headerResponsive_responsiveNav_lblName").innerHTML;

	// Get Job
	var tmpUserJobDiv = document.createElement("div");
	tmpUserJobDiv.className = "abt-job";

	var tmpUserJobSpan = document.createElement("span");
	tmpUserJobSpan.className = "abt-job-text";
	tmpUserJobSpan.innerHTML = document.getElementById("ctl00_header_headerResponsive_responsiveNav_lblPosition").innerHTML;
	tmpUserJobDiv.appendChild(tmpUserJobSpan);

	tmpUserNameDiv.appendChild(tmpUserNameSpan);

	tmpAboutDiv.appendChild(tmpUserNameDiv);
	tmpAboutDiv.appendChild(tmpUserJobDiv);

	tmpColNameDiv.appendChild(tmpAboutDiv);

	tmpRowDiv.appendChild(tmpColImageDiv);
	tmpRowDiv.appendChild(tmpColNameDiv);
	tmpContainerDiv.appendChild(tmpRowDiv);

	//var mainContent = document.getElementById("gpewp_topcontainer_upper");
	var mainContent = document.getElementById(contentDivClassArg);
	mainContent.appendChild(tmpContainerDiv);

	return true;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function drawDonut(completeArg, contentDivClassArg, tmpContentDivArg) {

	var dataDonutArr = [completeArg, (100 - completeArg)];
	//	console.log(dataDonutArr);

	var tmpCanvasID = "chart_" + contentDivClassArg;
	var tmpCanvas = document.createElement("canvas");
	tmpCanvas.setAttribute("id", tmpCanvasID);
	tmpCanvas.setAttribute("style", "height: 250px, width: 100%");

	tmpContentDivArg.appendChild(tmpCanvas);

	const data = {
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

	const counter = {
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

	const config = {
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

	var ctx = tmpCanvas.getContext("2d");
	var myChart = new Chart(ctx, config);
	return myChart;
}

/**
 *
 * @param
 * @param
 * @returns
 */
function getApprovalDetails(approvalURLsArg, cultureArg, demoRoleArg) {

	var aprvlDiv = document.createElement("div");
	aprvlDiv.className = "gpewp_approvals";

	var count = 0;
	var check;
	for (var item in approvalURLsArg) {
		count += 1;
		$("table[id*='plnInbox_content'] a[href*='" + approvalURLsArg[item].url + "']").text(function() {

			var tmpAprvlDiv = document.createElement("div");
			tmpAprvlDiv.className = "approval-item approval-" + item + " app" + count;

			var tmpAprvlDivHref = document.createElement("a");
			tmpAprvlDivHref.className = "btn btn-primary position-relative " + item;
			tmpAprvlDivHref.setAttribute("href", $(this).attr('href'));

			var tmpAprvlDivImg = new Image();
			tmpAprvlDivImg.className = approvalURLsArg[item].icon;
			tmpAprvlDivImg.src = "/clientimg/" + sessionStorage.csCorp + "/welcome/" + approvalURLsArg[item].imgname;

			var tmpAprvlDivText = document.createElement("span");
			tmpAprvlDivText.innerHTML += approvalURLsArg[item].title[cultureArg];

			var tmpAprvlDivBadge = document.createElement("span");
			tmpAprvlDivBadge.className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger";
			tmpAprvlDivBadge.innerHTML = $("table[id*='plnInbox_content'] a[href*='" + approvalURLsArg[item].url + "'] ~ span:first").text().match(/\d+/)[0];

			tmpAprvlDivHref.appendChild(tmpAprvlDivImg);
			tmpAprvlDivHref.appendChild(tmpAprvlDivText);
			tmpAprvlDivHref.appendChild(tmpAprvlDivBadge);
			tmpAprvlDiv.appendChild(tmpAprvlDivHref);

			aprvlDiv.appendChild(tmpAprvlDiv);
			check = "ok";
		});
	}
	//console.log(aprvlDiv);
	if (check == "ok") {

		generateHTMLCard(
				$("td[id$='_ctl00_plnInbox_titleMiddle'] h2").text(),
				"#",
				12,
				"gpe_approvalswidget",
				"row_left_1",
				demoRoleArg + "-left",
				"approvalContent",
				aprvlDiv
			)
			.then(mainDiv => {
				//$("div[id='" + mainDiv + "'] .loader").css("display", "none");
			});
	}
	return true;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getGoalsDetails(contentDivClassArg) {
	var tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = contentDivClassArg;
	tmpContentDiv.setAttribute("id", contentDivClassArg);

	var widgetUrl = "/phnx/driver.aspx?routename=Goals/GoalList";

	let getHTML = (url) => {
		return fetch(url);
	};

	var htmlData = getHTML(widgetUrl);
	$.when(htmlData)
		.then(data => data.text())
		.then(data => {
			var goalComplete = $(data).find('.percentage').attr("data-percent");
			if (goalComplete != 0) {
				drawDonut(goalComplete, contentDivClassArg, tmpContentDiv);
			} else {
				tmpContentDiv.innerHTML = "<button type='button' id='createNewGoalsBTN' class='getstarted_button'>" + cs_customLocale.wp.widgets.goals.notitle[sessionStorage.csCulture] + "</button>";
			}
			return tmpContentDiv.className;
		})
		.then(targetDiv => {
			// Hide the loader
			// console.log("loaded????");
			//$("div[id='" + targetDiv + "']").parent(".card-body").children(".loader").css("display", "none");
			return targetDiv;
		})
		.catch(error => console.error("Error in getGoalsDetails: " + error));
	return tmpContentDiv;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getTranscriptdetails(contentDivClassArg) {

	var tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = contentDivClassArg;
	tmpContentDiv.setAttribute("id", contentDivClassArg);

	var tmpContent = document.querySelector("div[data-tag='pnlMyTraining'] div[id$='_widgetContainer_ctl00_upnlList'] table");
	var data = [...tmpContent.rows].map(row => [...row.cells].map(td => {
		return td.innerHTML.replace(/\s+/g, ' ').trim();
	}));

	data.shift();
	var columns = [{
			title: "Title",
			sortable: true
		},
		{
			title: "Due Date",
			sortable: true
		},
		{
			title: "Status",
			sortable: true
		},
		{
			title: "Action",
			sortable: false
		}
	];

	var $table;
	$table = $('<table>');
	$table.appendTo(tmpContentDiv);
	$table.bootstrapTable({
		locale: sessionStorage.csCulture,
		pageSize: 10,
		pagination: false, // Allow pagination
		search: true, // Allow search
		checkboxHeader: false,
		showToggle: false,
		detailView: false,
		columns: columns,
		data: data
	});
	return tmpContentDiv;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getActionsdetails(contentDivClassArg) {
	var tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = contentDivClassArg;
	tmpContentDiv.setAttribute("id", contentDivClassArg);

	//var tmpContent = document.querySelector("table[id*='ctl00_pnlActionItems_content']");
	var tmpContent = document.querySelector("div[data-tag='pnlMyTraining'] div[id$='_widgetContainer_ctl00_upnlList'] table");
	var data = [...tmpContent.rows].map(row => [...row.cells].map(td => {
		return td.innerHTML.replace(/\s+/g, ' ').trim();
	}));

	data.shift();
	var columns = [{
			title: "Title",
			sortable: true
		},
		{
			title: "Due Date",
			sortable: true
		}
	];

	var $table;
	$table = $('<table>');
	$table.appendTo(tmpContentDiv);
	$table.bootstrapTable({
		locale: sessionStorage.csCulture,
		pageSize: 10,
		pagination: false, // Allow pagination
		search: true, // Allow search
		checkboxHeader: false,
		showToggle: false,
		detailView: false,
		columns: columns,
		data: data
	});
	//tmpContentDiv.appendChild(tmpContent);

	return tmpContentDiv;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getDevPlanDetails(contentDivClassArg) {
	var tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = contentDivClassArg;
	tmpContentDiv.setAttribute("id", contentDivClassArg);

	var widgetUrl = "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew";

	let getHTML = (url) => {
		return fetch(url);
	};

	var htmlData = getHTML("/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot");
	$.when(htmlData)
		.then(data => data.text())
		.then(data => {
			var devPlanStr = $(data).find("a[href*='/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew']").closest("div[class*='dashboard-widget-content']");
			var devPlanPercent = $(devPlanStr).find(".percentage span");
			if (devPlanPercent.text() > 0) {
				devPlanPercentComplete = devPlanPercent.text();
				drawDonut(devPlanPercentComplete, contentDivClassArg, tmpContentDiv);
			} else {
				tmpContentDiv.innerHTML = "<button type='button' id='createNewDevplanBTN' class='getstarted_button'>" + cs_customLocale.wp.widgets.devplan.notitle[sessionStorage.csCulture] + "</button>";
			}
			return tmpContentDiv.className;
		})
		.then(targetDiv => {
			// Hide the loader
			//$("div[id='" + targetDiv + "']").parent(".card-body").children(".loader").css("display", "none");
			return targetDiv;
		})
		.catch(error => console.error("Error in getGoalsDetails: " + error));
	return tmpContentDiv;
}


/* Update JWT */
/**
 *
 * @param
 * @param
 * @returns
 */
function updateJWT() {
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
			var checkReturningUser = $("[id*='pnlActionItems_titleMiddle'] a[href*='TargetUser=" + sessionStorage.csUser + "']").length ? true : false;
			if (checkReturningUser == true) {

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
					//console.log("-[ UPDATING JWT ]-");
					resolve(updateJWT());
					return sessionStorage.csToken;
				} else {
					//console.log("-[ JWT OK ]-");
					resolve(sessionStorage.csToken);
				}
			} else {
				//console.log("-[ UPDATING JWT ]-");
				resolve(updateJWT());
			}
		} else {
			//console.log("-[ UPDATING JWT ]-");
			resolve(updateJWT());
		}
	});
}

/**
 * Builds an extended widget on the welcome page by retrieving data from a report (typically a shared report).
 * @param {array} accessArrArg -
 * @param {string} appendDivArg -
 * @param {array} usernameArg -
 * @param {string} demoRoleArg -
 * @returns HTML table to be put on the welcome page
 */
async function buildExtendedWidget(accessArrArg, appendDivArg, reportIDArg, usernameArg, demoRoleArg) {
	const userName = usernameArg[0][0].concat(usernameArg[1]);
	var rowID = "";
	let reportToken = checkReportToken();
	$.when(reportToken)
		.then((data) => {

			var reportContentDiv = document.createElement("div");
			reportContentDiv.setAttribute("id", "userReport" + reportIDArg);
			reportContentDiv.className = "user_table";

			var cardTitle = cs_customLocale.ManagerWidgetTitle[sessionStorage.csCulture]; // cardTitleArg - Title of the card.
			var cardLink = ""; // cardTitleHrefArg - URL on the card title.
			var cardWidth = 12; // colArg - Bootstrap column width. Max 12.
			var cardColID = "userReport_Col_" + reportIDArg; // colIDArg - ID of the card column.
			var cardRowID = "userReport_Row_" + reportIDArg; // rowIDArg - ID of the card row. Check is made to either create new or reuse existing row.
			var targetColDivID = appendDivArg; // targetColDivIDArg - where to put the card. This ID need to exist in the HTML of the skeleton structure of the welcome page.
			var contentDivClass = "userReport"; // contentDivClassArg - css class name of the content. This in order to be able to further style the card.
			var content = reportContentDiv; // contentArg - main content of the card.

			generateHTMLCard(cardTitle, cardLink, cardWidth, cardColID, cardRowID, targetColDivID, contentDivClass, content);

			return fetchManagerReport(reportIDArg, userName, demoRoleArg);
		})
		.then(reportresp => {
			const userArr = reportresp[0].data;
			const userMetaArr = reportresp[1];
			const [, ...userData] = [...new Set(userArr.map(x => x))];

			// Fix columns array for the table
			var tempCol = userMetaArr.columns.map((e) => {
				return {
					field: e.name + "_" + e.entityId,
					title: e.title,
					visible: gpeUSERREPORTID[demoRoleArg].showcolumns.includes(e.name + "_" + e.entityId),
					sortable: true
				};
			});

			// Fix data array for the table
			var tempData = userData.map(function(row) {
				return row.reduce(function(result, field, index) {
					result[tempCol[index].field] = field;
					return result;
				}, {});
			});

			var reportContentDiv = document.getElementById("userReport" + reportIDArg);
			var $table;
			$table = $("<table id='extReport" + reportIDArg + "'>");
			//$table = $("ReportTable"+reportResponse[2]);
			$table.appendTo(reportContentDiv);
			$table.bootstrapTable({
				locale: sessionStorage.csCulture,
				exportDataType: true,
				exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
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
			});
			return reportContentDiv;
		})
		.then((cardRowID) => {
			//$("div[id='" + cardRowID + "'] .loader").css("display", "none");
		})
		.catch(error => console.error("error with building manager page: " + error));
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function getCheckinsDetails(contentDivClassArg) {
	tmpContentDiv = document.createElement("div");
	tmpContentDiv.className = contentDivClassArg;
	tmpContentDiv.setAttribute("id", contentDivClassArg);

	//$("div[id='"+contentDivClassArg+"']").parent(".card-body").children(".loader").show();

	var localResponse = {};

	return fetch("/services/x/localization/v1/localizations/ui?groups=GoalPanel,DevPlanPanel,CheckIns&culture=" + sessionStorage.csCulture, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + sessionStorage.csToken,
			},
		})
		.then(response => response.json())
		.then(localStr => {
			//		console.log("checkins 1 - done");
			endpointURL = sessionStorage.csCloud + "perf-conversations-api/v1/conversations";

			localResponse = localStr.data;

			return fetch(endpointURL, {
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
		.then(checkinObjects => {
			//		console.log("checkins 2 - done");
			//		console.log(checkinObjects.length);
			let checkinStr = "";
			if (checkinObjects.length != 0) {
				//			console.log("HERE I AM!");

				var hostName = window.location.host.split('.');

				checkinStr = "<table border='0' cellspacing='0' cellpadding='0' width='100%' class='table table-hover'>";
				checkinStr += "<thead>";
				checkinStr += "<tr>";
				checkinStr += "<th class='checkHeaderCol'>" + localResponse["Perf.Check-Ins.LandingPage.upcomingConversationsOverview.checkInLabel"] + "</th>";
				checkinStr += "<th class='checkHeaderCol'>" + localResponse["Perf.Check-Ins.LandingPage.recentConversationsRow.conversationRecentlyModifiedText"] + "</th>";
				checkinStr += "<th class='checkHeaderCol'>" + localResponse["Perf.Check-Ins.LandingPage.upcomingConversationsOverview.nextMeetingLabel"] + "</th>";
				checkinStr += "</tr>";
				checkinStr += "</thead>";
				for (let checkinItem in checkinObjects) {

					var avatarUrl = "/clientimg/" + hostName[0] + "/users/photos/" + checkinObjects[checkinItem].participants[1].pictureUrl;


					checkinStr += "<tr id='checkinItem-" + checkinItem + "' class='checkinItem clickable-row' data-href='/ui/perf-check-ins/Check-Ins/view/" + checkinObjects[checkinItem].id + "/meeting/" + checkinObjects[checkinItem].meetingsSummary.nextMeetingId + "'>";
					//				checkinStr += "<a href='/ui/perf-check-ins/Check-Ins/view/"+ checkinObjects[checkinItem]["id"] +"/meeting/"+ checkinObjects[checkinItem]["meetingsSummary"]["nextMeetingId"] +"'>";

					checkinStr += "<td class='checkItemCol'>";
					checkinStr += "<div class='cellContent'>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell' role='button' tabindex='0'>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-avatar' aria-hidden='true'>";
					checkinStr += "<div class='chkAvatarImage' style='background-image:url(" + avatarUrl + ")'></div>";
					checkinStr += "</div>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail'>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__user-name'>" + checkinObjects[checkinItem].participants[1].firstName + " " + checkinObjects[checkinItem].participants[1].lastName + "</div>";
					checkinStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'>" + checkinObjects[checkinItem].title + "</div>";
					checkinStr += "</div>";
					checkinStr += "</div>";
					checkinStr += "</div>";
					checkinStr += "</td>";

					var lastModMonth = new Date(checkinObjects[checkinItem].lastModifiedDate).toLocaleDateString('en-GB', {
						month: 'short'
					}).split(' ');
					var lastModDay = new Date(checkinObjects[checkinItem].lastModifiedDate).toLocaleDateString('en-GB', {
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
				checkinStr = "<button type='button' id='createNewCheckInsBTN' class='getstarted_button'>" + cs_customLocale.wp.widgets.checkins.notitle[sessionStorage.csCulture] + "</button>";
			}
			//		console.log("checkinStr : "+ checkinStr);
			tmpContentDiv.innerHTML = checkinStr;
			return tmpContentDiv;
		})
		.catch(error => {
			console.error("Error building Checkins - ", error);
		});
}

/**
 *
 * @param
 * @param
 * @returns
 */
function getFeedDetails(contentDivClassArg) {
	tmpFeedContentDiv = document.createElement("div");
	tmpFeedContentDiv.className = contentDivClassArg;
	tmpFeedContentDiv.setAttribute("id", contentDivClassArg);

	let feedStr = "<table border='0' cellspacing='0' cellpadding='0' width='100%' class='table table-hover'>";
	var feedArr = {};
	$("tr[id^='ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_'][id*='widgetContainer_ctl00_rChatter_']").each(function(index, value) {

		feedArr[index] = {
			avatarimg: $(this).find("img[id$='_imgActorImage']").attr('src'),
			avatarurl: $(this).find("a[id$='_aActorImage']").attr('href'),
			name: $(this).find(".csod-sf-wplist-message p[id$='pLine1'] a:first").text(),
			action: $.trim($(this).find(".csod-sf-wplist-message p[id$='pLine1'] span").text()),
			recipient: $(this).find(".csod-sf-wplist-message p[id$='pLine1'] a:nth-of-type(2)").text(),
			actiontitle: $.trim($(this).find(".csod-sf-wplist-message p[id$='pLine2']").text()),
			actionurl: $(this).find(".csod-sf-wplist-message p[id$='pLine2'] a").attr('href'),
			actiondate: $(this).find(".csod-sf-wplist-message p[id$='pLine3'] span.csod-sf-wplist-ts:first").text(),
			commenturl: $(this).find(".csod-sf-wplist-message p[id$='pLine3'] a:first").attr('href'),
			commenttext: $(this).find(".csod-sf-wplist-message p[id$='pLine3'] a:first").text(),
		};

		feedStr += "<tr id='feedItem-" + index + "' class='feedItem clickable-row' data-href='" + feedArr[index].avatarurl + "'>";

		feedStr += "<td class='checkItemCol'>";
		feedStr += "<div class='cellContent'>";
		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell' role='button' tabindex='0'>";
		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-avatar' aria-hidden='true'>";
		feedStr += "<div class='chkAvatarImage' style='background-image:url(" + feedArr[index].avatarimg + ")'></div>";
		feedStr += "</div>";
		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail'>";

		var actionDate = "";
		var theDate = new Date(feedArr[index].actiondate); //.toLocaleDateString('en-GB', { month : 'short', day : 'long'}).split(' ');
		if (isNaN(theDate.getTime())) {
			actionDate = $(this).find(".csod-sf-wplist-message p[id$='pLine3'] span.csod-sf-wplist-ts:first").text();

		} else {
			var actionDay = theDate.toLocaleDateString('en-GB', {
				day: 'numeric'
			}).split(' ');
			var actionMonth = theDate.toLocaleDateString('en-GB', {
				month: 'short'
			}).split(' ');
			actionDate = actionMonth + " " + actionDay;

		}
		actionDate = "<div class='feedDate'>" + actionDate + "</div>";

		feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__user-name'>" + actionDate + " " + feedArr[index].name + " " + feedArr[index].action + " " + feedArr[index].recipient + "</div>";


		if (feedArr[index].actionurl == null) {
			feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'><i>" + feedArr[index].actiontitle + "</i></div>";
		} else {
			feedStr += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'><a href='" + feedArr[index].actionurl + "'>" + feedArr[index].actiontitle + "</a></div>";
		}
		feedStr += "</div>";
		feedStr += "</div>";
		feedStr += "</div>";
		feedStr += "</td>";

		feedStr += "</tr>";
	});
	feedStr += "</table>";

	tmpFeedContentDiv.innerHTML = feedStr;

	return tmpFeedContentDiv;
}

/* Status function - used to pause 202 responses */
/**
 *
 * @param
 * @param
 * @returns
 */
function status(response) {
	switch (response.status) {
		case 202:
			return new Promise(r => setTimeout(() => r(response), 1000));
		case 200:
			return Promise.resolve(response);
		case 204:
			return Promise.resolve(response);
	}
}

/**
 * Checks if Report Token needs to be refreshed
 * @returns true
 */
async function checkReportToken() {
	if (sessionStorage.reportToken) {
		var tokenDate = sessionStorage.reportTokenDate;
		var dateDiff = Math.floor((Date.now() - tokenDate) / 1000 / 60);
		if (dateDiff < 10) {
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
	return fetch("/Analytics/ReportBuilder/index.aspx/GetNewToken", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(token => {
			sessionStorage.reportToken = token.d;
			sessionStorage.reportTokenDate = Date.now();
			return token.d;
		});
}

/**
 * Fetches report metadata used for Manager/HRD extended widget
 * @param {string} reportIDArg - Report ID to be gathered. Derives from
 * @param {string} filterArg - derives from gpeUSERREPORTID.filterid
 * @param {string} demoRoleArg - derives from custom field
 * @returns
 */
function fetchManagerReport(reportIDArg, filterArg, demoRoleArg) {
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
		.then(function(response) {
			if (!response.ok) {
				throw new Error("HTTP status " + response.status);
			}
			return response.json();
		})
		.then(reportDetailsResponse => {

			// Get the filterindex based on user.
			var filterVal = reportDetailsResponse.filters.map(function(element) {
				return element.column.id;
			}).indexOf(gpeUSERREPORTID[demoRoleArg].filterid);

			// Update filter on report to fetch
			reportDetailsResponse.filters[filterVal].values[0] = {
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
			payload.filters = [...reportDetailsResponse.filters];
			payload.sorting = [...reportDetailsResponse.sorting];

			// Populate another array which is to be used in global return
			rptDataSet = reportDetailsResponse;

			// Post report request
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
		.then(status)
		.then(response => response.json())
		.then(metaresponse => {
			return fetch("/reportarchitect/rctdatacore/metaapi/v1" + metaresponse.location, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': sessionStorage.reportToken,
				},
			});
		})
		.then(status)
		.then(reportdata => reportdata.json())
		.then(finalData => {
			return [finalData, rptDataSet];
		})
		.catch(error => {
			console.error("Error with fetchReport function - ", error);
		});
}

/* Get reporta meta */
/**
 *
 * @param
 * @param
 * @returns
 */
function fetchReport(reportIDArg) {
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
		//.then(response => response.json())
		.then(function(response) {
			//		console.log(response.status);
			if (!response.ok) {
				throw new Error("HTTP status " + response.status);
			}
			return response.json();
		})
		.then(reportDetailsResponse => {

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
		.then(status)
		.then(response => response.json())
		.then(metaresponse => {
			return fetch("/reportarchitect/rctdatacore/metaapi/v1" + metaresponse.location, {
				method: 'GET',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': sessionStorage.reportToken,
				},
			});
		})
		.then(status)
		.then(reportdata => reportdata.json())
		.then(finalData => {
			return [finalData, rptDataSet];
		})
		.catch(error => {
			console.error("Error with fetchReport function - ", error);
		});
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function createDashboard(reportIDArg, chartTitleArg, chartDivTitleArg, chartDivTargetArg) {
	return fetchReport(reportIDArg)
		.then(function(reportJson) {

			reportData = reportJson[0];
			rptDataSet = reportJson[1];

			testArr = reportData;
			testMetaArr = rptDataSet;

			var [, ...labels] = [...new Set(reportData.chartData.map(x => x[0]))];

			var [, ...reportCols] = [...new Set(reportData.chartData.map(status => status[1]))];

			const chartData = {
				labels: [...labels],
				datasets: [],
			};

			var legendFlag = "";

			var dataSet = [];

			if (rptDataSet.charts[0].chartDimensions.length == 1) {

				var chBgColor = [];
				chBgColor = reportData.chartPalette.map(function(e) {
					return e.color;
				});

				$.each(rptDataSet.charts[0].chartDimensions, function(e, i) { // for each dimension we need to get the data...
					$.each(reportData.chartData, function(labelIndex, labelValue) {
						dataSet = reportData.chartData.map(function(value, index) {
							return value.slice(-1)[0];
						});
					});

				});
				dataSet.shift();
				chartData.datasets.push({
					backgroundColor: chBgColor,
					hoverBackgroundColor: chBgColor,
					data: dataSet,
					fill: true,
				});
				legendFlag = false;
				//console.log(chartData);
			} else {
				for (var i in reportCols) {
					dataSet[reportCols[i]] = [];
					for (var labelIndex in labels) {
						dataSet[reportCols[i]][labelIndex] = [];
						for (var k in reportData.chartData) {
							if ((labels[labelIndex] == reportData.chartData[k][0]) && (reportData.chartData[k][rptDataSet.charts[0].chartDimensions.length - 1] == reportCols[i])) {
								dataSet[reportCols[i]][labelIndex] = reportData.chartData[k][rptDataSet.charts[0].chartDimensions.length];
							}
						}
					}
					let bgColor = reportData.chartPalette.filter(function(item) {
						return item.displayName === reportCols[i];
					});

					bgColor.map(function(item) {
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
					responsive: false,
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

			// Set the title of the chart (card-header)
			$("div[id='cs_report_" + reportIDArg + "'] .card-header").text(reportData.title);

			var reportTBLColumns = [...testArr.data[0]];
			var [, ...reportTBLData] = testArr.data;

			var canvas = document.getElementById(chartTitleArg);

			var ctx = canvas.getContext("2d");
			var myChart = new Chart(ctx, config);

			var tempCol = generateColumns(reportTBLColumns);
			//console.log(tempCol);
			var tempData = generateReportData(reportTBLData, reportTBLColumns);
			return Promise.all([tempCol, tempData])
				.then(response => {
					return [response[0], response[1], reportIDArg, reportData.title];
				})
				.catch(error => console.error("Error in createDashboard (Promise all) function: " + error));
		})
		.catch(error => console.error("Error in createDashboard function: " + error));
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function generateColumns(colArg) {
	return colArg.map((e) => {
		return {
			//field: e.replace(/ /g,"_"),
			field: e.replace(/[/()\ \s-]+/g, ''),
			title: e,
			sortable: true
		};
	});
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function generateReportData(dataArg, colArg) {
	return dataArg.map(function(row) {
		return row.reduce(function(result, field, index) {
			result[colArg[index].replace(/\s/g, '')] = field;
			return result;
		}, {});
	});
	//	return result;
}

/**
 *
 * @param
 * @param
 * @returns
 */
async function buildDashboards(demoRoleArg) {
	if (cs_DashboardArray[demoRoleArg].reports.length != 0) {
		return await new Promise((resolve, reject) => {
			let reportToken = checkReportToken();
			$.when(reportToken)
				.then((data) => {
					//				console.log("-[ Initiate Dashboard Reports ]-");
					//var getReportData = async (reports) => {
					resolve(getReportData(cs_DashboardArray[demoRoleArg].reports, demoRoleArg));
				})
				.catch(error => console.error("Error bulding navigation menu: " + error));
		});
	} else {
		//console.log("no reports");
		return true;
	}
}

/**
 * Gathering ALL dashboards (report IDs) to be fetched
 * @param {array} - reports
 * @param
 * @returns
 */
var getReportData = async (reports, demoRoleArg) => {
	const requests = reports.map((reportID) => {
		//console.log("Building dashboard in element: " + demoRoleArg + "-right");

		var tmpCanvas = document.createElement("canvas");
		tmpCanvas.setAttribute("id", "report" + reportID);
		tmpCanvas.setAttribute("style", "height: 250px, width: 100%");

		generateHTMLCard("", "/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer/"+reportID, cs_DashboardDetailsArray.reports[reportID].width, "cs_report_" + reportID, "cs_report", demoRoleArg + "-dashboards", "reportContents", tmpCanvas);

		return createDashboard(reportID, "report" + reportID, 'reportData' + reportID, demoRoleArg + "-right")
			.catch(error => {
				console.error("Error in getting report data for Report ID: " + reports);
				console.error(error);
			});
	});
	return Promise.all(requests)
		.then(reportResponseData => {
			console.log("-[ Dashboards are now displayed - Lets create some tables/modals  ]-");
			console.log(reportResponseData);

			// for each report, create modal data
			reportResponseData.forEach(function(reportResponse) {

				var reportColumns = reportResponse[0];
				var reportData = reportResponse[1];
				var reportID = reportResponse[2];
				//console.log(response);

				var modalTbl = document.createElement("div");
				modalTbl.setAttribute("id", "modalTable_" + reportResponse[2]);
				modalTbl.setAttribute("tabindex", "-1");
				modalTbl.setAttribute("role", "dialog");
				modalTbl.className = "modal fade reportModal";

				var modalDia = document.createElement("div");
				modalDia.className = "modal-dialog modal-dialog-centered modal-lg modal-fullscreen-md-down";

				var modalCont = document.createElement("div");
				modalCont.className = "modal-content";

				var modalHdr = document.createElement("div");
				modalHdr.className = "modal-header";

				var modalHdrTitle = document.createElement("h5");
				modalHdrTitle.className = "modal-title";
				modalHdrTitle.innerHTML = reportResponse[3] + " (data)";

				var modalHdrCloseBtn = document.createElement("button");
				modalHdrCloseBtn.setAttribute("type", "button");
				modalHdrCloseBtn.className = "btn-close";
				modalHdrCloseBtn.setAttribute("data-bs-dismiss", "modal");
				//modalHdrCloseBtn.innerHTML = "Close";

				var modalContent = document.createElement("div");
				modalContent.setAttribute("id", "cs_report_table" + reportResponse[2]);
				modalContent.className = "modal-body";

				modalHdr.appendChild(modalHdrTitle);
				modalHdr.appendChild(modalHdrCloseBtn);
				modalCont.appendChild(modalHdr);
				modalCont.appendChild(modalContent);
				modalDia.appendChild(modalCont);
				modalTbl.appendChild(modalDia);

				// var divTemp = document.getElementById("cs_report_"+reportID);
				var $table;
				$table = $("<table id='ReportTable" + reportResponse[2] + "'>");
				//$table = $("ReportTable"+reportResponse[2]);
				$table.appendTo(modalContent);
				$table.bootstrapTable({
					locale: sessionStorage.csCulture,
					exportDataType: true,
					exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
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
				});

				var divTemp = document.getElementById("cs_report_" + reportID);
				divTemp.appendChild(modalTbl);

				$("#cs_report_" + reportID + " .card-body").click(function() {
					$("#modalTable_" + reportID).modal("toggle");
					//          $("#ReportTable" + reportID).bootstrapTable('refreshOptions', {});
				});
			});
			//						$("div[id='cs_report_"+reportIDresp+"'] .loader").css("display","none");
		})
		.catch(error => console.error("Error in getting report data: " + error));
};

/**
 * lastinline - message printed when all is done
 * @returns {string} - Message to be printed via console.log
 */
function lastinline() {
	const mad = String.fromCodePoint(0x1F631);
	const flame = String.fromCodePoint(0x1F525);
	var lastinline = mad + " " + flame + " " + flame + "\n";
	lastinline += "%cWe'll know for the first time.\n";
	lastinline += "If we're evil or divine\n";
	lastinline += "We're the last in line!\n";
	lastinline += mad + " " + flame + " " + flame;
	return lastinline;
}

/**
 *
 * @param
 * @param
 * @returns
 */
$(function() {
	checkJWT()
		.then(tokenResponse => {
			const gpeNav = buildNav(gpeDEMOROLE, gpeTARGETNAVDIV, sessionStorage.csCulture);
			const gpeWidgets = buildWidgets(getAccessDetails(accessURLs), sessionStorage.csCulture);
			const gpeAboutCard = buildAboutCard(gpeABOUTCARDDIV);
			const gpeQuickLinks = buildQuickLinksCard(accessURLs, sessionStorage.csCulture);
			const gpeApprovals = getApprovalDetails(approvalURLs, sessionStorage.csCulture, gpeDEMOROLE);
			const gpeDashboards = buildDashboards(gpeDEMOROLE);
			const allPromise = Promise.all([
				gpeNav,
				gpeAboutCard,
				gpeQuickLinks,
				gpeApprovals,
				gpeWidgets,
				gpeDashboards]);
			allPromise.then(values => {
				$(".loader").css("display", "none");

				$("#feedContents").niceScroll({
					cursorborder: "",
					cursorcolor: "#0047ba",
					autohidemode: false,
					boxzoom: false
				});
				$("#feedContents").niceScroll().resize();

				$('.trq-tab-link--flat').click(function(e) {
					setTimeout(function() {
						$("#feedContents").niceScroll().resize();
					}, 200);
				});

				// Delete sessionStorage upon logout
				var logoutLink = document.getElementById("ctl00_header_headerResponsive_responsiveNav_lnkLogout");
				logoutLink.addEventListener("click", function(event) {
					sessionStorage.clear();
				});

				if ($('#USR-left').children().length == 0) {
					// do something
					console.log("you should remove USR LEFT");
					$(".gpewp_USR").css("grid-template-columns", "1fr");
					$(".gpewp_USR").css("grid-template-areas", "gpewp_USR-right");
				}

				console.log(lastinline(), "color:#00cc00;");
			});
			return true;
		})
		.catch(error => {
			console.error(error);
		});
});
