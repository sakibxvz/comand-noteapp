const chalk = require("chalk");

const fs = require("fs");

const getNotes = () => {
	return console.log("Your Notes............");
};

//ADD note function
const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicateNote = notes.find(function (note) {
		return note.title === title;
  });
  
  debugger

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body,
		});

		saveNotes(notes);
		console.log(chalk.whiteBright.bgGreen("New Note Added"));
	} else {
		console.log(chalk.yellow.inverse("Note Title already Exists"));
	}
};
//Remove note function
const removeNote = (title) => {
	const notes = loadNotes();

	const notesToKepp = notes.filter(function (note) {
		return note.title !== title;
	});

	if (notes.length > notesToKepp.length) {
		console.log(chalk.whiteBright.bgGreen("Note Removed"));
		saveNotes(notesToKepp);
	} else {
		console.log(chalk.whiteBright.bgRed("No note found"));
	}
};

//List notes function
const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.whiteBright.bgGreen("Your Notes"));

	notes.forEach((note) => {
		console.log(note.title);
	});
};

//Read Note List
const readNote = (title) => {
	const notes = loadNotes();

	const notesToRead = notes.find(function (note) {
		return note.title === title;
	});

	if (notesToRead) {
		console.log(chalk.whiteBright.bgGreen(notesToRead.title));
		console.log(chalk.whiteBright.bgGreen(notesToRead.body));
	} else {
		console.log(chalk.yellow.inverse("Note does not Exists"));
	}
}; 

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote,
};
