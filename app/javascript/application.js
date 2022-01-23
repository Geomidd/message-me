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
