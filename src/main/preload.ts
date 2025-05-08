// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {contextBridge} from 'electron';

contextBridge.exposeInMainWorld('versions', {
  node: ()=> process.versions.node,
  chrome: ()=> process.versions.chrome,
});

contextBridge.exposeInMainWorld('api', {
  getTest: () => {
    console.log('test');
  },
})
