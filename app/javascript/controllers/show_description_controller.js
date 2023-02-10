import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="show-description"
export default class extends Controller {
  static targets = ["text"]

  connect() {
    console.log("controller connected")
  }
  show(event) {
    console.log(event);
    this.textTarget.classList.toggle('expanded');
  }
}
