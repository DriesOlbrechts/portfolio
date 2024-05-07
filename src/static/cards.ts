import { Tags } from "./tags";
import Card from "../models/card"
export const enum Categories {
    WEBDEV,
    TERMINAL,
    OTHER,
}
export const Cards: Card[] = [
    {
        title: "Ruest client",
        description: "TUI Rest client in Rust, project with friends.",
        tags: [Tags.rust],
        category: Categories.TERMINAL,
        link: 'https://github.com/DrunkenToast/ruest-client',
    },
    {
        title: "Portfolio",
        description: "Website portfolio, you're looking at it!",
        tags: [Tags.vue, Tags.typescript, Tags.vite],
        category: Categories.WEBDEV,
        link: "https://github.com/DriesOlbrechts/portfolio"
    },
    {
        title: "Evaluator",
        description: "Discord bot for evaluating code snippets.",
        tags: [Tags.node, Tags.docker],
        category: Categories.OTHER,
        link: "https://github.com/DriesOlbrechts/Evaluator"
    },
    {
        title: "Vlotcoaching website",
        description: "Website for vlotcoaching.",
        tags: [Tags.angular, Tags.typescript],
        category: Categories.WEBDEV,
        link: "https://www.vlotcoaching.be"
    },
    {
        title: "Motd",
        description: "Rust program that shows time and weather info at the top of your terminal.",
        tags: [Tags.rust],
        category: Categories.TERMINAL,
        link: "https://github.com/DriesOlbrechts/motd"
    },
    {
        title: "Webshop",
        description: "Webshop with PHP and MySQL.",
        tags: [Tags.php, Tags.mysql],
        category: Categories.WEBDEV,
        link: "https://github.com/DriesOlbrechts/webshop"
    },
    {
        title: "Tirecenter",
        description: "School project CLI to manage a tirecenter. Focused on learning Object Oriented Programming in C++.",
        tags: [Tags.cpp],
        category: Categories.TERMINAL,
        link: "https://github.com/DriesOlbrechts/oop-project"
    },
    {
        title: "Foodchecker",
        description: "An android app that provides information about scanned barcodes.",
        tags: [Tags.kotlin],
        category: Categories.OTHER,
        link: "https://github.com/DriesOlbrechts/app-dev-project"
    },
	{
		title: "Dotfiles",
		description: "The config files for my entire setup are public.",
		tags: [Tags.neovim, Tags.shell, Tags.lua],
		category: Categories.OTHER, 
		link: "https://github.com/DriesOlbrechts/.dotfiles"
	}
]


