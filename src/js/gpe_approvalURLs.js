"use strict";
if (!sessionStorage.gpeApprovalURLs) {

const gpeApprovalURLs = {
	training: {
		url: "/reports/trackemployee/TrackEmpRequest.aspx",
		link: "/reports/trackemployee/TrackEmpRequest.aspx",
		icon: "gpe-appr-training",
		imgname: "approval_training_req.png",
		title: {
			"en-US": "Training Request",
			"en-UK": "Training Request",
			"de-DE": "Schulungsanfrage",
		},
	},
	goals: {
		url: "/EPM/Goals/PendingGoals.aspx?tab_page_id=-580170",
		link: "/phnx/driver.aspx?routename=Social/UniversalProfile/Requests",
		icon: "gpe-appr-goals",
		imgname: "approval_goal_req",
		title: {
			"en-US": "Goal Request",
			"en-UK": "Goal Request",
			"de-DE": "Antrag auf Zielgenehmigung",
		},
	},
	exemption: {
		url: "/LMS/Admin/PendingExemptionRequests.aspx",
		link: "/LMS/Admin/PendingExemptionRequests.aspx",
		icon: "gpe-appr-goals",
		imgname: "approval_goal_req",
		title: {
			"en-US": "Exemption Request",
			"en-UK": "Exemption Request",
			"de-DE": "Exemption Request",
		},
	},
	feedback: {
		url: "/Social/SocialFeedback/FeedbackRequests.aspx",
		link: "/Social/SocialFeedback/FeedbackRequests.aspx",
		icon: "gpe-appr-feedback",
		imgname: "approval_feedback_req.png",
		title: {
			"en-US": "Feedback Request",
			"en-UK": "Feedback Request",
			"de-DE": "Feedback-Anfrage",
		},
	},
	connections: {
		url: "/phnx/driver.aspx?routename=Social/UniversalProfile/PendingConnections",
		link: "/phnx/driver.aspx?routename=Social/UniversalProfile/PendingConnections",
		icon: "gpe-appr-connection",
		imgname: "approval_connection_req.png",
		title: {
			"en-US": "Connection Request",
			"en-UK": "Connection Request",
			"de-DE": "Verbindungsanfrage",
		},
	},
	formapproval: {
		url: "/phnx/driver.aspx?routename=Social/UniversalProfile/Requests",
		link: "/phnx/driver.aspx?routename=Social/UniversalProfile/Requests",
		icon: "gpe-appr-form",
		imgname: "approval_form_req.png",
		title: {
			"en-US": "Form Approval",
			"en-UK": "Form Approval",
			"de-DE": "Formulargenehmigung",
		},
	},
	compensation: {
		url: "/EPM/Compensation/User/ApprovalsList.aspx",
		link: "/EPM/Compensation/User/ApprovalsList.aspx",
		icon: "gpe-appr-form",
		imgname: "approval_comp_req.png",
		title: {
			"en-US": "Compensation Plan",
			"en-UK": "Compensation Plan",
			"de-DE": "Kompensationsplan",
		},
	}
};

sessionStorage.setItem("gpeApprovalURLs", JSON.stringify(gpeApprovalURLs));
}
