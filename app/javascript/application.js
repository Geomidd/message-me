// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "@doabit/semantic-ui-sass";
import "./controllers";

$(".message .close").on("click", function () {
  $(this).closest(".message").transition("fade");
});
