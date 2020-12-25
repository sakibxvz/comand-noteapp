const yargs = require("yargs");
const notes = require("./notes");

//Create add command
yargs.command({
	command: "add",
	description: "Add a new note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: "string",
		},
	},
	handler: (argv) => {
		notes.addNote(argv.title, argv.body);
	},
});

//Create remove command
yargs.command({
	command: "remove",
	description: "Remove a note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string",
		},
	},
	handler: (argv) => {
		notes.removeNote(argv.title);
	},
});

//Create list command
yargs.command({
	command: "list",
	description: "List a note",
	handler: () => {
		notes.listNotes();
	},
});

//Create Read command
yargs.command({
	command: "read",
	description: "Read a note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string",
		},
	},
	handler: (argv) => {
		notes.readNote(argv.title);
	},
});

//Customize Yargs Version
yargs.version("1.0.1");

// console.log(yargs.argv);
yargs.parse();
