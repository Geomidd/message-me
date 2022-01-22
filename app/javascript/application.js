// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "@doabit/semantic-ui-sass";
import "./controllers";

$(document).on("turbo:load", function () {
  // Setup Semantic UI handlers
  // Message dismissal
  $(".message .close").on("click", function () {
    $(this).closest(".message").transition("fade");
  });

  // Dropdown
  $(".ui.dropdown").dropdown();
});
