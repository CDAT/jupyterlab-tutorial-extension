import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab_tutorial_ext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_tutorial_ext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_tutorial_ext is activated!');
  }
};

export default extension;
