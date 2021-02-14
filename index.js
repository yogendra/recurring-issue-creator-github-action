const core = require('@actions/core');
const github = require('@actions/github');

try {
  const label = core.getInput("label");
  const frequency = core.getInput("frequency");

  console.log(`label: ${label}, ${frequency}`);
  core.setOutput("issues", "issue-1");

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
