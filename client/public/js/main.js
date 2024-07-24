document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const sliderMenu = document.getElementById("slider-menu");
  const addNoteButton = document.getElementById("add-note");
  const saveNoteButton = document.getElementById("save-note");
  const deleteNoteButton = document.getElementById("delete-note");
  const editNoteButton = document.getElementById("edit-note");
  const searchInput = document.getElementById("search");
  const notesList = document.getElementById("notes-list");
  const mainContent = document.querySelector("main");
  const closeSidebar = document.getElementById("close-sidebar");
  const app = document.getElementById("app");

  // Toggle slider menu
  menuIcon.addEventListener("click", () => {
    sliderMenu.classList.toggle("open");
    mainContent.classList.toggle("shrink");
    app.classList.toggle("shrink");
  });

  // Close sidebar
  closeSidebar.addEventListener("click", () => {
    sliderMenu.classList.remove("open");
    mainContent.classList.remove("shrink");
    app.classList.remove("shrink");
  });

  // Close slider menu when clicking outside
  // document.addEventListener("click", (event) => {
  //   if (!sliderMenu.contains(event.target) && event.target !== menuIcon) {
  //     sliderMenu.classList.remove("open");
  //     mainContent.classList.remove("shrink");
  //     app.classList.remove("shrink");
  //   }
  // });

  // Load notes from the server
  const loadNotes = async () => {
    notesList.innerHTML = "";
    try {
      const response = await fetch("/notes");
      const notes = await response.json();

      if (!Array.isArray(notes)) {
        throw new TypeError("Expected an array of notes");
      }

      notes.forEach((note) => {
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.setAttribute("data-id", note.id);
        noteElement.contentEditable = "true";
        noteElement.innerText = note.content;
        noteElement.addEventListener("click", () => selectNote(noteElement));
        notesList.appendChild(noteElement);
      });
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };

  // Save a new note to the server
  const saveNote = async (noteContent) => {
    try {
      const response = await fetch("/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: noteContent }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  // Update an existing note on the server
  const updateNote = async (id, noteContent) => {
    try {
      await fetch(`/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: noteContent }),
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Delete a note from the server
  const deleteNote = async (id) => {
    try {
      await fetch(`/notes/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const selectNote = (noteElement) => {
    document.querySelectorAll(".note").forEach((note) => {
      note.classList.remove("selected");
    });
    noteElement.classList.add("selected");
  };

  // Add a new note
  addNoteButton.addEventListener("click", async () => {
    const newNote = await saveNote("New Note");
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.setAttribute("data-id", newNote.id);
    noteElement.contentEditable = "true";
    noteElement.innerText = "New Note";
    noteElement.addEventListener("click", () => selectNote(noteElement));
    notesList.appendChild(noteElement);
  });

  // Save all notes (this could be used to batch update, but for simplicity, we'll update individually)
  saveNoteButton.addEventListener("click", () => {
    document.querySelectorAll(".note").forEach(async (noteElement) => {
      const id = noteElement.getAttribute("data-id");
      const content = noteElement.innerText;
      await updateNote(id, content);
    });
  });

  // Delete selected note
  deleteNoteButton.addEventListener("click", async () => {
    const selectedNote = document.querySelector(".note.selected");
    if (selectedNote) {
      const id = selectedNote.getAttribute("data-id");
      await deleteNote(id);
      selectedNote.remove();
    } else {
      alert("Please select a note to delete.");
    }
  });

  // Edit selected note (we'll just focus it for editing)
  editNoteButton.addEventListener("click", () => {
    const selectedNote = document.querySelector(".note.selected");
    if (selectedNote) {
      const newContent = prompt("Edit your note:", selectedNote.innerText);
      if (newContent !== null) {
        selectedNote.innerText = newContent;
        const id = selectedNote.getAttribute("data-id");
        updateNote(id, newContent);
      }
    } else {
      alert("Please select a note to edit.");
    }
  });

  // Search notes
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".note").forEach((noteElement) => {
      const content = noteElement.innerText.toLowerCase();
      if (content.includes(query)) {
        noteElement.style.display = "block";
      } else {
        noteElement.style.display = "none";
      }
    });
  });

  // Load notes on page load
  loadNotes();
});
