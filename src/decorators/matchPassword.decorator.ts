import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name: "MatchPassword", async: false})
export class MatchPassword implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
        if (value !== validationArguments.object[validationArguments.constraints[0]]) return false;
        return true
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Passwords do not match"
    }
}