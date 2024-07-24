document.getElementById("logout").addEventListener("click", async () => {
  const response = await fetch("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.href = "/login";
  } else {
    const errorMessage = await response.json();
    alert(errorMessage.message || "Logout failed. Please try again.");
  }
});
