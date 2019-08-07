import { Accomplishment } from './accomplishment';
import { Activity } from './activity';
import { Issue } from './issue';

export class Report {
    idReport: number;
    projectName: string;
    clientName: string;
    status: string;
    scope: string;
    schedule: string;
    resources: string;
    budget: string;
    purchaseOrder: string;
    preparedBy: string;
    leade4th: string;
    numResources: string;
    businessOwner: string;
    projectSummary: string;
    taskName: string;
    targetDate: string;
    completeness: string;
    risk: string;
    mitigationActions: string;
    notes: string;
    accomplishments: Accomplishment[];
    activities: Activity[];
    issues: Issue[];
}
