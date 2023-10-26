module.exports = {
	title: 'Hello S.D.C',
	description: 'Just playing around',
	head: [['link', { rel: 'icon', href: '/icon.jpg' }]],
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '指南', link: '/zh/start/' },
			// { text: 'Github', link: 'https://github.com' },
		],
		sidebar: [
			{
				title: '新手引导',
				collapsable: false,
				sidebarDepth: 1,
				children: ['/zh/start/','/zh/install/'],
			},
			{
				title: '经验分享',
				collapsable: false,
				children: [],
			},
		],
		smoothScroll: true,
		repo: 'vue/vuepress',
		repoLabel: 'Github',
		lastUpdated: '上次更新',
		editLinks: true,
		editLinkText: '在Github上编辑此页'
	},

	plugins: [['vuepress-plugin-nprogress', { hotReload: true }]],
};
