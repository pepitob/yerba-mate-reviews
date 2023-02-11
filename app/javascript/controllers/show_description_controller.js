import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="show-description"
export default class extends Controller {
  static targets = ["text", "button"]

  connect() {
    console.log("controller connected")
  }
  show(event) {
    console.log(event);
    this.textTarget.classList.toggle('expanded');
    if (this.textTarget.classList.contains('expanded')) {
      this.buttonTarget.innerText = 'Show Less';
      this.buttonTarget.classList.toggle('expanded');
    } else {
      this.buttonTarget.innerText = 'Show More';
      this.buttonTarget.classList.toggle('expanded');
    }
  }
}
