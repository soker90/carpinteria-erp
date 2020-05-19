import React from 'react';

import {story as MySnackbarContentWrapper} from './components/MySnackbarContentWrapper';

export default {
  title: 'Componentes|Notificaciones',
  parameters: {
    component: MySnackbarContentWrapper,
  },
};

const Success = () => <MySnackbarContentWrapper variant='success' message='Correcto'/>;

Success.story = {
  name: 'Correcta',
  parameters: {docs: {storyDescription: 'Muestra al usuario un mensaje indicando que su acción ha sido realizada correctamente.'}},
};

const Warning = () => <MySnackbarContentWrapper variant='warning' message='Advertencia'/>;

Warning.story = {
  name: 'Advertencia',
  parameters: {docs: {storyDescription: 'Advierte al usuario sobre algo que debe conocer antes de realizar una acción.'}},
};

const Error = () => <MySnackbarContentWrapper variant='error' message='Error'/>;

Error.story = {
  name: 'Error',
  parameters: {docs: {storyDescription: 'Muestra al usuario un mensaje indicando que su acción no ha podido realizarse.'}},
};

const Info = () => <MySnackbarContentWrapper variant='info' message='Información'/>;

Info.story = {
  name: 'Información',
  parameters: {docs: {storyDescription: 'Muestra un mensaje con información al usuario'}},
};

export {Success as Generic, Success, Warning, Error, Info};
