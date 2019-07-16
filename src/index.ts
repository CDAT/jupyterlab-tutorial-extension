import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import "../style/index.css";
import { MainMenu, IMainMenu } from "@jupyterlab/mainmenu";
import {
  ITutorialManager,
  TutorialManager
} from "jupyterlab-tutorial";

/**
 * Initialization data for the jupyterlab-tutorial extension.
 */
const extension: JupyterFrontEndPlugin<ITutorialManager> = {
  activate,
  autoStart: true,
  id: "@cdat/jupyterlab-tutorial-extension:plugin",
  requires: [IMainMenu],
  provides: ITutorialManager
};

function activate(app: JupyterFrontEnd, menu: MainMenu): ITutorialManager {
  // Create tutorial manager
  const tutorialManager = new TutorialManager(app, menu);

  app.started.then(() => {
    // Attach the widget to the main work area if it's not there
    if (!tutorialManager.isAttached) {
      app.shell.add(tutorialManager, "main");
    }
  });

  return tutorialManager;
}

export default extension;
