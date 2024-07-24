const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: "Error fetching notes" });
  }
};

exports.createNote = async (req, res) => {
  try {
    const { content } = req.body;
    const note = await Note.create({ content });
    res.status(201).json(note);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: "Error creating note" });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    await Note.update({ content }, { where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Error updating note" });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Error deleting note" });
  }
};
