import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import "../style/index.css";
import { MainMenu, IMainMenu } from "@jupyterlab/mainmenu";
import {
  ITutorialManager,
  TutorialManager
} from "@downie4/jupyterlab-tutorial";

/**
 * Initialization data for the jupyterlab_tutorial_manager extension.
 */
const extension: JupyterFrontEndPlugin<ITutorialManager> = {
  activate,
  autoStart: true,
  id: "@cdat/jupyterlab-tutorial-manager",
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
