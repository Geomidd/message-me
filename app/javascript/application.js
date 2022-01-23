// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "@doabit/semantic-ui-sass";
import "./controllers";

window.scroll_bottom = function () {
  const messages = $("#messages");
  if (messages.length > 0) {
    messages.scrollTop(messages[0].scrollHeight);
  }
};

function confirmSubmission(event) {
  const button = event.target.querySelector("[data-confirm]");
  const message = button?.dataset?.confirm;

  return new Promise((resolve) => {
    if (!message || confirm(message)) {
      resolve();
    } else {
      event.detail.formSubmission.stop();
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });
}

document.addEventListener("turbo:submit-start", (event) => {
  confirmSubmission(event);
});

$(document).on("turbo:load", function () {
  scroll_bottom();

  // TODO: Make this less hacky
  $("#chat-form").on("submit", function () {
    setTimeout(() => {
      $("#message_body").val("").trigger("focus");
    }, 10);
  });

  // Setup Semantic UI handlers
  // Message dismissal
  $(".message .close").on("click", function () {
    $(this).closest(".message").transition("fade");
  });

  // Dropdown
  $(".ui.dropdown").dropdown();
});
import "./channels";
