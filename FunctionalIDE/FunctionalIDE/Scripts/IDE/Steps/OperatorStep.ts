﻿/// <reference path="../../typings/knockout/knockout.d.ts" />

module IDE.Steps {
    export class OperatorStep implements IStep, ISingleValueStep, IDependsOnSingleValueSteps {
        TypeName: string = "IDE.Steps.OperatorStep";
        StepName = ko.observable<string>("");
        Operator = ko.observable<string>();
        OperandVarNames = ko.observableArray<IDE.Expressions.StepReferenceSingleValue>(); 

		UpdateStepName(old_name: string, new_name: string): void
		{
            //var item_idx = this.OperandVarNames.indexOf(old_name);
            //this.OperandVarNames[item_idx](new_name);
		}
		
        LoadDataFromJSON(source): void {
            // a utility that copies properties into this instance
            Utils.CopyPropertiesToKO(source, this);
        }

        SetReference(reference_name: string, index: number): void {

        }
    }
}  