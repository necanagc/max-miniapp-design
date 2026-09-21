window.MOCK_DATA = {
	user_context: {
		user: {
			id: "11111111-1111-4111-8111-111111111111",
			max_user_id: "123456789",
			display_name: "Олег Петров",
			username: "oleg_petrov",
			created_at: "2026-09-19T09:00:00Z",
			updated_at: "2026-09-19T09:00:00Z"
		},
		houses: [{
			id: "22222222-2222-4222-8222-222222222222",
			name: "ЖК «Ленина, 25»",
			address: "ул. Ленина, 25",
			city: "Москва"
		}],
		memberships: [{
			id: "33333333-3333-4333-8333-333333333333",
			user_id: "11111111-1111-4111-8111-111111111111",
			house_id: "22222222-2222-4222-8222-222222222222",
			role: "RESIDENT",
			status: "ACTIVE"
		}],
		default_house_id: "22222222-2222-4222-8222-222222222222",
		active_house_id: "22222222-2222-4222-8222-222222222222"
	},
	issues: [
		{
			id: "44444444-4444-4444-8444-444444444444",
			house_id: "22222222-2222-4222-8222-222222222222",
			created_by: "11111111-1111-4111-8111-111111111111",
			house_address_snapshot: "ул. Ленина, 25",
			category: "INFRASTRUCTURE",
			description: "Фонарь возле второго подъезда не работает уже несколько дней. В тёмное время суток территория плохо освещена.",
			location_text: "Возле второго подъезда",
			status: "CONFIRMING",
			confirmations_count: 18,
			created_at: "2026-09-19T06:34:00Z",
			updated_at: "2026-09-19T07:12:00Z",
			resolved_at: null,
			confirmed_by_me: false,
			attachments: [
				{ id: "55555555-5555-4555-8555-555555555555", original_filename: "street-light.jpg", mime_type: "image/jpeg", size_bytes: 250000, status: "ATTACHED", url: "" }
			],
			timeline: [
				{ type: "issue.created", actor_user_id: "11111111-1111-4111-8111-111111111111", payload: {}, created_at: "2026-09-19T06:34:00Z" },
				{ type: "issue.confirmed", actor_user_id: "11111111-1111-4111-8111-111111111111", payload: { confirmations_count: 18 }, created_at: "2026-09-19T07:05:00Z" },
				{ type: "issue.status_changed", actor_user_id: "11111111-1111-4111-8111-111111111111", payload: { new_status: "CONFIRMING" }, created_at: "2026-09-19T07:12:00Z" }
			],
			latest_statement: {
				id: "66666666-6666-4666-8666-666666666666",
				issue_id: "44444444-4444-4444-8444-444444444444",
				version: 1,
				status: "DRAFT",
				body: "Обращение по проблеме многоквартирного дома. Просим рассмотреть вопрос и принять меры.",
				chairman_note: "Электрик уже уведомлён. Планируем устранить неисправность завтра утром.",
				source_snapshot: { house_address: "ул. Ленина, 25", category: "INFRASTRUCTURE", confirmations_count: 18 }
			}
		},
		{
			id: "77777777-7777-4777-8777-777777777777",
			house_id: "22222222-2222-4222-8222-222222222222",
			created_by: "88888888-8888-4888-8888-888888888888",
			house_address_snapshot: "ул. Ленина, 25",
			category: "CLEANLINESS",
			description: "Контейнеры переполнены, мусор не вывозили два дня.",
			location_text: "Площадка у первого подъезда",
			status: "DETECTED",
			confirmations_count: 7,
			created_at: "2026-09-18T08:00:00Z",
			updated_at: "2026-09-18T08:00:00Z",
			resolved_at: null,
			confirmed_by_me: false,
			attachments: [],
			timeline: []
		},
		{
			id: "99999999-9999-4999-8999-999999999999",
			house_id: "22222222-2222-4222-8222-222222222222",
			created_by: "11111111-1111-4111-8111-111111111111",
			house_address_snapshot: "ул. Ленина, 25",
			category: "INFRASTRUCTURE",
			description: "Детская площадка отремонтирована.",
			location_text: "Двор",
			status: "RESOLVED",
			confirmations_count: 24,
			created_at: "2026-09-05T08:00:00Z",
			updated_at: "2026-09-12T08:00:00Z",
			resolved_at: "2026-09-12T08:00:00Z",
			confirmed_by_me: true,
			attachments: [],
			timeline: []
		}
	],
	announcements: [
		{ id: "aaaaaaa1-aaaa-4aaa-8aaa-aaaaaaaaaaaa", house_id: "22222222-2222-4222-8222-222222222222", author_user_id: "11111111-1111-4111-8111-111111111111", title: "Плановое отключение горячей воды", body: "12 июня с 09:00 до 18:00 будут проводиться работы на магистральном трубопроводе.", status: "PUBLISHED", published_at: "2026-09-19T06:30:00Z", important: true },
		{ id: "aaaaaaa2-aaaa-4aaa-8aaa-aaaaaaaaaaaa", house_id: "22222222-2222-4222-8222-222222222222", author_user_id: "11111111-1111-4111-8111-111111111111", title: "Субботник во дворе", body: "Приглашаем жителей принять участие в благоустройстве территории в эту субботу.", status: "PUBLISHED", published_at: "2026-09-18T06:30:00Z", important: false },
		{ id: "aaaaaaa3-aaaa-4aaa-8aaa-aaaaaaaaaaaa", house_id: "22222222-2222-4222-8222-222222222222", author_user_id: "11111111-1111-4111-8111-111111111111", title: "Установлены новые камеры наблюдения", body: "Завершён монтаж камер возле парковки и детской площадки.", status: "PUBLISHED", published_at: "2026-09-16T06:30:00Z", important: false }
	],
	polls: [{
		id: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
		house_id: "22222222-2222-4222-8222-222222222222",
		author_user_id: "11111111-1111-4111-8111-111111111111",
		question: "Установить дополнительное освещение во дворе?",
		status: "OPEN",
		options: [{ id: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb", text: "Да", position: 0 }, { id: "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee", text: "Нет", position: 1 }],
		results: [{ option_id: "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb", votes_count: 12 }, { option_id: "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee", votes_count: 3 }],
		total_votes: 15,
		my_option_id: null,
		ends_at: "2026-09-25T18:00:00Z"
	}],
	calendar_events: [{ id: "cccccccc-cccc-4ccc-8ccc-cccccccccccc", house_id: "22222222-2222-4222-8222-222222222222", created_by: "11111111-1111-4111-8111-111111111111", title: "Собрание жильцов", description: "Обсуждение благоустройства.", starts_at: "2026-09-25T18:00:00Z", ends_at: "2026-09-25T19:00:00Z" }],
	initiatives: [{ id: "dddddddd-dddd-4ddd-8ddd-dddddddddddd", house_id: "22222222-2222-4222-8222-222222222222", author_user_id: "11111111-1111-4111-8111-111111111111", title: "Велопарковка", description: "Установить велопарковку у подъезда.", status: "OPEN", supports_count: 0, supported_by_me: false }]
};

const mockData = window.MOCK_DATA;
const categoryLabels = { INFRASTRUCTURE: "Инфраструктура", CLEANLINESS: "Чистота", SAFETY: "Безопасность", UTILITIES: "Коммунальные услуги", OTHER: "Другое" };
const statusLabels = { DETECTED: "Новая", CONFIRMING: "На проверке", READY_FOR_APPEAL: "Готово к обращению", HANDED_TO_CHAIRMAN: "У председателя", MARKED_SENT: "Передано", WAITING_RESULT: "Ожидает решения", RESOLVED: "Решено" };
const membershipStatusLabels = { ACTIVE: "Активный", INACTIVE: "Неактивный" };
const roleLabels = { RESIDENT: "Житель", CHAIRMAN: "Председатель", ADMIN: "Администратор" };
const communityTypeLabels = { poll: "Опрос", calendarEvent: "Событие календаря", initiative: "Инициатива" };
const communityStatusLabels = {
	poll: { OPEN: "Открыт", CLOSED: "Закрыт", DRAFT: "Черновик" },
	initiative: { OPEN: "Открыта", CLOSED: "Закрыта", DRAFT: "Черновик" }
};

const translateCommunityStatus = (type, status) => communityStatusLabels[type]?.[status] || status || "";

const formatDate = (value) => new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(new Date(value));
const issueTitle = (issue) => issue.category === "CLEANLINESS" ? "Переполнены мусорные контейнеры" : issue.status === "RESOLVED" ? "Отремонтирована детская площадка" : "Не работает освещение возле второго подъезда";
const context = mockData.user_context;
const activeHouse = context.houses.find((house) => house.id === context.active_house_id) || context.houses[0];
const membership = context.memberships.find((item) => item.house_id === activeHouse.id) || context.memberships[0];

function setText(selector, value, root = document) {
	const element = root.querySelector(selector);
	if (element) element.textContent = value;
}

function renderContractIdentity() {
	const user = context.user;
	[...document.querySelectorAll(".profile-section")].filter((section) => ["Полезные контакты", "Моя активность", "О приложении"].some((title) => section.textContent.includes(title))).forEach((section) => section.remove());
	const personalRows = document.querySelectorAll(".profile-section .info-card")[0]?.querySelectorAll(".info-row");
	if (personalRows?.[0]) personalRows[0].querySelector("span").textContent = "Имя пользователя";
	if (personalRows?.[1]) personalRows[1].querySelector("span").textContent = "Роль";
	if (personalRows?.[2]) personalRows[2].querySelector("span").textContent = "Статус членства";
	if (personalRows?.[3]) personalRows[3].querySelector("span").textContent = "Идентификатор Membership";
	setText(".profile-card h2", user.display_name);
	setText(".profile-card p", `MAX ID · ${user.max_user_id}`);
	setText(".profile-card .trust-badge", membership.status === "ACTIVE" ? "Подтверждённый пользователь" : "Пользователь не подтверждён");
	if (personalRows?.[0]) personalRows[0].querySelector("strong").textContent = user.username;
	if (personalRows?.[1]) personalRows[1].querySelector("strong").textContent = roleLabels[membership.role] || membership.role;
	if (personalRows?.[2]) personalRows[2].querySelector("strong").textContent = membershipStatusLabels[membership.status] || membership.status;
	if (personalRows?.[3]) personalRows[3].querySelector("strong").textContent = membership.id;
	const houseRows = document.querySelectorAll(".profile-section .info-card")[1]?.querySelectorAll(".info-row");
	const houseLabels = ["Адрес", "Дом", "Город", "Идентификатор дома", "Идентификатор Membership"];
	houseRows?.forEach((row, index) => {
		if (houseLabels[index]) row.querySelector("span").textContent = houseLabels[index];
	});
	if (houseRows?.[0]) houseRows[0].querySelector("strong").textContent = activeHouse.address;
	if (houseRows?.[1]) houseRows[1].querySelector("strong").textContent = activeHouse.name;
	if (houseRows?.[2]) houseRows[2].querySelector("strong").textContent = activeHouse.city;
	if (houseRows?.[3]) houseRows[3].querySelector("strong").textContent = activeHouse.id;
	if (houseRows?.[4]) houseRows[4].querySelector("strong").textContent = membership.id;
}

function renderChairmanDashboard() {
	const counts = {
		detected: mockData.issues.filter((issue) => issue.status === "DETECTED").length,
		active: mockData.issues.filter((issue) => !["DETECTED", "RESOLVED"].includes(issue.status)).length,
		waiting: mockData.issues.filter((issue) => issue.status === "WAITING_RESULT").length,
		members: context.memberships.filter((item) => item.status === "ACTIVE").length
	};
	document.querySelectorAll(".stats-grid .stat-card").forEach((card, index) => {
		const values = [counts.detected, counts.active, counts.waiting, counts.members];
		const value = card.querySelector("strong");
		if (value) value.textContent = values[index];
	});
	document.querySelectorAll(".attention-card").forEach((card, index) => {
		const issue = mockData.issues[index];
		if (!issue) return;
		setText("h3", issueTitle(issue), card);
		setText("p", `${issue.confirmations_count} подтверждений · ${statusLabels[issue.status]}`, card);
	});
}

function renderResidents() {
	const list = document.querySelector(".residents-list");
	if (!list) return;
	const user = context.user;
	list.innerHTML = `<a href="resident.html" class="resident-card"><div class="resident-avatar">ОП</div><div class="resident-main"><h3>${user.display_name}</h3><p>Идентификатор MAX ${user.max_user_id} · ${roleLabels[membership.role] || membership.role}</p></div><div class="resident-status ${membership.status === "ACTIVE" ? "active" : "restricted"}">${membershipStatusLabels[membership.status] || membership.status}</div><i data-lucide="chevron-right"></i></a>`;
}

function renderResidentDetails() {
	const user = context.user;
	[...document.querySelectorAll(".profile-section")].filter((section) => ["Статистика", "Последние обращения", "Ограничение пользователя", "История ограничений"].some((title) => section.textContent.includes(title))).forEach((section) => section.remove());
	setText("header h1", user.display_name);
	setText(".profile-card h2", user.display_name);
	setText(".profile-card p", `MAX ID · ${user.max_user_id}`);
	setText(".profile-card .trust-badge", membership.status === "ACTIVE" ? "Подтверждённый пользователь" : "Пользователь не подтверждён");
	const infoSection = [...document.querySelectorAll(".profile-section")].find((section) => section.querySelector("h2")?.textContent.includes("Информация"));
	const rows = infoSection?.querySelectorAll(".info-row");
	const labels = ["Имя пользователя", "Идентификатор MAX", "Роль", "Идентификатор Membership"];
	rows?.forEach((row, index) => {
		if (labels[index]) row.querySelector("span").textContent = labels[index];
	});
	if (rows?.[0]) rows[0].querySelector("strong").textContent = user.username;
	if (rows?.[1]) rows[1].querySelector("strong").textContent = user.max_user_id;
	if (rows?.[2]) rows[2].querySelector("strong").textContent = roleLabels[membership.role] || membership.role;
	if (rows?.[3]) rows[3].querySelector("strong").textContent = membership.id;
}

function renderSettings() {
	setText("header h1", activeHouse.name);
	[...document.querySelectorAll(".profile-section")].slice(0, 2).forEach((section) => section.remove());
	const rows = document.querySelectorAll(".profile-section .info-card .info-row");
	const labels = ["Адрес", "House ID", "Город"];
	const values = [activeHouse.address, activeHouse.id, activeHouse.city];
	rows.forEach((row, index) => {
		if (labels[index]) row.querySelector("span").textContent = labels[index];
		if (values[index]) row.querySelector("strong").textContent = values[index];
	});
	const houseSection = document.querySelector(".profile-section");
	if (houseSection) houseSection.insertAdjacentHTML("beforeend", "<p class=\"hint\">Настройки ролей, контактов и уведомлений не входят в утверждённый API-контракт v1.</p>");
}

function renderLogs() {
	const main = document.querySelector("main");
	if (!main) return;
	const eventLabels = {
		"issue.created": "Создано новое обращение",
		"issue.confirmed": "Обращение подтверждено",
		"issue.status_changed": "Статус обращения обновлён",
		"announcement.created": "Опубликовано объявление"
	};
	const events = [
		...mockData.issues[0].timeline.map((event) => ({
			title: eventLabels[event.type] || event.type,
			detail: `${issueTitle(mockData.issues[0])} · ${formatDate(event.created_at)}`,
			icon: "triangle-alert"
		})),
		...mockData.announcements.map((announcement) => ({
			title: "Опубликовано объявление",
			detail: announcement.title,
			icon: "megaphone"
		}))
	];
	const section = document.createElement("section");
	section.className = "logs-day";
	section.innerHTML = `<h2>Сегодня</h2>${events.map((event) => `<div class="log-card"><div class="log-icon"><i data-lucide="${event.icon}"></i></div><div class="log-content"><h3>${event.title}</h3><p>${event.detail}</p></div></div>`).join("")}`;
	main.querySelectorAll(".logs-day").forEach((element) => element.remove());
	main.appendChild(section);
}

function renderAnnouncement() {
	const form = document.querySelector(".announcement-form");
	if (!form) return;
	[...form.querySelectorAll(".form-block")].filter((block) => block.textContent.includes("Тип объявления") || block.textContent.includes("Фотографии")).forEach((block) => block.remove());
	const title = form.querySelector("input.text-input");
	const body = form.querySelector("textarea");
	const submit = form.querySelector(".submit-btn");
	if (!submit) return;
	submit.addEventListener("click", (event) => {
		event.preventDefault();
		mockData.announcements.unshift({ id: "draft-announcement", house_id: activeHouse.id, author_user_id: context.user.id, title: title.value || "Новое объявление", body: body.value || "", status: "PUBLISHED", published_at: new Date().toISOString() });
		window.location.href = "../../pages/news/index.html";
	});
}

function renderCommunity() {
	const root = document.querySelector("[data-community]");
	if (!root) return;
	const poll = mockData.polls[0];
	const event = mockData.calendar_events[0];
	const initiative = mockData.initiatives[0];
	root.innerHTML = `<section class="community-section"><div class="community-kicker">${communityTypeLabels.poll} · ${translateCommunityStatus("poll", poll.status)}</div><h2>${poll.question}</h2><div class="poll-options">${poll.options.map((option) => `<button class="poll-option ${poll.my_option_id === option.id ? "selected" : ""}" data-option-id="${option.id}"><span>${option.text}</span><strong>${poll.results.find((result) => result.option_id === option.id)?.votes_count || 0}</strong></button>`).join("")}</div><p class="community-meta">${poll.total_votes} голосов · до ${formatDate(poll.ends_at)} · ${poll.my_option_id ? "Ваш голос учтён" : "Выберите вариант"}</p></section><section class="community-section"><div class="community-kicker">${communityTypeLabels.calendarEvent}</div><h2>${event.title}</h2><p>${event.description}</p><p class="community-meta">${formatDate(event.starts_at)} · ${event.starts_at.slice(11, 16)}–${event.ends_at.slice(11, 16)}</p></section><section class="community-section"><div class="community-kicker">${communityTypeLabels.initiative} · ${translateCommunityStatus("initiative", initiative.status)}</div><h2>${initiative.title}</h2><p>${initiative.description}</p><p class="community-meta">${initiative.supports_count} поддержек · ${initiative.supported_by_me ? "поддержано вами" : "ещё не поддержано"}</p><button class="secondary-btn initiative-support" ${initiative.supported_by_me ? "disabled" : ""}>${initiative.supported_by_me ? "Поддержано" : "Поддержать инициативу"}</button></section>`;
	root.querySelectorAll("[data-option-id]").forEach((button) => button.addEventListener("click", () => {
		if (poll.my_option_id) return;
		poll.my_option_id = button.dataset.optionId;
		poll.total_votes += 1;
		poll.results.find((result) => result.option_id === poll.my_option_id).votes_count += 1;
		renderCommunity();
	}));
	root.querySelector(".initiative-support")?.addEventListener("click", () => {
		if (initiative.supported_by_me) return;
		initiative.supported_by_me = true;
		initiative.supports_count += 1;
		renderCommunity();
	});
}

function renderHome() {
	const context = mockData.user_context;
	const house = context.houses[0];
	const heading = document.querySelector("header h1");
	const houseName = document.querySelector(".house-card h2");
	if (heading) heading.textContent = house.address;
	if (houseName) houseName.textContent = house.name;
	const houseMeta = document.querySelector(".house-meta");
	if (houseMeta) houseMeta.innerHTML = `<span>${house.city}</span><span>${membershipStatusLabels[membership.status] || membership.status} · ${roleLabels[membership.role] || membership.role}</span>`;
	setText(".house-card p", membership.status === "ACTIVE" ? "Активное членство" : "Членство неактивно");
	document.querySelectorAll(".update").forEach((element, index) => {
		const announcement = mockData.announcements[index];
		if (!announcement) return;
		const title = element.querySelector("strong");
		const date = element.querySelector("p");
		if (title) title.textContent = announcement.title;
		if (date) date.textContent = formatDate(announcement.published_at);
	});
	document.querySelectorAll(".issues-list .issue-card").forEach((element, index) => {
		const issue = mockData.issues[index];
		if (!issue) return;
		const title = element.querySelector("h3");
		const meta = element.querySelector("p");
		if (title) title.textContent = issueTitle(issue);
		if (meta) meta.textContent = `${statusLabels[issue.status]} · ${issue.confirmations_count} подтверждений`;
		const marker = element.querySelector(".status");
		if (marker) marker.className = `status ${issue.status === "RESOLVED" ? "status-done" : issue.status === "DETECTED" ? "status-open" : "status-progress"}`;
	});
}

function renderProblems() {
	document.querySelectorAll(".issues-list .issue-card").forEach((element, index) => {
		const issue = mockData.issues[index];
		if (!issue) return;
		const category = element.querySelector(".issue-category");
		const title = element.querySelector("h3");
		const address = element.querySelector(".issue-content p");
		const meta = element.querySelector(".issue-meta-row");
		if (category) category.textContent = categoryLabels[issue.category];
		if (title) title.textContent = issueTitle(issue);
		if (address) address.textContent = `${issue.house_address_snapshot} · ${issue.location_text}`;
		if (meta) meta.innerHTML = `<span>${issue.confirmations_count} подтверждений</span><span>${formatDate(issue.created_at)}</span>`;
		const marker = element.querySelector(".status");
		if (marker) marker.className = `status ${issue.status === "RESOLVED" ? "status-done" : issue.status === "DETECTED" ? "status-open" : "status-progress"}`;
	});
}

function renderNews() {
	document.querySelectorAll(".news-card").forEach((element, index) => {
		const announcement = mockData.announcements[index];
		if (!announcement) return;
		const title = element.querySelector("h3");
		const body = element.querySelector("p");
		const date = element.querySelector(".news-date");
		const badge = element.querySelector(".news-badge");
		if (title) title.textContent = announcement.title;
		if (body) body.textContent = announcement.body;
		if (date) date.textContent = formatDate(announcement.published_at);
		if (badge) badge.textContent = announcement.important ? "Важно" : "Информация";
	});
	document.querySelectorAll(".news-card .attachment").forEach((attachment) => attachment.remove());
}

function renderIssue(isChairman) {
	const issue = mockData.issues[0];
	const details = document.querySelector(".issue-header");
	if (!details) return;
	const title = details.querySelector("h2");
	const category = details.querySelector(".category-badge");
	const address = details.querySelector("p");
	const meta = details.querySelector(".issue-meta");
	const status = details.querySelector(".status-badge span");
	if (title) title.textContent = issueTitle(issue);
	if (category) category.textContent = categoryLabels[issue.category];
	if (address) address.textContent = `${issue.house_address_snapshot} · ${issue.location_text}`;
	if (status) status.textContent = statusLabels[issue.status];
	if (meta) meta.innerHTML = `<span>Создано ${formatDate(issue.created_at)}</span><span>Обновлено ${formatDate(issue.updated_at)}</span>`;
	const description = [...document.querySelectorAll(".issue-block p")].find((element) => element.textContent.includes("Фонарь") || element.textContent.includes("территория"));
	if (description) description.textContent = issue.description;
	const confirmation = [...document.querySelectorAll(".issue-block")].find((element) => element.textContent.includes("Подтверждения"));
	if (confirmation) {
		const count = confirmation.querySelector("strong");
		if (count) count.textContent = `${issue.confirmations_count} жителей`;
	}
	if (isChairman) {
		const stats = document.querySelectorAll(".resident-stat-grid .resident-stat");
		if (stats[0]) { stats[0].querySelector("strong").textContent = statusLabels[issue.status]; stats[0].querySelector("span").textContent = "Статус"; }
		if (stats[1]) { stats[1].querySelector("strong").textContent = issue.confirmations_count; stats[1].querySelector("span").textContent = "Подтверждений"; }
		const assignee = [...document.querySelectorAll(".issue-block")].find((element) => element.textContent.includes("Исполнитель"));
		if (assignee) assignee.remove();
		const author = [...document.querySelectorAll(".issue-block")].find((element) => element.textContent.includes("Автор обращения"));
		if (author) {
			const authorInfo = author.querySelector(".resident-info");
			if (authorInfo?.querySelector("strong")) authorInfo.querySelector("strong").textContent = context.user.display_name;
			if (authorInfo?.querySelector("p")) authorInfo.querySelector("p").textContent = `MAX ID · ${context.user.max_user_id}`;
			author.querySelector(".resident-stats")?.remove();
		}
		const comment = [...document.querySelectorAll(".issue-block")].find((element) => element.textContent.includes("Комментарий председателя"));
		if (comment && issue.latest_statement) {
			comment.querySelector("h3").textContent = `Заметка председателя · StatementDraft v${issue.latest_statement.version}`;
			comment.querySelector("textarea").value = issue.latest_statement.chairman_note;
		}
		const actions = document.querySelector(".actions-column");
		if (actions) actions.innerHTML = ["READY_FOR_APPEAL", "HANDED_TO_CHAIRMAN", "WAITING_RESULT", "RESOLVED"].map((status) => `<button class="action-btn ${status === "RESOLVED" ? "success" : "primary"}">${statusLabels[status]}</button>`).join("");
	}
	else {
		[...document.querySelectorAll(".issue-block")].filter((element) => element.textContent.includes("Комментарий председателя") || element.textContent.includes("Исполнитель")).forEach((element) => element.remove());
		const viewNote = [...document.querySelectorAll(".confirm-note")].find((element) => element.textContent.includes("Просмотров"));
		if (viewNote) viewNote.remove();
	}
	const attachmentBlock = document.querySelector(".issue-photo");
	if (attachmentBlock && issue.attachments.length) {
		attachmentBlock.innerHTML = `<div class="photos-grid">${issue.attachments.map((attachment) => `<div class="photo-item attachment-preview">${attachment.url ? `<img src="${attachment.url}" alt="${attachment.original_filename}">` : `<i data-lucide="file-image"></i>`}<span class="attachment-label">${attachment.original_filename} · ${attachment.status}</span></div>`).join("")}</div>`;
	}
	if (isChairman && issue.latest_statement) {
		const block = document.createElement("section");
		block.className = "issue-block contract-statement";
		block.innerHTML = `<h3>Черновик заявления · версия ${issue.latest_statement.version}</h3><p>${issue.latest_statement.body}</p><p class="confirm-note">${issue.latest_statement.chairman_note}</p>`;
		document.querySelector("main").appendChild(block);
	}
	const timeline = document.querySelector(".timeline");
	if (timeline && issue.timeline.length) {
		timeline.innerHTML = issue.timeline.map((event) => `<div class="timeline-item"><div class="timeline-dot active"></div><div><strong>${event.type}</strong><p>${formatDate(event.created_at)}${event.payload.new_status ? ` · ${statusLabels[event.payload.new_status]}` : event.payload.confirmations_count ? ` · ${event.payload.confirmations_count} подтверждений` : ""}</p></div></div>`).join("");
	}
}

function renderCreate() {
	const address = document.querySelector(".create-form .text-input");
	if (address) address.value = activeHouse.address;
	const category = document.querySelector(".create-form select");
	if (category) category.innerHTML = Object.entries(categoryLabels).map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
	const form = document.querySelector(".create-form");
	const submit = document.querySelector(".create-form .submit-btn");
	if (!form || !submit) return;
	submit.addEventListener("click", (event) => {
		event.preventDefault();
		const description = form.querySelector("textarea").value.trim() || "Новая проблема дома";
		const issue = { category: category.value, description, location_text: activeHouse.address, attachment_ids: [] };
		window.MOCK_DATA.issues.unshift({ ...issue, id: "draft-issue", house_id: activeHouse.id, created_by: context.user.id, house_address_snapshot: activeHouse.address, status: "DETECTED", confirmations_count: 0, created_at: new Date().toISOString(), updated_at: new Date().toISOString(), resolved_at: null, confirmed_by_me: false, attachments: [], timeline: [] });
		window.location.href = "../issue/index.html";
	});
}

function renderHomeCommunityLink() {
	const issues = document.querySelector(".issues");
	if (!issues || document.querySelector(".home-community-link")) return;
	const section = document.createElement("section");
	section.className = "home-community-link";
	section.innerHTML = `<div class="section-title"><h2>Сообщество</h2><a href="pages/community/index.html">Все</a></div><a class="community-link-card" href="pages/community/index.html"><div><strong>${mockData.polls[0].question}</strong><p>${mockData.polls[0].total_votes} голосов · ${mockData.calendar_events[0].title}</p></div><i data-lucide="chevron-right"></i></a>`;
	issues.after(section);
}

function render() {
	const path = window.location.pathname;
	if (path.endsWith("/index.html") || path.endsWith("/")) {
		if (path.includes("/problems/")) renderProblems();
		else if (path.includes("/news/")) renderNews();
		else if (path.includes("/issue/")) renderIssue(false);
		else if (path.endsWith("/index.html") && document.querySelector(".house-card")) renderHome();
	}
	if (path.includes("/chairman/issue.html")) renderIssue(true);
	if (path.includes("/chairman/index.html")) renderChairmanDashboard();
	if (path.includes("/chairman/residents.html")) renderResidents();
	if (path.includes("/chairman/resident.html")) renderResidentDetails();
	if (path.includes("/chairman/settings.html")) renderSettings();
	if (path.includes("/chairman/logs.html")) renderLogs();
	if (path.includes("/chairman/announcement.html")) renderAnnouncement();
	if (path.includes("/profile/index.html")) renderContractIdentity();
	if (path.includes("/create/index.html")) renderCreate();
	if (path.includes("/community/index.html")) renderCommunity();
	if (path === "/" || path.endsWith("/index.html") && document.querySelector(".house-card")) renderHomeCommunityLink();
}

document.addEventListener("DOMContentLoaded", render);
