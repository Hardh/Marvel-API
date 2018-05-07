import { TemplateBaseDTO } from './TemplateBaseDTO';

export class BaseDTO extends TemplateBaseDTO {
    public Evaluate(data: any): boolean {
        throw new Error("Method not implemented.");
    }
    public IsValid(): boolean {
        throw new Error("Method not implemented.");
    }
}