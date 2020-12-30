import { IGroup } from "office-ui-fabric-react/lib/components/GroupedList";

interface IVerticalState {
    groups?: IGroup[];
    items?: JSX.Element[];
    nonGrouped?:any;
}

export default IVerticalState;
