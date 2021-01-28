import { EnzymeAdapter } from 'enzyme';

declare module "@hteker/enzyme-adapter-react-17" {
  export default class ReactSeventeenAdapter extends EnzymeAdapter {
    constructor();
  }
}
