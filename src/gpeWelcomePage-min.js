const gpeABOUTCARDDIV = "gpewp_topcontainer_upper",
    gpeUSRMAINDIV = "USR-right",
    gpeUSRCONTENTDIV = "USR-content",
    gpeUSRLEFTDIV = "USR-left",
    gpeDEMOPERSONADIV = "demopersona",
    gpeDEMOMODULEDIV = "demomodules",
    gpeDEMONAMEDIV = "demousername",
    gpeTARGETNAVDIV = "gpewp_topcontainer_nav",
    gpeDEMOROLE = getDemoRole(document.getElementById("demopersona").getAttribute("demopersona")),
    gpeDEMMOMODULES = getDemoModules(document.getElementById("demomodules").getAttribute("demomodules")),
    gpeDEMOUNAME = document.getElementById("demousername").getAttribute("demousername").split(";"),
    gpePRIMARYBGCSS = $(".c-nav-user").css("background-color");
var meta = document.createElement("meta");
meta.name = "viewport", meta.content = "width=device-width, initial-scale=1.0", document.getElementsByTagName("head")[0].appendChild(meta);
const approvalURLs = {
    training: {
        url: "/reports/trackemployee/TrackEmpRequest.aspx",
        icon: "gpe-appr-training",
        imgname: "appr_training_002.png",
        title: {
            "en-US": "Training Request",
            "en-UK": "Training Request",
            "de-DE": "Schulungsanfrage"
        }
    },
    goals: {
        url: "/EPM/Goals/PendingGoals.aspx?tab_page_id=-580170",
        icon: "gpe-appr-goals",
        imgname: "appr_goals_002.png",
        title: {
            "en-US": "Goal Request",
            "en-UK": "Goal Request",
            "de-DE": "Antrag auf Zielgenehmigung"
        }
    },
    feedback: {
        url: "/Social/SocialFeedback/FeedbackRequests.aspx",
        icon: "gpe-appr-feedback",
        imgname: "appr_feedback_002.png",
        title: {
            "en-US": "Feedback Request",
            "en-UK": "Feedback Request",
            "de-DE": "Feedback-Anfrage"
        }
    },
    connections: {
        url: "/phnx/driver.aspx?routename=Social/UniversalProfile/PendingConnections",
        icon: "gpe-appr-connection",
        imgname: "appr_connection_002.png",
        title: {
            "en-US": "Connection Request",
            "en-UK": "Connection Request",
            "de-DE": "Verbindungsanfrage"
        }
    },
    formapproval: {
        url: "../phnx/driver.aspx?routename=Social/UniversalProfile/Requests",
        icon: "gpe-appr-form",
        imgname: "appr_form_002.png",
        title: {
            "en-US": "Form Approval",
            "en-UK": "Form Approval",
            "de-DE": "Formulargenehmigung"
        }
    },
    compensation: {
        url: "/EPM/Compensation/User/ApprovalsList.aspx",
        icon: "gpe-appr-form",
        imgname: "appr_comp_002.png",
        title: {
            "en-US": "Compensation Plan",
            "en-UK": "Compensation Plan",
            "de-DE": "Kompensationsplan"
        }
    }
};
var cs_DashboardDetailsArray = {
    1: {
        type: "pie",
        indexAxis: "",
        scale: {
            xdisplay: !1,
            ydisplay: !1
        }
    },
    2: {
        type: "bar",
        indexAxis: "y",
        scale: {
            xdisplay: !0,
            ydisplay: !0
        }
    },
    3: {
        type: "bar",
        indexAxis: "x",
        scale: {
            xdisplay: !0,
            ydisplay: !0
        }
    },
    4: {
        type: "line",
        indexAxis: "",
        scale: {
            xdisplay: !0,
            ydisplay: !0
        }
    },
    reports: {
        2: {
            width: 6
        },
        3: {
            width: 3
        },
        4: {
            width: 3
        },
        7: {
            width: 3
        },
        8: {
            width: 3
        },
        10: {
            width: 3
        },
        11: {
            width: 3
        },
        12: {
            width: 3
        },
        13: {
            width: 3
        },
        14: {
            width: 3
        },
        15: {
            width: 3
        },
        16: {
            width: 3
        },
        17: {
            width: 3
        },
        18: {
            width: 3
        },
        19: {
            width: 3
        },
        22: {
            width: 3
        },
        23: {
            width: 3
        },
        24: {
            width: 3
        },
        25: {
            width: 3
        },
        26: {
            width: 3
        },
        27: {
            width: 3
        },
        28: {
            width: 3
        },
        29: {
            width: 3
        },
        30: {
            width: 3
        },
        31: {
            width: 3
        },
        32: {
            width: 3
        },
        36: {
            width: 3
        },
        38: {
            width: 3
        },
        41: {
            width: 3
        },
        42: {
            width: 3
        },
        43: {
            width: 3
        },
        44: {
            width: 3
        },
        46: {
            width: 3
        },
        47: {
            width: 6
        },
        48: {
            width: 3
        },
        49: {
            width: 3
        },
        50: {
            width: 3
        }
    }
};

function getDemoRole(e) {
    return "HRM" == e.substr(0, 3) ? "HRD" : "" == e.substr(0, 3) ? "USR" : e.substr(0, 3)
}

function getDemoModules(e) {
    return e.match(/.{1,3}/g)
}

function getAccessDetails(e) {
    let t = [];
    var a = [];
    for (var s in e) $("a[id*='headerResponsive_responsiveNav_rptMenu_'][href*='" + e[s].url + "']").text((function () {
        a = {
            id: e[s].title,
            title: $(this).text(),
            url: $(this).attr("href"),
            icon: e[s].icon,
            module: e[s].module,
            quicklinkPrio: e[s].quicklinkPrio,
            widgetPrio: e[s].widgetPrio
        }, t[s] = a
    }));
    return t
}

function injectVariables(e, t) {
    return Object.entries(e).reduce(((e, t) => {
        const [a, s] = t, n = new RegExp(`\\\${${a}}`, "g");
        return e.replace(n, s)
    }), t)
}

function multiSort(e, t = {}) {
    const a = Object.keys(t);
    if (!a.length) return e;
    for (let e in t) t[e] = "desc" === t[e] || -1 === t[e] ? -1 : "skip" === t[e] || 0 === t[e] ? 0 : 1;
    const s = (e, t, a) => (a = null !== a ? a : 1, e === t ? 0 : e > t ? a : -1 * a);
    return e.sort(((e, n) => {
        let r = 0,
            i = 0;
        for (; 0 === r && i < a.length;) {
            const l = a[i];
            if (l) {
                const a = t[l];
                r = s(e[l], n[l], a), i++
            }
        }
        return r
    }))
}

function buildNav(e, t, a) {
    if (document.getElementById("framework-oldnav-home")) return !0; {
        const s = JSON.parse(sessionStorage.csCustomLocale);
        let n = document.createElement("nav");
        n.className = "header__nav header__nav--custom";
        let r = document.createElement("a");
        r.className = "nav-link--custom text-uppercase text-no-underline active", r.setAttribute("title", "Home"), r.setAttribute("id", "framework-oldnav-home"), r.innerHTML = "", n.appendChild(r), document.getElementById("ctl00_masterPageBody").before(n), $("a[id*='header_headerResponsive_lnkNavBar'] i").replaceWith($("img[id*='header_headerResponsive_responsiveNav_imgPhoto']").clone());
        let i = document.createElement("ul");
        i.className = "nav nav-tabs trq-tab-group ng-star-inserted", i.setAttribute("id", "gpewp_nav"), i.setAttribute("role", "tablist"), i.setAttribute("_ngcontent-nml-c325", "");
        let l = document.createElement("li");
        l.className = "trq-tab-group-item ng-star-inserted", l.setAttribute("role", "presentation"), l.setAttribute("_ngcontent-nml-c325", ""), l.setAttribute("trqid", "group-item"), l.setAttribute("trqiduseparent", "true");
        let o = document.createElement("a");
        o.className = "trq-tab-link--flat ng-star-inserted active", o.setAttribute("id", "nav-USR-tab"), o.setAttribute("data-bs-toggle", "tab"), o.setAttribute("data-bs-target", "#nav-USR"), o.setAttribute("type", "button"), o.setAttribute("role", "tab"), o.setAttribute("aria-controls", "nav-USR"), o.setAttribute("aria-selected", "true"), o.setAttribute("_ngcontent-nml-c376", ""), o.innerHTML = s[0].topNavigationTitle.USR[t], l.appendChild(o);
        let c = 0;
        switch ("HRM" == e && (e = "HRD"), e) {
            case "REC":
            case "MGR":
            case "HRD":
            case "INS":
            case "ADM":
                buildExtendedModuleWidget(a, e), c = buildExtraNavItem(e, t, "tab");
                break
        }
        i.appendChild(l), 0 != c && i.appendChild(c), "ok" == getApprovalDetails_v2(approvalURLs, sessionStorage.csCulture, gpeDEMOROLE) && (topNavApprovalItem = buildExtraNavItem("APPROVALS", t, "modal"), i.appendChild(topNavApprovalItem));
        let d = document.createElement("nav");
        d.className = "profile-nav trq-mb-3 trq-bg-white trq-shadow-bottom-lg ng-star-inserted", d.setAttribute("_ngcontent-nml-c376", ""), d.setAttribute("id", "profile-tabs");
        let u = document.createElement("trq-tab-group");
        u.className = "trq-tab-group", u.setAttribute("_ngcontent-nml-c376", ""), u.setAttribute("_nghost-nml-c325", "");
        let m = document.createElement("trq-scroller");
        m.className = "trq-scroller--flat trq-scroller__container ng-star-inserted", m.setAttribute("_ngcontent-nml-c325", ""), m.setAttribute("trqid", ""), m.setAttribute("trqiduseparent", "true"), m.setAttribute("_nghost-nml-c320", ""), m.setAttribute("id", "profile-tabs-trq-scroller");
        let p = document.createElement("div");
        p.className = "trq-scroller", p.setAttribute("_ngcontent-nml-c320", "");
        let h = document.createElement("div");
        h.className = "trq-scroller__list", h.setAttribute("style", "height: 50px;");
        let g = document.createElement("div");
        return g.className = "trq-scroller__list__track", g.setAttribute("style", "position: relative;"), g.appendChild(i), h.appendChild(g), p.appendChild(h), m.appendChild(p), u.appendChild(m), d.appendChild(u), document.getElementById(gpeTARGETNAVDIV).innerHTML = d.outerHTML, d
    }
}

function buildExtraNavItem(e, t, a) {
    const s = JSON.parse(sessionStorage.csCustomLocale);
    var n = document.createElement("li");
    n.className = "trq-tab-group-item ng-star-inserted", n.setAttribute("role", "presentation"), n.setAttribute("_ngcontent-nml-c325", ""), n.setAttribute("trqid", "group-item"), n.setAttribute("trqiduseparent", "true");
    var r = document.createElement("a");
    return r.className = "trq-tab-link--flat ng-star-inserted", r.setAttribute("id", "nav-" + e + "-tab"), r.setAttribute("data-bs-toggle", a), r.setAttribute("data-bs-target", "#nav-" + e), r.setAttribute("type", "button"), r.setAttribute("role", "tab"), r.setAttribute("aria-controls", "nav-" + e), r.setAttribute("aria-selected", "false"), r.setAttribute("_ngcontent-nml-c376", ""), r.innerHTML = s[0].topNavigationTitle[e][t], n.appendChild(r), n
}
async function buildOnbWidget(e, t) {
    if ("ONB" == e) {
        const e = JSON.parse(sessionStorage.csCustomLocale);
        $(".gpewp_USR").css("grid-template-columns", "1fr"), $(".gpewp_USR").css("grid-template-areas", "gpewp_USR-right");
        let a = document.createElement("div");
        a.className = "onbwrapper";
        let s = document.createElement("div");
        s.className = "onbheader";
        let n = document.createElement("h5");
        n.innerHTML = e[0].onboarding[t].headertitle;
        let r = document.createElement("p");
        r.innerHTML = e[0].onboarding[t].headertext;
        let i = document.createElement("div");
        i.className = "video";
        let l = document.createElement("video");
        l.setAttribute("width", "70%"), l.setAttribute("height", "420"), l.setAttribute("controls", "");
        let o = document.createElement("source");
        o.setAttribute("src", e[0].onboarding[t].videourl), o.setAttribute("type", "video/mp4"), l.appendChild(o), i.appendChild(l), s.appendChild(n), s.appendChild(r), s.appendChild(i);
        let c = document.createElement("div");
        c.className = "onbProcess";
        let d = document.createElement("h5");
        d.className = "processtitle", d.innerHTML = e[0].onboarding[t].onbprocess.title;
        let u = document.createElement("div");
        u.className = "processdesc";
        let m = document.createElement("ol");
        m.className = "list";
        for (let a in e[0].onboarding[t].onbprocess.textItem) {
            let s = document.createElement("li");
            s.className = "item";
            let n = document.createElement("h2");
            n.className = "headline", n.innerHTML = e[0].onboarding[t].onbprocess.textItem[a].headline;
            let r = document.createElement("span");
            r.innerHTML = e[0].onboarding[t].onbprocess.textItem[a].text;
            let i = document.createElement("div");
            i.className = "resourceTitle", i.innerHTML = "<br>" + e[0].onboarding[t].onbprocess.resourceTitle;
            let l = document.createElement("ul");
            l.className = "resList";
            for (let s in e[0].onboarding[t].onbprocess.textItem[a].resources) {
                let n = document.createElement("li");
                n.className = "resItem", "url" == e[0].onboarding[t].onbprocess.textItem[a].resources[s].type ? n.innerHTML = "<a href='" + e[0].onboarding[t].onbprocess.textItem[a].resources[s].url + "' target='_blank'>" + e[0].onboarding[t].onbprocess.textItem[a].resources[s].text + "</a>" : n.innerHTML = e[0].onboarding[t].onbprocess.textItem[a].resources[s].text, l.appendChild(n)
            }
            i.appendChild(l), r.appendChild(i), s.appendChild(n), s.appendChild(r), m.appendChild(s)
        }
        u.appendChild(d), u.appendChild(m);
        let p = document.createElement("div");
        return p.className = "processimg", p.style.backgroundImage = e[0].onboarding[t].onbprocess.imgurl, p.style.backgroundRepeat = "no-repeat", p.style.backgroundPosition = "center", p.style.width = "100%", p.style.height = "270px", c.appendChild(u), c.appendChild(p), a.appendChild(s), a.appendChild(c), generateHTMLCard("", "#", 12, "gpe_onboarding", "row_left_1", "USR-right", "onboardingContent", a), s
    }
    return !0
}
async function buildModuleWidget(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig),
        s = {
            csUser: sessionStorage.csUser
        };
    for (let n in e) switch (modulesDiv = document.createElement("div"), modulesDiv.className = "gpeWelcomePageModules", modulesDiv.setAttribute("style", "display:flex;flex-direction:column;"), e[n]) {
        case "ATS":
        case "LMS":
        case "EPM":
            if (0 == a[0].MODULECONFIG[e[n]][t].AVAILABILITY) break;
            let r = document.createElement("div");
            r.className = "moduleContainer", r.setAttribute("id", "module_" + e[n]), r.setAttribute("style", "order:" + a[0].MODULECONFIG[e[n]][t].ORDER + ";");
            let i = document.createElement("div");
            i.className = "moduleTitleDiv";
            let l = document.createElement("h3");
            l.className = "moduleTitle", l.innerHTML = a[0].MODULECONFIG[e[n]].settings.moduletitle[sessionStorage.csCulture];
            let o = document.createElement("div");
            o.className = "moduleWidgetContainer row";
            for (let s in a[0].MODULECONFIG[e[n]][t].WIDGETS) {
                let r = a[0].MODULECONFIG[e[n]][t].WIDGETS[s].ID,
                    i = document.createElement("div");
                i.className = "moduleWidget col-md-" + a[0].MODULECONFIG[e[n]][t].WIDGETS[s].COLUMNSIZE, i.setAttribute("id", e[n] + "-" + r), i.setAttribute("style", "order:" + a[0].MODULECONFIG[e[n]][t].WIDGETS[s].ORDER + ";"), o.appendChild(i)
            }
            let c = document.createElement("div");
            c.className = "moduleLinkWrapper row";
            let d = document.createElement("div");
            d.className = "moduleLinkWrapperCol col-md-12";
            let u = document.createElement("ul");
            u.className = "moduleLinkContainer";
            for (let r in a[0].MODULECONFIG[e[n]][t].LINKS) {
                let i = a[0].MODULECONFIG[e[n]][t].LINKS[r].ID,
                    l = document.createElement("li");
                l.className = "moduleLink", l.setAttribute("id", e[n] + "-" + i), l.setAttribute("style", "order:" + a[0].MODULECONFIG[e[n]][t].LINKS[r].ORDER + ";");
                let o = document.createElement("a");
                o.className = "modLinkItemLink", o.href = injectVariables(s, a[0].LINKS[i].URL);
                let c = document.createElement("div");
                c.className = "modLinkItem";
                let d = document.createElement("div");
                d.className = "moduleLinkIcon", d.style.backgroundImage = "url('https://scfiles.csod.com/Baseline/Config/Images/gpeWelcomePage/" + a[0].LINKS[i].ICON + "')";
                let m = document.createElement("div");
                m.className = "moduleLinkTitle", m.innerHTML = a[0].LINKS[i].TITLE[sessionStorage.csCulture], c.appendChild(d), c.appendChild(m), o.appendChild(c), l.appendChild(o), u.appendChild(l)
            }
            i.appendChild(l), r.appendChild(i), r.appendChild(o), d.appendChild(u), c.appendChild(d), r.appendChild(c), modulesDiv.appendChild(r), document.getElementById(a[0].MODULECONFIG[e[n]][t].TARGETDIV + "-right").appendChild(modulesDiv);
            break
    }
}
async function buildExtendedModuleWidget(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig),
        s = {
            csUser: sessionStorage.csUser
        };
    switch (t) {
        case "ADM":
        case "HRD":
        case "MGR":
            let n = document.createElement("div");
            n.className = "moduleContainer", n.setAttribute("id", "module_" + t), n.setAttribute("style", "order:" + a[0].ROLESPECIFIC[t].SETTINGS.ORDER + ";");
            let r = document.createElement("div");
            r.className = "moduleTitleDiv";
            let i = document.createElement("h3");
            i.className = "moduleTitle", i.innerHTML = a[0].ROLESPECIFIC[t].SETTINGS.MODULETITLE[sessionStorage.csCulture];
            let l = document.createElement("div");
            l.className = "moduleWidgetContainer row";
            for (let e in a[0].ROLESPECIFIC[t].WIDGETS) {
                let s = a[0].ROLESPECIFIC[t].WIDGETS[e].ID,
                    n = document.createElement("div");
                n.className = "moduleWidget col-md-" + a[0].ROLESPECIFIC[t].WIDGETS[e].COLUMNSIZE, n.setAttribute("id", s), n.setAttribute("style", "order:" + a[0].ROLESPECIFIC[t].WIDGETS[e].ORDER + ";"), l.appendChild(n)
            }
            let o = document.createElement("div");
            o.className = "moduleLinkWrapper row";
            let c = document.createElement("div");
            c.className = "moduleLinkWrapperCol col-md-12";
            let d = document.createElement("ul");
            d.className = "moduleLinkContainer";
            for (let n in a[0].ROLESPECIFIC[t].LINKS) {
                let r = a[0].ROLESPECIFIC[t].LINKS[n].ID;
                if (e.some((e => a[0].LINKS[r].MODULE.includes(e))) || "CORE" == a[0].LINKS[r].MODULE) {
                    let e = a[0].ROLESPECIFIC[t].LINKS[n].ID,
                        r = document.createElement("li");
                    r.className = "moduleLink", r.setAttribute("id", t + "-" + e), r.setAttribute("style", "order:" + a[0].ROLESPECIFIC[t].LINKS[n].ORDER + ";");
                    let i = document.createElement("a");
                    i.className = "modLinkItemLink", i.href = injectVariables(s, a[0].LINKS[e].URL);
                    let l = document.createElement("div");
                    l.className = "modLinkItem";
                    let o = document.createElement("div");
                    o.className = "moduleLinkIcon", o.style.backgroundImage = "url('https://scfiles.csod.com/Baseline/Config/Images/gpeWelcomePage/" + a[0].LINKS[e].ICON + "')";
                    let c = document.createElement("div");
                    c.className = "moduleLinkTitle", c.innerHTML = a[0].LINKS[e].TITLE[sessionStorage.csCulture], l.appendChild(o), l.appendChild(c), i.appendChild(l), r.appendChild(i), d.appendChild(r)
                }
            }
            r.appendChild(i), n.appendChild(r), n.appendChild(l), c.appendChild(d), o.appendChild(c), n.appendChild(o);
            let u = document.getElementById(a[0].ROLESPECIFIC[t].SETTINGS.TARGETDIV).getElementsByClassName("gpeWelcomePageModules")[0];
            if (u) modulesDiv = u.getElementsByClassName("gpeWelcomePageModules"), modulesDiv[0].appendChild(n);
            else {
                modulesDiv = document.createElement("div"), modulesDiv.className = "gpeWelcomePageModules", modulesDiv.setAttribute("style", "display:flex;flex-direction:column;"), modulesDiv.appendChild(n), document.getElementById(a[0].ROLESPECIFIC[t].SETTINGS.TARGETDIV).appendChild(modulesDiv)
            }
            break
    }
}
async function buildWidgets_v2(e, t) {
    let a = [];
    return e.forEach((function (e) {
        a.push(getWidgetData_v2(e, t))
    })), await Promise.all(a).then((async function (e) {
        return e.map((async function (e, t) {
            null != e && e.forEach((function (e) {
                if (0 != e) return generateHTMLWidget(e.id, "12", "widgetCard_" + e.id, "widgetWrapper_" + e.id, e.id, "cs_" + e.id, e)
            }))
        }))
    })).then((async function (e) {
        return $("canvas").each((function () {
            Chart.getChart($(this).attr("id")).update()
        })), e
    })).catch((e => {}))
}
async function buildExtendedWidgets(e) {
    return getExtendedWidgetData(e).then((async function (e) {
        return e.map((async function (e, t) {
            return null != e && generateHTMLWidget(e.id, "12", "widgetCard_" + e.id, "widgetWrapper_" + e.id, e.id, "cs_" + e.id, e)
        }))
    })).then((async function (e) {
        return $("canvas").each((function () {
            Chart.getChart($(this).attr("id")).update()
        })), e
    })).catch((e => {}))
}
async function getExtendedWidgetData(e) {
    const t = JSON.parse(sessionStorage.csWidgetConfig);
    let a = [];
    if (t[0].ROLESPECIFIC.hasOwnProperty(e))
        for (let s in t[0].ROLESPECIFIC[e].WIDGETS) switch (t[0].ROLESPECIFIC[e].WIDGETS[s].ID) {
            case "DIRECT_REPORTS":
                a.push(buildExtendedWidget_v3(t[0].ROLESPECIFIC[e].WIDGETS[s].ID, e));
                break;
            case "RPT_PASTDUE":
            case "RPT_EMPLOYEESTATUS":
            case "RPT_USERRECORDBYMGR":
            case "RPT_BADGELEADERBOARD":
            case "RPT_TRAININGPROGRESSSUMMARY":
            case "RPT_ORGGOALPROGRESS":
            case "RPT_HEADCOUNT":
                let n = t[0].WIDGETS[t[0].ROLESPECIFIC[e].WIDGETS[s].ID].reportid,
                    r = document.createElement("div");
                r.className = t[0].ROLESPECIFIC[e].WIDGETS[s].ID + " chart-container", r.setAttribute("id", t[0].ROLESPECIFIC[e].WIDGETS[s].ID), a.push(await createDashboard(n, t[0].ROLESPECIFIC[e].WIDGETS[s].ID, r, e));
                break
        }
    return await Promise.all(a)
}
async function getWidgetData_v2(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    switch (e) {
        case "ATS":
        case "EPM":
        case "LMS":
            if (0 == a[0].MODULECONFIG[e][t].AVAILABILITY) break;
            let s = [];
            for (let n in a[0].MODULECONFIG[e][t].WIDGETS) switch (a[0].MODULECONFIG[e][t].WIDGETS[n].ID) {
                case "DIRECT_REPORTS":
                    s.push(buildExtendedWidget_v3(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "TOP_PICKS":
                    s.push(getTopPicks(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "INSPIRED_BY_SUBJECTS":
                    s.push(getInspiredBySubjects(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "TRENDING_FOR_JOB":
                    s.push(getTrendingForJob(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "TRAINING_METRICS":
                    s.push(getTranscriptMetrics(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "CHECKINS":
                    s.push(getCheckinsDetails(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "GOAL_PROGRESS":
                    s.push(getDonutDetails(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, "/phnx/driver.aspx?routename=Goals/GoalList", e));
                    break;
                case "DEVPLAN_PROGRESS":
                    s.push(getDonutDetails(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, "/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot", e));
                    break;
                case "TOTALCANDIDATES":
                    s.push(getAllCandidates(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "NEWSUBMISSIONS":
                    s.push(getNewSubmissions(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break;
                case "NEWHIRES":
                    s.push(getNewHires(a[0].MODULECONFIG[e][t].WIDGETS[n].ID, e));
                    break
            }
            return await Promise.all(s)
    }
}

function generateHTMLWidget(e, t, a, s, n, r, i) {
    const l = JSON.parse(sessionStorage.csWidgetConfig),
        o = {
            csUser: sessionStorage.csUser
        };
    var c = "";
    document.getElementById(s) ? c = document.getElementById(s) : ((c = document.createElement("div")).setAttribute("id", s), c.className = "widgetData col-md-" + t);
    var d = document.createElement("div");
    d.setAttribute("id", a + "widget");
    var u = document.createElement("div");
    u.className = "card";
    var m = document.createElement("a");
    m.className = "card-header", m.innerHTML = l[0].WIDGETS[e].title[sessionStorage.csCulture], m.setAttribute("href", injectVariables(o, l[0].WIDGETS[e].url));
    var p = document.createElement("div");
    p.className = "card-body";
    var h = document.createElement("div");
    return h.className = r, h = i, p.appendChild(h), u.append(m, p), d.appendChild(u), c.appendChild(d), document.getElementById(n).appendChild(c), c
}
async function generateHTMLCard(e, t, a, s, n, r, i, l) {
    var o = "";
    document.getElementById(n) ? o = document.getElementById(n) : ((o = document.createElement("div")).setAttribute("id", n), o.className = "row");
    var c = document.createElement("div");
    c.className = "col-md-" + a, c.setAttribute("id", s);
    var d = document.createElement("div");
    d.className = "card";
    var u = document.createElement("a");
    u.className = "card-header", u.innerHTML = e, u.setAttribute("href", t);
    var m = document.createElement("div");
    m.className = "card-body";
    var p = document.createElement("div");
    return p.className = i, p = l, m.appendChild(p), d.append(u, m), c.appendChild(d), o.appendChild(c), document.getElementById(r).appendChild(o), n
}
async function buildAboutCard() {
    if (document.getElementById("gpeAboutCard")) return !0; {
        const h = JSON.parse(sessionStorage.csWidgetConfig),
            g = {
                csUser: sessionStorage.csUser
            };
        var e = document.createElement("div");
        e.className = "container-fluid topcontent", e.setAttribute("id", "gpeAboutCard");
        var t = document.createElement("div");
        t.className = "row";
        var a = document.createElement("div");
        a.className = "col-md-2";
        var s = document.createElement("a");
        s.setAttribute("href", "/phnx/driver.aspx?routename=Social/UniversalProfile/Bio");
        var n = document.createElement("img");
        n.className = "abt-image", n.setAttribute("src", document.querySelector("img[id*='header_headerResponsive_responsiveNav_imgPhoto']").getAttribute("src")), s.appendChild(n), a.appendChild(s);
        var r = document.createElement("div");
        r.className = "col-md-4";
        var i = document.createElement("div");
        i.className = "abt";
        var l = document.createElement("div");
        l.className = "abt-name";
        var o = document.createElement("span");
        o.className = "abt-name-text", o.innerHTML = document.querySelector("[id*='header_headerResponsive_responsiveNav_lblName']").innerHTML;
        var c = document.createElement("div");
        c.className = "abt-job";
        var d = document.createElement("span");
        d.className = "abt-job-text", d.innerHTML = document.querySelector("[id*='header_headerResponsive_responsiveNav_lblPosition']").innerHTML, c.appendChild(d);
        var u = document.createElement("div");
        u.className = "tmpCoreLinksWrapper col-md-6";
        var m = document.createElement("ul");
        m.className = "topLinkContainer d-flex justify-content-center";
        for (let e in h[0].TOPNAVLINKS[gpeDEMOROLE]) {
            let t = h[0].TOPNAVLINKS[gpeDEMOROLE][e].ID;
            if (gpeDEMMOMODULES.includes(h[0].LINKS[t].MODULE) || "CORE" == h[0].LINKS[t].MODULE) {
                let e = document.createElement("li");
                e.className = "moduleLink";
                let a = document.createElement("a");
                a.className = "modLinkItemLink", a.href = injectVariables(g, h[0].LINKS[t].URL);
                let s = document.createElement("div");
                s.className = "modLinkItem";
                let n = document.createElement("div");
                n.className = "moduleLinkIcon", n.style.backgroundImage = "url('https://scfiles.csod.com/Baseline/Config/Images/gpeWelcomePage/" + h[0].LINKS[t].ICON + "')";
                let r = document.createElement("div");
                r.className = "moduleLinkTitle", r.innerHTML = h[0].LINKS[t].TITLE[sessionStorage.csCulture], s.appendChild(n), s.appendChild(r), a.appendChild(s), e.appendChild(a), m.appendChild(e)
            }
        }
        u.appendChild(m), l.appendChild(o), i.appendChild(l), i.appendChild(c), r.appendChild(i), t.appendChild(a), t.appendChild(r), t.appendChild(u), e.appendChild(t);
        var p = document.getElementById(gpeABOUTCARDDIV);
        return p.appendChild(e), p
    }
}

function getApprovalDetails_v2(e, t, a) {
    let s, n = 0,
        r = document.createElement("div");
    r.className = "gpeApprovals";
    for (let a in e) n += 1, $("table[id*='plnInbox_content'] a[href*='" + e[a].url + "']").text((function () {
        let i = document.createElement("div");
        i.className = "approval-item approval-" + a + " app" + n;
        let l = document.createElement("a");
        l.className = "position-relative " + a, l.setAttribute("href", $(this).attr("href"));
        let o = document.createElement("div");
        o.setAttribute("content", e[a].title[t]), o.className = "approval_button", o.textContent = e[a].title[t];
        let c = document.createElement("span");
        c.className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger", c.innerHTML = $("table[id*='plnInbox_content'] a[href*='" + e[a].url + "'] ~ span:first").text().match(/\d+/)[0], l.appendChild(o), l.appendChild(c), i.appendChild(l), r.appendChild(i), s = "ok"
    }));
    if ("ok" == s) {
        const e = JSON.parse(sessionStorage.csCustomLocale);
        let t = document.createElement("div");
        t.className = "gpewp_approvals modal fade", t.setAttribute("id", "nav-APPROVALS"), t.setAttribute("tabindex", "-1"), t.setAttribute("aria-labelledby", "ApprovalModal"), t.setAttribute("aria-hidden", "true");
        let a = document.createElement("div");
        a.className = "modal-dialog modal-dialog-centered", a.setAttribute("role", "document");
        let s = document.createElement("div");
        s.className = "modal-content";
        let n = document.createElement("div");
        n.className = "modal-header";
        let i = document.createElement("h5");
        i.className = "modal-title", i.setAttribute("id", "modalTitle"), i.innerHTML = e[0].topNavigationTitle.APPROVALS[sessionStorage.csCulture];
        let l = document.createElement("button");
        l.className = "btn-close", l.setAttribute("type", "button"), l.setAttribute("data-bs-dismiss", "modal"), l.setAttribute("aria-label", "Close"), n.appendChild(i), n.appendChild(l), s.appendChild(n);
        let o = document.createElement("div");
        o.className = "modal-body", o.appendChild(r), s.appendChild(o), a.appendChild(s), t.appendChild(a), document.body.appendChild(t)
    }
    return s
}
async function getDonutDetails(e, t, a) {
    const s = JSON.parse(sessionStorage.csWidgetConfig);
    let n = a + "-" + e;
    return await Promise.resolve(await fetch(t)).then((async function (e) {
        return await e.text()
    })).then((async function (e) {
        switch (n) {
            case s[0].WIDGETS["EPM-GOAL_PROGRESS"].targetdiv:
                return await $(e).find(".percentage").attr("data-percent");
            case s[0].WIDGETS["EPM-DEVPLAN_PROGRESS"].targetdiv:
                return await $(e).find("a[href*='/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew']").closest("div[class*='dashboard-widget-content']").find(".percentage span").text()
        }
    })).then((async function (t) {
        let r = document.createElement("div");
        if (r.className = e, r.setAttribute("id", a + "-" + e), 0 != t) return await Promise.resolve(await drawDonut(t, e, r)); {
            let t = s[0].WIDGETS[n].nocontenttitle[sessionStorage.csCulture],
                a = "<div class='nocontent donut'>";
            return a += "<button type='button' id='" + e + "_nodata' class='getstarted_button' data-href='" + s[0].WIDGETS[n].getstartedurl + "'>" + t + "</button>", a += "</div>", r.innerHTML = a, await r
        }
    })).catch((e => {}))
}
async function drawDonut(e, t, a) {
    let s = [e, 100 - e],
        n = {
            id: "counter",
            beforeDraw(e, t, a) {
                const {
                    ctx: n,
                    chartArea: {
                        top: r,
                        right: i,
                        bottom: l,
                        left: o,
                        width: c,
                        height: d
                    }
                } = e;
                n.save(), n.font = a.fontSize + "px " + a.fontFamily, n.textAlign = "center", n.fillStyle = a.fontColor, n.fillText(s[0] + "%", c / 2, d / 2 + .34 * a.fontSize)
            }
        },
        r = {
            type: "doughnut",
            data: {
                labels: ["Achieved"],
                datasets: [{
                    label: "dataset",
                    data: s,
                    backgroundColor: [gpePRIMARYBGCSS, "rgb(200, 200, 200)"],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: "true",
                events: [],
                plugins: {
                    tooltip: {
                        enabled: !1
                    },
                    hover: {
                        mode: null
                    },
                    counter: {
                        fontColor: "black",
                        fontSize: 30,
                        fontFamily: "sans-serif"
                    },
                    legend: {
                        display: !1
                    },
                    title: {
                        display: !1
                    }
                }
            },
            plugins: [n]
        };
    const i = document.createElement("canvas");
    i.id = t + "_chart", i.setAttribute("style", "height: 120px, width: 100%");
    let l = i.getContext("2d");
    new Chart(l, r);
    return a.appendChild(i), await a
}
async function updateJWT() {
    return fetch("/ui/perf-check-ins/Check-Ins", {
        method: "GET",
        headers: {
            "Content-Type": "text/html"
        }
    }).then((e => e.text())).then((e => (sessionStorage.csToken = e.substring(e.indexOf('"token"') + 9, e.indexOf('",', e.indexOf('"token"'))), sessionStorage.csCloud = e.substring(e.indexOf('"cloud"') + 9, e.indexOf('",', e.indexOf('"cloud"'))), sessionStorage.csUser = e.substring(e.indexOf('"user":') + 7, e.indexOf(",", e.indexOf('"user"'))), sessionStorage.csCorp = e.substring(e.indexOf('"corp"') + 8, e.indexOf('",', e.indexOf('"corp"'))), sessionStorage.csCulture = e.substring(e.indexOf('"cultureName"') + 15, e.indexOf('",', e.indexOf('"cultureName"'))), sessionStorage.csToken))).catch((e => {}))
}

function checkJWT() {
    return new Promise(((e, t) => {
        if (sessionStorage.csToken)
            if (1 == !!$("[id*='pnlActionItems_titleMiddle'] a[href*='TargetUser=" + sessionStorage.csUser + "']").length) {
                var a = JSON.parse(atob(sessionStorage.csToken.split(".")[1])),
                    s = a.exp.substring(0, 4),
                    n = a.exp.substring(4, 6),
                    r = a.exp.substring(6, 8),
                    i = a.exp.substring(8, 10),
                    l = a.exp.substring(10, 12),
                    o = a.exp.substring(12, 14);
                if (0 == new Date(Date.UTC(s, n - 1, r, i, l, o)).getTime() > Date.now()) return e(updateJWT()), sessionStorage.csToken;
                e(sessionStorage.csToken)
            } else e(updateJWT());
        else e(updateJWT())
    }))
}
async function setUserModulesDetails() {
    let e = "/services/api/x/users/v2/employees/" + sessionStorage.csUser;
    return checkJWT().then((async function () {
        return await fetch(e, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (e) {
        let t = "/services/api/x/odata/api/views/vw_rpt_ou?$filter=ou_id eq " + e.data.ous[3].id + " and type_id eq " + e.data.ous[3].typeId;
        return await fetch(t, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (e) {
        var t = e.value[0].title.substring(3);
        return sessionStorage.setItem("csDemoModules", t), t
    })).catch((e => {}))
}
async function getGoalProgress(e) {
    let t = [];
    return e.data.map((async function (e) {
        var a = "/services/api/goalSummary/summary/" + e.id + "?StartDate=" + (new Date).getFullYear() + "-01-01&EndDate=" + (new Date).getFullYear() + "-12-24";
        t.push(fetch(a, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        }).then((e => e.json())).then((async function (e) {
            return await e
        })))
    })), await Promise.all(t)
}
async function getTranscriptsStats(e) {
    let t = [];
    return await e.data.map((async function (e) {
        let a = {
                UserId: e.externalId,
                InprogressOnly: !0
            },
            s = "/services/api/TranscriptAndTask/Transcript?" + Object.keys(a).map((e => encodeURIComponent(e) + "=" + encodeURIComponent(a[e]))).join("&");
        t.push(fetch(s, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        }).then((e => e.json())).then((async function (t) {
            let a = {};
            return a.data = t.data, a.id = e.id, a
        })).catch((e => {})))
    })), await Promise.all(t)
}
async function buildExtendedWidget_v3(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    return await checkJWT().then((async function () {
        let e = "/services/api/x/odata/api/views/vw_rpt_user?$filter=user_mgr_id eq " + sessionStorage.csUser + "&$select=user_id";
        return await fetch(e, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (e) {
        return await e.value.map((function (e) {
            return e.user_id
        }))
    })).then((async function (e) {
        let t = "/services/api/x/users/v2/employees?ids=" + e.join();
        return await Promise.resolve(fetch(t, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        }))
    })).then((e => e.json())).then((async function (e) {
        let t = e.data,
            a = await Promise.resolve(getGoalProgress(e)),
            s = [],
            n = [];
        s = a.map((function (e) {
            return e.data
        }));
        for (let e in s) {
            let t = 0,
                a = 0;
            for (let n in s[e]) t += s[e][n].Weight * s[e][n].Progress, a += s[e][n].Weight;
            0 !== s[e].length && (n[e] = {
                id: s[e][0].User.Id,
                goalprogress: Math.round(t / a) + "%"
            })
        }
        const r = t.map((e => n.some((({
            id: t
        }) => t == e.id)) ? {
            ...e,
            ...n.find((({
                id: t
            }) => t == e.id))
        } : e));
        return await r
    })).then((async function (t) {
        let s = await t.map((function (e) {
                return {
                    id: e.id,
                    firstName: e.firstName,
                    lastName: e.lastName,
                    fullName: e.firstName + " " + e.lastName,
                    username: e.userName,
                    primaryEmail: e.primaryEmail,
                    mobilPhone: e.mobilePhone,
                    workPhone: e.workPhone,
                    goalProgress: e.goalprogress && e.goalprogress,
                    language: e.settings.displayLanguage,
                    timezone: e.settings.timeZone,
                    hiredate: e.workerStatus.lastHireDate && e.workerStatus.lastHireDate.substring(0, 10),
                    address: {
                        line1: e.address.line1,
                        city: e.address.city,
                        country: e.address.country,
                        state: e.address.state
                    }
                }
            })),
            n = [{
                title: "User ID",
                field: "id",
                visible: !1
            }, {
                title: a[0].managerwidget.tableheader.name[sessionStorage.csCulture],
                field: "fullName"
            }, {
                title: a[0].managerwidget.tableheader.hiredate[sessionStorage.csCulture],
                field: "hiredate"
            }, {
                title: a[0].managerwidget.tableheader.actions[sessionStorage.csCulture],
                field: "action",
                align: "center",
                clickToSelect: !1,
                formatter: operateFormatter
            }];
        n.splice(3, 0, {
            title: "Goal Progress",
            field: "goalProgress",
            align: "center"
        });
        const r = document.createElement("div");
        r.className = e, r.setAttribute("id", e);
        var i = document.createElement("div");
        let l;
        return i.setAttribute("id", "extendedUserWidget"), i.className = "user_table", l = $("<table id='extendedUserTable'>"), l.appendTo(i), l.bootstrapTable({
            locale: sessionStorage.csCulture,
            showColumns: !1,
            showColumnsSearch: !1,
            checkboxHeader: !1,
            showToggle: !1,
            detailView: !0,
            detailFormatter: detailFormatter,
            columns: n,
            data: s
        }), r.appendChild(i), r
    })).catch((e => {}))
}

function operateFormatter(e, t, a) {
    const s = JSON.parse(sessionStorage.csWidgetConfig);
    return ['<div class="dropdown">', '<a class="btn btn-secondary dropdown-toggle" data-boundary="viewport" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">', s[0].managerwidget.tableheader.actions[sessionStorage.csCulture], "</a>", '<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">', '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&TargetUser=' + t.id + '">' + s[0].managerwidget.actionsitems.openup[sessionStorage.csCulture] + "</a></li>", '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&TargetUser=' + t.id + '">' + s[0].managerwidget.actionsitems.viewtranscript[sessionStorage.csCulture] + "</a></li>", '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot&TargetUser=' + t.id + '">' + s[0].managerwidget.actionsitems.viewsnapshot[sessionStorage.csCulture] + "</a></li>", '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Goals&TargetUser=' + t.id + '">' + s[0].managerwidget.actionsitems.viewgoals[sessionStorage.csCulture] + "</a></li>", '<li><a class="dropdown-item" href="/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew&targetUser=' + t.id + '">' + s[0].managerwidget.actionsitems.viewdevplan[sessionStorage.csCulture] + "</a></li>", "</ul>", "</div>"].join("")
}

function detailFormatter(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    let s = [];
    return s.push('<div class="col-xs-12 col-sm-12 col-md-12 extended-details collapse" id="accordion">'), s.push('<div class="well well-sm">'), s.push('<div class="row">'), s.push('<div class="col-sm-6 col-md-6">'), s.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">'), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.firstname[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.firstName + "</td>"), s.push("</tr>"), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.lastname[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.lastName + "</td>"), s.push("</tr>"), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.email[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.primaryEmail + "</td>"), s.push("</tr>"), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.phone[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.workPhone + "</td>"), s.push("</tr>"), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.hiredate[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.hiredate + "</td>"), s.push("</tr>"), s.push("</table>"), s.push("</div>"), s.push('<div class="col-sm-6 col-md-6">'), s.push('<table border="0" cellspacing="0" cellpadding="0" class="detailoutable">'), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.address[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.address.line1 + "</td>"), s.push("</tr>"), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.city[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.address.city + "</td>"), s.push("</tr>"), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.state[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.address.state + "</td>"), s.push("</tr>"), s.push("<tr>"), s.push("<td>" + a[0].managerwidget.detailtable.country[sessionStorage.csCulture] + "</td>"), s.push("<td>" + t.address.country + "</td>"), s.push("</tr>"), s.push("</table>"), s.push("</div>"), s.push("</div>"), s.push("</div>"), s.push("</div>"), s.join("")
}
async function getNewHires(e, t) {
    const a = document.createElement("div");
    return a.className = e, a.setAttribute("id", t + "-" + e), fetch("/phnx/driver.aspx?routename=ONB/Dashboard", {
        method: "GET",
        headers: {
            "Content-Type": "text/html"
        }
    }).then((e => e.text())).then((e => {
        var t = jQuery("<div>").append(e);
        t.find("div[rel='dropDownButton']").remove();
        var s = t.html();
        let n = $(s).find(".content > div[ct='HBoxLayout'] "),
            r = "";
        return n.each((function (e, t) {
            r += "<div class='ATS totalCandidates gpe-cap row'>", r += "<div class='summaryItem col-md-12'>", r += "<div class='gpe-left'>", r += "<div class='newHires '>" + t.outerHTML + "</div>", r += "</div>", r += "</div>", r += "</div>"
        })), a.innerHTML = r, a
    })).catch((e => {}))
}
async function getNewSubmissions(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    let s = t + "-" + e;
    const n = document.createElement("div");
    return n.className = e, n.setAttribute("id", t + "-" + e), await checkJWT().then((async function () {
        let e = sessionStorage.csCloud + "rec-manage-candidates/v1/candidates";
        return await fetch(e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            },
            body: JSON.stringify({
                filters: {
                    statusIds: [],
                    flagIds: [],
                    sourceIds: [],
                    requisitionIds: [],
                    candidateIds: [],
                    onlyOpenRequisitions: !0,
                    onlyActiveCandidates: !0,
                    keywords: "",
                    onlyMyRequisitions: !0,
                    requisitionNameSearchTerm: ""
                },
                paging: {
                    pageSize: 20,
                    pageNumber: 1,
                    sortOrder: "SubmissionDateDescending"
                },
                include: ["Candidates", "AvailableFilters", "StatusCategories"]
            })
        })
    })).then((e => e.json())).then((async function (e) {
        var t = $.map(e.data.statusCategories, (function (e) {
            return -1 == e.id ? e.count : null
        }));
        let r = "<div class='ATS totalCandidates gpe-cap row'>";
        return r += "<div class='summaryItem col-md-12'>", r += "<div class='gpe-center'>", r += "<a href='" + a[0].WIDGETS[s].url + "'>", r += "<div class='totalCandidates gpe-bold gpe-text40'>" + t + "</div>", r += "</a>", r += "</div>", r += "</div>", r += "</div>", n.innerHTML = r, n
    })).catch((e => {}))
}
async function getAllCandidates(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    let s = t + "-" + e;
    const n = document.createElement("div");
    return n.className = e, n.setAttribute("id", s), await checkJWT().then((async function () {
        let e = sessionStorage.csCloud + "rec-manage-candidates/v1/candidates";
        return await fetch(e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            },
            body: JSON.stringify({
                filters: {
                    statusIds: [],
                    flagIds: [],
                    sourceIds: [],
                    requisitionIds: [],
                    candidateIds: [],
                    onlyOpenRequisitions: !0,
                    onlyActiveCandidates: !0,
                    keywords: "",
                    onlyMyRequisitions: !0,
                    requisitionNameSearchTerm: ""
                },
                paging: {
                    pageSize: 20,
                    pageNumber: 1,
                    sortOrder: "SubmissionDateDescending"
                },
                include: ["Candidates", "AvailableFilters", "StatusCategories"]
            })
        })
    })).then((e => e.json())).then((async function (e) {
        let t = "<div class='ATS totalCandidates gpe-cap row'>";
        return t += "<div class='summaryItem col-md-12'>", t += "<div class='gpe-center'>", t += "<a href='" + a[0].WIDGETS[s].url + "'>", t += "<div class='flex-column min-vh-50 justify-content-center align-items-center'>", t += "<div class='totalCandidates gpe-bold gpe-text40'>" + e.data.totalItems + "</div>", t += "</div>", t += "</a>", t += "</div>", t += "</div>", t += "</div>", n.innerHTML = t, n
    })).catch((e => {}))
}
async function getCandidateMetrics(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    let s = t + "-" + e;
    const n = document.createElement("div");
    return n.className = e, n.setAttribute("id", s), await checkJWT().then((async function () {
        let e = sessionStorage.csCloud + "rec-manage-candidates/v1/candidates";
        return await fetch(e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            },
            body: JSON.stringify({
                filters: {
                    statusIds: [],
                    flagIds: [],
                    sourceIds: [],
                    requisitionIds: [],
                    candidateIds: [],
                    onlyOpenRequisitions: !0,
                    onlyActiveCandidates: !0,
                    keywords: "",
                    onlyMyRequisitions: !0,
                    requisitionNameSearchTerm: ""
                },
                paging: {
                    pageSize: 20,
                    pageNumber: 1,
                    sortOrder: "SubmissionDateDescending"
                },
                include: ["Candidates", "AvailableFilters", "StatusCategories"]
            })
        })
    })).then((e => e.json())).then((async function (e) {
        let t = "<div class='ATS totalCandidates gpe-cap row'>";
        return t += "<div class='summaryItem col-md-12'>", t += "<div class='gpe-center'>", t += "<a href='" + a[0].WIDGETS[s].url + "'>", t += "<div class='totalCandidates gpe-bold gpe-text40'>" + e.data.totalItems + "</div>", t += "</a>", t += "</div>", t += "</div>", t += "</div>", n.innerHTML = t, n
    })).catch((e => {}))
}
async function getTranscriptMetrics(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    let s = t + "-" + e;
    const n = document.createElement("div");
    return n.className = e, n.setAttribute("id", t + "-" + e), await checkJWT().then((async function () {
        return await fetch("/services/api/bff/learnerhome/user/" + sessionStorage.csUser + "/stats", {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (e) {
        let t = "<div class='summaryPanel gpe-cap row'>";
        return t += "<div class='summaryItem col-md-4'>", t += "<div class='gpe-center'>", t += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>", t += "<div class='pastDueCount gpe-bold gpe-text20'>" + e.data[0].metrics.pastDueCount + "</div>", t += "<div class='pastdueDesc gpe-desc'>" + a[0].WIDGETS[s].pastdueDesc[sessionStorage.csCulture] + "</div>", t += "</a>", t += "</div>", t += "</div>", t += "<div class='summaryItem col-md-4'>", t += "<div class='gpe-center'>", t += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>", t += "<div class='dueSoonCount gpe-bold gpe-text20'>" + e.data[0].metrics.dueSoonCount + "</div>", t += "<div class='dueSoonDesc gpe-desc'>" + a[0].WIDGETS[s].dueSoonDesc[sessionStorage.csCulture] + "</div>", t += "</a>", t += "</div>", t += "</div>", t += "<div class='summaryItem col-md-4'>", t += "<div class='gpe-center'>", t += "<a href='/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript'>", t += "<div class='noDueDateCount gpe-bold gpe-text20'>" + e.data[0].metrics.noDueDateCount + "</div>", t += "<div class='assignedNoDueDateDesc gpe-desc'>" + a[0].WIDGETS[s].assignedNoDueDateDesc[sessionStorage.csCulture] + "</div>", t += "</a>", t += "</div>", t += "</div>", t += "</div>", t += "<div class='summaryPanel gpe-cap row'>", t += "<div class='summaryItem col-md-4'>", t += "<div class='gpe-center'>", t += "<a href='/ui/lms-learner-playlist/UsersPlaylists'>", t += "<div class='pastDueCount gpe-bold gpe-text20'>" + e.data[0].playlists.numPlaylists + "</div>", t += "<div class='pastdueDesc gpe-desc'>" + a[0].WIDGETS[s].playlists.createdDesc[sessionStorage.csCulture] + "</div>", t += "</a>", t += "</div>", t += "</div>", t += "<div class='summaryItem col-md-4'>", t += "<div class='gpe-center'>", t += "<a href='/ui/lms-learner-playlist/UsersPlaylists'>", t += "<div class='dueSoonCount gpe-bold gpe-text20'>" + e.data[0].playlists.numFollowers + "</div>", t += "<div class='dueSoonDesc gpe-desc'>" + a[0].WIDGETS[s].playlists.followersDesc[sessionStorage.csCulture] + "</div>", t += "</a>", t += "</div>", t += "</div>", t += "<div class='summaryItem col-md-4'>", t += "<div class='gpe-center'>", t += "<a href='/ui/lms-learner-playlist/UsersPlaylists?section=followed'>", t += "<div class='noDueDateCount gpe-bold gpe-text20'>" + e.data[0].playlists.numFollowed + "</div>", t += "<div class='assignedNoDueDateDesc gpe-desc'>" + a[0].WIDGETS[s].playlists.followedDesc[sessionStorage.csCulture] + "</div>", t += "</a>", t += "</div>", t += "</div>", t += "</div>", n.innerHTML = t, n
    })).catch((e => {}))
}
async function getAssignedTraining(e, t) {
    const a = document.createElement("div");
    return a.className = e, a.setAttribute("id", t + "-" + e), await checkJWT().then((async function () {
        return await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/transcript?isCompleted=false&isArchived=false&isRemoved=false&isStandAlone=true&sortCriteria=StatusChangeDate&pageSize=20&pageNum=1", {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (t) {
        let s = document.createElement("div");
        s.className = "carousel slide", s.setAttribute("id", e + "Carousel"), s.setAttribute("data-bs-ride", "carousel"), s.setAttribute("data-bs-interval", "false"), s.setAttribute("data-pause", "hover");
        let n = document.createElement("div");
        n.className = "carousel-indicators";
        let r = "";
        t.data.forEach((function (t, a) {
            let s = document.createElement("button");
            s.setAttribute("type", "button"), s.setAttribute("data-bs-target", "#" + e + "Carousel"), s.setAttribute("data-bs-slide-to", a), "" == r && (s.className = "active", r = "active"), n.appendChild(s)
        })), s.appendChild(n);
        let i = document.createElement("div");
        i.className = "carousel-inner";
        let l = "";
        t.data.forEach((function (e, t) {
            let a = document.createElement("div");
            a.className = "carousel-item", "" == l && (a.className += " active", l = "active");
            let s = document.createElement("div");
            s.className = "carouselItemTile", s.setAttribute("data-tag", e.id), s.style.height = "225px";
            let n = document.createElement("div");
            n.className = "carouselItemPanel", n.setAttribute("data-tag", e.id), n.setAttribute("style", "height: 100%; overflow: hidden;");
            let r = document.createElement("div"),
                o = document.createElement("div");
            o.className = "carouselItemPanelItem";
            let c = document.createElement("div");
            c.className = "carouselItemPanelBody";
            let d = document.createElement("div"),
                u = document.createElement("div");
            u.className = "carouselItemPanelTileBody";
            let m = document.createElement("a");
            m.className = "carouselItemPanelTileLink", m.href = e.trainingDetailsUrl, m.title = e.title;
            let p = document.createElement("div");
            p.className = "carouselItemPanelTileLinkThmb", p.style.backgroundImage = "url('" + e.thumbnailImage + "')", p.style.height = "100%", p.style.overflow = "hidden", m.appendChild(p), u.appendChild(m), d.appendChild(u), c.appendChild(d), o.appendChild(c), carouselItemPanelCourseDesc = document.createElement("div"), carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc", carouselItemPanelCourseDescDiv = document.createElement("div"), carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv", carouselItemPanelCourseDescDivType = document.createElement("span"), carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType", carouselItemPanelCourseDescDivType.setAttribute("title", e.trainingType), carouselItemPanelCourseDescDivType.innerHTML = e.trainingType, carouselItemPanelCourseDescDivTitle = document.createElement("a"), carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle", carouselItemPanelCourseDescDivTitle.setAttribute("title", e.title), carouselItemPanelCourseDescDivTitle.href = e.trainingDetailsUrl, carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div"), carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper", carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;"), carouselItemPanelCourseDescD = document.createElement("div"), carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD", carouselItemPanelCourseDescTitleText = document.createElement("div"), carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText", carouselItemPanelCourseDescTitleText.innerHTML = e.title, carouselItemPanelCourseDescTitleTextFader = document.createElement("div"), carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader", carouselItemPanelCourseDescDueDate = document.createElement("div"), carouselItemPanelCourseDescDueDate.className = "carouselItemPanelCourseDescDueDate", carouselItemPanelCourseDescDueDate.innerHTML = e.dueDateString, carouselItemPanelCourseDescTitleText.appendChild(carouselItemPanelCourseDescTitleTextFader), carouselItemPanelCourseDescD.appendChild(carouselItemPanelCourseDescTitleText), carouselItemPanelCourseDescDivTitleWrapper.appendChild(carouselItemPanelCourseDescD), carouselItemPanelCourseDescDivTitle.appendChild(carouselItemPanelCourseDescDivTitleWrapper), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivType), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivTitle), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDueDate), carouselItemPanelCourseDesc.appendChild(carouselItemPanelCourseDescDiv), r.appendChild(o), r.appendChild(carouselItemPanelCourseDesc), n.appendChild(r), s.appendChild(n), a.appendChild(s), i.appendChild(a)
        })), s.appendChild(i);
        let o = document.createElement("button");
        o.className = "carousel-control-prev", o.setAttribute("type", "button"), o.setAttribute("data-bs-target", "#" + e + "Carousel"), o.setAttribute("data-bs-slide", "prev");
        let c = document.createElement("span");
        c.className = "carousel-control-prev-icon";
        let d = document.createElement("button");
        d.className = "carousel-control-next", d.setAttribute("type", "button"), d.setAttribute("data-bs-target", "#" + e + "Carousel"), d.setAttribute("data-bs-slide", "next");
        let u = document.createElement("span");
        return u.className = "carousel-control-next-icon", o.appendChild(c), s.appendChild(o), d.appendChild(u), s.appendChild(d), a.appendChild(s), a
    })).catch((e => {}))
}
async function getTrendingForJob(e, t) {
    const a = document.createElement("div");
    return a.className = e, a.setAttribute("id", t + "-" + e), await checkJWT().then((async function () {
        return await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/recommendedtraining?type=Position&pageSize=20&pageNum=1", {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (t) {
        let s = document.createElement("div");
        s.className = "carousel slide", s.setAttribute("id", e + "Carousel"), s.setAttribute("data-bs-ride", "carousel"), s.setAttribute("data-bs-interval", "false"), s.setAttribute("data-pause", "hover");
        let n = document.createElement("div");
        n.className = "carousel-inner";
        let r = "";
        t.data.forEach((function (e, t) {
            let a = document.createElement("div");
            a.className = "carousel-item", "" == r && (a.className += " active", r = "active");
            let s = document.createElement("div");
            s.className = "carouselItemTile", s.setAttribute("data-tag", e.id), s.style.height = "225px";
            let i = document.createElement("div");
            i.className = "carouselItemPanel", i.setAttribute("data-tag", e.id), i.setAttribute("style", "height: 100%; overflow: hidden;");
            let l = document.createElement("div"),
                o = document.createElement("div");
            o.className = "carouselItemPanelItem";
            let c = document.createElement("div");
            c.className = "carouselItemPanelBody";
            let d = document.createElement("div"),
                u = document.createElement("div");
            u.className = "carouselItemPanelTileBody";
            let m = document.createElement("a");
            m.className = "carouselItemPanelTileLink", m.href = e.trainingDetailsUrl, m.title = e.title;
            let p = document.createElement("div");
            p.className = "carouselItemPanelTileLinkThmb", p.style.backgroundImage = "url('" + e.thumbnailImage + "')", p.style.height = "100%", p.style.overflow = "hidden", m.appendChild(p), u.appendChild(m), d.appendChild(u), c.appendChild(d), o.appendChild(c), carouselItemPanelCourseDesc = document.createElement("div"), carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc", carouselItemPanelCourseDescDiv = document.createElement("div"), carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv", carouselItemPanelCourseDescDivType = document.createElement("span"), carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType", carouselItemPanelCourseDescDivType.setAttribute("title", e.trainingType), carouselItemPanelCourseDescDivType.innerHTML = e.trainingType, carouselItemPanelCourseDescDivTitle = document.createElement("a"), carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle", carouselItemPanelCourseDescDivTitle.setAttribute("title", e.title), carouselItemPanelCourseDescDivTitle.href = e.trainingDetailsUrl, carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div"), carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper", carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;"), carouselItemPanelCourseDescD = document.createElement("div"), carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD", carouselItemPanelCourseDescTitleText = document.createElement("div"), carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText", carouselItemPanelCourseDescTitleText.innerHTML = e.title, carouselItemPanelCourseDescTitleTextFader = document.createElement("div"), carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader", carouselItemPanelCourseDescDuration = document.createElement("div"), carouselItemPanelCourseDescDuration.className = "carouselItemPanelCourseDescDuration", carouselItemPanelCourseDescDuration.innerHTML = e.durationString, carouselItemPanelCourseDescTitleText.appendChild(carouselItemPanelCourseDescTitleTextFader), carouselItemPanelCourseDescD.appendChild(carouselItemPanelCourseDescTitleText), carouselItemPanelCourseDescDivTitleWrapper.appendChild(carouselItemPanelCourseDescD), carouselItemPanelCourseDescDivTitle.appendChild(carouselItemPanelCourseDescDivTitleWrapper), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivType), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivTitle), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDuration), carouselItemPanelCourseDesc.appendChild(carouselItemPanelCourseDescDiv), l.appendChild(o), l.appendChild(carouselItemPanelCourseDesc), i.appendChild(l), s.appendChild(i), a.appendChild(s), n.appendChild(a)
        })), s.appendChild(n);
        let i = document.createElement("button");
        i.className = "carousel-control-prev", i.setAttribute("type", "button"), i.setAttribute("data-bs-target", "#" + e + "Carousel"), i.setAttribute("data-bs-slide", "prev");
        let l = document.createElement("span");
        l.className = "carousel-control-prev-icon";
        let o = document.createElement("button");
        o.className = "carousel-control-next", o.setAttribute("type", "button"), o.setAttribute("data-bs-target", "#" + e + "Carousel"), o.setAttribute("data-bs-slide", "next");
        let c = document.createElement("span");
        return c.className = "carousel-control-next-icon", i.appendChild(l), s.appendChild(i), o.appendChild(c), s.appendChild(o), a.appendChild(s), a
    })).catch((e => {}))
}
async function getInspiredBySubjects(e, t) {
    const a = document.createElement("div");
    return a.className = e, a.setAttribute("id", t + "-" + e), await checkJWT().then((async function () {
        return await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/recommendedtraining?type=Subjects&pageSize=20&pageNum=1", {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (t) {
        let s = document.createElement("div");
        s.className = "carousel slide", s.setAttribute("id", e + "Carousel"), s.setAttribute("data-bs-ride", "carousel"), s.setAttribute("data-bs-interval", "false"), s.setAttribute("data-pause", "hover");
        let n = document.createElement("div");
        n.className = "carousel-inner";
        let r = "";
        t.data.forEach((function (e, t) {
            let a = document.createElement("div");
            a.className = "carousel-item", "" == r && (a.className += " active", r = "active");
            let s = document.createElement("div");
            s.className = "carouselItemTile", s.setAttribute("data-tag", e.id), s.style.height = "225px";
            let i = document.createElement("div");
            i.className = "carouselItemPanel", i.setAttribute("data-tag", e.id), i.setAttribute("style", "height: 100%; overflow: hidden;");
            let l = document.createElement("div"),
                o = document.createElement("div");
            o.className = "carouselItemPanelItem";
            let c = document.createElement("div");
            c.className = "carouselItemPanelBody";
            let d = document.createElement("div"),
                u = document.createElement("div");
            u.className = "carouselItemPanelTileBody";
            let m = document.createElement("a");
            m.className = "carouselItemPanelTileLink", m.href = e.trainingDetailsUrl, m.title = e.title;
            let p = document.createElement("div");
            p.className = "carouselItemPanelTileLinkThmb", p.style.backgroundImage = "url('" + e.thumbnailImage + "')", p.style.height = "100%", p.style.overflow = "hidden", m.appendChild(p), u.appendChild(m), d.appendChild(u), c.appendChild(d), o.appendChild(c), carouselItemPanelCourseDesc = document.createElement("div"), carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc", carouselItemPanelCourseDescDiv = document.createElement("div"), carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv", carouselItemPanelCourseDescDivType = document.createElement("span"), carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType", carouselItemPanelCourseDescDivType.setAttribute("title", e.trainingType), carouselItemPanelCourseDescDivType.innerHTML = e.trainingType, carouselItemPanelCourseDescDivTitle = document.createElement("a"), carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle", carouselItemPanelCourseDescDivTitle.setAttribute("title", e.title), carouselItemPanelCourseDescDivTitle.href = e.trainingDetailsUrl, carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div"), carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper", carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;"), carouselItemPanelCourseDescD = document.createElement("div"), carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD", carouselItemPanelCourseDescTitleText = document.createElement("div"), carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText", carouselItemPanelCourseDescTitleText.innerHTML = e.title, carouselItemPanelCourseDescTitleTextFader = document.createElement("div"), carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader", carouselItemPanelCourseDescDuration = document.createElement("div"), carouselItemPanelCourseDescDuration.className = "carouselItemPanelCourseDescDuration", carouselItemPanelCourseDescDuration.innerHTML = e.durationString, carouselItemPanelCourseDescTitleText.appendChild(carouselItemPanelCourseDescTitleTextFader), carouselItemPanelCourseDescD.appendChild(carouselItemPanelCourseDescTitleText), carouselItemPanelCourseDescDivTitleWrapper.appendChild(carouselItemPanelCourseDescD), carouselItemPanelCourseDescDivTitle.appendChild(carouselItemPanelCourseDescDivTitleWrapper), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivType), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivTitle), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDuration), carouselItemPanelCourseDesc.appendChild(carouselItemPanelCourseDescDiv), l.appendChild(o), l.appendChild(carouselItemPanelCourseDesc), i.appendChild(l), s.appendChild(i), a.appendChild(s), n.appendChild(a)
        })), s.appendChild(n);
        let i = document.createElement("button");
        i.className = "carousel-control-prev", i.setAttribute("type", "button"), i.setAttribute("data-bs-target", "#" + e + "Carousel"), i.setAttribute("data-bs-slide", "prev");
        let l = document.createElement("span");
        l.className = "carousel-control-prev-icon";
        let o = document.createElement("button");
        o.className = "carousel-control-next", o.setAttribute("type", "button"), o.setAttribute("data-bs-target", "#" + e + "Carousel"), o.setAttribute("data-bs-slide", "next");
        let c = document.createElement("span");
        return c.className = "carousel-control-next-icon", i.appendChild(l), s.appendChild(i), o.appendChild(c), s.appendChild(o), a.appendChild(s), a
    })).catch((e => {}))
}
async function getTopPicks(e, t) {
    const a = document.createElement("div");
    return a.className = e, a.setAttribute("id", t + "-" + e), await checkJWT().then((async function () {
        return await fetch("/services/api/lms/user/" + sessionStorage.csUser + "/recommendedtraining?type=TopPicks&pageSize=20&pageNum=1", {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (t) {
        let s = document.createElement("div");
        s.className = "carousel slide", s.setAttribute("id", e + "Carousel"), s.setAttribute("data-bs-ride", "carousel"), s.setAttribute("data-bs-interval", "false"), s.setAttribute("data-pause", "hover");
        let n = document.createElement("div");
        n.className = "carousel-inner";
        let r = "";
        t.data.forEach((function (e, t) {
            let a = document.createElement("div");
            a.className = "carousel-item", "" == r && (a.className += " active", r = "active");
            let s = document.createElement("div");
            s.className = "carouselItemTile", s.setAttribute("data-tag", e.id), s.style.height = "225px";
            let i = document.createElement("div");
            i.className = "carouselItemPanel", i.setAttribute("data-tag", e.id), i.setAttribute("style", "height: 100%; overflow: hidden;");
            let l = document.createElement("div"),
                o = document.createElement("div");
            o.className = "carouselItemPanelItem";
            let c = document.createElement("div");
            c.className = "carouselItemPanelBody";
            let d = document.createElement("div"),
                u = document.createElement("div");
            u.className = "carouselItemPanelTileBody";
            let m = document.createElement("a");
            m.className = "carouselItemPanelTileLink", m.href = e.trainingDetailsUrl, m.title = e.title;
            let p = document.createElement("div");
            p.className = "carouselItemPanelTileLinkThmb", p.style.backgroundImage = "url('" + e.thumbnailImage + "')", p.style.height = "100%", p.style.overflow = "hidden", m.appendChild(p), u.appendChild(m), d.appendChild(u), c.appendChild(d), o.appendChild(c), carouselItemPanelCourseDesc = document.createElement("div"), carouselItemPanelCourseDesc.className = "carouselItemPanelCourseDesc", carouselItemPanelCourseDescDiv = document.createElement("div"), carouselItemPanelCourseDescDiv.className = "carouselItemPanelCourseDescDiv", carouselItemPanelCourseDescDivType = document.createElement("span"), carouselItemPanelCourseDescDivType.className = "carouselItemPanelCourseDescDivType", carouselItemPanelCourseDescDivType.setAttribute("title", e.trainingType), carouselItemPanelCourseDescDivType.innerHTML = e.trainingType, carouselItemPanelCourseDescDivTitle = document.createElement("a"), carouselItemPanelCourseDescDivTitle.className = "carouselItemPanelCourseDescDivTitle", carouselItemPanelCourseDescDivTitle.setAttribute("title", e.title), carouselItemPanelCourseDescDivTitle.href = e.trainingDetailsUrl, carouselItemPanelCourseDescDivTitleWrapper = document.createElement("div"), carouselItemPanelCourseDescDivTitleWrapper.className = "carouselItemPanelCourseDescDivTitleWrapper", carouselItemPanelCourseDescDivTitleWrapper.setAttribute("style", "min-height: 40px; overflow: hidden;"), carouselItemPanelCourseDescD = document.createElement("div"), carouselItemPanelCourseDescD.className = "carouselItemPanelCourseDescD", carouselItemPanelCourseDescTitleText = document.createElement("div"), carouselItemPanelCourseDescTitleText.className = "carouselItemPanelCourseDescTitleText", carouselItemPanelCourseDescTitleText.innerHTML = e.title, carouselItemPanelCourseDescTitleTextFader = document.createElement("div"), carouselItemPanelCourseDescTitleTextFader.className = "carouselItemPanelCourseDescTitleTextFader", carouselItemPanelCourseDescDuration = document.createElement("div"), carouselItemPanelCourseDescDuration.className = "carouselItemPanelCourseDescDuration", carouselItemPanelCourseDescDuration.innerHTML = e.durationString, carouselItemPanelCourseDescTitleText.appendChild(carouselItemPanelCourseDescTitleTextFader), carouselItemPanelCourseDescD.appendChild(carouselItemPanelCourseDescTitleText), carouselItemPanelCourseDescDivTitleWrapper.appendChild(carouselItemPanelCourseDescD), carouselItemPanelCourseDescDivTitle.appendChild(carouselItemPanelCourseDescDivTitleWrapper), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivType), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDivTitle), carouselItemPanelCourseDescDiv.appendChild(carouselItemPanelCourseDescDuration), carouselItemPanelCourseDesc.appendChild(carouselItemPanelCourseDescDiv), l.appendChild(o), l.appendChild(carouselItemPanelCourseDesc), i.appendChild(l), s.appendChild(i), a.appendChild(s), n.appendChild(a)
        })), s.appendChild(n);
        let i = document.createElement("button");
        i.className = "carousel-control-prev", i.setAttribute("type", "button"), i.setAttribute("data-bs-target", "#" + e + "Carousel"), i.setAttribute("data-bs-slide", "prev");
        let l = document.createElement("span");
        l.className = "carousel-control-prev-icon";
        let o = document.createElement("button");
        o.className = "carousel-control-next", o.setAttribute("type", "button"), o.setAttribute("data-bs-target", "#" + e + "Carousel"), o.setAttribute("data-bs-slide", "next");
        let c = document.createElement("span");
        return c.className = "carousel-control-next-icon", i.appendChild(l), s.appendChild(i), o.appendChild(c), s.appendChild(o), a.appendChild(s), a
    })).catch((e => {}))
}
async function getCheckinsDetails(e, t) {
    const a = JSON.parse(sessionStorage.csWidgetConfig);
    let s = t + "-" + e;
    const n = document.createElement("div");
    n.className = e, n.setAttribute("id", t + "-" + e);
    let r = {};
    return await checkJWT().then((async function () {
        return await fetch("/services/x/localization/v1/localizations/ui?groups=GoalPanel,DevPlanPanel,CheckIns&culture=" + sessionStorage.csCulture, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (e) {
        let t = sessionStorage.csCloud + "perf-conversations-api/v1/conversations";
        return r = e.data, await fetch(t, {
            method: "GET",
            mode: "cors",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.csToken
            }
        })
    })).then((e => e.json())).then((async function (e) {
        let t = "";
        if (0 != e.length) {
            var i = window.location.host.split(".");
            t = "<table border='0' cellspacing='0' cellpadding='0' width='100%' class='table table-hover'>", t += "<thead>", t += "<tr>", t += "<th class='checkHeaderCol'>" + r["Perf.Check-Ins.LandingPage.upcomingConversationsOverview.checkInLabel"] + "</th>", t += "<th class='checkHeaderCol'>" + r["Perf.Check-Ins.LandingPage.recentConversationsRow.conversationRecentlyModifiedText"] + "</th>", t += "<th class='checkHeaderCol'>" + r["Perf.Check-Ins.LandingPage.upcomingConversationsOverview.nextMeetingLabel"] + "</th>", t += "</tr>", t += "</thead>";
            for (let a in e) {
                var l = "/clientimg/" + i[0] + "/users/photos/" + e[a].participants[1].pictureUrl;
                if (t += "<tr id='checkinItem-" + a + "' class='checkinItem clickable-row' data-href='/ui/perf-check-ins/Check-Ins/view/" + e[a].id + "/meeting/" + e[a].meetingsSummary.nextMeetingId + "'>", t += "<td class='checkItemCol'>", t += "<div class='cellContent'>", t += "<div class='upcoming-conversations-list--desktop__title-cell' role='button' tabindex='0'>", t += "<div class='upcoming-conversations-list--desktop__title-cell-avatar' aria-hidden='true'>", t += "<div class='chkAvatarImage' style='background-image:url(" + l + ")'></div>", t += "</div>", t += "<div class='upcoming-conversations-list--desktop__title-cell-detail'>", t += "<div class='upcoming-conversations-list--desktop__title-cell-detail__user-name'>" + e[a].participants[1].firstName + " " + e[a].participants[1].lastName + "</div>", t += "<div class='upcoming-conversations-list--desktop__title-cell-detail__title'>" + e[a].title + "</div>", t += "</div>", t += "</div>", t += "</div>", t += "</td>", t += "<td class='lastMod checkItemColDate'><div class='month'>" + new Date(e[a].lastModifiedDate).toLocaleDateString("en-GB", {
                        month: "short"
                    }).split(" ") + "</div><div class='day'>" + new Date(e[a].lastModifiedDate).toLocaleDateString("en-GB", {
                        day: "numeric"
                    }).split(" ") + "</div></td>", e[a].meetingsSummary.isNextMeetingCreated) t += "<td class='nextMeeting checkItemColDate'><div class='month'>" + new Date(e[a].meetingsSummary.nextMeetingDate).toLocaleDateString("en-GB", {
                    month: "short"
                }).split(" ") + "</div><div class='day'>" + new Date(e[a].meetingsSummary.nextMeetingDate).toLocaleDateString("en-GB", {
                    day: "numeric"
                }).split(" ") + "</div></td>";
                else t += "<td class='checkItemColDate'>-</td>";
                t += "</tr>"
            }
            t += "</table>"
        } else t = "<div class='checkins nocontent'>", t += "<button type='button' id='createNewCheckInsBTN' class='getstarted_button' data-href='" + a[0].WIDGETS[s].getstartedurl + "'>" + a[0].WIDGETS[s].nocontenttitle[sessionStorage.csCulture] + "</button>", t += "</div>";
        return n.innerHTML = t, n
    })).catch((e => {}))
}

function status(e) {
    switch (e.status) {
        case 202:
            return new Promise((t => setTimeout((() => t(e)), 1200)));
        case 200:
            return Promise.resolve(e);
        case 204:
            return Promise.resolve(e)
    }
}
async function checkReportToken() {
    if (sessionStorage.reportToken) {
        var e = sessionStorage.reportTokenDate;
        return Math.floor((Date.now() - e) / 1e3 / 60) < 10 ? sessionStorage.reportToken : await updateReportToken()
    }
    return await updateReportToken()
}

function updateReportToken() {
    return fetch("/Analytics/ReportBuilder/index.aspx", {
        method: "GET",
        headers: {
            "Content-Type": "text/html"
        }
    }).then((e => e.text())).then((e => (sessionStorage.reportToken = e.substring(e.indexOf("accessToken:") + 14, e.indexOf("',", e.indexOf("accessToken"))), sessionStorage.csToken))).catch((e => {}))
}

function fetchReport(e) {
    var t = {};
    return fetch("/reportarchitect/rctmetacore/metaapi/v1/report/" + e, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.reportToken
        }
    }).then((function (e) {
        if (!e.ok) throw new Error("HTTP status " + e.status);
        return e.json()
    })).then((a => {
        var s = {
            filters: [],
            sorting: []
        };
        return s.filters = [...a.filters], s.sorting = [...a.sorting], t = a, fetch("/reportarchitect/rctdatacore/metaapi/v1/report/" + e + "/rendered", {
            method: "POST",
            mode: "cors",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.reportToken
            },
            body: JSON.stringify(s)
        })
    })).then(status).then((e => e.json())).then((e => fetch("/reportarchitect/rctdatacore/metaapi/v1" + e.location, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.reportToken
        }
    }))).then(status).then((e => e.json())).then((e => [e, t])).catch((e => {}))
}
async function createDashboard(e, t, a, s) {
    return await checkReportToken().then((async function () {
        return await fetchReport(e)
    })).then((async function (e) {
        let s = e[0],
            n = e[1],
            [, ...r] = [...new Set(s.chartData.map((e => e[0])))],
            [, ...i] = [...new Set(s.chartData.map((e => e[1])))];
        const l = {
            labels: [...r],
            datasets: []
        };
        let o = "",
            c = [];
        if (1 == n.charts[0].chartDimensions.length) {
            let e = [];
            e = s.chartPalette.map((function (e) {
                return e.color
            })), $.each(n.charts[0].chartDimensions, (function (e, t) {
                $.each(s.chartData, (function (e, t) {
                    c = s.chartData.map((function (e, t) {
                        return e.slice(-1)[0]
                    }))
                }))
            })), c.shift(), l.datasets.push({
                backgroundColor: e,
                hoverBackgroundColor: e,
                data: c,
                fill: !0
            }), o = !1
        } else {
            for (let e in i) {
                c[i[e]] = [];
                for (let t in r) {
                    c[i[e]][t] = [];
                    for (let a in s.chartData) r[t] == s.chartData[a][0] && s.chartData[a][n.charts[0].chartDimensions.length - 1] == i[e] && (c[i[e]][t] = s.chartData[a][n.charts[0].chartDimensions.length])
                }
                let t = s.chartPalette.filter((function (t) {
                    return t.displayName === i[e]
                }));
                t.map((function (e) {
                    return e.color
                }));
                l.datasets.push({
                    label: i[e],
                    backgroundColor: t,
                    data: c[i[e]],
                    fill: !0,
                    datalabels: {
                        anchor: "end",
                        align: "start"
                    }
                })
            }
            o = !0
        }
        const d = {
            type: cs_DashboardDetailsArray[n.charts[0].chartTypeId].type,
            data: l,
            options: {
                maintainAspectRatio: "true",
                responsive: "true",
                plugins: {
                    legend: {
                        display: o,
                        position: "top"
                    },
                    title: {
                        display: !1,
                        text: n.charts[0].title
                    }
                },
                scales: {
                    y: {
                        display: cs_DashboardDetailsArray[n.charts[0].chartTypeId].scale.ydisplay
                    },
                    x: {
                        display: cs_DashboardDetailsArray[n.charts[0].chartTypeId].scale.xdisplay
                    }
                }
            }
        };
        var u = document.createElement("canvas");
        u.setAttribute("style", "height: 140px, width: 100%"), u.id = t + "_chart", document.body.appendChild(u);
        var m = document.getElementById(u.id);
        m.setAttribute("style", "height: 140px, width: 100%");
        var p = m.getContext("2d");
        new Chart(p, d);
        return document.body.removeChild(u), m.width = "200px", m.height = "200px", a.appendChild(m), await a
    })).catch((e => {}))
}

function lastinline(e) {
    const t = String.fromCodePoint(128561),
        a = String.fromCodePoint(128293),
        s = String.fromCodePoint(128512),
        n = String.fromCodePoint(129304);
    var r = s + " " + t + " " + a + " " + t + " " + s + "\n";
    return r += "%cWe'll know for the first time.\n", r += "If we're evil or divine\n", r += "We're the last in line!\n", r += "--[ " + e + " ]--\n", r += "--[ " + gpeDEMOROLE + " ]--\n", r += n + " " + a + " " + t + " " + a + " " + n
}

function setPreloader(e, t) {
    switch (t) {
        case "on":
            let t = document.createElement("span");
            t.className = "inner-spinner";
            let a = document.createElement("span");
            a.className = "loader";
            let s = document.createElement("div");
            s.setAttribute("id", "preloader_div");
            let n = document.createElement("div");
            n.setAttribute("id", "preloader"), a.appendChild(t), s.appendChild(a), n.appendChild(s), document.getElementById(e).appendChild(n);
            break;
        case "off":
            $("#" + e + " #preloader").hide(), $("#" + e + " .loader").hide();
            break;
        default:
            $(e).hide();
            break
    }
}!async function () {
    setPreloader("USR-content", "on"), await checkJWT().then((async function (e) {
        const t = fetch("https://scfiles.csod.com/Baseline/Config/json/gpe_widgetConfig-min.json", {
                cache: "no-store"
            }).then((e => e.json())),
            a = fetch("https://scfiles.csod.com/Baseline/Config/json/gpe_customLocale-min.json", {
                cache: "no-store"
            }).then((e => e.json()));
        return await Promise.all([t, a])
    })).then((async function (e) {
        let t = e[0],
            a = e[1];
        sessionStorage.setItem("csWidgetConfig", JSON.stringify(t)), sessionStorage.setItem("csCustomLocale", JSON.stringify(a));
        const s = buildNav(gpeDEMOROLE, sessionStorage.csCulture, gpeDEMMOMODULES),
            n = buildAboutCard(),
            r = "ONB" === gpeDEMOROLE ? buildOnbWidget(gpeDEMOROLE, sessionStorage.csCulture) : "false",
            i = "ONB" !== gpeDEMOROLE ? buildModuleWidget(gpeDEMMOMODULES, gpeDEMOROLE) : "false";
        return await Promise.all([s, n, r, i])
    })).then((async function ([e, t, a, s, n]) {
        const r = "ONB" !== gpeDEMOROLE ? await buildWidgets_v2(gpeDEMMOMODULES, gpeDEMOROLE) : "false",
            i = "ONB" !== gpeDEMOROLE ? await buildExtendedWidgets(gpeDEMOROLE) : "false";
        return await Promise.resolve([r, i])
    })).then((async function (e) {
        setPreloader("USR-content", "off"), document.querySelector("a[id*='header_headerResponsive_responsiveNav_lnkLogout']").addEventListener("click", (function (e) {
            sessionStorage.clear()
        })), $(".clickable-row").click((function () {
            window.location = $(this).data("href")
        })), $(".getstarted_button").click((function () {
            window.location = $(this).data("href")
        })), $(".approval_button").click((function () {
            window.location = $(this).data("href")
        })), $(".quicklinks_button").click((function () {
            window.location = $(this).data("href")
        }))
    })).then((async function (e) {})).catch((e => {}))
}();