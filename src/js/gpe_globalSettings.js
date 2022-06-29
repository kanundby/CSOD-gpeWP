"use strict";
if (!sessionStorage.gpeGlobalSettings) {

	const gpeGlobalSettings = [
		{
		   "NAVIGATION":{
			  "USR":{
				 "en-US":"My Development",
				 "en-UK":"My Development",
				 "de-DE":"Meine Entwicklung",
				 "ja-JP":"私の開発",
				 "sv-SE":"Min utveckling",
				 "zh-CN":"我的发展",
				 "fr-FR":"Mon développement",
				 "nl-NL":"Mijn ontwikkeling",
				 "es-ES":"Mi desarrollo",
				 "it-IT":"Il mio sviluppo",
				 "pt-BR":"Meu Desenvolvimento",
				 "ko-KR":"My Development",
				 "es-MX":"Mi desarrollo",
				 "zh-Hant":"My Development"
			  },
			  "MGR":{
				 "en-US":"My team",
				 "en-UK":"My team",
				 "de-DE":"Mein Team",
				 "es-ES":"Mi equipo",
				 "it-IT":"La mia squadra",
				 "nl-NL":"Mijn team",
				 "zh-CN":"我的团队",
				 "fr-FR":"Mon équipe",
				 "ja-JP":"私のチーム",
				 "sv-SE":"Mitt team",
				 "pt-BR":"Minha equipe",
				 "es-MX":"Mi equipo",
				 "ko-KR":"My team",
				 "zh-Hant":"My team"
			  },
			  "HRD":{
				 "en-US":"HR Dashboard",
				 "en-UK":"HR Dashboard",
				 "de-DE":"HR-Dashboard",
				 "nl-NL":"HR Dashboard",
				 "zh-CN":"人力资源仪表板",
				 "ja-JP":"HRダッシュボード",
				 "fr-FR":"Tableau de bord RH",
				 "it-IT":"Cruscotto HR",
				 "es-ES":"Cuadro de mando de RRHH",
				 "ko-KR":"HR Dashboard",
				 "sv-SE":"HR-översikt",
				 "zh-Hant":"HR Dashboard",
				 "pt-BR":"Painel de HR",
				 "es-MX":"Cuadro de mando de RRHH"
			  },
			  "ADM":{
				 "en-US":"Admin Dashboard",
				 "en-UK":"Admin Dashboard",
				 "de-DE":"Verwaltungs-Dashboard",
				 "es-ES":"Panel de control de la administración",
				 "nl-NL":"Admin Dashboard",
				 "it-IT":"Cruscotto amministratore",
				 "zh-CN":"管理仪表板",
				 "ja-JP":"Admin Dashboard",
				 "sv-SE":"Administratörens instrumentpanel",
				 "ko-KR":"Admin Dashboard",
				 "fr-FR":"Tableau de bord de l'administrateur",
				 "pt-BR":"Painel de administração",
				 "es-MX":"Panel de control de la administración",
				 "zh-Hant":"Admin Dashboard"
			  },
			  "REC":{
				 "en-US":"Recruiter Dashboard",
				 "en-UK":"Recruiter Dashboard",
				 "de-DE":"Dashboard für Personalbeschaffer",
				 "nl-NL":"Rekruteerders Dashboard",
				 "zh-CN":"招聘人员仪表板",
				 "ja-JP":"リクルーターダッシュボード",
				 "fr-FR":"Tableau de bord du recruteur",
				 "it-IT":"Cruscotto reclutatore",
				 "es-ES":"Tablero de control de la contratación",
				 "sv-SE":"Kontrollpanel för rekryterare",
				 "pt-BR":"Painel de Recrutamento",
				 "es-MX":"Tablero de control de la contratación",
				 "ko-KR":"Recruiter Dashboard",
				 "zh-Hant":"Recruiter Dashboard"
			  },
			  "INS":{
				 "en-US":"Instructor Dashboard",
				 "en-UK":"Instructor Dashboard",
				 "de-DE":"Dashboard für Ausbilder",
				 "fr-FR":"Tableau de bord de l'instructeur",
				 "it-IT":"Cruscotto istruttore",
				 "nl-NL":"Instructeurs Dashboard",
				 "sv-SE":"Instruktörens instrumentpanel",
				 "zh-CN":"教员仪表板",
				 "es-ES":"Panel de control del instructor",
				 "ja-JP":"インストラクター・ダッシュボード",
				 "pt-BR":"Painel do instrutor",
				 "es-MX":"Panel de control del instructor",
				 "ko-KR":"Instructor Dashboard",
				 "zh-Hant":"Instructor Dashboard"
			  },
			  "GPE":{
				"en-US":"GPE Admin Dashboard",
				"en-UK":"GPE Admin Dashboard",
				"de-DE":"Dashboard für Ausbilder",
				"fr-FR":"Tableau de bord de l'instructeur",
				"it-IT":"Cruscotto istruttore",
				"nl-NL":"Instructeurs Dashboard",
				"sv-SE":"Instruktörens instrumentpanel",
				"zh-CN":"教员仪表板",
				"es-ES":"Panel de control del instructor",
				"ja-JP":"インストラクター・ダッシュボード",
				"pt-BR":"Painel do instrutor",
				"es-MX":"Panel de control del instructor",
				"ko-KR":"Instructor Dashboard",
				"zh-Hant":"Instructor Dashboard"
			 },			  
			  "APPROVALS":{
				 "en-US":"Pending Approvals",
				 "en-UK":"Pending Approvals",
				 "de-DE":"Anhängige Genehmigungen",
				 "nl-NL":"In afwachting van goedkeuringen",
				 "it-IT":"In attesa di approvazione",
				 "sv-SE":"Pågående godkännanden",
				 "fr-FR":"Approbations en attente",
				 "zh-CN":"尚待批准",
				 "ja-JP":"承認申請中",
				 "es-ES":"Aprobación pendiente",
				 "pt-BR":"Aprovações Pendentes",
				 "es-MX":"Aprobación pendiente",
				 "ko-KR":"Pending Approvals",
				 "zh-Hant":"Pending Approvals"
			  }
		   },
		   "MODULES":{
			  "ATS":{
				 "settings":{
					"moduletitle":{
					   "en-US":"Recruiting & Onboarding",
					   "en-UK":"Recruiting & Onboarding",
					   "de-DE":"Rekrutierung & Onboarding",
					   "nl-NL":"Rekrutering & Onboarding",
					   "it-IT":"Reclutamento e inserimento",
					   "fr-FR":"Recrutement et intégration",
					   "sv-SE":"Rekrytering och introduktion",
					   "es-ES":"Contratación e incorporación",
					   "pt-BR":"Recrutamento & Embarque",
					   "zh-CN":"招聘与入职",
					   "ja-JP":"リクルートとオンボーディング",
					   "ko-KR":"Recruiting & Onboarding",
					   "es-MX":"Contratación e incorporación",
					   "zh-Hant":"Recruiting & Onboarding"
					}
				 }
			  },
			  "EPM":{
				 "settings":{
					"moduletitle":{
					   "en-US":"Performance & Career",
					   "en-UK":"Performance & Career",
					   "de-DE":"Leistung & Karriere",
					   "fr-FR":"Performance et carrière",
					   "ja-JP":"パフォーマンスとキャリア",
					   "it-IT":"Prestazioni e carriera",
					   "ko-KR":"Performance & Career",
					   "nl-NL":"Prestaties en carrière",
					   "sv-SE":"Prestationer och karriär",
					   "pt-BR":"Desempenho",
					   "zh-Hant":"Performance & Career",
					   "zh-CN":"业绩和职业",
					   "es-ES":"Rendimiento y carrera profesional",
					   "es-MX":"Rendimiento y carrera profesional"
					}
				 }
			  },
			  "LMS":{
				 "settings":{
					"moduletitle":{
					   "en-US":"Learning & Development",
					   "en-UK":"Learning & Development",
					   "de-DE":"Lernen und Entwicklung",
					   "fr-FR":"Apprentissage et développement",
					   "ja-JP":"学習と開発",
					   "es-ES":"Aprendizaje y desarrollo",
					   "zh-CN":"学习与发展",
					   "nl-NL":"Leren en ontwikkeling",
					   "sv-SE":"Lärande och utveckling",
					   "pt-BR":"Aprendizagem & Desenvolvimento",
					   "es-MX":"Aprendizaje y desarrollo",
					   "it-IT":"Apprendimento e sviluppo",
					   "ko-KR":"Learning & Development",
					   "zh-Hant":"Learning & Development"
					}
				 }
			  },
			  "CHR":{
				 "settings":{
					"moduletitle":{
					   "en-US":"Core HR",
					   "en-UK":"Core HR",
					   "de-DE":"Kern-HR",
					   "it-IT":"Core HR",
					   "ja-JP":"コアHR",
					   "fr-FR":"Core HR",
					   "nl-NL":"Kern HR",
					   "sv-SE":"Huvuddelen av HR",
					   "pt-BR":"RH central",
					   "zh-CN":"核心人力资源",
					   "ko-KR":"Core HR",
					   "es-ES":"Núcleo de RRHH",
					   "zh-Hant":"Core HR",
					   "es-MX":"Núcleo de RRHH"
					}
				 }
			  },
			  "ROLESPECIFIC":{
				 "MGR":{
					"settings":{
					   "moduletitle":{
						  "en-US":"My team details",
						  "en-UK":"My team details",
						  "de-DE":"Angaben zu meinem Team",
						  "ko-KR":"My team details",
						  "fr-FR":"Les détails de mon équipe",
						  "sv-SE":"Information om mitt lag",
						  "es-ES":"Datos de mi equipo",
						  "pt-BR":"Detalhes da minha equipe",
						  "zh-CN":"我的团队详情",
						  "es-MX":"Datos de mi equipo",
						  "zh-Hant":"My team details",
						  "nl-NL":"Mijn teamgegevens",
						  "it-IT":"I dettagli della mia squadra",
						  "ja-JP":"マイチーム詳細"
					   }
					}
				 },
				 "HRD":{
					"settings":{
					   "moduletitle":{
						  "en-US":"Talent Management",
						  "en-UK":"Talent Management",
						  "de-DE":"Talent Management",
						  "nl-NL":"Talent Management",
						  "fr-FR":"Talent Management",
						  "it-IT":"Gestione dei talenti",
						  "ja-JP":"タレントマネジメント",
						  "pt-BR":"Gestão de Talentos",
						  "sv-SE":"Talanghantering",
						  "ko-KR":"Talent Management",
						  "es-ES":"Gestión del talento",
						  "zh-CN":"人才管理",
						  "zh-Hant":"Talent Management",
						  "es-MX":"Gestión del talento"
					   }
					}
				 },
				 "ADM":{
					"settings":{
					   "moduletitle":{
						  "en-US":"Admin Dashboard",
						  "en-UK":"Admin Dashboard",
						  "de-DE":"Verwaltungs-Dashboard",
						  "nl-NL":"Admin Dashboard",
						  "it-IT":"Cruscotto amministratore",
						  "ja-JP":"Admin Dashboard",
						  "pt-BR":"Painel de administração",
						  "es-ES":"Panel de control de la administración",
						  "zh-CN":"管理仪表板",
						  "sv-SE":"Administratörens instrumentpanel",
						  "ko-KR":"Admin Dashboard",
						  "fr-FR":"Tableau de bord de l'administrateur",
						  "es-MX":"Panel de control de la administración",
						  "zh-Hant":"Admin Dashboard"
					   }
					}
				 },
				 "INS":{
					"settings":{
					   "moduletitle":{
						  "en-US":"Instructor Dashboard",
						  "en-UK":"Instructor Dashboard",
						  "de-DE":"Dashboard für Ausbilder",
						  "nl-NL":"Instructeurs Dashboard",
						  "fr-FR":"Tableau de bord de l'instructeur",
						  "sv-SE":"Instruktörens instrumentpanel",
						  "ja-JP":"インストラクター・ダッシュボード",
						  "pt-BR":"Painel do instrutor",
						  "es-ES":"Panel de control del instructor",
						  "zh-CN":"教员仪表板",
						  "it-IT":"Cruscotto istruttore",
						  "es-MX":"Panel de control del instructor",
						  "ko-KR":"Instructor Dashboard",
						  "zh-Hant":"Instructor Dashboard"
					   }
					}
				},
				"GPE":{
					"settings":{
					   "moduletitle":{
						  "en-US":"GPE Admin Dashboard",
						  "en-UK":"GPE Admin Dashboard",
						  "de-DE":"GPE Admin Dashboard",
						  "ko-KR":"GPE Admin Dashboard",
						  "fr-FR":"GPE Admin Dashboard",
						  "sv-SE":"GPE Admin Dashboard",
						  "es-ES":"GPE Admin Dashboard",
						  "pt-BR":"GPE Admin Dashboard",
						  "zh-CN":"GPE Admin Dashboard",
						  "es-MX":"GPE Admin Dashboard",
						  "zh-Hant":"GPE Admin Dashboard",
						  "nl-NL":"GPE Admin Dashboard",
						  "it-IT":"GPE Admin Dashboard",
						  "ja-JP":"GPE Admin Dashboard"
					   }
					}
				 }
			  }
		   },
		   "LINKS":{
			  "LEARNER_HOME":{
				 "TITLE":{
					"en-US":"Learner Home",
					"en-UK":"Learner Home",
					"de-DE":"Learner Home",
					"es-ES":"Página de inicio del alumno",
					"fr-FR":"Accueil des apprenants",
					"ja-JP":"学習者ホーム",
					"nl-NL":"Thuis leren",
					"it-IT":"Casa dello studente",
					"sv-SE":"Hem för elever",
					"zh-CN":"学习者之家",
					"pt-BR":"Página inicial do aluno",
					"ko-KR":"Learner Home",
					"zh-Hant":"Learner Home",
					"es-MX":"Página de inicio del alumno"
				 },
				 "URL":"/ui/lms-learner-home/home",
				 "ICON":"svg/Learning-37.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "COMMUNITIES":{
				 "TITLE":{
					"en-US":"Communities",
					"en-UK":"Communities",
					"de-DE":"Gemeinden",
					"es-ES":"Comunidades",
					"it-IT":"Comunità",
					"zh-CN":"社区",
					"ja-JP":"地域社会",
					"fr-FR":"Communautés",
					"nl-NL":"Gemeenschappen",
					"sv-SE":"Gemenskaper",
					"pt-BR":"Comunidades",
					"es-MX":"Comunidades",
					"ko-KR":"Communities",
					"zh-Hant":"Communities"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/Communities",
				 "ICON":"svg/Comm-16.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "LEARNER_SEARCH":{
				 "TITLE":{
					"en-US":"Learner Search",
					"en-UK":"Learner Search",
					"de-DE":"Suche nach Lernenden",
					"es-ES":"Búsqueda de alumnos",
					"fr-FR":"Recherche d'apprenants",
					"it-IT":"Ricerca studenti",
					"ja-JP":"学習者検索",
					"nl-NL":"Leerling Zoeken",
					"sv-SE":"Sökning av inlärare",
					"zh-CN":"学习者搜索",
					"pt-BR":"Busca de alunos",
					"es-MX":"Búsqueda de alumnos",
					"ko-KR":"Learner Search",
					"zh-Hant":"Learner Search"
				 },
				 "URL":"/ui/lms-learner-search/search?pageNumber=1",
				 "ICON":"svg/Perf-11.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "TRAINING_HISTORY":{
				 "TITLE":{
					"en-US":"Training history",
					"en-UK":"Training history",
					"de-DE":"Geschichte der Ausbildung",
					"es-ES":"Historial de formación",
					"it-IT":"Storia della formazione",
					"sv-SE":"Utbildningens historia",
					"ja-JP":"トレーニング履歴",
					"nl-NL":"Opleidingsgeschiedenis",
					"fr-FR":"Historique de la formation",
					"zh-CN":"培训历史",
					"ko-KR":"Training history",
					"pt-BR":"Histórico de treinamento",
					"es-MX":"Historial de formación",
					"zh-Hant":"Training history"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&preSelectedCategoryId=3",
				 "ICON":"svg/Learnin-36.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "PLAYLISTS":{
				 "TITLE":{
					"en-US":"Playlists",
					"en-UK":"Playlists",
					"de-DE":"Wiedergabelisten",
					"es-ES":"Listas de reproducción",
					"nl-NL":"Afspeellijsten",
					"it-IT":"Playlist",
					"ja-JP":"プレイリスト",
					"fr-FR":"Listes de lecture",
					"zh-CN":"播放列表",
					"sv-SE":"Spellistor",
					"ko-KR":"Playlists",
					"pt-BR":"Listas de reprodução",
					"zh-Hant":"Playlists",
					"es-MX":"Listas de reproducción"
				 },
				 "URL":"/ui/lms-learner-playlist/UsersPlaylists",
				 "ICON":"svg/Learning-19.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "LEADERBOARD":{
				 "TITLE":{
					"en-US":"Leaderboard",
					"en-UK":"Leaderboard",
					"de-DE":"Rangliste",
					"es-ES":"Tabla de clasificación",
					"ko-KR":"Leaderboard",
					"nl-NL":"Leaderboard",
					"fr-FR":"Tableau des leaders",
					"it-IT":"Classifica",
					"ja-JP":"リーダーボード",
					"zh-CN":"排行榜",
					"sv-SE":"Ledartavla",
					"pt-BR":"Leaderboard",
					"es-MX":"Tabla de clasificación",
					"zh-Hant":"Leaderboard"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/Leaderboard&TargetUser=${csUser}",
				 "ICON":"svg/Awards-45.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "SURVEYS":{
				 "TITLE":{
					"en-US":"Surveys",
					"en-UK":"Surveys",
					"de-DE":"Erhebungen",
					"nl-NL":"Enquêtes",
					"ja-JP":"アンケート調査",
					"it-IT":"Sondaggi",
					"fr-FR":"Enquêtes",
					"ko-KR":"Surveys",
					"pt-BR":"Pesquisas",
					"zh-Hant":"Surveys",
					"zh-CN":"调查",
					"es-ES":"Encuestas",
					"sv-SE":"Undersökningar",
					"es-MX":"Encuestas"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=16&sort=0",
				 "ICON":"svg/Social-18.svg",
				 "CS":2,
				 "MODULE":[
					"EPM",
					"CAR"
				 ]
			  },
			  "ACTIONS":{
				 "TITLE":{
					"en-US":"Actions",
					"en-UK":"Actions",
					"de-DE":"Aktionen",
					"es-ES":"Acciones",
					"fr-FR":"Actions",
					"it-IT":"Azioni",
					"ja-JP":"アクション",
					"nl-NL":"Acties",
					"sv-SE":"Åtgärder",
					"zh-CN":"行动",
					"es-MX":"Acciones",
					"ko-KR":"Actions",
					"zh-Hant":"Actions",
					"pt-BR":"Ações"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Actions",
				 "ICON":"svg/Awards-23.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "FEEDBACK":{
				 "TITLE":{
					"en-US":"Feedback",
					"en-UK":"Feedback",
					"de-DE":"Rückmeldung",
					"fr-FR":"Commentaires",
					"es-ES":"Comentarios",
					"pt-BR":"Feedback",
					"ko-KR":"Feedback",
					"zh-Hant":"Feedback",
					"ja-JP":"フィードバック",
					"it-IT":"Feedback",
					"sv-SE":"Feedback",
					"es-MX":"Comentarios",
					"nl-NL":"Feedback",
					"zh-CN":"反馈信息"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Feedback",
				 "ICON":"svg/Comm-29.svg",
				 "CS":2,
				 "MODULE":[
					"EPM",
					"CAR"
				 ]
			  },
			  "PERF_REVIEWS":{
				 "TITLE":{
					"en-US":"Performance Reviews",
					"en-UK":"Performance Reviews",
					"de-DE":"Leistungsüberprüfungen",
					"ja-JP":"パフォーマンスレビュー",
					"nl-NL":"Prestatiebeoordelingen",
					"sv-SE":"Prestationsbedömningar",
					"zh-CN":"业绩回顾",
					"pt-BR":"Avaliações de desempenho",
					"es-ES":"Revisiones de rendimiento",
					"it-IT":"Recensioni sulle prestazioni",
					"es-MX":"Revisiones de rendimiento",
					"ko-KR":"Performance Reviews",
					"zh-Hant":"Performance Reviews",
					"fr-FR":"Examens des performances"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=6&sort=0",
				 "ICON":"svg/Team-4.svg",
				 "CS":2,
				 "MODULE":[
					"EPM"
				 ]
			  },
			  "CHECKINS":{
				 "TITLE":{
					"en-US":"Check Ins",
					"en-UK":"Check Ins",
					"de-DE":"Kontrolle",
					"zh-CN":"签到",
					"sv-SE":"Incheckning",
					"fr-FR":"Vérifier les entrées",
					"ja-JP":"チェックイン",
					"es-ES":"Comprobación de entradas",
					"it-IT":"Check Ins",
					"ko-KR":"Check Ins",
					"es-MX":"Comprobación de entradas",
					"zh-Hant":"Check Ins",
					"nl-NL":"Inchecken",
					"pt-BR":"Verifique Ins"
				 },
				 "URL":"/ui/perf-check-ins/Check-Ins/",
				 "ICON":"svg/Comm-7.svg",
				 "CS":2,
				 "MODULE":[
					"EPM",
					"CAR"
				 ]
			  },
			  "CHECKLISTS":{
				 "TITLE":{
					"en-US":"Checklists",
					"en-UK":"Checklists",
					"de-DE":"Checklisten",
					"es-ES":"Listas de control",
					"nl-NL":"Checklists",
					"zh-CN":"检查表",
					"it-IT":"Liste di controllo",
					"pt-BR":"Listas de verificação",
					"sv-SE":"Checklistor",
					"es-MX":"Listas de control",
					"ja-JP":"チェックリスト",
					"ko-KR":"Checklists",
					"fr-FR":"Listes de contrôle",
					"zh-Hant":"Checklists"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=14",
				 "ICON":"svg/Perf-35.svg",
				 "CS":2,
				 "MODULE":[
					"EPM",
					"CAR",
					"LMS"
				 ]
			  },
			  "MYCHECKLISTS":{
				 "TITLE":{
					"en-US":"My Checklists",
					"en-UK":"My Checklists",
					"de-DE":"-",
					"es-ES":"-",
					"nl-NL":"-",
					"zh-CN":"-",
					"it-IT":"-",
					"pt-BR":"-",
					"sv-SE":"Mina Checklistor",
					"es-MX":"-",
					"ja-JP":"-",
					"ko-KR":"-",
					"fr-FR":"-",
					"zh-Hant":"-"
				 },
				 "URL":"/EPM/POC/MyChecklist.aspx",
				 "ICON":"svg/Perf-35.svg",
				 "CS":2,
				 "MODULE":[
					"EPM",
					"CAR",
					"LMS"
				 ]
			  },
			  "SKILLSMATRIX":{
				 "TITLE":{
					"en-US":"Skills Matrix",
					"en-UK":"Skills Matrix",
					"de-DE":"Matrix der Fähigkeiten",
					"fr-FR":"Matrice des compétences",
					"es-ES":"Matriz de competencias",
					"nl-NL":"Matrix vaardigheden",
					"ja-JP":"スキルマトリックス",
					"pt-BR":"Matriz de Habilidades",
					"it-IT":"Matrice delle competenze",
					"ko-KR":"Skills Matrix",
					"es-MX":"Matriz de competencias",
					"zh-Hant":"Skills Matrix",
					"sv-SE":"Skills Matrix",
					"zh-CN":"技能矩阵"
				 },
				 "URL":"/EPM/SkillsMatrix/User/SkillsMatrixPage.aspx",
				 "ICON":"svg/Team-53.svg",
				 "CS":2,
				 "MODULE":[
					"EPM",
					"CAR"
				 ]
			  },
			  "REQREQUESTS":{
				 "TITLE":{
					"en-US":"Requisition Requests",
					"en-UK":"Requisition Requests",
					"de-DE":"Suchanfragen",
					"nl-NL":"Requisitie Verzoeken",
					"ja-JP":"要求事項",
					"pt-BR":"Pedidos de Requisição",
					"fr-FR":"Demandes de réquisition",
					"it-IT":"Richieste di fornitura",
					"es-ES":"Solicitudes de pedido",
					"es-MX":"Solicitudes de pedido",
					"ko-KR":"Requisition Requests",
					"sv-SE":"Begäranden om rekvisitioner",
					"zh-CN":"申购要求",
					"zh-Hant":"Requisition Requests"
				 },
				 "URL":"/ATS/JobRequisitionRequest/RequisitionRequests.aspx",
				 "ICON":"svg/Team-80.svg",
				 "CS":2,
				 "MODULE":[
					"ATS"
				 ]
			  },
			  "MANAGEREQ":{
				 "TITLE":{
					"en-US":"Manage Requisitions",
					"en-UK":"Manage Requisitions",
					"de-DE":"Manage Requisitions",
					"nl-NL":"Beheer Requisities",
					"zh-CN":"管理请购单",
					"sv-SE":"Hantera rekvisitioner",
					"pt-BR":"Gerenciar Requisições",
					"fr-FR":"Manage Requisitions",
					"es-ES":"Gestionar los pedidos",
					"ja-JP":"レシジョンの管理",
					"es-MX":"Gestionar los pedidos",
					"it-IT":"Gestire le richieste",
					"ko-KR":"Manage Requisitions",
					"zh-Hant":"Manage Requisitions"
				 },
				 "URL":"/phnx/driver.aspx?routename=ATS/RecruitingManagement/ManageRequisitions",
				 "ICON":"svg/Team-82.svg",
				 "CS":2,
				 "MODULE":[
					"ATS"
				 ]
			  },
			  "MANAGECANDIDATES":{
				 "TITLE":{
					"en-US":"Manage Candidates",
					"en-UK":"Manage Candidates",
					"de-DE":"Verwalten von Bewerbern",
					"nl-NL":"Kandidaten beheren",
					"fr-FR":"Gérer les candidats",
					"zh-CN":"管理候选人",
					"sv-SE":"Hantera kandidater",
					"es-ES":"Gestionar candidatos",
					"pt-BR":"Gerenciar candidatos",
					"ko-KR":"Manage Candidates",
					"zh-Hant":"Manage Candidates",
					"es-MX":"Gestionar candidatos",
					"it-IT":"Gestire i candidati",
					"ja-JP":"候補者の管理"
				 },
				 "URL":"/ui/ats-manage-candidates/managecandidates",
				 "ICON":"svg/Team-77.svg",
				 "CS":2,
				 "MODULE":[
					"ATS"
				 ]
			  },
			  "INTERVIEWS":{
				 "TITLE":{
					"en-US":"Interviews",
					"en-UK":"Interviews",
					"de-DE":"Interviews",
					"nl-NL":"Interviews",
					"ja-JP":"インタビュー",
					"it-IT":"Interviste",
					"ko-KR":"Interviews",
					"sv-SE":"Intervjuer",
					"es-ES":"Entrevistas",
					"pt-BR":"Entrevistas",
					"zh-CN":"访谈",
					"fr-FR":"Interviews",
					"zh-Hant":"Interviews",
					"es-MX":"Entrevistas"
				 },
				 "URL":"/ATS/Interview/ScheduledInterviews.aspx",
				 "ICON":"svg/Team-27.svg",
				 "CS":2,
				 "MODULE":[
					"ATS"
				 ]
			  },
			  "HIRINGDASHBOARD":{
				 "TITLE":{
					"en-US":"Hiring Dashboard",
					"en-UK":"Hiring Dashboard",
					"de-DE":"Dashboard für Einstellungen",
					"nl-NL":"Dashboard Aanwerving",
					"es-ES":"Panel de control de la contratación",
					"fr-FR":"Tableau de bord des recrutements",
					"zh-CN":"招聘仪表板",
					"pt-BR":"Contratação de Painel de Controle",
					"sv-SE":"Kontrollpanel för anställning",
					"es-MX":"Panel de control de la contratación",
					"ja-JP":"採用ダッシュボード",
					"ko-KR":"Hiring Dashboard",
					"zh-Hant":"Hiring Dashboard",
					"it-IT":"Cruscotto per le assunzioni"
				 },
				 "URL":"/phnx/driver.aspx?routename=ATS/Dashboard/HiringDashboard",
				 "ICON":"svg/Perf-25.svg",
				 "CS":2,
				 "MODULE":[
					"ATS"
				 ]
			  },
			  "GOALS":{
				 "TITLE":{
					"en-US":"Goals",
					"en-UK":"Goals",
					"de-DE":"Ziele",
					"nl-NL":"Goals",
					"fr-FR":"Objectifs",
					"es-ES":"Objetivos",
					"it-IT":"Obiettivi",
					"sv-SE":"Mål",
					"ja-JP":"目標",
					"pt-BR":"Objetivos",
					"ko-KR":"Goals",
					"es-MX":"Objetivos",
					"zh-CN":"目标",
					"zh-Hant":"Goals"
				 },
				 "URL":"/phnx/driver.aspx?routename=Goals/GoalList",
				 "ICON":"svg/Perf-24.svg",
				 "CS":2,
				 "MODULE":[
					"EPM"
				 ]
			  },
			  "TEAMGOALS":{
				"TITLE":{
				   "en-US":"Team Goals",
				   "en-UK":"Team Goals",
				   "de-DE":"Team Goals",
				   "nl-NL":"Team Goals",
				   "fr-FR":"Team Goals",
				   "es-ES":"Team Goals",
				   "it-IT":"Team Goals",
				   "sv-SE":"Team Goals",
				   "ja-JP":"Team Goals",
				   "pt-BR":"Team Goals",
				   "ko-KR":"Team Goals",
				   "es-MX":"Team Goals",
				   "zh-CN":"Team Goals",
				   "zh-Hant":"Team Goals"
				},
				"URL":"/phnx/driver.aspx?routename=Goals/TeamGoals",
				"ICON":"svg/Perf-3.svg",
				"CS":2,
				"MODULE":[
				   "EPM"
				]
			 },			  
			  "VIEWPEOPLE":{
				 "TITLE":{
					"en-US":"View People",
					"en-UK":"View People",
					"de-DE":"Menschen sehen",
					"es-ES":"Ver personas",
					"nl-NL":"Bekijk mensen",
					"ja-JP":"View People",
					"sv-SE":"Visa personer",
					"fr-FR":"Voir les personnes",
					"ko-KR":"View People",
					"pt-BR":"Ver Pessoas",
					"es-MX":"Ver personas",
					"it-IT":"Visualizza le persone",
					"zh-CN":"查看人员",
					"zh-Hant":"View People"
				 },
				 "URL":"/phnx/driver.aspx?routename=Analytics/ViewOrg",
				 "ICON":"svg/Team-48.svg",
				 "CS":2,
				 "MODULE":[
					"CHR"
				 ]
			  },
			  "VIEWDATA":{
				 "TITLE":{
					"en-US":"View Data",
					"en-UK":"View Data",
					"de-DE":"Daten anzeigen",
					"zh-CN":"查看数据",
					"sv-SE":"Visa data",
					"es-ES":"Ver datos",
					"it-IT":"Visualizza i dati",
					"ja-JP":"データを見る",
					"fr-FR":"Voir les données",
					"nl-NL":"Bekijk gegevens",
					"pt-BR":"Ver dados",
					"es-MX":"Ver datos",
					"ko-KR":"View Data",
					"zh-Hant":"View Data"
				 },
				 "URL":"/phnx/driver.aspx?routename=Analytics/ViewDiscover",
				 "ICON":"svg/Team-32.svg",
				 "CS":2,
				 "MODULE":[
					"CHR"
				 ]
			  },
			  "DASHBOARD":{
				 "TITLE":{
					"en-US":"Dashboards",
					"en-UK":"Dashboards",
					"de-DE":"Dashboards",
					"ko-KR":"Dashboards",
					"nl-NL":"Dashboards",
					"es-ES":"Cuadros de mando",
					"it-IT":"Cruscotti",
					"fr-FR":"Tableaux de bord",
					"ja-JP":"ダッシュボード",
					"pt-BR":"Painéis de controle",
					"zh-Hant":"Dashboards",
					"sv-SE":"Instrumentpaneler",
					"es-MX":"Cuadros de mando",
					"zh-CN":"仪表板"
				 },
				 "URL":"/Dashboard/Main.aspx",
				 "ICON":"svg/Charts-3.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "TALENTPOOLS":{
				 "TITLE":{
					"en-US":"Talent Pools",
					"en-UK":"Talent Pools",
					"de-DE":"Talentpools",
					"it-IT":"Pool di talenti",
					"ja-JP":"タレントプール",
					"sv-SE":"Talangpooler",
					"pt-BR":"Piscinas de Talentos",
					"zh-CN":"人才库",
					"nl-NL":"Talent Pools",
					"fr-FR":"Pools de talents",
					"es-ES":"Bolsa de talentos",
					"ko-KR":"Talent Pools",
					"zh-Hant":"Talent Pools",
					"es-MX":"Bolsa de talentos"
				 },
				 "URL":"/phnx/driver.aspx?routename=TalentPools/ManageTalentPools",
				 "ICON":"svg/Team-55.svg",
				 "CS":2,
				 "MODULE":[
					"EPM"
				 ]
			  },
			  "9BOXGRIDS":{
				 "TITLE":{
					"en-US":"9 Box Grid",
					"en-UK":"9 Box Grid",
					"de-DE":"9 Box Raster",
					"nl-NL":"9 Vak Rooster",
					"sv-SE":"9 rutnät för boxar",
					"zh-CN":"9个箱体网格",
					"fr-FR":"Grille de 9 boîtes",
					"it-IT":"9 Griglia di scatole",
					"ko-KR":"9 Box Grid",
					"pt-BR":"9 Grade de caixas",
					"zh-Hant":"9 Box Grid",
					"ja-JP":"9 ボックスグリッド",
					"es-ES":"9 Cuadrícula de la caja",
					"es-MX":"9 Cuadrícula de la caja"
				 },
				 "URL":"/EPM/Smp/User/CurrentGridPlacement.aspx",
				 "ICON":"svg/Team-72.svg",
				 "CS":2,
				 "MODULE":[
					"EPM"
				 ]
			  },
			  "ENGAGE":{
				 "TITLE":{
					"en-US":"Engage",
					"en-UK":"Engage",
					"de-DE":"Engagiere",
					"fr-FR":"Engage",
					"it-IT":"Impegnarsi",
					"zh-CN":"参与",
					"es-ES":"Involucrar a",
					"sv-SE":"Engagera",
					"nl-NL":"Engage",
					"ja-JP":"エンゲージ",
					"pt-BR":"Envolva",
					"es-MX":"Involucrar a",
					"ko-KR":"Engage",
					"zh-Hant":"Engage"
				 },
				 "URL":"/Engage/Reporting.aspx",
				 "ICON":"svg/Tech-1.svg",
				 "CS":2,
				 "MODULE":[
					"CHR"
				 ]
			  },
			  "EXPRESSCLASS":{
				 "TITLE":{
					"en-US":"Express Class",
					"en-UK":"Express Class",
					"de-DE":"Express-Klasse",
					"nl-NL":"Sneltrein klasse",
					"fr-FR":"Classe express",
					"it-IT":"Classe Express",
					"ja-JP":"エクスプレスクラス",
					"es-ES":"Clase Express",
					"ko-KR":"Express Class",
					"pt-BR":"Classe Express",
					"zh-CN":"快捷班",
					"sv-SE":"Expressklass",
					"zh-Hant":"Express Class",
					"es-MX":"Clase Express"
				 },
				 "URL":"/ui/lms-express-class/app/create/general-info",
				 "ICON":"svg/Eco-7.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "OJTOBS":{
				 "TITLE":{
					"en-US":"OJT Observation",
					"en-UK":"OJT Observation",
					"de-DE":"OJT Beobachtung",
					"es-ES":"Observación de OJT",
					"it-IT":"Osservazione OJT",
					"fr-FR":"Observation de la formation en cours d'emploi",
					"ja-JP":"OJT見学",
					"sv-SE":"OJT Observation",
					"pt-BR":"Observação OJT",
					"nl-NL":"OJT Observatie",
					"es-MX":"Observación de OJT",
					"zh-CN":"OJT观察",
					"ko-KR":"OJT Observation",
					"zh-Hant":"OJT Observation"
				 },
				 "URL":"/phnx/driver.aspx?routename=Learning/OnTheJobTraining/OJTObservers",
				 "ICON":"svg/Awards-12.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "ORGPLANNING":{
				 "TITLE":{
					"en-US":"Org. Planning",
					"en-UK":"Org. Planning",
					"de-DE":"Org. Planung",
					"sv-SE":"Org. Planning",
					"nl-NL":"Org. Planning",
					"fr-FR":"Org. Planification",
					"it-IT":"Org. Pianificazione",
					"ja-JP":"Org.企画",
					"es-ES":"Org. Planificación",
					"pt-BR":"Org. Planejamento",
					"zh-CN":"机关。规划",
					"ko-KR":"Org. Planning",
					"zh-Hant":"Org. Planning",
					"es-MX":"Org. Planificación"
				 },
				 "URL":"/pbom/index.aspx",
				 "ICON":"svg/Team-31.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "INSIGHTS":{
				 "TITLE":{
					"en-US":"Insights",
					"en-UK":"Insights",
					"de-DE":"Einblicke",
					"it-IT":"Approfondimenti",
					"nl-NL":"Inzichten",
					"sv-SE":"Insikter",
					"ja-JP":"インサイト",
					"es-ES":"Perspectivas",
					"zh-CN":"洞察力",
					"fr-FR":"Aperçus",
					"pt-BR":"Insights",
					"es-MX":"Perspectivas",
					"ko-KR":"Insights",
					"zh-Hant":"Insights"
				 },
				 "URL":"/insights/#/index?tab_page_id=-200159302",
				 "ICON":"svg/Charts-14.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "BENCHMARK":{
				 "TITLE":{
					"en-US":"Benchmark",
					"en-UK":"Benchmark",
					"de-DE":"Benchmark",
					"nl-NL":"Benchmark",
					"it-IT":"Benchmark",
					"zh-CN":"基准",
					"sv-SE":"Referensmärke",
					"pt-BR":"Benchmark",
					"ja-JP":"ベンチマーク",
					"es-ES":"Punto de referencia",
					"fr-FR":"Repère",
					"ko-KR":"Benchmark",
					"zh-Hant":"Benchmark",
					"es-MX":"Punto de referencia"
				 },
				 "URL":"/benchmark/#/benchmark-dashboard?tab_page_id=-200200000",
				 "ICON":"svg/Tech-2.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "CANDIDATESEARCH":{
				 "TITLE":{
					"en-US":"Candidate Search",
					"en-UK":"Candidate Search",
					"de-DE":"Kandidatensuche",
					"ko-KR":"Candidate Search",
					"nl-NL":"Kandidaten zoeken",
					"fr-FR":"Recherche de candidats",
					"it-IT":"Ricerca di candidati",
					"ja-JP":"候補者検索",
					"sv-SE":"Sökning av kandidater",
					"pt-BR":"Busca de candidatos",
					"zh-Hant":"Candidate Search",
					"zh-CN":"候选人搜索",
					"es-ES":"Búsqueda de candidatos",
					"es-MX":"Búsqueda de candidatos"
				 },
				 "URL":"/phnx/driver.aspx?routename=ATS/Search/CandidateSearch",
				 "ICON":"svg/Team-43.svg",
				 "CS":2,
				 "MODULE":[
					"ATS"
				 ]
			  },
			  "CATALOGMANAGEMENT":{
				 "TITLE":{
					"en-US":"Catalog Management",
					"en-UK":"Catalog Management",
					"de-DE":"Katalogverwaltung",
					"fr-FR":"Gestion du catalogue",
					"it-IT":"Gestione del catalogo",
					"es-ES":"Gestión de catálogos",
					"sv-SE":"Kataloghantering",
					"nl-NL":"Catalogusbeheer",
					"ko-KR":"Catalog Management",
					"es-MX":"Gestión de catálogos",
					"zh-CN":"目录管理",
					"pt-BR":"Gerenciamento do catálogo",
					"ja-JP":"カタログ管理",
					"zh-Hant":"Catalog Management"
				 },
				 "URL":"/phnx/driver.aspx?routename=Admin/Links&linkId=25",
				 "ICON":"svg/Tech-44.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "COMPETENCYTASK":{
				 "TITLE":{
					"en-US":"Competency Tasks",
					"en-UK":"Competency Tasks",
					"de-DE":"Kompetenz Aufgaben",
					"nl-NL":"Competentie Taken",
					"ja-JP":"コンピテンシータスク",
					"sv-SE":"Kompetensuppgifter",
					"it-IT":"Compiti di competenza",
					"zh-CN":"能力任务",
					"pt-BR":"Competência Tarefas",
					"es-ES":"Tareas de competencia",
					"ko-KR":"Competency Tasks",
					"fr-FR":"Tâches de compétence",
					"es-MX":"Tareas de competencia",
					"zh-Hant":"Competency Tasks"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Actions&filter=2",
				 "ICON":"svg/Perf-43.svg",
				 "CS":2,
				 "MODULE":[
					"EPM",
					"CAR"
				 ]
			  },
			  "EVENTS_SESSIONS":{
				 "TITLE":{
					"en-US":"Events",
					"en-UK":"Events",
					"de-DE":"Veranstaltungen",
					"fr-FR":"Événements",
					"nl-NL":"Evenementen",
					"es-ES":"Eventos",
					"it-IT":"Eventi",
					"pt-BR":"Eventos",
					"ja-JP":"イベント情報",
					"sv-SE":"Evenemang",
					"es-MX":"Eventos",
					"zh-CN":"活动",
					"ko-KR":"Events",
					"zh-Hant":"Events"
				 },
				 "URL":"/LMS/ILT/main_sessions.aspx",
				 "ICON":"svg/Team-44.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "REPORTBUILDER":{
				 "TITLE":{
					"en-US":"Report Builder",
					"en-UK":"Report Builder",
					"de-DE":"Bericht-Ersteller",
					"zh-CN":"报告生成器",
					"nl-NL":"Rapportenbouwer",
					"ja-JP":"レポートビルダー",
					"sv-SE":"Rapportkonstruktör",
					"it-IT":"Creatore di rapporti",
					"pt-BR":"Construtor de relatórios",
					"fr-FR":"Créateur de rapports",
					"es-ES":"Generador de informes",
					"es-MX":"Generador de informes",
					"ko-KR":"Report Builder",
					"zh-Hant":"Report Builder"
				 },
				 "URL":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000",
				 "ICON":"svg/Team-14.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "LAT":{
				 "TITLE":{
					"en-US":"Learning Assignments",
					"en-UK":"Learning Assignments",
					"de-DE":"Learning Assignments",
					"it-IT":"Compiti di apprendimento",
					"nl-NL":"Leeropdrachten",
					"fr-FR":"Missions d'apprentissage",
					"es-ES":"Tareas de aprendizaje",
					"ja-JP":"ラーニングアサインメント",
					"es-MX":"Tareas de aprendizaje",
					"pt-BR":"Tarefas de aprendizagem",
					"sv-SE":"Uppgifter för inlärning",
					"zh-CN":"学习任务",
					"ko-KR":"Learning Assignments",
					"zh-Hant":"Learning Assignments"
				 },
				 "URL":"/phnx/driver.aspx?routename=Learning/EnrollTraining/EnrollTrainingManagement",
				 "ICON":"svg/Tech-58.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "SNAPSHOT":{
				 "TITLE":{
					"en-US":"Snapshot",
					"en-UK":"Snapshot",
					"de-DE":"Schnappschuss",
					"sv-SE":"Snapshot",
					"nl-NL":"Momentopname",
					"it-IT":"Istantanea",
					"zh-CN":"快照",
					"pt-BR":"Snapshot",
					"ja-JP":"スナップショット",
					"fr-FR":"Instantané",
					"es-ES":"Instantánea",
					"es-MX":"Instantánea",
					"ko-KR":"Snapshot",
					"zh-Hant":"Snapshot"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot",
				 "ICON":"svg/Perf-33.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "MYSESSIONS":{
				 "TITLE":{
					"en-US":"My Sessions",
					"en-UK":"My Sessions",
					"de-DE":"Meine Sitzungen",
					"fr-FR":"Mes sessions",
					"nl-NL":"Mijn Sessies",
					"it-IT":"Le mie sessioni",
					"es-ES":"Mis sesiones",
					"zh-CN":"我的会议",
					"sv-SE":"Mina sessioner",
					"pt-BR":"Minhas sessões",
					"es-MX":"Mis sesiones",
					"ja-JP":"マイセッション",
					"ko-KR":"My Sessions",
					"zh-Hant":"My Sessions"
				 },
				 "URL":"/LMS/catalog/EventsCalendar.aspx?instructor=me",
				 "ICON":"svg/Tech-79.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "SKILLSPROFILE":{
				 "TITLE":{
					"en-US":"Skills Profile",
					"en-UK":"Skills Profile",
					"de-DE":"Qualifikationsprofil",
					"ja-JP":"スキルプロファイル",
					"nl-NL":"Vaardighedenprofiel",
					"zh-CN":"技能简介",
					"sv-SE":"Kompetensprofil",
					"it-IT":"Profilo delle competenze",
					"fr-FR":"Profil de compétences",
					"es-ES":"Perfil de competencias",
					"pt-BR":"Perfil de Habilidades",
					"es-MX":"Perfil de competencias",
					"ko-KR":"Skills Profile",
					"zh-Hant":"Skills Profile"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/SkillsProfile",
				 "ICON":"svg/Perf-46.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "FORMS":{
				 "TITLE":{
					"en-US":"Forms",
					"en-UK":"Forms",
					"de-DE":"Formulare",
					"fr-FR":"Formulaires",
					"zh-CN":"表格",
					"ja-JP":"フォーム",
					"es-ES":"Formularios",
					"it-IT":"Moduli",
					"nl-NL":"Formulieren",
					"pt-BR":"Formulários",
					"sv-SE":"Blanketter",
					"ko-KR":"Forms",
					"es-MX":"Formularios",
					"zh-Hant":"Forms"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/UniversalProfile/Bio&gpeForms=1",
				 "ICON":"svg/Awards-9.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "ORGCHART":{
				 "TITLE":{
					"en-US":"Org Chart",
					"en-UK":"Org Chart",
					"de-DE":"Organigramm",
					"nl-NL":"Organigram",
					"fr-FR":"Organigramme",
					"es-ES":"Organigrama",
					"it-IT":"Organigramma",
					"zh-CN":"组织结构图",
					"ko-KR":"Org Chart",
					"sv-SE":"Org diagram",
					"pt-BR":"Organograma",
					"ja-JP":"組織図",
					"zh-Hant":"Org Chart",
					"es-MX":"Organigrama"
				 },
				 "URL":"/phnx/driver.aspx?routename=Organization/OrgChart",
				 "ICON":"svg/Team-58.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "LIVEFEED":{
				 "TITLE":{
					"en-US":"Live Feed",
					"en-UK":"Live Feed",
					"de-DE":"Live-Übertragung",
					"nl-NL":"Live beelden",
					"ja-JP":"ライブ配信",
					"sv-SE":"Direktsändning",
					"pt-BR":"Alimentação ao vivo",
					"zh-CN":"现场播报",
					"ko-KR":"Live Feed",
					"it-IT":"Alimentazione in diretta",
					"fr-FR":"Flux en direct",
					"es-ES":"Alimentación en directo",
					"zh-Hant":"Live Feed",
					"es-MX":"Alimentación en directo"
				 },
				 "URL":"/phnx/driver.aspx?routename=Social/Connect/LiveFeed",
				 "ICON":"svg/Comm-24.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "REPORTS":{
				 "TITLE":{
					"en-US":"Reports",
					"en-UK":"Reports",
					"de-DE":"Berichte",
					"ja-JP":"レポート",
					"fr-FR":"Rapports",
					"es-ES":"Informes",
					"nl-NL":"Verslagen",
					"sv-SE":"Rapporter",
					"pt-BR":"Relatórios",
					"zh-CN":"报告",
					"ko-KR":"Reports",
					"it-IT":"Rapporti",
					"zh-Hant":"Reports",
					"es-MX":"Informes"
				 },
				 "URL":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/SharedWithMe",
				 "ICON":"svg/Charts-9.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  },
			  "LEARNER_ADMIN":{
				 "TITLE":{
					"en-US":"Learner Console",
					"en-UK":"Learner Console",
					"de-DE":"Lerner-Konsole",
					"ja-JP":"学習者用コンソール",
					"sv-SE":"Konsol för inlärare",
					"pt-BR":"Console para alunos",
					"ko-KR":"Learner Console",
					"nl-NL":"Console voor lerenden",
					"zh-CN":"学习者控制台",
					"zh-Hant":"Learner Console",
					"fr-FR":"Console de l'apprenant",
					"it-IT":"Console dell'allievo",
					"es-ES":"Consola de aprendizaje",
					"es-MX":"Consola de aprendizaje"
				 },
				 "URL":"/phnx/driver.aspx?routename=Learning/AdminConsole",
				 "ICON":"svg/Tech-42.svg",
				 "CS":2,
				 "MODULE":[
					"LMS"
				 ]
			  },
			  "CAREER_SITE":{
				 "TITLE":{
					"en-US":"Career Site",
					"en-UK":"Career Site",
					"de-DE":"Karriere-Website",
					"es-ES":"Sitio de la carrera",
					"zh-CN":"职业网站",
					"ko-KR":"Career Site",
					"nl-NL":"Carrièresite",
					"zh-Hant":"Career Site",
					"ja-JP":"キャリアサイト",
					"sv-SE":"Webbplats för karriär",
					"pt-BR":"Site de Carreira",
					"it-IT":"Sito della carriera",
					"fr-FR":"Site des carrières",
					"es-MX":"Sitio de la carrera"
				 },
				 "URL":"/ui/internal-career-site/app/search-jobs",
				 "ICON":"svg/Perf-17.svg",
				 "CS":2,
				 "MODULE":[
					"ATS"
				 ]
			  },
			  "USERADMIN":{
				 "TITLE":{
					"en-US":"User Admin",
					"en-UK":"User Admin",
					"de-DE":"User Admin",
					"fr-FR":"Admin utilisateur",
					"it-IT":"Utente Admin",
					"nl-NL":"Gebruiker Admin",
					"ja-JP":"ユーザー管理者",
					"sv-SE":"Användaradministratör",
					"pt-BR":"Administração do usuário",
					"ko-KR":"User Admin",
					"es-ES":"Administrador de usuarios",
					"zh-Hant":"User Admin",
					"es-MX":"Administrador de usuarios",
					"zh-CN":"用户管理"
				 },
				 "URL":"/admin/Users.aspx",
				 "ICON":"svg/Perf-32.svg",
				 "CS":2,
				 "MODULE":[
					"CORE"
				 ]
			  }
		   },
		   "W":{			
			  "EPM-DEVPLAN_PROGRESS":{
				 "width":12,
				 "targetdiv":"EPM-DEVPLAN_PROGRESS",
				 "skeletoncss":"skeleton-circle",
				 "url":"/phnx/driver.aspx?routename=Social/UniversalProfile/Snapshot/DevPlanNew",
				 "title":{
					"en-US":"Devplan Progress",
					"en-UK":"Devplan Progress",
					"de-DE":"Devplan Fortschritt",
					"es-ES":"Progreso del plan de desarrollo",
					"fr-FR":"Avancement du plan de développement",
					"it-IT":"Stato di avanzamento del piano di sviluppo",
					"nl-NL":"Devplan Vooruitgang",
					"ja-JP":"デブプラン・プログレス",
					"sv-SE":"Framsteg i Devplan",
					"pt-BR":"Progresso do Devplan",
					"zh-CN":"发展计划的进展",
					"es-MX":"Progreso del plan de desarrollo",
					"ko-KR":"Devplan Progress",
					"zh-Hant":"Devplan Progress"
				 },
				 "nocontenttitle":{
					"en-US" : "Create a new plan!",
					"en-UK" : "Create a new plan!",
					"ko-KR" : "Create a new plan!",
					"fr-FR" : "Créez un nouveau plan !",
					"zh-CN" : "创建一个新的计划!",
					"nl-NL" : "Maak een nieuw plan!",
					"zh-Hant" : "Create a new plan!",
					"de-DE" : "Erstellen Sie einen neuen Plan!",
					"sv-SE" : "Skapa en ny plan!",
					"es-ES" : "Crea un nuevo plan.",
					"pt-BR" : "Crie um novo plano!",
					"ja-JP" : "新しいプランを作ろう",
					"it-IT" : "Create un nuovo piano!",
					"es-MX" : "Crea un nuevo plan."
				 },
				 "getstartedurl":"/ui/devplans/blueprints/add",
				 "module":[
					"EPM",
					"CAR"
				 ]
			  },
			  "PORTALDETAILS":{
				"width":12,
				"targetdiv":"PORTALDETAILS",
				"skeletoncss":"skeleton-list",
				"url":"#",
				"title":{
				   "en-US":"Portal Details",
				   "en-UK":"Portal Details",
				   "de-DE":"Portal Details",
				   "sv-SE":"Portal Details",
				   "nl-NL":"Portal Details",
				   "ja-JP":"Portal Details",
				   "fr-FR":"Portal Details",
				   "es-ES":"Portal Details",
				   "pt-BR":"Portal Details",
				   "ko-KR":"Portal Details",
				   "es-MX":"Portal Details",
				   "zh-CN":"Portal Details",
				   "zh-Hant":"Portal Details",
				   "it-IT":"Portal Details"
				},
				"nocontenttitle":{
				   "en-US" : "",
				   "en-UK" : "",
				   "ko-KR" : "",
				   "nl-NL" : "",
				   "sv-SE" : "",
				   "de-DE" : "",
				   "fr-FR" : "",
				   "zh-Hant" : "",
				   "ja-JP" : "",
				   "zh-CN" : "",
				   "it-IT" : "",
				   "es-ES" : "",
				   "es-MX" : "",
				   "pt-BR" : "",
				},
				"getstartedurl":"#",
				"module":["CORE"]
			 },			  
			  "EPM-GOAL_PROGRESS":{
				 "width":12,
				 "targetdiv":"EPM-GOAL_PROGRESS",
				 "skeletoncss":"skeleton-circle",
				 "url":"/phnx/driver.aspx?routename=Goals/GoalList",
				 "title":{
					"en-US":"Goal Progress",
					"en-UK":"Goal Progress",
					"de-DE":"Ziel Fortschritt",
					"sv-SE":"Framsteg i fråga om mål",
					"nl-NL":"Doel Vooruitgang",
					"ja-JP":"目標進捗状況",
					"fr-FR":"Progression des objectifs",
					"es-ES":"Progreso de la meta",
					"pt-BR":"Progresso da Meta",
					"ko-KR":"Goal Progress",
					"es-MX":"Progreso de la meta",
					"zh-CN":"目标进展",
					"zh-Hant":"Goal Progress",
					"it-IT":"Progressi dell'obiettivo"
				 },
				 "nocontenttitle":{
					"en-US":"Create goals!",
					"en-UK":"Create objectives!",
					"ko-KR" : "Create goals!",
					"nl-NL" : "Maak doelen!",
					"sv-SE" : "Skapa mål!",
					"de-DE" : "Schaffen Sie Ziele!",
					"fr-FR" : "Créez des objectifs !",
					"zh-Hant" : "Create goals!",
					"ja-JP" : "目標を作ろう",
					"zh-CN" : "创造目标!",
					"it-IT" : "Creare obiettivi!",
					"es-ES" : "¡Crear objetivos!",
					"es-MX" : "¡Crear objetivos!",
					"pt-BR" : "Criar objetivos!"
				 },
				 "getstartedurl":"/phnx/driver.aspx?routename=Goals/GoalEdit",
				 "module":[
					"EPM",
					"CAR"
				 ]
			  },
			  "EPM-CHECKINS":{
				 "width":12,
				 "targetdiv":"EPM-CHECKINS",
				 "skeletoncss":"skeleton-list",
				 "url":"/ui/perf-check-ins/Check-Ins",
				 "title":{
					"en-US":"Check ins",
					"en-UK":"Check ins",
					"de-DE":"Einchecken",
					"nl-NL":"Check ins",
					"it-IT":"Controlli",
					"ja-JP":"チェックイン",
					"sv-SE":"Incheckningar",
					"zh-CN":"签到",
					"pt-BR":"Verificar ins",
					"fr-FR":"Vérifier les entrées",
					"ko-KR":"Check ins",
					"zh-Hant":"Check ins",
					"es-ES":"Registros de entrada",
					"es-MX":"Registros de entrada"
				 },
				 "nocontenttitle":{
					"en-US":"Get Started!",
					"en-UK":"Get Started!",
					"de-DE" : "Fangen Sie an!",
					"it-IT" : "Iniziate!",
					"ko-KR" : "Get Started!",
					"nl-NL" : "Aan de slag!",
					"ja-JP" : "スタート!",
					"sv-SE" : "Kom igång!",
					"es-ES" : "Empezar a trabajar",
					"zh-CN" : "开始吧!",
					"fr-FR" : "Commencez !",
					"zh-Hant" : "Get Started!",
					"es-MX" : "Empezar a trabajar",
					"pt-BR" : "Comece!"
				 },
				 "getstartedurl":"/ui/perf-check-ins/Check-Ins/create/select-participant",
				 "module":[
					"EPM",
					"CAR"
				 ]
			  },
			  "LMS-INSPIRED_BY_SUBJECTS":{
				 "width":12,
				 "targetdiv":"LMS-INSPIRED_BY_SUBJECTS",
				 "skeletoncss":"skeleton-rect",
				 "url":"/ui/lms-learner-home/home",
				 "title":{
					"en-US":"Inspired by your Subjects",
					"en-UK":"Inspired by your Subjects",
					"de-DE":"Inspiriert durch Ihre Fächer",
					"zh-CN":"从你的课题中得到启发",
					"es-ES":"Inspirado por sus temas",
					"it-IT":"Ispirati dai vostri soggetti",
					"fr-FR":"Inspiré par vos sujets",
					"es-MX":"Inspirado por sus temas",
					"nl-NL":"Geïnspireerd door uw onderwerpen",
					"ko-KR":"Inspired by your Subjects",
					"ja-JP":"被写体からインスピレーションを受ける",
					"sv-SE":"Inspireras av dina ämnen",
					"pt-BR":"Inspirado por seus Assuntos",
					"zh-Hant":"Inspired by your Subjects"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"LMS"
				 ]
			  },
			  "LMS-TRAINING_METRICS":{
				 "width":12,
				 "targetdiv":"LMS-TRAINING_METRICS",
				 "skeletoncss":"skeleton-rect",
				 "url":"/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript&TargetUser=${csUser}",
				 "title":{
					"en-US":"Transcript Overview",
					"en-UK":"Transcript Overview",
					"de-DE":"Transkript-Übersicht",
					"nl-NL":"Transcript Overzicht",
					"fr-FR":"Aperçu de la transcription",
					"it-IT":"Panoramica della trascrizione",
					"sv-SE":"Översikt över transkript",
					"pt-BR":"Transcrição geral",
					"ko-KR":"Transcript Overview",
					"es-ES":"Resumen de la transcripción",
					"ja-JP":"トランスクリプトの概要",
					"zh-CN":"文字稿概述",
					"zh-Hant":"Transcript Overview",
					"es-MX":"Resumen de la transcripción"
				 },
				 "pastdueDesc":{
					"en-US":"Past Due Trainings",
					"en-UK":"Past Due Trainings",
					"de-DE" : "Überfällige Schulungen",
					"es-ES" : "Formaciones atrasadas",
					"ko-KR" : "Past Due Trainings",
					"pt-BR" : "Treinamentos Passados",
					"nl-NL" : "Verlopen opleidingen",
					"fr-FR" : "Formations en retard",
					"zh-CN" : "逾期的培训",
					"zh-Hant" : "Past Due Trainings",
					"it-IT" : "Corsi di formazione scaduti",
					"ja-JP" : "期限切れのトレーニング",
					"es-MX" : "Formaciones atrasadas",
					"sv-SE" : "Förfallna utbildningar"
				 },
				 "dueSoonDesc":{
					"en-US":"Trainings Due Soon",
					"en-UK":"Trainings Due Soon",
					"it-IT" : "Formazione prevista a breve",
					"sv-SE" : "Utbildningar snart",
					"de-DE" : "Bald fällige Schulungen",
					"pt-BR" : "Treinamentos previstos em breve",
					"fr-FR" : "Formations à venir",
					"nl-NL" : "Trainingen binnenkort",
					"es-ES" : "Próximos cursos de formación",
					"ja-JP" : "トレーニングは近日中に",
					"ko-KR" : "Trainings Due Soon",
					"zh-Hant" : "Trainings Due Soon",
					"es-MX" : "Próximos cursos de formación",
					"zh-CN" : "培训即将到期"
				 },
				 "assignedNoDueDateDesc":{
					"en-US":"Training Assigned / No Due Date",
					"en-UK":"Training Assigned / No Due Date",
					"ko-KR" : "Training Assigned / No Due Date",
					"zh-CN" : "指定培训/无到期日期",
					"zh-Hant" : "Training Assigned / No Due Date",
					"es-ES" : "Formación asignada / Sin fecha de vencimiento",
					"de-DE" : "Training zugewiesen / kein Fälligkeitsdatum",
					"fr-FR" : "Formation assignée / Pas de date limite",
					"pt-BR" : "Treinamento Designado / Sem Data de Vencimento",
					"sv-SE" : "Utbildning tilldelad / ingen förfallodag",
					"ja-JP" : "トレーニングの割り当て / 期限なし",
					"nl-NL" : "Opleiding Toegewezen / Geen Vervaldatum",
					"it-IT" : "Formazione assegnata / Nessuna data di scadenza",
					"es-MX" : "Formación asignada / Sin fecha de vencimiento"
				 },
				 "playlists":{
					"createdDesc":{
					   "en-US":"Playlists created",
					   "en-UK":"Playlists created",
					   "de-DE" : "Erstellte Wiedergabelisten",
					   "ko-KR" : "Playlists created",
					   "zh-CN" : "创建的播放列表",
					   "sv-SE" : "Skapade spellistor",
					   "pt-BR" : "Listas de reprodução criadas",
					   "fr-FR" : "Listes de lecture créées",
					   "nl-NL" : "Afspeellijsten gemaakt",
					   "es-ES" : "Listas de reproducción creadas",
					   "it-IT" : "Playlist create",
					   "zh-Hant" : "Playlists created",
					   "es-MX" : "Listas de reproducción creadas",
					   "ja-JP" : "プレイリストの作成"
					},
					"followersDesc":{
					   "en-US":"Playlist followers",
					   "en-UK":"Playlist followers",
					   "de-DE" : "Anhänger der Wiedergabeliste",
					   "ko-KR" : "Playlist followers",
					   "nl-NL" : "Playlist volgers",
					   "es-ES" : "Seguidores de la lista de reproducción",
					   "sv-SE" : "Följare av spellistor",
					   "fr-FR" : "Suiveurs de listes de lecture",
					   "zh-Hant" : "Playlist followers",
					   "it-IT" : "Seguaci della playlist",
					   "ja-JP" : "プレイリストのフォロワー",
					   "zh-CN" : "播放列表的追随者",
					   "es-MX" : "Seguidores de la lista de reproducción",
					   "pt-BR" : "Seguidores da Playlist"
					},
					"followedDesc":{
					   "en-US":"Playlists followed",
					   "en-UK":"Playlists followed",
					   "es-ES" : "Listas de reproducción seguidas",
					   "de-DE" : "Verfolgte Wiedergabelisten",
					   "nl-NL" : "Afspeellijsten gevolgd",
					   "pt-BR" : "Listas de reprodução seguidas",
					   "ko-KR" : "Playlists followed",
					   "it-IT" : "Playlist seguite",
					   "zh-Hant" : "Playlists followed",
					   "sv-SE" : "Spellistor som följs",
					   "fr-FR" : "Listes de lecture suivies",
					   "es-MX" : "Listas de reproducción seguidas",
					   "ja-JP" : "フォローしたプレイリスト",
					   "zh-CN" : "遵循的播放列表"
					}
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"LMS"
				 ]
			  },
			  "LMS-TRENDING_FOR_JOB":{
				 "width":12,
				 "targetdiv":"LMS-TRENDING_FOR_JOB",
				 "skeletoncss":"skeleton-rect",
				 "url":"/ui/lms-learner-home/home",
				 "title":{
					"en-US":"Trending for your job",
					"en-UK":"Trending for your job",
					"de-DE":"Trending für Ihren Job",
					"it-IT":"Trending per il tuo lavoro",
					"ja-JP":"仕事のトレンド",
					"fr-FR":"Tendance pour votre emploi",
					"es-ES":"Tendencias para su trabajo",
					"ko-KR":"Trending for your job",
					"nl-NL":"Trending voor uw baan",
					"es-MX":"Tendencias para su trabajo",
					"zh-CN":"你的工作的趋势",
					"sv-SE":"Trender för ditt jobb",
					"pt-BR":"Tendência para seu trabalho",
					"zh-Hant":"Trending for your job"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"LMS"
				 ]
			  },
			  "LMS-TOP_PICKS":{
				 "width":12,
				 "targetdiv":"LMS-TOP_PICKS",
				 "skeletoncss":"skeleton-rect",
				 "url":"/ui/lms-learner-home/home",
				 "title":{
					"en-US":"Your top picks",
					"en-UK":"Your top picks",
					"de-DE":"Ihre Top-Auswahl",
					"fr-FR":"Vos meilleurs choix",
					"it-IT":"Le vostre scelte migliori",
					"es-ES":"Sus mejores elecciones",
					"ja-JP":"あなたのイチオシ",
					"pt-BR":"Suas melhores escolhas",
					"ko-KR":"Your top picks",
					"sv-SE":"Dina bästa val",
					"es-MX":"Sus mejores elecciones",
					"nl-NL":"Uw topkeuzes",
					"zh-CN":"您的最佳选择",
					"zh-Hant":"Your top picks"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"LMS"
				 ]
			  },
			  "LMS-ASSIGNED_TRAINING":{
				 "width":12,
				 "targetdiv":"LMS-ASSIGNED_TRAINING",
				 "skeletoncss":"skeleton-rect",
				 "url":"/phnx/driver.aspx?routename=Social/UniversalProfile/Transcript",
				 "title":{
					"en-US":"Assigned Training",
					"en-UK":"Assigned Training",
					"de-DE":"Zugewiesene Ausbildung",
					"fr-FR":"Formation assignée",
					"nl-NL":"Toegewezen Opleiding",
					"ja-JP":"担当トレーニング",
					"it-IT":"Formazione assegnata",
					"es-ES":"Formación asignada",
					"es-MX":"Formación asignada",
					"pt-BR":"Treinamento Designado",
					"zh-CN":"指定培训",
					"sv-SE":"Tilldelad utbildning",
					"ko-KR":"Assigned Training",
					"zh-Hant":"Assigned Training"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"LMS"
				 ]
			  },
			  "LMS-NEW_TRAININGS":{
				 "width":12,
				 "targetdiv":"LMS-NEW_TRAININGS",
				 "skeletoncss":"skeleton-rect",
				 "url":"/ui/lms-learner-home/home",
				 "title":{
					"en-US":"New",
					"en-UK":"New",
					"de-DE":"Neu",
					"it-IT":"Nuovo",
					"ja-JP":"新規",
					"es-ES":"Nuevo",
					"pt-BR":"Novo",
					"sv-SE":"Ny",
					"fr-FR":"Nouveau",
					"zh-CN":"新的",
					"ko-KR":"New",
					"nl-NL":"Nieuw",
					"zh-Hant":"New",
					"es-MX":"Nuevo"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"LMS"
				 ]
			  },
			  "ATS-TOTALCANDIDATES":{
				 "width":12,
				 "targetdiv":"ATS-TOTALCANDIDATES",
				 "skeletoncss":"skeleton-rect",
				 "url":"/ui/ats-manage-candidates/managecandidates",
				 "title":{
					"en-US":"Total Candidates",
					"en-UK":"Total Candidates",
					"de-DE":"Kandidaten insgesamt",
					"it-IT":"Totale candidati",
					"fr-FR":"Total des candidats",
					"nl-NL":"Totaal Kandidaten",
					"ja-JP":"候補者総数",
					"pt-BR":"Total de Candidatos",
					"sv-SE":"Totalt antal kandidater",
					"ko-KR":"Total Candidates",
					"zh-CN":"候选人总数",
					"es-ES":"Total de candidatos",
					"zh-Hant":"Total Candidates",
					"es-MX":"Total de candidatos"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"ATS"
				 ]
			  },
			  "ATS-NEWSUBMISSIONS":{
				 "width":12,
				 "targetdiv":"ATS-NEWSUBMISSIONS",
				 "skeletoncss":"skeleton-rect",
				 "url":"/ui/ats-manage-candidates/managecandidates?pageSize=20&statusCategories=-1",
				 "title":{
					"en-US":"New Submissions",
					"en-UK":"New Submissions",
					"de-DE":"Neue Einreichungen",
					"nl-NL":"Nieuwe inzendingen",
					"fr-FR":"Nouvelles soumissions",
					"it-IT":"Nuovi invii",
					"es-ES":"Nuevos envíos",
					"pt-BR":"Novos Envios",
					"sv-SE":"Nya bidrag",
					"ko-KR":"New Submissions",
					"ja-JP":"新規投稿",
					"zh-CN":"新提交的资料",
					"zh-Hant":"New Submissions",
					"es-MX":"Nuevos envíos"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"ATS"
				 ]
			  },
			  "ATS-NEWHIRES":{
				 "width":12,
				 "targetdiv":"ATS-NEWHIRES",
				 "skeletoncss":"skeleton-list",
				 "url":"/phnx/driver.aspx?routename=ONB/Dashboard",
				 "title":{
					"en-US":"New Hires",
					"en-UK":"New Hires",
					"de-DE":"New Hires",
					"fr-FR":"New Hires",
					"nl-NL":"Nieuwe aanwervingen",
					"it-IT":"Nuove assunzioni",
					"pt-BR":"Novas contratações",
					"es-ES":"Nuevas contrataciones",
					"ja-JP":"新入社員",
					"sv-SE":"Nyanställda",
					"zh-CN":"新员工",
					"es-MX":"Nuevas contrataciones",
					"ko-KR":"New Hires",
					"zh-Hant":"New Hires"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"ATS"
				 ]
			  },
			  "DIRECT_REPORTS":{
				 "width":12,
				 "targetdiv":"DIRECT_REPORTS",
				 "skeletoncss":"skeleton-list",
				 "url":"#",
				 "title":{
					"en-US":"My Team",
					"en-UK":"My Team",
					"de-DE":"Mein Team",
					"ko-KR":"My Team",
					"nl-NL":"Mijn Team",
					"it-IT":"La mia squadra",
					"fr-FR":"Mon équipe",
					"es-ES":"Mi equipo",
					"pt-BR":"Minha Equipe",
					"ja-JP":"マイチーム",
					"zh-CN":"我的团队",
					"zh-Hant":"My Team",
					"sv-SE":"Mitt team",
					"es-MX":"Mi equipo"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"CORE"
				 ]
			  },
			  "RPT_HEADCOUNT":{
				 "width":12,
				 "targetdiv":"RPT_HEADCOUNT",
				 "skeletoncss":"skeleton-chart-columns",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Headcount Report",
					"en-UK":"Headcount Report",
					"de-DE":"Bericht über die Mitarbeiterzahl",
					"nl-NL":"Aantal personen",
					"ja-JP":"ヘッドカウント・レポート",
					"es-ES":"Informe sobre el número de personas",
					"it-IT":"Rapporto sull'organico",
					"pt-BR":"Relatório de Headcount",
					"fr-FR":"Rapport sur les effectifs",
					"es-MX":"Informe sobre el número de personas",
					"zh-CN":"人数报告",
					"ko-KR":"Headcount Report",
					"sv-SE":"Rapport om antalet anställda",
					"zh-Hant":"Headcount Report"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"CORE"
				 ],
				 "reportid":29
			  },
			  "RPT_ORGGOALPROGRESS":{
				 "width":12,
				 "targetdiv":"RPT_ORGGOALPROGRESS",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Goal Progress Report",
					"en-UK":"Goal Progress Report",
					"de-DE":"Ziel Fortschrittsbericht",
					"fr-FR":"Rapport d'avancement des objectifs",
					"nl-NL":"Voortgangsverslag doelstellingen",
					"es-ES":"Informe de progreso de los objetivos",
					"ja-JP":"目標進捗報告",
					"it-IT":"Relazione sullo stato di avanzamento degli obiettivi",
					"sv-SE":"Rapport om hur arbetet med målet fortskrider",
					"pt-BR":"Relatório de Progresso de Metas",
					"zh-CN":"目标进展报告",
					"ko-KR":"Goal Progress Report",
					"es-MX":"Informe de progreso de los objetivos",
					"zh-Hant":"Goal Progress Report"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":["EPM"],
				 "reportid":3
			  },
			  "RPT_TRAININGPROGRESSSUMMARY":{
				 "width":12,
				 "targetdiv":"RPT_TRAININGPROGRESSSUMMARY",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Training Progress Summary",
					"en-UK":"Training Progress Summary",
					"de-DE":"Zusammenfassung der Ausbildungsfortschritte",
					"fr-FR":"Résumé des progrès de la formation",
					"es-ES":"Resumen del progreso de la formación",
					"it-IT":"Riepilogo dei progressi della formazione",
					"es-MX":"Resumen del progreso de la formación",
					"ja-JP":"トレーニングの進捗状況",
					"zh-CN":"培训进展总结",
					"ko-KR":"Training Progress Summary",
					"nl-NL":"Overzicht van de vorderingen van de opleiding",
					"zh-Hant":"Training Progress Summary",
					"sv-SE":"Sammanfattning av utbildningsframstegen",
					"pt-BR":"Resumo do progresso do treinamento"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":["LMS"],
				 "reportid":46
			  },
			  "RPT_USERRECORDBYMGR":{
				 "width":12,
				 "targetdiv":"RPT_USERRECORDBYMGR",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"User Record Report",
					"en-UK":"User Record Report",
					"de-DE":"Benutzerdatensatz-Bericht",
					"nl-NL":"Rapport gebruikersgegevens",
					"it-IT":"Rapporto record utente",
					"ja-JP":"ユーザーレコードレポート",
					"fr-FR":"Rapport sur les enregistrements des utilisateurs",
					"es-ES":"Informe del registro de usuarios",
					"zh-CN":"用户记录报告",
					"pt-BR":"Relatório de registro de usuário",
					"es-MX":"Informe del registro de usuarios",
					"sv-SE":"Rapport om användaruppgifter",
					"ko-KR":"User Record Report",
					"zh-Hant":"User Record Report"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"CORE"
				 ],
				 "reportid":50
			  },
			  "RPT_BADGELEADERBOARD":{
				 "width":12,
				 "targetdiv":"RPT_BADGELEADERBOARD",
				 "skeletoncss":"skeleton-chart-columns",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Badge Leaderboard",
					"en-UK":"Badge Leaderboard",
					"de-DE":"Abzeichen-Rangliste",
					"fr-FR":"Tableau de classement des badges",
					"nl-NL":"Badge Leaderboard",
					"ja-JP":"バッジリーダーボード",
					"it-IT":"Classifica dei badge",
					"es-ES":"Tabla de clasificación de insignias",
					"sv-SE":"Ledartavla för utmärkelser",
					"pt-BR":"Quadro de Crachá",
					"es-MX":"Tabla de clasificación de insignias",
					"ko-KR":"Badge Leaderboard",
					"zh-CN":"徽章排行榜"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"LMS"
				 ],
				 "reportid":12
			  },
			  "RPT_EMPLOYEESTATUS":{
				 "width":12,
				 "targetdiv":"RPT_EMPLOYEESTATUS",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Employee Status Report",
					"en-UK":"Employee Status Report",
					"de-DE":"Mitarbeiter-Statusbericht",
					"nl-NL":"Statusrapport werknemers",
					"ja-JP":"従業員状況報告",
					"sv-SE":"Rapport om anställdas status",
					"pt-BR":"Relatório da situação dos funcionários",
					"it-IT":"Rapporto sullo stato dei dipendenti",
					"es-ES":"Informe sobre la situación de los empleados",
					"fr-FR":"Rapport sur le statut des employés",
					"ko-KR":"Employee Status Report",
					"zh-Hant":"Employee Status Report",
					"es-MX":"Informe sobre la situación de los empleados",
					"zh-CN":"雇员状况报告"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":[
					"CORE"
				 ],
				 "reportid":59
			  },
			  "RPT_PASTDUE":{
				 "width":12,
				 "targetdiv":"RPT_PASTDUE",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Past Due Report",
					"en-UK":"Past Due Report",
					"de-DE":"Überfälligkeitsbericht",
					"fr-FR":"Rapport d'arriérés",
					"it-IT":"Rapporto sulle scadenze",
					"es-ES":"Informe de vencimiento",
					"ko-KR":"Past Due Report",
					"sv-SE":"Rapport om förfallna skulder",
					"ja-JP":"期限切れレポート",
					"pt-BR":"Relatório do Vencimento",
					"zh-Hant":"Past Due Report",
					"nl-NL":"Verleden tijd rapport",
					"zh-CN":"逾期报告",
					"es-MX":"Informe de vencimiento"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":["LMS"],
				 "reportid":47
			  },
			  "RPT_ASSIGNEDTRAININGSTATUS":{
				 "width":12,
				 "targetdiv":"RPT_ASSIGNEDTRAININGSTATUS",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Assigned Training status",
					"en-UK":"Assigned Training status",
					"de-DE":"Zugewiesener Ausbildungsstatus",
					"nl-NL":"Toegewezen Opleidingsstatus",
					"it-IT":"Stato di formazione assegnato",
					"ja-JP":"担当 トレーニングの状況",
					"fr-FR":"Statut de formation assigné",
					"es-ES":"Estado de la formación asignada",
					"pt-BR":"Status de Treinamento Atribuído",
					"zh-CN":"指定的培训状态",
					"sv-SE":"Tilldelad Utbildningsstatus",
					"ko-KR":"Assigned Training status",
					"zh-Hant":"Assigned Training status",
					"es-MX":"Estado de la formación asignada"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":["LMS"],
				 "reportid":14
			  },
			  "RPT_SESSIONSEATAVAILABILITY":{
				 "width":12,
				 "targetdiv":"RPT_SESSIONSEATAVAILABILITY",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Session Seat Availability Report",
					"en-UK":"Session Seat Availability Report",
					"de-DE":"Sitzplatzverfügbarkeitsbericht",
					"fr-FR":"Rapport sur la disponibilité des sièges de session",
					"es-ES":"Informe sobre la disponibilidad de plazas en la sesión",
					"nl-NL":"Sessie beschikbaarheidsrapport",
					"it-IT":"Rapporto sulla disponibilità di posti a sedere per le sessioni",
					"ja-JP":"セッションの空席状況レポート",
					"es-MX":"Informe sobre la disponibilidad de plazas en la sesión",
					"pt-BR":"Relatório de Disponibilidade de Sede",
					"ko-KR":"Session Seat Availability Report",
					"sv-SE":"Rapport om tillgång till platser för sessioner",
					"zh-CN":"会议座位可用性报告",
					"zh-Hant":"Session Seat Availability Report"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":["LMS"],
				 "reportid":60
			  },
			  "RPT_TRAININGWITHDRAWALS":{
				 "width":12,
				 "targetdiv":"RPT_TRAININGWITHDRAWALS",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Training Withdrawals",
					"en-UK":"Training Withdrawals",
					"de-DE":"Rückzüge aus der Ausbildung",
					"fr-FR":"Retraits de formation",
					"nl-NL":"Opleiding Intrekkingen",
					"it-IT":"Ritiri dalla formazione",
					"es-ES":"Retirada de la formación",
					"pt-BR":"Retiradas para treinamento",
					"sv-SE":"Utbildning Återkallelser",
					"zh-CN":"培训退学",
					"ko-KR":"Training Withdrawals",
					"es-MX":"Retirada de la formación",
					"zh-Hant":"Training Withdrawals",
					"ja-JP":"トレーニングの辞退"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":["LMS"],
				 "reportid":30
			  },
			  "RPT_PRDISTRIBUTION":{
				 "width":12,
				 "targetdiv":"RPT_PRDISTRIBUTION",
				 "skeletoncss":"skeleton-circle",
				 "url":"/Analytics/ReportBuilder/index.aspx?tab_page_id=-880000#/viewer",
				 "title":{
					"en-US":"Performance Review distribution",
					"en-UK":"Performance Review distribution",
					"de-DE":"Verteilung der Leistungsüberprüfung",
					"fr-FR":"Distribution de l'examen des performances",
					"nl-NL":"Verdeling van de prestatiebeoordeling",
					"it-IT":"Distribuzione della valutazione delle prestazioni",
					"es-ES":"Distribución de la revisión del rendimiento",
					"pt-BR":"Distribuição da Performance Review",
					"sv-SE":"Fördelning av resultatbedömningar",
					"zh-CN":"绩效审查分配",
					"ko-KR":"Performance Review distribution",
					"es-MX":"Distribución de la revisión del rendimiento",
					"zh-Hant":"Performance Review distribution",
					"ja-JP":"パフォーマンスレビュー配信"
				 },
				 "nocontenttitle":{
					"en-US":"",
					"en-UK":"",
					"de-DE":"",
					"es-ES":"",
					"es-MX":"",
					"fr-FR":"",
					"it-IT":"",
					"ja-JP":"",
					"ko-KR":"",
					"nl-NL":"",
					"pt-BR":"",
					"sv-SE":"",
					"zh-CN":"",
					"zh-Hant":""
				 },
				 "getstartedurl":"#",
				 "module":["EPM"],
				 "reportid":26
			  }
		   },
		   "MANAGERWIDGET":{
			  "title":{
				 "en-US":"My team",
				 "en-UK":"My team",
				 "de-DE":"Mein Team",
				 "fr-FR":"Mon équipe",
				 "sv-SE":"Mitt team",
				 "it-IT":"La mia squadra",
				 "ja-JP":"私のチーム",
				 "es-ES":"Mi equipo",
				 "ko-KR":"My team",
				 "zh-Hant":"My team",
				 "zh-CN":"我的团队",
				 "nl-NL":"Mijn team",
				 "pt-BR":"Minha equipe",
				 "es-MX":"Mi equipo"
			  },
			  "tableheader":{
				 "name":{
					"en-US":"Name",
					"en-UK":"Name",
					"de-DE":"Name",
					"fr-FR":"Nom",
					"sv-SE":"Namn",
					"it-IT":"Nome",
					"ja-JP":"名称",
					"nl-NL":"Naam",
					"pt-BR":"Nome",
					"ko-KR":"Name",
					"zh-CN":"命名",
					"zh-Hant":"Name",
					"es-ES":"Nombre",
					"es-MX":"Nombre"
				 },
				 "hiredate":{
					"en-US":"Hire Date",
					"en-UK":"Hire Date",
					"de-DE":"Hire Date",
					"fr-FR":"Hire Date",
					"sv-SE":"Anställningsdatum",
					"ja-JP":"入社日",
					"it-IT":"Data di assunzione",
					"zh-CN":"聘用日期",
					"ko-KR":"Hire Date",
					"es-ES":"Fecha de contratación",
					"nl-NL":"Huur Datum",
					"pt-BR":"Data de Contratação",
					"zh-Hant":"Hire Date",
					"es-MX":"Fecha de contratación"
				 },
				 "actions":{
					"en-US":"Actions",
					"en-UK":"Actions",
					"de-DE":"Aktionen",
					"it-IT":"Azioni",
					"fr-FR":"Actions",
					"ja-JP":"アクション",
					"sv-SE":"Åtgärder",
					"es-ES":"Acciones",
					"ko-KR":"Actions",
					"zh-Hant":"Actions",
					"nl-NL":"Acties",
					"pt-BR":"Ações",
					"zh-CN":"行动",
					"es-MX":"Acciones"
				 }
			  },
			  "actionsitems":{
				 "openup":{
					"en-US":"Open Universal Profile",
					"en-UK":"Open Universal Profile",
					"de-DE":"Universalprofil öffnen",
					"sv-SE":"Öppna universell profil",
					"it-IT":"Aprire il profilo universale",
					"fr-FR":"Ouvrir le profil universel",
					"es-ES":"Abrir el perfil universal",
					"ja-JP":"ユニバーサルプロファイルを開く",
					"ko-KR":"Open Universal Profile",
					"zh-Hant":"Open Universal Profile",
					"nl-NL":"Open Universeel Profiel",
					"pt-BR":"Perfil Universal Aberto",
					"zh-CN":"打开通用配置文件",
					"es-MX":"Abrir el perfil universal"
				 },
				 "viewtranscript":{
					"en-US":"View Transcript",
					"en-UK":"View Transcript",
					"de-DE":"Ansicht Transkript",
					"it-IT":"Visualizza la trascrizione",
					"fr-FR":"Voir la transcription",
					"es-ES":"Ver Transcripción",
					"ja-JP":"記録を見る",
					"sv-SE":"Visa utskrift",
					"ko-KR":"View Transcript",
					"nl-NL":"Bekijk Transcript",
					"zh-Hant":"View Transcript",
					"zh-CN":"查看文字记录",
					"es-MX":"Ver Transcripción",
					"pt-BR":"Ver Transcrição"
				 },
				 "openforms":{
					"en-US":"Open Forms",
					"en-UK":"Open Forms",
					"de-DE":"Open Forms",
					"fr-FR":"Formulaires ouverts",
					"sv-SE":"Öppna formulär",
					"ja-JP":"オープンフォーム",
					"it-IT":"Moduli aperti",
					"ko-KR":"Open Forms",
					"zh-CN":"开放式表格",
					"es-ES":"Formularios abiertos",
					"nl-NL":"Open Formulieren",
					"zh-Hant":"Open Forms",
					"es-MX":"Formularios abiertos",
					"pt-BR":"Formulários abertos"
				 },
				 "viewsnapshot":{
					"en-US":"View Snapshot",
					"en-UK":"View Snapshot",
					"de-DE":"Schnappschuss ansehen",
					"sv-SE":"Visa ögonblicksbild",
					"fr-FR":"Voir l'aperçu",
					"it-IT":"Visualizza l'istantanea",
					"ja-JP":"スナップショットを見る",
					"ko-KR":"View Snapshot",
					"es-ES":"Ver instantánea",
					"zh-Hant":"View Snapshot",
					"nl-NL":"Bekijk momentopname",
					"zh-CN":"查看快照",
					"es-MX":"Ver instantánea",
					"pt-BR":"Ver Snapshot"
				 },
				 "viewgoals":{
					"en-US":"View Goals",
					"en-UK":"View Goals",
					"de-DE":"Ziele ansehen",
					"it-IT":"Visualizza gli obiettivi",
					"es-ES":"Ver objetivos",
					"fr-FR":"Voir les objectifs",
					"sv-SE":"Visa mål",
					"ko-KR":"View Goals",
					"ja-JP":"目標を見る",
					"zh-Hant":"View Goals",
					"nl-NL":"Doelstellingen bekijken",
					"pt-BR":"Ver objetivos",
					"zh-CN":"查看目标",
					"es-MX":"Ver objetivos"
				 },
				 "viewdevplan":{
					"en-US":"View Development Plan",
					"en-UK":"View Development Plan",
					"de-DE":"Entwicklungsplan ansehen",
					"it-IT":"Visualizza il piano di sviluppo",
					"fr-FR":"Voir le plan de développement",
					"ja-JP":"開発計画を見る",
					"ko-KR":"View Development Plan",
					"zh-Hant":"View Development Plan",
					"sv-SE":"Visa utvecklingsplan",
					"nl-NL":"Bekijk ontwikkelingsplan",
					"es-ES":"Ver plan de desarrollo",
					"zh-CN":"查看发展计划",
					"es-MX":"Ver plan de desarrollo",
					"pt-BR":"Ver Plano de Desenvolvimento"
				 }
			  },
			  "detailtable":{
				 "firstname":{
					"en-US":"First name",
					"en-UK":"First name",
					"de-DE":"Vornamen",
					"sv-SE":"Förnamn",
					"it-IT":"Nome",
					"fr-FR":"Prénom",
					"ja-JP":"氏名",
					"nl-NL":"Voornaam",
					"ko-KR":"First name",
					"pt-BR":"Primeiro nome",
					"zh-Hant":"First name",
					"zh-CN":"名字",
					"es-ES":"Nombre",
					"es-MX":"Nombre"
				 },
				 "lastname":{
					"en-US":"Last name",
					"en-UK":"Last name",
					"de-DE":"Nachname",
					"it-IT":"Cognome",
					"fr-FR":"Nom de famille",
					"es-ES":"Apellido",
					"ja-JP":"ラストネーム",
					"sv-SE":"Efternamn",
					"ko-KR":"Last name",
					"zh-Hant":"Last name",
					"nl-NL":"Achternaam",
					"zh-CN":"姓氏",
					"es-MX":"Apellido",
					"pt-BR":"Sobrenome"
				 },
				 "email":{
					"en-US":"Email",
					"en-UK":"Email",
					"de-DE":"E-Mail",
					"nl-NL":"Email",
					"sv-SE":"E-post",
					"ja-JP":"電子メール",
					"ko-KR":"Email",
					"fr-FR":"Courriel :",
					"it-IT":"Email",
					"zh-Hant":"Email",
					"es-ES":"Envíe un correo electrónico a",
					"zh-CN":"电子邮件",
					"pt-BR":"Email",
					"es-MX":"Envíe un correo electrónico a"
				 },
				 "phone":{
					"en-US":"Phone",
					"en-UK":"Phone",
					"de-DE":"Telefon",
					"it-IT":"Telefono",
					"fr-FR":"Téléphone",
					"ko-KR":"Phone",
					"ja-JP":"電話番号",
					"sv-SE":"Telefon",
					"zh-Hant":"Phone",
					"nl-NL":"Telefoon",
					"es-ES":"Teléfono",
					"zh-CN":"电话",
					"pt-BR":"Telefone",
					"es-MX":"Teléfono"
				 },
				 "hiredate":{
					"en-US":"Hire Date",
					"en-UK":"Hire Date",
					"de-DE":"Hire Date",
					"sv-SE":"Anställningsdatum",
					"it-IT":"Data di assunzione",
					"ja-JP":"入社日",
					"fr-FR":"Hire Date",
					"zh-CN":"聘用日期",
					"ko-KR":"Hire Date",
					"zh-Hant":"Hire Date",
					"nl-NL":"Huur Datum",
					"es-ES":"Fecha de contratación",
					"pt-BR":"Data de Contratação",
					"es-MX":"Fecha de contratación"
				 },
				 "addressdetails":{
					"en-US":"Address Details",
					"en-UK":"Address Details",
					"de-DE":"Adresse Details",
					"sv-SE":"Adressuppgifter",
					"it-IT":"Dettagli dell'indirizzo",
					"fr-FR":"Détails de l'adresse",
					"ja-JP":"住所詳細",
					"ko-KR":"Address Details",
					"nl-NL":"Adresgegevens",
					"pt-BR":"Detalhes do endereço",
					"zh-Hant":"Address Details",
					"es-ES":"Detalles de la dirección",
					"zh-CN":"详细地址",
					"es-MX":"Detalles de la dirección"
				 },
				 "address":{
					"en-US":"Address",
					"en-UK":"Address",
					"de-DE":"Adresse",
					"fr-FR":"Adresse",
					"it-IT":"Indirizzo",
					"ja-JP":"住所",
					"es-ES":"Dirección",
					"ko-KR":"Address",
					"zh-Hant":"Address",
					"nl-NL":"Adres",
					"sv-SE":"Adress",
					"pt-BR":"Endereço",
					"zh-CN":"地址",
					"es-MX":"Dirección"
				 },
				 "city":{
					"en-US":"City",
					"en-UK":"City",
					"de-DE":"Stadt",
					"ko-KR":"City",
					"fr-FR":"Ville",
					"zh-CN":"城市",
					"es-ES":"Ciudad",
					"zh-Hant":"City",
					"it-IT":"Città",
					"nl-NL":"Stad",
					"ja-JP":"都市",
					"sv-SE":"Staden",
					"pt-BR":"Cidade",
					"es-MX":"Ciudad"
				 },
				 "state":{
					"en-US":"State",
					"en-UK":"State",
					"de-DE":"Staat",
					"it-IT":"Stato",
					"ja-JP":"状態",
					"sv-SE":"Stat",
					"zh-CN":"国家",
					"es-ES":"Estado",
					"fr-FR":"État",
					"ko-KR":"State",
					"nl-NL":"Staat",
					"zh-Hant":"State",
					"es-MX":"Estado",
					"pt-BR":"Estado"
				 },
				 "country":{
					"en-US":"Country",
					"en-UK":"Country",
					"de-DE":"Land",
					"fr-FR":"Pays",
					"sv-SE":"Land",
					"it-IT":"Paese",
					"ja-JP":"国名",
					"nl-NL":"Land",
					"ko-KR":"Country",
					"es-ES":"País",
					"zh-Hant":"Country",
					"zh-CN":"国家",
					"es-MX":"País",
					"pt-BR":"País"
				 }
			  }
		   },
		   "ONB":{
			  "en-US":{
				 "headertitle":"${csFirstName}, your onboarding journey starts here!",
				 "headertext":"Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1.<br><br>Fasten your seatbelt and let the journey begin!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"What's next on the onboarding",
					"resourceTitle":"Further resources and/or activities:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"First day",
						  "text":"As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
						  "resources":{
							 "res1":{
								"text":"Read more about is on our Company website",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Follow us on LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Fill out form - Personal Contact Details",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"First week",
						  "text":"Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
						  "resources":{
							 "res1":{
								"text":"Go through your Onboarding Curriculum",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Be recommended training for your role",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Create your own playlist together with your manager",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"First month",
						  "text":"By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
						  "resources":{
							 "res1":{
								"text":"Schedule regular check-in meetings with your manager",
								"type":"text"
							 },
							 "res2":{
								"text":"Create goals",
								"type":"text"
							 },
							 "res3":{
								"text":"Have fun!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"First 6 months",
						  "text":"When you succeed - we succeed! We're a group. We're a team. From the CEO and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",
						  "resources":{
							 "res1":{
								"text":"Create your Personal Development Plan",
								"type":"text"
							 },
							 "res2":{
								"text":"Get Certified",
								"type":"text"
							 },
							 "res3":{
								"text":"Receive and give badges",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "en-UK":{
				 "headertitle":"${csFirstName}, your onboarding journey starts here!",
				 "headertext":"Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1.<br><br>Fasten your seatbelt and let the journey begin!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"What's next on the onboarding",
					"resourceTitle":"Further resources and/or activities:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"First day",
						  "text":"As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
						  "resources":{
							 "res1":{
								"text":"Read more about is on our Company website",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Follow us on LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Fill out form - Personal Contact Details",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"First week",
						  "text":"Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
						  "resources":{
							 "res1":{
								"text":"Go through your Onboarding Curriculum",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Be recommended training for your role",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Create your own playlist together with your manager",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"First month",
						  "text":"By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
						  "resources":{
							 "res1":{
								"text":"Schedule regular check-in meetings with your manager",
								"type":"text"
							 },
							 "res2":{
								"text":"Create goals",
								"type":"text"
							 },
							 "res3":{
								"text":"Have fun!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"First 6 months",
						  "text":"When you succeed - we succeed! We're a group. We're a team. From the CEO and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",
						  "resources":{
							 "res1":{
								"text":"Create your Personal Development Plan",
								"type":"text"
							 },
							 "res2":{
								"text":"Get Certified",
								"type":"text"
							 },
							 "res3":{
								"text":"Receive and give badges",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "de-DE":{
				 "headertitle":"${csVorname}, Ihre Onboarding-Reise beginnt hier!",
				 "headertext":"Herzlichen Glückwunsch und willkommen an Bord!<br>Wir freuen uns, dass Sie dabei sind und haben für Sie einige nützliche Informationen vor Tag 1 vorbereitet.<br><br>Schnallen Sie sich an und lassen Sie die Reise beginnen!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"Wie geht es weiter mit dem Onboarding?",
					"resourceTitle":"Weitere Ressourcen und/oder Aktivitäten:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Erster Tag",
						  "text":"Als neues Teammitglied werden Sie zunächst von Ihrem Vorgesetzten mit Ihren neuen Kollegen bekannt gemacht. Ihr Vorgesetzter wird Ihnen auch dabei helfen, unsere Prozesse und Systeme zu verstehen, damit Sie loslegen können. Sie können sich bereits jetzt mit den Abläufen vertraut machen, indem Sie das unten stehende Curriculum für neue Mitarbeiter öffnen.",
						  "resources":{
							 "res1":{
								"text":"Lesen Sie mehr über is auf unserer Unternehmenswebsite",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Folgen Sie uns auf LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Formular ausfüllen - Persönliche Kontaktinformationen",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Erste Woche",
						  "text":"Wenn Sie neu im Job sind, kann das stressig sein. Wir möchten, dass Sie die Erwartungen an den Job und die Unternehmenskultur genau verstehen. Wir glauben, dass dies Ihnen und Ihrer Leistung zugute kommen wird. Ihr Vorgesetzter und/oder Mentor wird Sie dabei unterstützen, sich einzuarbeiten.",
						  "resources":{
							 "res1":{
								"text":"Gehen Sie Ihren Onboarding-Lehrplan durch",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Empfohlene Ausbildung für Ihre Rolle",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Erstellen Sie gemeinsam mit Ihrem Manager Ihre eigene Wiedergabeliste",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Erster Monat",
						  "text":"Indem Sie Zeit mit Ihrem Manager und/oder Mentor verbringen, werden Sie in Kürze in der Lage sein, wertvolle Ziele zu setzen, die unsere Unternehmensvision/-strategie unterstützen. Wir werden auch ein geselliges Beisammensein für alle neuen Mitarbeiter veranstalten, bei dem Sie mit dem gesamten Team in Kontakt treten können!",
						  "resources":{
							 "res1":{
								"text":"Planen Sie regelmäßige Besprechungen mit Ihrem Vorgesetzten",
								"type":"text"
							 },
							 "res2":{
								"text":"Ziele erstellen",
								"type":"text"
							 },
							 "res3":{
								"text":"Viel Spaß!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"Erste 6 Monate",
						  "text":"Wenn Sie Erfolg haben - haben wir Erfolg! Wir sind eine Gruppe. Wir sind ein Team. Angefangen beim CEO und darüber hinaus sind wir ein Team. Wir gewinnen zusammen, wir verlieren zusammen. Wir feiern und wir trauern gemeinsam. Und Niederlagen werden gemildert und Siege versüßt, weil wir sie gemeinsam errungen haben. Letzten Endes ist es für uns alle wichtig, gesund und motiviert zu bleiben.",
						  "resources":{
							 "res1":{
								"text":"Erstellen Sie Ihren persönlichen Entwicklungsplan",
								"type":"text"
							 },
							 "res2":{
								"text":"Zertifiziert werden",
								"type":"text"
							 },
							 "res3":{
								"text":"Empfangen und Verteilen von Abzeichen",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "ko-KR":{
				 "headertitle":"${csFirstName}, your onboarding journey starts here!",
				 "headertext":"Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1.<br><br>Fasten your seatbelt and let the journey begin!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"What's next on the onboarding",
					"resourceTitle":"Further resources and/or activities:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"First day",
						  "text":"As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
						  "resources":{
							 "res1":{
								"text":"Read more about is on our Company website",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Follow us on LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Fill out form - Personal Contact Details",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"First week",
						  "text":"Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
						  "resources":{
							 "res1":{
								"text":"Go through your Onboarding Curriculum",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Be recommended training for your role",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Create your own playlist together with your manager",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"First month",
						  "text":"By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
						  "resources":{
							 "res1":{
								"text":"Schedule regular check-in meetings with your manager",
								"type":"text"
							 },
							 "res2":{
								"text":"Create goals",
								"type":"text"
							 },
							 "res3":{
								"text":"Have fun!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"First 6 months",
						  "text":"When you succeed - we succeed! We're a group. We're a team. From the CEO and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",
						  "resources":{
							 "res1":{
								"text":"Create your Personal Development Plan",
								"type":"text"
							 },
							 "res2":{
								"text":"Get Certified",
								"type":"text"
							 },
							 "res3":{
								"text":"Receive and give badges",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "zh-Hant":{
				 "headertitle":"${csFirstName}, your onboarding journey starts here!",
				 "headertext":"Congratulations, and welcome onboard!<br>We are excited that you are joining us and we have prepared for you some useful information before Day 1.<br><br>Fasten your seatbelt and let the journey begin!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"What's next on the onboarding",
					"resourceTitle":"Further resources and/or activities:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"First day",
						  "text":"As a new member of team you will initially be introduced to your new colleagues by your manager. Your manager will also help you understand our processes and systems to get started. You can already now start to familiarize yourself by opening up the New Hire Curriculum below.",
						  "resources":{
							 "res1":{
								"text":"Read more about is on our Company website",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Follow us on LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Fill out form - Personal Contact Details",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"First week",
						  "text":"Being new at the job can be stressfull, we want you to clearly understand the expectations of the job as well as the company culture. We believe it will help you and your performance. You manager and/or mentor will support you in getting up to speed.",
						  "resources":{
							 "res1":{
								"text":"Go through your Onboarding Curriculum",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Be recommended training for your role",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Create your own playlist together with your manager",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"First month",
						  "text":"By spending time together with your manager and/or mentor you will shortly be able to set valuable goals supporting our company vision/strategy. We will also be having a social get together for all new hires where you will be able to connect with the entire team!",
						  "resources":{
							 "res1":{
								"text":"Schedule regular check-in meetings with your manager",
								"type":"text"
							 },
							 "res2":{
								"text":"Create goals",
								"type":"text"
							 },
							 "res3":{
								"text":"Have fun!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"First 6 months",
						  "text":"When you succeed - we succeed! We're a group. We're a team. From the CEO and on through, we're a team. We win together, we lose together. We celebrate and we mourn together. And defeats are softened and victories sweeter because we did them together. At the end of the day - staying healthy and motivated is key for us all.",
						  "resources":{
							 "res1":{
								"text":"Create your Personal Development Plan",
								"type":"text"
							 },
							 "res2":{
								"text":"Get Certified",
								"type":"text"
							 },
							 "res3":{
								"text":"Receive and give badges",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "es-ES":{
				 "headertitle":"${csFirstName}, su viaje de incorporación comienza aquí.",
				 "headertext":"Enhorabuena y bienvenido a bordo! <br>Estamos encantados de que te unas a nosotros y hemos preparado para ti alguna información útil antes del día 1.<br><br>¡Abróchate el cinturón y que empiece el viaje!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"Lo que sigue en la incorporación",
					"resourceTitle":"Otros recursos y/o actividades:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Primer día",
						  "text":"Como nuevo miembro del equipo, su jefe le presentará inicialmente a sus nuevos compañeros. Su gerente también le ayudará a entender nuestros procesos y sistemas para empezar. Ya puedes empezar a familiarizarte abriendo el Currículum de Nuevos Contratados que aparece a continuación.",
						  "resources":{
							 "res1":{
								"text":"Más información en el sitio web de la empresa",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Síganos en LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Rellenar el formulario - Datos personales de contacto",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Primera semana",
						  "text":"Ser nuevo en el trabajo puede ser estresante, queremos que entiendas claramente las expectativas del trabajo así como la cultura de la empresa. Creemos que esto le ayudará a usted y a su rendimiento. Tu jefe y/o mentor te ayudarán a ponerte al día.",
						  "resources":{
							 "res1":{
								"text":"Revise su plan de estudios de incorporación",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Se recomienda la formación para su función",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Cree su propia lista de reproducción junto con su gerente",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Primer mes",
						  "text":"Al pasar tiempo junto a su gerente y/o mentor, en breve podrá establecer objetivos valiosos que apoyen la visión/estrategia de nuestra empresa. También tendremos una reunión social para todos los nuevos contratados en la que podrás conectar con todo el equipo.",
						  "resources":{
							 "res1":{
								"text":"Programe reuniones periódicas de control con su jefe",
								"type":"text"
							 },
							 "res2":{
								"text":"Crear objetivos",
								"type":"text"
							 },
							 "res3":{
								"text":"Diviértete.",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"Primeros 6 meses",
						  "text":"Cuando usted tiene éxito, nosotros tenemos éxito. Somos un grupo. Somos un equipo. Desde el director general hasta el resto, somos un equipo. Ganamos juntos, perdemos juntos. Celebramos y lloramos juntos. Y las derrotas se suavizan y las victorias son más dulces porque las hicimos juntos. Al fin y al cabo, mantener la salud y la motivación es la clave para todos nosotros.",
						  "resources":{
							 "res1":{
								"text":"Cree su plan de desarrollo personal",
								"type":"text"
							 },
							 "res2":{
								"text":"Obtenga el certificado",
								"type":"text"
							 },
							 "res3":{
								"text":"Recibir y entregar insignias",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "fr-FR":{
				 "headertitle":"${csFirstName}, votre voyage d'intégration commence ici !",
				 "headertext":"Félicitations, et bienvenue à bord !<br>Nous sommes ravis que vous nous rejoigniez et nous avons préparé pour vous quelques informations utiles avant le premier jour.<br><br>Attachez votre ceinture et que le voyage commence !",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"Prochaines étapes du processus d'intégration",
					"resourceTitle":"Autres ressources et/ou activités :",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Premier jour",
						  "text":"En tant que nouveau membre de l'équipe, vous serez d'abord présenté à vos nouveaux collègues par votre responsable. Votre manager vous aidera également à comprendre nos processus et systèmes pour commencer. Vous pouvez d'ores et déjà commencer à vous familiariser en ouvrant le programme de formation des nouveaux embauchés ci-dessous.",
						  "resources":{
							 "res1":{
								"text":"Pour en savoir plus, consultez le site web de la société",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Suivez-nous sur LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Remplir le formulaire - Coordonnées personnelles",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Première semaine",
						  "text":"Le fait d'être nouveau dans un emploi peut être stressant, nous voulons que vous compreniez clairement les attentes du poste ainsi que la culture de l'entreprise. Nous pensons que cela vous aidera à améliorer vos performances. Votre responsable et/ou votre mentor vous aideront à vous mettre à niveau.",
						  "resources":{
							 "res1":{
								"text":"Passez en revue votre programme d'intégration",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Bénéficier d'une formation recommandée pour votre rôle",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Créez votre propre playlist avec votre manager",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Premier mois",
						  "text":"En passant du temps avec votre manager et/ou votre mentor, vous serez bientôt en mesure de fixer des objectifs valables soutenant la vision/stratégie de notre entreprise. Nous organiserons également une rencontre sociale pour toutes les nouvelles recrues, au cours de laquelle vous pourrez entrer en contact avec toute l'équipe !",
						  "resources":{
							 "res1":{
								"text":"Prévoyez des réunions de contrôle régulières avec votre responsable",
								"type":"text"
							 },
							 "res2":{
								"text":"Créer des objectifs",
								"type":"text"
							 },
							 "res3":{
								"text":"Amusez-vous bien !",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"6 premiers mois",
						  "text":"Quand vous réussissez, nous réussissons ! Nous sommes un groupe. Nous sommes une équipe. Depuis le PDG jusqu'à la fin, nous sommes une équipe. Nous gagnons ensemble, nous perdons ensemble. Nous célébrons et nous pleurons ensemble. Et les défaites sont adoucies et les victoires plus douces parce que nous les avons faites ensemble. En fin de compte, il est essentiel pour nous tous de rester en bonne santé et motivés.",
						  "resources":{
							 "res1":{
								"text":"Créez votre plan de développement personnel",
								"type":"text"
							 },
							 "res2":{
								"text":"Obtenir la certification",
								"type":"text"
							 },
							 "res3":{
								"text":"Recevoir et donner des badges",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "es-MX":{
				 "headertitle":"${csFirstName}, su viaje de incorporación comienza aquí.",
				 "headertext":"Enhorabuena y bienvenido a bordo! <br>Estamos encantados de que te unas a nosotros y hemos preparado para ti alguna información útil antes del día 1.<br><br>¡Abróchate el cinturón y que empiece el viaje!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"Lo que sigue en la incorporación",
					"resourceTitle":"Otros recursos y/o actividades:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Primer día",
						  "text":"Como nuevo miembro del equipo, su jefe le presentará inicialmente a sus nuevos colegas. Su gerente también le ayudará a entender nuestros procesos y sistemas para empezar. Ya puedes empezar a familiarizarte abriendo el Currículum de Nuevos Contratados que aparece a continuación.",
						  "resources":{
							 "res1":{
								"text":"Más información en el sitio web de la empresa",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Síganos en LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Rellenar el formulario - Datos personales de contacto",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Primera semana",
						  "text":"Ser nuevo en el trabajo puede ser estresante, queremos que entiendas claramente las expectativas del trabajo así como la cultura de la empresa. Creemos que esto le ayudará a usted y a su rendimiento. Tu jefe y/o mentor te ayudarán a ponerte al día.",
						  "resources":{
							 "res1":{
								"text":"Revise su plan de estudios de incorporación",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Se recomienda la formación para su función",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Cree su propia lista de reproducción junto con su gerente",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Primer mes",
						  "text":"Al pasar tiempo junto a su gerente y/o mentor, en breve podrá establecer objetivos valiosos que apoyen la visión/estrategia de nuestra empresa. También tendremos una reunión social para todos los nuevos contratados en la que podrás conectar con todo el equipo.",
						  "resources":{
							 "res1":{
								"text":"Programe reuniones periódicas de control con su jefe",
								"type":"text"
							 },
							 "res2":{
								"text":"Crear objetivos",
								"type":"text"
							 },
							 "res3":{
								"text":"Diviértete.",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"Primeros 6 meses",
						  "text":"Cuando usted tiene éxito, nosotros tenemos éxito. Somos un grupo. Somos un equipo. Desde el director general hasta el resto, somos un equipo. Ganamos juntos, perdemos juntos. Celebramos y lloramos juntos. Y las derrotas se suavizan y las victorias son más dulces porque las hicimos juntos. Al fin y al cabo, mantener la salud y la motivación es la clave para todos nosotros.",
						  "resources":{
							 "res1":{
								"text":"Cree su plan de desarrollo personal",
								"type":"text"
							 },
							 "res2":{
								"text":"Obtenga el certificado",
								"type":"text"
							 },
							 "res3":{
								"text":"Recibir y entregar insignias",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "nl-NL":{
				 "headertitle":"${csFirstName}, je onboarding reis begint hier!",
				 "headertext":"Gefeliciteerd, en welkom aan boord! <br>We zijn blij dat u zich bij ons aansluit en we hebben voor u wat nuttige informatie voorbereid voor Dag 1.<br><br>Sluit uw veiligheidsgordel en laat de reis beginnen!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"Wat is het volgende op de onboarding",
					"resourceTitle":"Verdere bronnen en/of activiteiten:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Eerste dag",
						  "text":"Als nieuw lid van het team zal je in eerste instantie door je manager aan je nieuwe collega's worden voorgesteld. Je manager zal je ook helpen onze processen en systemen te begrijpen om aan de slag te gaan. Je kunt nu al beginnen met jezelf vertrouwd te maken door het New Hire Curriculum hieronder te openen.",
						  "resources":{
							 "res1":{
								"text":"Lees meer over ons op onze bedrijfswebsite",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Volg ons op LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Formulier invullen - Persoonlijke contactgegevens",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Eerste week",
						  "text":"Een nieuwe baan kan stressvol zijn, we willen dat je de verwachtingen van de baan en de bedrijfscultuur duidelijk begrijpt. Wij geloven dat het jou en je prestaties ten goede zal komen. Je manager en/of mentor zullen je ondersteunen om je op weg te helpen.",
						  "resources":{
							 "res1":{
								"text":"Doorloop uw Onboarding Curriculum",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Wordt aanbevolen opleiding voor uw rol",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Maak je eigen afspeellijst samen met je manager",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Eerste maand",
						  "text":"Door tijd door te brengen met je manager en/of mentor zul je binnenkort in staat zijn om waardevolle doelen te stellen die onze bedrijfsvisie/strategie ondersteunen. We zullen ook een sociale borrel organiseren voor alle nieuwkomers waar je de mogelijkheid krijgt om in contact te komen met het hele team!",
						  "resources":{
							 "res1":{
								"text":"Plan regelmatige check-in vergaderingen met je manager",
								"type":"text"
							 },
							 "res2":{
								"text":"Creëer doelen",
								"type":"text"
							 },
							 "res3":{
								"text":"Veel plezier!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"Eerste 6 maanden",
						  "text":"Als jij slaagt, slagen wij ook! We zijn een groep. We zijn een team. Vanaf de CEO en verder, zijn we een team. We winnen samen, we verliezen samen. We vieren en we treuren samen. En nederlagen worden verzacht en overwinningen zoeter omdat we ze samen hebben gedaan. Aan het eind van de dag - gezond en gemotiveerd blijven is de sleutel voor ons allemaal.",
						  "resources":{
							 "res1":{
								"text":"Creëer uw persoonlijk ontwikkelingsplan",
								"type":"text"
							 },
							 "res2":{
								"text":"Gecertificeerd worden",
								"type":"text"
							 },
							 "res3":{
								"text":"Badges ontvangen en geven",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "ja-JP":{
				 "headertitle":"CSCFirstName}、ここからオンボーディングの旅が始まります。",
				 "headertext":"おめでとうございます。そして、ようこそご乗船くださいました！<br>私たちは、あなたが私たちの仲間になることを楽しみにしており、1日目の前にいくつかの役立つ情報を用意しました。",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"オンボーディングの次の一手",
					"resourceTitle":"その他のリソースおよび/またはアクティビティ。",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"初日",
						  "text":"新メンバーは、まず上司から新しい同僚に紹介されます。また、上司は、あなたが当社のプロセスやシステムを理解し、業務を開始する手助けをします。以下の新入社員カリキュラムを開いて、すでに慣れていることでしょう。",
						  "resources":{
							 "res1":{
								"text":"詳細は当社ウェブサイトをご覧ください。",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"LinkedInでフォローする",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"フォームに記入 - 個人の連絡先",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"第1週",
						  "text":"新入社員はストレスが多いので、仕事に対する期待や社風を明確に理解してほしい。そうすることで、あなたのパフォーマンスにつながると信じています。上司やメンターが、スピードアップのためにサポートします。",
						  "resources":{
							 "res1":{
								"text":"オンボーディング・カリキュラムの実施",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"自分の役割に応じたトレーニングを推奨される",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"マネージャーと一緒にオリジナルプレイリストを作成",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"初月",
						  "text":"上司やメンターと一緒に過ごすことで、会社のビジョンや戦略を支える価値ある目標がまもなく設定されます。また、新入社員の皆さんには、チーム全員と交流できる懇親会を開催する予定です。",
						  "resources":{
							 "res1":{
								"text":"上司との定期的なチェックインミーティングを予定",
								"type":"text"
							 },
							 "res2":{
								"text":"目標の作成",
								"type":"text"
							 },
							 "res3":{
								"text":"楽しんできてください。",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"最初の6ヶ月間",
						  "text":"あなたが成功すれば、私たちも成功する私たちはグループです。私たちはチームです。CEOも含めて、私たちはチームなのです。共に勝ち、共に負ける。共に喜び、共に悲しむ。そして、一緒にやったからこそ、敗北は和らぎ、勝利はより甘美なものになるのです。結局のところ、健康であることとモチベーションを保つことが、私たち全員にとって重要なのです。",
						  "resources":{
							 "res1":{
								"text":"パーソナルデベロップメントプランを作成する",
								"type":"text"
							 },
							 "res2":{
								"text":"認証取得",
								"type":"text"
							 },
							 "res3":{
								"text":"バッジの受け取りと付与",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "it-IT":{
				 "headertitle":"${csFirstName}, il tuo percorso di onboarding inizia qui!",
				 "headertext":"Congratulazioni e benvenuto a bordo! <br>Siamo entusiasti che tu ti stia unendo a noi e abbiamo preparato per te alcune informazioni utili prima del giorno 1.<br><br>Allaccia la cintura di sicurezza e lascia che il viaggio abbia inizio!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"Cosa c'è dopo nell'onboarding",
					"resourceTitle":"Ulteriori risorse e/o attività:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Primo giorno",
						  "text":"In qualità di nuovo membro del team, sarete inizialmente presentati ai vostri nuovi colleghi dal vostro manager. Il vostro manager vi aiuterà anche a capire i nostri processi e sistemi per iniziare. Potete già iniziare a familiarizzare aprendo il Curriculum per i nuovi assunti qui sotto.",
						  "resources":{
							 "res1":{
								"text":"Per saperne di più, visitate il nostro sito web aziendale",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Seguici su LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Compilare il modulo - Dati di contatto personali",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Prima settimana",
						  "text":"Essere nuovi sul posto di lavoro può essere stressante, per questo vogliamo che comprendiate chiaramente le aspettative del lavoro e la cultura aziendale. Siamo convinti che questo aiuterà voi e le vostre prestazioni. Il vostro manager e/o il vostro mentore vi sosterranno nel processo di aggiornamento.",
						  "resources":{
							 "res1":{
								"text":"Esaminare il curriculum di onboarding",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Essere raccomandati per la formazione del proprio ruolo",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Create la vostra playlist insieme al vostro manager",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Primo mese",
						  "text":"Trascorrendo del tempo insieme al vostro manager e/o al vostro mentore, sarete in grado di fissare obiettivi validi a sostegno della nostra visione/strategia aziendale. Avremo anche un incontro sociale per tutti i nuovi assunti, dove potrete entrare in contatto con l'intero team!",
						  "resources":{
							 "res1":{
								"text":"Programmate riunioni periodiche di verifica con il vostro manager",
								"type":"text"
							 },
							 "res2":{
								"text":"Creare obiettivi",
								"type":"text"
							 },
							 "res3":{
								"text":"Divertitevi!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"Primi 6 mesi",
						  "text":"Quando voi avete successo - noi abbiamo successo! Siamo un gruppo. Siamo una squadra. Dal CEO in poi, siamo una squadra. Vinciamo insieme, perdiamo insieme. Festeggiamo e piangiamo insieme. E le sconfitte sono più morbide e le vittorie più dolci perché le abbiamo fatte insieme. In fin dei conti, rimanere sani e motivati è fondamentale per tutti noi.",
						  "resources":{
							 "res1":{
								"text":"Creare un piano di sviluppo personale",
								"type":"text"
							 },
							 "res2":{
								"text":"Ottenere la certificazione",
								"type":"text"
							 },
							 "res3":{
								"text":"Ricevere e consegnare badge",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "sv-SE":{
				 "headertitle":"${csFirstName}, din introduktionsresa börjar här!",
				 "headertext":"Grattis och välkommen ombord!<br>Vi är glada att du är med oss och vi har förberett lite nyttig information för dig före dag 1.<br><br>Spänn fast säkerhetsbältet och låt resan börja!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"Vad händer härnäst på introduktionen?",
					"resourceTitle":"Ytterligare resurser och/eller aktiviteter:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Första dagen",
						  "text":"Som ny medlem av teamet kommer du att introduceras till dina nya kollegor av din chef. Din chef kommer också att hjälpa dig att förstå våra processer och system för att komma igång. Du kan redan nu börja bekanta dig med oss genom att öppna kursplanen för nyanställda nedan.",
						  "resources":{
							 "res1":{
								"text":"Läs mer om oss på företagets webbplats",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Följ oss på LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Fyll i formuläret - Personliga kontaktuppgifter",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Första veckan",
						  "text":"Att vara ny på jobbet kan vara stressigt, vi vill att du ska förstå förväntningarna på jobbet och företagskulturen. Vi tror att det kommer att hjälpa dig och dina prestationer. Din chef och/eller mentor kommer att hjälpa dig att komma igång.",
						  "resources":{
							 "res1":{
								"text":"Gå igenom din kursplan för introduktion",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Rekommenderas utbildning för din roll",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Skapa din egen spellista tillsammans med din chef",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Första månaden",
						  "text":"Genom att tillbringa tid tillsammans med din chef och/eller mentor kommer du inom kort att kunna sätta upp värdefulla mål som stöder företagets vision/strategi. Vi kommer också att ha en social sammankomst för alla nyanställda där du kommer att kunna få kontakt med hela teamet!",
						  "resources":{
							 "res1":{
								"text":"Planera in regelbundna möten med din chef",
								"type":"text"
							 },
							 "res2":{
								"text":"Skapa mål",
								"type":"text"
							 },
							 "res3":{
								"text":"Ha kul!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"De första 6 månaderna",
						  "text":"När du lyckas - lyckas vi! Vi är en grupp. Vi är ett team. Vi är ett team från VD och framåt. Vi vinner tillsammans, vi förlorar tillsammans. Vi firar och vi sörjer tillsammans. Och nederlag blir mildare och segrar sötare eftersom vi gjorde dem tillsammans. I slutändan är det viktigt för oss alla att hålla oss friska och motiverade.",
						  "resources":{
							 "res1":{
								"text":"Skapa din personliga utvecklingsplan",
								"type":"text"
							 },
							 "res2":{
								"text":"Bli certifierad",
								"type":"text"
							 },
							 "res3":{
								"text":"Ta emot och dela ut märken.",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "zh-CN":{
				 "headertitle":"${csFirstName}，你的入职之旅从这里开始!",
				 "headertext":"恭喜你，欢迎你上船！<br>我们很高兴你加入我们，我们在第一天之前为你准备了一些有用的信息。<br><br>系好安全带，让旅程开始。",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"入职的下一步是什么",
					"resourceTitle":"进一步的资源和/或活动。",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"第一天",
						  "text":"作为团队的新成员，你最初将由你的经理介绍给你的新同事。你的经理也会帮助你了解我们的流程和系统，以便开始工作。现在你已经可以通过打开下面的新员工课程来开始熟悉自己了。",
						  "resources":{
							 "res1":{
								"text":"在我们的公司网站上阅读更多信息",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"在LinkedIn上关注我们",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"填写表格 - 个人联系信息",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"第一周",
						  "text":"作为新的工作可能会有压力，我们希望你能清楚地了解工作的期望以及公司的文化。我们相信这将有助于你和你的表现。你的经理和/或导师将支持你尽快进入状态。",
						  "resources":{
							 "res1":{
								"text":"通过你的入职培训课程",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"为你的角色推荐培训",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"与你的经理一起创建你自己的播放列表",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"第一个月",
						  "text":"通过与你的经理和/或导师共度时光，你很快就能设定有价值的目标，支持我们公司的愿景/战略。我们还将为所有新员工举办一次社交聚会，在那里你将能够与整个团队进行交流。",
						  "resources":{
							 "res1":{
								"text":"定期与你的经理安排签到会议",
								"type":"text"
							 },
							 "res2":{
								"text":"创建目标",
								"type":"text"
							 },
							 "res3":{
								"text":"玩得开心!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"前6个月",
						  "text":"当你成功时--我们就成功了!我们是一个团体。我们是一个团队。从CEO开始，一直到现在，我们是一个团队。我们一起赢，一起输。我们一起庆祝，我们一起哀悼。因为我们在一起，所以失败变得柔和，胜利变得更加甜蜜。在一天结束时，保持健康和积极性是我们所有人的关键。",
						  "resources":{
							 "res1":{
								"text":"创建你的个人发展计划",
								"type":"text"
							 },
							 "res2":{
								"text":"获得认证",
								"type":"text"
							 },
							 "res3":{
								"text":"接收和发放徽章",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  },
			  "pt-BR":{
				 "headertitle":"${csFirstName}, sua viagem de bordo começa aqui!",
				 "headertext":"Parabéns, e bem-vindo a bordo!<br>Estamos entusiasmados por você se juntar a nós e preparamos para você algumas informações úteis antes do Dia 1.<br>>br>Ajuste seu cinto de segurança e deixe a viagem começar!",
				 "videourl":"https://scfiles.csod.com/Baseline/common/welcome_to_cornerstone.mp4",
				 "onbprocess":{
					"title":"O que vem a seguir no embarque",
					"resourceTitle":"Outros recursos e/ou atividades:",
					"imgurl":"url(/clientimg/demogpe/welcome/onb_wp_process.png)",
					"textItem":{
					   "nextstepstext1":{
						  "headline":"Primeiro dia",
						  "text":"Como um novo membro da equipe, você será inicialmente apresentado a seus novos colegas por seu gerente. Seu gerente também o ajudará a compreender nossos processos e sistemas para começar a trabalhar. Agora você já pode começar a se familiarizar, abrindo o Novo Currículo de Contratação abaixo.",
						  "resources":{
							 "res1":{
								"text":"Leia mais sobre está no site de nossa empresa",
								"url":"https://www.cornerstoneondemand.com/company/",
								"type":"url"
							 },
							 "res2":{
								"text":"Siga-nos no LinkedIn",
								"url":"https://www.linkedin.com/company/cornerstone-ondemand",
								"type":"url"
							 },
							 "res3":{
								"text":"Preencha o formulário - Dados de contato pessoal",
								"url":"/phnx/driver.aspx?routename=CustomForm/Create_Change_Contact_Details_002_frm_Edit_1&cfqs=%5e%5e%5ecsAJl9tGgheNnOyu8GlE8K6r80OhoI17mYrdxw86mqqyfExbEIrnU5YTbP2Svv8FgSnRkmhgXTrOE2Vd2J4C48aqSGGgD1Cc954k1FiWNcKwYrNZCkBr%2fm18odFjDYs1Z4IAcqcoia8N%2fvWUbFTIUqTaCUKFX4rcGsnSasW%2fyWcbQKxao12LMJ5qYkoW4wAicBqp5JNtrJ4m4etQV10Xaw%3d%3d",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext2":{
						  "headline":"Primeira semana",
						  "text":"Ser novo no trabalho pode ser estressante, queremos que você entenda claramente as expectativas do trabalho, bem como a cultura da empresa. Acreditamos que isso o ajudará e ao seu desempenho. Seu gerente e/ou mentor o ajudará a se atualizar.",
						  "resources":{
							 "res1":{
								"text":"Percorra seu currículo Onboarding Curriculum",
								"url":"/DeepLink/ProcessRedirect.aspx?module=loRegisterAndLaunch&lo=0ffd0bdc-e67a-4283-bdb1-79b4ab25189e",
								"type":"url"
							 },
							 "res2":{
								"text":"Seja recomendado treinamento para seu papel",
								"url":"/ui/lms-learner-home/home",
								"type":"url"
							 },
							 "res3":{
								"text":"Crie sua própria lista de reprodução junto com seu gerente",
								"url":"/ui/lms-learner-playlist/UsersPlaylists",
								"type":"url"
							 }
						  }
					   },
					   "nextstepstext3":{
						  "headline":"Primeiro mês",
						  "text":"Ao passar tempo junto com seu gerente e/ou mentor, você será capaz de estabelecer metas valiosas apoiando nossa visão/estratégia da empresa. Também teremos um encontro social para todas as novas contratações, onde você será capaz de se conectar com toda a equipe!",
						  "resources":{
							 "res1":{
								"text":"Agendar reuniões regulares de check-in com seu gerente",
								"type":"text"
							 },
							 "res2":{
								"text":"Criar objetivos",
								"type":"text"
							 },
							 "res3":{
								"text":"Divirta-se!",
								"type":"text"
							 }
						  }
					   },
					   "nextstepstext4":{
						  "headline":"Primeiros 6 meses",
						  "text":"Quando você tem sucesso - nós temos sucesso! Nós somos um grupo. Somos uma equipe. Desde o CEO e até agora, somos uma equipe. Ganhamos juntos, perdemos juntos. Celebramos e choramos juntos. E as derrotas são suavizadas e as vitórias são mais doces porque as fizemos juntos. No final do dia - permanecer saudáveis e motivados é a chave para todos nós.",
						  "resources":{
							 "res1":{
								"text":"Crie seu Plano de Desenvolvimento Pessoal",
								"type":"text"
							 },
							 "res2":{
								"text":"Seja certificado",
								"type":"text"
							 },
							 "res3":{
								"text":"Receber e dar crachás",
								"type":"text"
							 }
						  }
					   }
					}
				 }
			  }
		   }
		}
	 ];

	sessionStorage.setItem("gpeGlobalSettings", JSON.stringify(gpeGlobalSettings));
}