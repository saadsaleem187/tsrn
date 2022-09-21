import React, {FunctionComponent} from 'react';
import Navigation from './navigation';

type Props = Record<string, number>;

const App: FunctionComponent<Props> = ({}: Props) => {
  return <Navigation />;
};

export default App;
