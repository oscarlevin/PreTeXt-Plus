import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["helpButton", "helpMenu", "notification"]

  connect() {
    // Handle click-outside-to-close for help menu
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  disconnect() {
    document.removeEventListener("click", this.handleClickOutside)
  }

  toggleHelpMenu(event) {
    event.preventDefault()
    this.helpMenuTarget.classList.toggle("hidden")
    
    // Add listener for closing when clicking outside
    if (!this.helpMenuTarget.classList.contains("hidden")) {
      document.addEventListener("click", this.handleClickOutside)
    } else {
      document.removeEventListener("click", this.handleClickOutside)
    }
  }

  handleClickOutside(event) {
    const helpButton = this.helpButtonTarget.parentElement
    if (!helpButton.contains(event.target)) {
      this.helpMenuTarget.classList.add("hidden")
      document.removeEventListener("click", this.handleClickOutside)
    }
  }

  dismissNotification(event) {
    event.currentTarget.closest("[data-controller='navbar'][data-navbar-target='notification']")?.remove()
  }
}
